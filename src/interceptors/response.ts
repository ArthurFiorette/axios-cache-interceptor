import type { AxiosResponse } from 'axios';
import { extract } from 'typed-core/dist/core/object';
import type { AxiosCacheInstance, CacheAxiosResponse } from '../cache/axios';
import type { CacheProperties } from '../cache/cache';
import type { CachedStorageValue } from '../storage/types';
import { checkPredicateObject } from '../util/cache-predicate';
import { Header } from '../util/headers';
import { updateCache } from '../util/update-cache';
import type { AxiosInterceptor } from './types';

export class CacheResponseInterceptor<R, D>
  implements AxiosInterceptor<CacheAxiosResponse<R, D>>
{
  constructor(readonly axios: AxiosCacheInstance) {}

  public use = (): void => {
    this.axios.interceptors.response.use(this.onFulfilled);
  };

  public onFulfilled = async (
    axiosResponse: AxiosResponse<R, D>
  ): Promise<CacheAxiosResponse<R, D>> => {
    const response = this.cachedResponse(axiosResponse);

    // Response is already cached
    if (response.cached) {
      return response;
    }

    // Skip cache
    // either false or weird behavior, config.cache should always exists, from global config merge at least
    if (!response.config.cache) {
      return { ...response, cached: false };
    }

    const cacheConfig = response.config.cache as CacheProperties;

    const cache = await this.axios.storage.get(response.id);

    if (
      // If the request interceptor had a problem
      cache.state === 'stale' ||
      cache.state === 'empty' ||
      // Should not hit here because of later response.cached check
      cache.state === 'cached'
    ) {
      return response;
    }

    // Config told that this response should be cached.
    if (
      // For 'loading' values (post stale), this check was already run in the past.
      !cache.data &&
      !this.testCachePredicate(response, cacheConfig)
    ) {
      await this.rejectResponse(response.id);
      return response;
    }

    // avoid remnant headers from remote server to break implementation
    delete response.headers[Header.XAxiosCacheEtag];
    delete response.headers[Header.XAxiosCacheLastModified];

    if (cacheConfig.etag && cacheConfig.etag !== true) {
      response.headers[Header.XAxiosCacheEtag] = cacheConfig.etag;
    }

    if (cacheConfig.modifiedSince) {
      response.headers[Header.XAxiosCacheLastModified] =
        cacheConfig.modifiedSince === true
          ? 'use-cache-timestamp'
          : cacheConfig.modifiedSince.toUTCString();
    }

    let ttl = cacheConfig.ttl || -1; // always set from global config

    if (cacheConfig?.interpretHeader) {
      const expirationTime = this.axios.headerInterpreter(response.headers);

      // Cache should not be used
      if (expirationTime === false) {
        await this.rejectResponse(response.id);
        return response;
      }

      ttl = expirationTime || expirationTime === 0 ? expirationTime : ttl;
    }

    const data =
      response.status == 304 && cache.data
        ? (() => {
            // Rust syntax <3
            response.cached = true;
            response.data = cache.data.data;
            response.status = cache.data.status;
            response.statusText = cache.data.statusText;

            // We may have new headers.
            response.headers = {
              ...cache.data.headers,
              ...response.headers
            };

            return cache.data;
          })()
        : extract(response, ['data', 'headers', 'status', 'statusText']);

    const newCache: CachedStorageValue = {
      state: 'cached',
      ttl,
      createdAt: Date.now(),
      data
    };

    // Update other entries before updating himself
    if (cacheConfig?.update) {
      updateCache(this.axios.storage, response.data, cacheConfig.update);
    }

    const deferred = this.axios.waiting[response.id];

    // Resolve all other requests waiting for this response
    await deferred?.resolve(newCache.data);
    delete this.axios.waiting[response.id];

    // Define this key as cache on the storage
    await this.axios.storage.set(response.id, newCache);

    // Return the response with cached as false, because it was not cached at all
    return response;
  };

  private testCachePredicate = <R>(
    response: AxiosResponse<R>,
    cache: CacheProperties
  ): boolean => {
    const cachePredicate = cache.cachePredicate;

    return (
      (typeof cachePredicate === 'function' && cachePredicate(response)) ||
      (typeof cachePredicate === 'object' &&
        checkPredicateObject(response, cachePredicate))
    );
  };

  /**
   * Rejects cache for this response. Also update the waiting list for
   * this key by rejecting it.
   */
  private rejectResponse = async (key: string) => {
    // Update the cache to empty to prevent infinite loading state
    await this.axios.storage.remove(key);
    // Reject the deferred if present
    this.axios.waiting[key]?.reject();
    delete this.axios.waiting[key];
  };

  private cachedResponse = (response: AxiosResponse<R, D>): CacheAxiosResponse<R, D> => {
    return {
      id: this.axios.generateKey(response.config),
      /**
       * The request interceptor response.cache will return true or
       * undefined. And true only when the response was cached.
       */
      cached: (response as CacheAxiosResponse<R, D>).cached || false,
      ...response
    };
  };
}

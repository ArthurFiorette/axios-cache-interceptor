import Axios from 'axios';
import type { AxiosCacheInstance } from '../../src/cache/axios';
import { CacheOptions, setupCache } from '../../src/cache/create';
import { Header } from '../../src/header/headers';

export const XMockRandom = 'x-mock-random';

export function mockAxios(
  options: CacheOptions = {},
  responseHeaders: Record<string, string> = {},
  instance = Axios.create()
): AxiosCacheInstance {
  const axios = setupCache(instance, options);

  // Axios interceptors are a stack, so apply this after the cache interceptor
  axios.defaults.adapter = async (config) => {
    await 0; // Jumps to next tick of nodejs event loop

    const should304 =
      config.headers?.[Header.IfNoneMatch] || config.headers?.[Header.IfModifiedSince];
    const status = should304 ? 304 : 200;

    // real axios would throw an error here.
    config.validateStatus?.(status);

    return {
      data: true,
      status,
      statusText: should304 ? '304 Not Modified' : '200 OK',
      headers: {
        ...responseHeaders,
        // Random header for every request made
        [XMockRandom]: `${Math.random()}`
      },
      config,
      request: { config }
    };
  };

  return axios;
}

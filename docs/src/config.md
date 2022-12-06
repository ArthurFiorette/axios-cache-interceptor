# Global

These are properties that are used and shared by the entire application.

```ts
const axios = setupCache(axios, OPTIONS);
```

::: tip

The `setupCache` function receives global options and all
[request specifics](./config/request-specifics.md) ones too. This way, you can customize
the defaults for all requests.

:::

## storage

<Badge text="optional" type="warning"/>

- Type: `AxiosStorage`
- Default: `buildMemoryStorage()`

The object responsible to save, retrieve and serialize (if needed) cache data.

See the [Storages](./guide/storages.md) page for more information.

## generateKey

 <Badge text="optional" type="warning"/>

- Type: `KeyGenerator<unknown, unknown>`
- Default: `defaultKeyGenerator`

The function used to create different keys for each request. Defaults to a function that
priorizes the id, and if not specified, a string is generated using the `method`,
`baseURL`, `params`, `data` and `url`.

You can learn on how to use them on the
[Request ID](./guide/request-id.md#custom-generator) page.

## waiting

<Badge text="optional" type="warning"/>

- Type: `Record<string, Deferred<CachedResponse>>`
- Default: `{}`

A simple object that will hold a promise for each pending request. Used to handle
concurrent requests.

You'd normally not need to change this, but it is exposed in case you need to use it as
some sort of listener of know when a request is waiting for other to finish.

## headerInterpreter

 <Badge text="optional" type="warning"/>

- Type: `HeadersInterpreter`
- Default: `defaultHeaderInterpreter`

The function used to interpret all headers from a request and determine a time to live
(`ttl`) number.

The possible returns are:

- `'dont cache'`: the request will not be cached.
- `'not enough headers'`: the request will find other ways to determine the TTL value.
- `number`: used as the TTL value.

::: details Example of a custom headerInterpreter

```ts
import { setupCache, type HeaderInterpreter } from 'axios-cache-interceptor';

const myHeaderInterpreter: HeaderInterpreter = (headers) => {
  if (headers['x-my-custom-header']) {
    const seconds = Number(headers['x-my-custom-header']);

    if (seconds < 1) {
      return 'dont cache';
    }

    return seconds;
  }

  return 'not enough headers';
};
```

:::

## requestInterceptor

<Badge text="optional" type="warning"/>

- Type: `AxiosInterceptor<CacheRequestConfig<unknown, unknown>>`
- Default: `defaultRequestInterceptor()`

The function that will be used to intercept the request before it is sent to the axios
adapter.

It is the main function of this library, as it is the bridge between the axios request and
the cache.

It wasn't meant to be changed, but if you need to, you can do it by passing a new function
to this property.

See its code for more information
[here](https://github.com/arthurfiorette/axios-cache-interceptor/tree/main/src/interceptors).

## responseInterceptor

<Badge text="optional" type="warning"/>

- Type: `AxiosInterceptor<CacheAxiosResponse<unknown, unknown>>`
- Default: `defaultResponseInterceptor()`

The function that will be used to intercept the request after it is returned by the axios
adapter.

It is the second most important function of this library, as it is the bridge between the
axios response and the cache.

It wasn't meant to be changed, but if you need to, you can do it by passing a new function
to this property.

See its code for more information
[here](https://github.com/arthurfiorette/axios-cache-interceptor/tree/main/src/interceptors).

## debug

<Badge text="dev only" type="danger"/> <Badge text="optional" type="warning"/>

- Type: `(msg: { id?: string; msg?: string; data?: unknown }) => void` or `undefined`
- Default: `undefined`

::: warning

This option only works when targeting a [Development](./guide/debugging.md) build.

:::

The debug option will print debug information in the console. It is good if you need to
trace any undesired behavior or issue. You can enable it by setting `debug` to a function
that receives an string and returns nothing.

Read the [Debugging](./guide/debugging.md) page for the complete guide.

::: details Example of a custom debug function

```ts
// Will print debug info in the console.
setupCache(axios, { debug: console.log });

// Own logging platform.
setupCache(axios, {
  debug: ({ id, msg, data }) => myLoggerExample.emit({ id, msg, data })
});

// Disables debug. (default)
setupCache(axios, { debug: undefined });
```

:::

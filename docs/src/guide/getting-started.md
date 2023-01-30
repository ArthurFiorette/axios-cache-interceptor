# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) `(>= 12)` _Lower version requires a custom build with
  polyfills._

- [Axios](https://axios-http.com/) `(>= 0.21 or >= 1.1)` _Lower version requires a custom
  build with polyfills._

## Quick Start

The fastest way to get axios with cache set up and running is to install it with npm or
yarn

::: code-group

```bash [Yarn]
yarn add axios@1 axios-cache-interceptor@1
```

```bash [NPM]
npm install axios@1 axios-cache-interceptor@1
```

```html [Browser]
<!-- Development UMD build for ES2017+ (~13 KiB) -->
<script
  src="https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.0.0/dev/index.bundle.js"
  integrity="sha256-IQeFXs7Q4XpPQAqvXrq5dSFOespi25XswgB9lTP3lbI="
  crossorigin="anonymous"
></script>

<!-- Production UMD build for ES5+ (~14.6 KiB) -->
<script
  src="https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.0.0/dist/index.bundle.js"
  integrity="sha256-4N58khN2nV+P1NTUwRznqALDjhfl6ERO99Cltk3AN4Y="
  crossorigin="anonymous"
></script>
```

```ts [Skypack]
import Axios from 'https://cdn.skypack.dev/axios';
import { setupCache } from 'https://cdn.skypack.dev/axios-cache-interceptor';
```

:::

After installing, you can import the package and apply the interceptor to your axios
instance, as shown below:

::: code-group

```ts [EcmaScript]
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// same object, but with updated typings.
const axios = setupCache(Axios); // [!code focus]

const req1 = axios.get('https://api.example.com/'); // [!code focus]
const req2 = axios.get('https://api.example.com/'); // [!code focus]

const [res1, res2] = await Promise.all([req1, req2]);

res1.cached; // false // [!code focus]
res2.cached; // true // [!code focus]
```

```ts [CommonJS]
const Axios = require('axios');
const { setupCache } = require('axios-cache-interceptor');

// same object, but with updated typings.
const axios = setupCache(Axios); // [!code focus]

const req1 = axios.get('https://api.example.com/'); // [!code focus]
const req2 = axios.get('https://api.example.com/'); // [!code focus]

const [res1, res2] = await Promise.all([req1, req2]);

res1.cached; // false // [!code focus]
res2.cached; // true // [!code focus]
```

```ts [Browser]
const Axios = window.axios;
const { setupCache } = window.AxiosCacheInterceptor;

// same object, but with updated typings.
const axios = setupCache(Axios); // [!code focus]

const req1 = axios.get('https://api.example.com/'); // [!code focus]
const req2 = axios.get('https://api.example.com/'); // [!code focus]

const [res1, res2] = await Promise.all([req1, req2]);

res1.cached; // false // [!code focus]
res2.cached; // true // [!code focus]
```

```ts [Skypack]
import Axios from 'https://cdn.skypack.dev/axios';
import { setupCache } from 'https://cdn.skypack.dev/axios-cache-interceptor';

// same object, but with updated typings.
const axios = setupCache(Axios); // [!code focus]

const req1 = axios.get('https://api.example.com/'); // [!code focus]
const req2 = axios.get('https://api.example.com/'); // [!code focus]

const [res1, res2] = await Promise.all([req1, req2]);

res1.cached; // false // [!code focus]
res2.cached; // true // [!code focus]
```

:::

Just the above is sufficient for most use cases. However, you can also customize each
cache behavior by passing a configuration object to the `setupCache` function. And you can
also customize some behaviors each request by using the `cache` option in the request
config.

### Support Table

Most of axios v0 breaking changes were about typing issues, so your version may work with
one outside of this table. **Axios and Axios Cache Interceptor v0 are not compatible with
Axios and Axios Cache Interceptor v1**

> **Note**: Axios was not defined as a `peerDependency` for all v0 versions, because it
> had a non-stable semver version.
> [See #145 (Comment)](https://github.com/arthurfiorette/axios-cache-interceptor/issues/145#issuecomment-1042710481)

| [Axios](https://github.com/axios/axios/releases) | [Axios Cache Interceptor](https://github.com/arthurfiorette/axios-cache-interceptor/releases) |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `>= v1.2`                                        | `>= v1`                                                                                       |
| `>= v0.27`                                       | `>= v0.10.3`                                                                                  |
| `>= v0.26`                                       | `>= v0.8.4`                                                                                   |
| `~ v0.25`                                        | `~ v0.8.4`                                                                                    |
| `~ v0.24`                                        | `>= v0.5 && <= 0.8.3`                                                                         |
| `~ v0.23`                                        | `~ v0.4`                                                                                      |
| `~ v0.22`                                        | `~ v0.3`                                                                                      |
| `v0.21`                                          | `<= v0.2`                                                                                     |

### Read More

Some useful links to get you more familiar with the library:

- [Debugging requests](./debugging.md)
- [Storages](./storages.md)
- [Global config](../config.md)
- [Per request config](../config/request-specifics.md)
- [Response object](../config/response-object.md)

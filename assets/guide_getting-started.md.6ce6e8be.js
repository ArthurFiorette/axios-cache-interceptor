import{_ as s,o as a,c as n,S as o}from"./chunks/framework.52505ce4.js";const u=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1698077392000}'),p={name:"guide/getting-started.md"},l=o(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p><a href="https://axios-cache-interceptor.js.org/v0/" target="_blank" rel="noreferrer">Looking for axios v0?</a></p><h2 id="install-axios-cache-interceptor" tabindex="-1">Install Axios Cache Interceptor <a class="header-anchor" href="#install-axios-cache-interceptor" aria-label="Permalink to &quot;Install Axios Cache Interceptor&quot;">​</a></h2><p>Add Axios Cache Interceptor and Axios to your project using your favorite package manager:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rbiVE" id="tab-AHtRT3s" checked="checked"><label for="tab-AHtRT3s">Yarn</label><input type="radio" name="group-rbiVE" id="tab-aedaKFW"><label for="tab-aedaKFW">NPM</label><input type="radio" name="group-rbiVE" id="tab-rMRRAx1"><label for="tab-rMRRAx1">Browser</label><input type="radio" name="group-rbiVE" id="tab-1mO8nqM"><label for="tab-1mO8nqM">Skypack</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios@^1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios-cache-interceptor@^1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios@^1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios-cache-interceptor@^1</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios@^1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios-cache-interceptor@^1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios@^1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios-cache-interceptor@^1</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Development UMD build for ES2017+ (~14.2 KiB) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.3.2/dev/index.bundle.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">integrity</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sha256-8ztORY8MY5U4qXNIQ1sEgJ4BliHUdn/v9VVzLwzL9wI=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">crossorigin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;anonymous&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- Production UMD build for ES5+ (~16.4 KiB) --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.3.2/dist/index.bundle.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">integrity</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sha256-IntgxZHcB9wD20WbxK6df32kNwSsibK3VawPqVeWrVc=&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">crossorigin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;anonymous&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Development UMD build for ES2017+ (~14.2 KiB) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.3.2/dev/index.bundle.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">integrity</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sha256-8ztORY8MY5U4qXNIQ1sEgJ4BliHUdn/v9VVzLwzL9wI=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">crossorigin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;anonymous&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- Production UMD build for ES5+ (~16.4 KiB) --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/npm/axios-cache-interceptor@1.3.2/dist/index.bundle.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">integrity</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sha256-IntgxZHcB9wD20WbxK6df32kNwSsibK3VawPqVeWrVc=&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">crossorigin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;anonymous&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://cdn.skypack.dev/axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setupCache } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://cdn.skypack.dev/axios-cache-interceptor&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://cdn.skypack.dev/axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setupCache } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://cdn.skypack.dev/axios-cache-interceptor&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div></div></div><h2 id="setup-axios-cache-interceptor" tabindex="-1">Setup Axios Cache Interceptor <a class="header-anchor" href="#setup-axios-cache-interceptor" aria-label="Permalink to &quot;Setup Axios Cache Interceptor&quot;">​</a></h2><p>After installing, you can import the package and apply the interceptor to your axios instance, as shown below:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QXYx9" id="tab-yCV9Uxh" checked="checked"><label for="tab-yCV9Uxh">EcmaScript</label><input type="radio" name="group-QXYx9" id="tab-w9enful"><label for="tab-w9enful">CommonJS</label><input type="radio" name="group-QXYx9" id="tab-Ocg-FmF"><label for="tab-Ocg-FmF">Browser</label><input type="radio" name="group-QXYx9" id="tab-LrzcBKw"><label for="tab-LrzcBKw">Skypack</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setupCache } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios-cache-interceptor&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setupCache</span><span style="color:#E1E4E8;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">res1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">res2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setupCache } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios-cache-interceptor&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setupCache</span><span style="color:#24292E;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">res1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">res2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#24292E;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">setupCache</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;axios-cache-interceptor&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setupCache</span><span style="color:#E1E4E8;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">res1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">res2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">setupCache</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;axios-cache-interceptor&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setupCache</span><span style="color:#24292E;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">res1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">res2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#24292E;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.axios;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">setupCache</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.AxiosCacheInterceptor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setupCache</span><span style="color:#E1E4E8;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">res1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">res2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.axios;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">setupCache</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.AxiosCacheInterceptor;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setupCache</span><span style="color:#24292E;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">res1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">res2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#24292E;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://cdn.skypack.dev/axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setupCache } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://cdn.skypack.dev/axios-cache-interceptor&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">axios</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setupCache</span><span style="color:#E1E4E8;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://api.example.com/&#39;</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">res1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">res2</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://cdn.skypack.dev/axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setupCache } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://cdn.skypack.dev/axios-cache-interceptor&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// same object, but with updated typings.</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">axios</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setupCache</span><span style="color:#24292E;">(Axios); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://api.example.com/&#39;</span><span style="color:#24292E;">); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">res1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">res2</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">([req1, req2]);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#24292E;">res1.cached; </span><span style="color:#6A737D;">// false </span></span>
<span class="line has-focus"><span style="color:#24292E;">res2.cached; </span><span style="color:#6A737D;">// true </span></span></code></pre></div></div></div><p>Just the above is sufficient for most use cases. However, you can also customize each cache behavior by passing a configuration object to the <code>setupCache</code> function. And you can also customize some behaviors each request by using the <code>cache</code> option in the request config.</p><h2 id="support-table" tabindex="-1">Support Table <a class="header-anchor" href="#support-table" aria-label="Permalink to &quot;Support Table&quot;">​</a></h2><p>Most of axios v0 breaking changes were about typing issues, so your version may work with one outside of this table. <strong>Axios and Axios Cache Interceptor v0 are not compatible with Axios and Axios Cache Interceptor v1</strong></p><blockquote><p><strong>Note</strong>: Axios was not defined as a <code>peerDependency</code> for all v0 versions, because it had a non-stable semver version. <a href="https://github.com/arthurfiorette/axios-cache-interceptor/issues/145#issuecomment-1042710481" target="_blank" rel="noreferrer">See #145 (Comment)</a></p></blockquote><table><thead><tr><th><a href="https://github.com/axios/axios/releases" target="_blank" rel="noreferrer">Axios</a></th><th><a href="https://github.com/arthurfiorette/axios-cache-interceptor/releases" target="_blank" rel="noreferrer">Axios Cache Interceptor</a></th></tr></thead><tbody><tr><td><code>&gt;= v1.4</code></td><td><code>&gt;= v1.2.0</code></td></tr><tr><td><code>&gt;= v1.3.1</code></td><td><code>&gt;= v1</code></td></tr><tr><td><code>&gt;= v0.27</code></td><td><code>&gt;= v0.10.3</code></td></tr><tr><td><code>&gt;= v0.26</code></td><td><code>&gt;= v0.8.4</code></td></tr><tr><td><code>~ v0.25</code></td><td><code>~ v0.8.4</code></td></tr><tr><td><code>~ v0.24</code></td><td><code>&gt;= v0.5 &amp;&amp; &lt;= 0.8.3</code></td></tr><tr><td><code>~ v0.23</code></td><td><code>~ v0.4</code></td></tr><tr><td><code>~ v0.22</code></td><td><code>~ v0.3</code></td></tr><tr><td><code>v0.21</code></td><td><code>&lt;= v0.2</code></td></tr></tbody></table><h3 id="read-more" tabindex="-1">Read More <a class="header-anchor" href="#read-more" aria-label="Permalink to &quot;Read More&quot;">​</a></h3><p>Some useful links to get you more familiar with the library:</p><ul><li><a href="./debugging">Debugging requests</a></li><li><a href="./storages">Storages</a></li><li><a href="./../config">Global config</a></li><li><a href="./../config/request-specifics">Per request config</a></li><li><a href="./../config/response-object">Response object</a></li></ul>`,16),e=[l];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
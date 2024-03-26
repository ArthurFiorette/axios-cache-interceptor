import{_ as e,c as s,o as i,a4 as a}from"./chunks/framework.SJ13iSEV.js";const u=JSON.parse('{"title":"Response object","description":"","frontmatter":{},"headers":[],"relativePath":"config/response-object.md","filePath":"config/response-object.md","lastUpdated":1711484624000}'),t={name:"config/response-object.md"},n=a(`<h1 id="response-object" tabindex="-1">Response object <a class="header-anchor" href="#response-object" aria-label="Permalink to &quot;Response object&quot;">​</a></h1><p>Axios cache interceptor returns a slightly changed than the original axios response. Containing information about the cache and other needed properties.</p><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2><ul><li>Type: <code>string</code></li></ul><p>The <a href="./../guide/request-id">Request ID</a> used in this request.</p><p>It may have been generated by the <a href="./../guide/request-id#custom-generator">Key Generator</a> or a custom one provided by <a href="./request-specifics#id"><code>config.id</code></a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my-overridden-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This request used &#39;my-overridden-id&#39; and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// not the one generated by the key generator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response.id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;my-overridden-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="cached" tabindex="-1">cached <a class="header-anchor" href="#cached" aria-label="Permalink to &quot;cached&quot;">​</a></h2><ul><li>Type: <code>boolean</code></li></ul><p>A simple boolean indicating if the request returned data from the cache or from the network call.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This does not indicated if the request was capable of being cached or not, as options like <a href="./request-specifics#cache-override"><code>cache.override</code></a> may have been enabled.</p></div>`,11),o=[n];function r(h,d,p,l,c,k){return i(),s("div",null,o)}const b=e(t,[["render",r]]);export{u as __pageData,b as default};
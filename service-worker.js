!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/airlivery/",s(s.s=6)}([function(e,t,s){"use strict";try{self["workbox:core:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:precaching:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:routing:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:expiration:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(n){}},function(e,t,s){"use strict";s.r(t);s(0);const n=function(e){let t=e;for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t};class a extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}const r=new Set;const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},o=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||o(i.precache),h=e=>e||o(i.runtime);function l(e,t){const s=new URL(e);for(const n of t)s.searchParams.delete(n);return s.href}let u;function d(e){e.then((()=>{}))}class f{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const p=e=>new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"");function g(e){return new Promise((t=>setTimeout(t,e)))}function m(e,t){const s=t();return e.waitUntil(s),s}async function w(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new a("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=t?t(r):r,o=function(){if(void 0===u){const t=new Response("");if("body"in t)try{new Response(t.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(o,i)}let y,_;const v=new WeakMap,b=new WeakMap,R=new WeakMap,x=new WeakMap,C=new WeakMap;let E={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return b.get(e);if("objectStoreNames"===t)return e.objectStoreNames||R.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return T(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function L(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(_||(_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return e.apply(k(this),s),T(v.get(this))}:function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];return T(e.apply(k(this),s))}:function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];const r=e.call(k(this),t,...n);return R.set(r,t.sort?t.sort():[t]),T(r)}}function q(e){return"function"===typeof e?L(e):(e instanceof IDBTransaction&&function(e){if(b.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));b.set(e,t)}(e),t=e,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,E):e);var t}function T(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(T(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&v.set(t,e)})).catch((()=>{})),C.set(t,e),t}(e);if(x.has(e))return x.get(e);const t=q(e);return t!==e&&(x.set(e,t),C.set(t,e)),t}const k=e=>C.get(e);const U=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],N=new Map;function P(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(N.get(t))return N.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=D.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!U.includes(s))return;const r=async function(e){const t=this.transaction(e,a?"readwrite":"readonly");let r=t.store;for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];return n&&(r=r.index(o.shift())),(await Promise.all([r[s](...o),a&&t.done]))[0]};return N.set(t,r),r}E=(e=>({...e,get:(t,s,n)=>P(t,s)||e.get(t,s,n),has:(t,s)=>!!P(t,s)||e.has(t,s)}))(E);s(4);const I="cache-entries",M=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class S{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(I,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),T(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=M(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(I,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(I,this._getId(e));return null===s||void 0===s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(I).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const o of a)await s.delete(I,o.id),i.push(o.url);return i}_getId(e){return this._cacheName+"|"+M(e)}async getDb(){return this._db||(this._db=await function(e,t){let{blocked:s,upgrade:n,blocking:a,terminated:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=indexedDB.open(e,t),o=T(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(T(i.result),e.oldVersion,e.newVersion,T(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class K{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new S(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const n of t)await s.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,d(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class A{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cachedResponseWillBeUsed=async e=>{let{event:t,request:s,cacheName:n,cachedResponse:a}=e;if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(n);d(i.expireEntries());const o=i.updateTimestamp(s.url);if(t)try{t.waitUntil(o)}catch(c){0}return r?a:null},this.cacheDidUpdate=async e=>{let{cacheName:t,request:s}=e;const n=this._getCacheExpiration(t);await n.updateTimestamp(s.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){r.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===h())throw new a("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new K(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(1);function O(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}class W{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async e=>{let{request:t,state:s}=e;s&&(s.originalRequest=t)},this.cachedResponseWillBeUsed=async e=>{let{event:t,state:s,cachedResponse:n}=e;if("install"===t.type&&s&&s.originalRequest&&s.originalRequest instanceof Request){const e=s.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class j{constructor(e){let{precacheController:t}=e;this.cacheKeyWillBeUsed=async e=>{let{request:t,params:s}=e;const n=(null===s||void 0===s?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=t}}s(3);function B(e){return"string"===typeof e?new Request(e):e}class F{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=B(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(i){if(i instanceof Error)throw new a("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(o){throw n&&await this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:n.clone(),request:r.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=B(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=B(e);await g(0);const n=await this.getCacheKey(s,"write");if(!t)throw new a("cache-put-with-no-response",{url:p(n.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,s,n){const a=l(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const o of i)if(a===l(o.url,s))return e.match(o,n)}(h,n.clone(),["__WB_REVISION__"],c):null;try{await h.put(n,u?i.clone():i)}catch(f){if(f instanceof Error)throw"QuotaExceededError"===f.name&&await async function(){for(const e of r)await e()}(),f}for(const a of this.iterateCallbacks("cacheDidUpdate"))await a({cacheName:o,oldResponse:d,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s="".concat(e.url," | ").concat(t);if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=B(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"===typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class H{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.cacheName=h(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"===typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new F(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new a("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const a of e.iterateCallbacks("handlerWillRespond"))n=await a({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class V extends H{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(V.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new a("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const a=n.integrity,r=e.integrity,i=!r||r===a;if(s=await t.fetch(new Request(e,{integrity:r||a})),a&&i){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==V.copyRedirectedCacheableResponsesPlugin&&(n===V.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(V.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}V.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate(e){let{response:t}=e;return!t||t.status>=400?null:t}},V.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate(e){let{response:t}=e;return t.redirected?await w(t):t}};class G{constructor(){let{cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new V({cacheName:c(e),plugins:[...t,new j({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"===typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=O(s),r="string"!==typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!==typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e="Workbox is precaching URLs without revision "+"info: ".concat(t.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}install(e){return m(e,(async()=>{const t=new W;this.strategy.plugins.push(t);for(const[a,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(a),n=new Request(a,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return m(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new a("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let $;const Q=()=>($||($=new G),$);s(2);const J=e=>e&&"object"===typeof e?e:{handle:e};class z{constructor(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.handler=J(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=J(e)}}class X extends z{constructor(e,t,s){super((t=>{let{url:s}=t;const n=e.exec(s.href);if(n&&(s.origin===location.origin||0===n.index))return n.slice(1)}),t,s)}}class Y{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"===typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest(e){let{request:t,event:s}=e;const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:s,request:t,sameOrigin:a,url:n});let o=i&&i.handler;const c=t.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return void 0;let h;try{h=o.handle({url:n,request:t,event:s,params:r})}catch(u){h=Promise.reject(u)}const l=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||l)&&(h=h.catch((async e=>{if(l){0;try{return await l.handle({url:n,request:t,event:s,params:r})}catch(a){a instanceof Error&&(e=a)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:s});throw e}))),h}findMatchingRoute(e){let{url:t,sameOrigin:s,request:n,event:a}=e;const r=this._routes.get(n.method)||[];for(const i of r){let e;const r=i.match({url:t,sameOrigin:s,request:n,event:a});if(r)return e=r,(Array.isArray(e)&&0===e.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"===typeof r)&&(e=void 0),{route:i,params:e}}return{}}setDefaultHandler(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET";this._defaultHandlerMap.set(t,J(e))}setCatchHandler(e){this._catchHandler=J(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new a("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let Z;const ee=()=>(Z||(Z=new Y,Z.addFetchListener(),Z.addCacheListener()),Z);function te(e,t,s){let n;if("string"===typeof e){const a=new URL(e,location.href);0;n=new z((e=>{let{url:t}=e;return t.href===a.href}),t,s)}else if(e instanceof RegExp)n=new X(e,t,s);else if("function"===typeof e)n=new z(e,t,s);else{if(!(e instanceof z))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return ee().registerRoute(n),n}function se(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}class ne extends z{constructor(e,t){super((s=>{let{request:n}=s;const a=e.getURLsToCacheKeys();for(const r of function*(e){let{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=new URL(e,location.href);r.hash="",yield r.href;const i=se(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(n.url,t)){const t=a.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}s(5);class ae{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}const re={cacheWillUpdate:async e=>{let{response:t}=e;return 200===t.status||0===t.status?t:null}};class ie extends H{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(re)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let n,r=await t.cacheMatch(e);if(r)0;else{0;try{r=await s}catch(i){i instanceof Error&&(n=i)}}if(!r)throw new a("no-response",{url:e.url,error:n});return r}}var oe;self.addEventListener("activate",(()=>self.clients.claim())),function(e){Q().precache(e)}([{'revision':'7ad23007f46e97376f7ef9b47f64b0ca','url':'/airlivery/index.html'},{'revision':null,'url':'/airlivery/static/css/2.cc8737d8.chunk.css'},{'revision':null,'url':'/airlivery/static/css/main.c8fe99d5.chunk.css'},{'revision':null,'url':'/airlivery/static/js/2.00f56001.chunk.js'},{'revision':null,'url':'/airlivery/static/js/main.4e87f2cc.chunk.js'},{'revision':null,'url':'/airlivery/static/js/runtime-main.ce764ebf.js'},{'revision':null,'url':'/airlivery/static/media/avatar.25b558c1.svg'},{'revision':null,'url':'/airlivery/static/media/drone-gray.39af56d3.svg'},{'revision':null,'url':'/airlivery/static/media/drone-hero.00eabb6f.jpg'},{'revision':null,'url':'/airlivery/static/media/drone.cad2d6c1.svg'},{'revision':null,'url':'/airlivery/static/media/generic-user.8bbfeed9.png'},{'revision':null,'url':'/airlivery/static/media/jonas.8bf4afc4.jpg'},{'revision':null,'url':'/airlivery/static/media/link.a0d5da13.svg'},{'revision':null,'url':'/airlivery/static/media/map.9a283426.jpg'},{'revision':null,'url':'/airlivery/static/media/people.c19aeddc.svg'},{'revision':null,'url':'/airlivery/static/media/send2.5a1e8ea9.svg'},{'revision':null,'url':'/airlivery/static/media/track2.14a3c3dd.svg'},{'revision':null,'url':'/airlivery/static/media/woman.619e2109.jpg'}]),function(e){const t=Q();te(new ne(t,e))}(oe);const ce=new RegExp("/[^/?]+\\.[^/]+$");var he;te((e=>{let{request:t,url:s}=e;return"navigate"===t.mode&&(!s.pathname.startsWith("/_")&&!s.pathname.match(ce))}),(he="/airlivery/index.html",Q().createHandlerBoundToURL(he))),te((e=>{let{url:t,request:s}=e;return t.origin===self.location.origin&&"image"===s.destination}),new ie({cacheName:"images",plugins:[new A({maxEntries:50})]})),te((e=>{let{url:t}=e;return"https://randomuser.me"===t.origin&&"/api/"===t.pathname}),new class extends H{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(re),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[];const n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=a,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(i);const o=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await i)());if(!o)throw new a("no-response",{url:e.url});return o}_getTimeoutPromise(e){let t,{request:s,logs:n,handler:a}=e;return{promise:new Promise((e=>{t=setTimeout((async()=>{e(await a.cacheMatch(s))}),1e3*this._networkTimeoutSeconds)})),id:t}}async _getNetworkPromise(e){let t,s,{timeoutId:n,request:a,logs:r,handler:i}=e;try{s=await i.fetchAndCachePut(a)}catch(o){o instanceof Error&&(t=o)}return n&&clearTimeout(n),!t&&s||(s=await i.cacheMatch(a)),s}}({cacheName:"user-api",networkTimeoutSeconds:5})),te((e=>{let{url:t}=e;return"https://fonts.googleapis.com"===t.origin}),new ie({cacheName:"google-fonts-stylesheets"})),te((e=>{let{url:t}=e;return"https://fonts.gstatic.com"===t.origin}),new class extends H{async _handle(e,t){let s,n=await t.cacheMatch(e);if(n)0;else{0;try{n=await t.fetchAndCachePut(e)}catch(r){r instanceof Error&&(s=r)}0}if(!n)throw new a("no-response",{url:e.url,error:s});return n}}({cacheName:"google-fonts-webfonts",plugins:[new class{constructor(e){this.cacheWillUpdate=async e=>{let{response:t}=e;return this._cacheableResponse.isResponseCacheable(t)?t:null},this._cacheableResponse=new ae(e)}}({statuses:[0,200]}),new A({maxAgeSeconds:31536e3,maxEntries:30})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))}]);
//# sourceMappingURL=service-worker.js.map
"use strict";var precacheConfig=[["/LetsGo-GooglePlaces/index.html","1a595b835cda615f9c7176d3d0055ab4"],["/LetsGo-GooglePlaces/static/css/main.af3a9302.css","165914c9e9c65a97d2ab039f2673b53f"],["/LetsGo-GooglePlaces/static/js/main.878f9e4f.js","638e7facaaa58cb762b777652a47f2a0"],["/LetsGo-GooglePlaces/static/media/city.220cb13c.jpg","220cb13c28322527aef429f8ee1f1445"],["/LetsGo-GooglePlaces/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/LetsGo-GooglePlaces/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/LetsGo-GooglePlaces/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/LetsGo-GooglePlaces/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/LetsGo-GooglePlaces/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/LetsGo-GooglePlaces/static/media/hiking.485014b8.jpg","485014b8ec02b7d39ac6212c3e2c1443"],["/LetsGo-GooglePlaces/static/media/historicalplace.42177432.jpg","42177432a495e69a992bfc644e174865"],["/LetsGo-GooglePlaces/static/media/loading.8a49e0f6.gif","8a49e0f65ab472d6c22a7e6995be7ed8"],["/LetsGo-GooglePlaces/static/media/logo.00c2ce8e.png","00c2ce8e4189a1ad6dd1b34388708284"],["/LetsGo-GooglePlaces/static/media/mountain.f8f31a1b.jpg","f8f31a1b698a3ac372dac935b43fcadc"],["/LetsGo-GooglePlaces/static/media/surprise.a918db60.png","a918db603deb3fa6abfb92cb0b17b186"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var s="/LetsGo-GooglePlaces/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
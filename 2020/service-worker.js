"use strict";var precacheConfig=[["/2020/index.html","c1f9bbea10c62439a4b4c1544885a9ec"],["/2020/static/css/main.538b0182.css","ad2948f9e2a126e63389de3ea75e132c"],["/2020/static/js/main.d5aef284.js","c108c59d408cc3774953689046d6853d"],["/2020/static/media/CJLin.835d6d96.jpg","835d6d968bcfc23e6bfd5425dee1f673"],["/2020/static/media/HanChang.5153b8a2.jpg","5153b8a22f9d899d075527c7e2bfc7e7"],["/2020/static/media/JackyChen.ed02e1b6.jpg","ed02e1b6af2d178813173fdb7d11e064"],["/2020/static/media/Li-Heng-Hsu.e056a383.png","e056a383e00b0fe3c942f6f5d516d293"],["/2020/static/media/MarkFly.66caf2da.png","66caf2da7acd620bc7a6bd57b11b12e1"],["/2020/static/media/Mars.176fed79.png","176fed7912dd112533b5f65e92b7eb38"],["/2020/static/media/akos-birmacher-bitrise.7d2bf506.jpg","7d2bf506282ccc885e3e6263ccd141b9"],["/2020/static/media/chiaoteNi.c00fdd34.png","c00fdd3442dc6e0d98acda80f85dab89"],["/2020/static/media/fan.cd5b2acf.png","cd5b2acfb3190dbd2d2b53d1ac1920b9"],["/2020/static/media/fengyi.1fd3e8af.jpg","1fd3e8af0e88e1eb0806ac4b7ed81e5e"],["/2020/static/media/huygin.cb978377.jpeg","cb978377e78b8e7c2e940cf592421ecd"],["/2020/static/media/iplayground_logo_ball.1723aa9b.png","1723aa9bd472765642849ccb30fa8d8a"],["/2020/static/media/iplayground_logo_diamond.8fa1c014.png","8fa1c0147b3cff9344e750f750d81d4a"],["/2020/static/media/iplayground_logo_stairs.b9d4a50b.png","b9d4a50bf8f8eca64985bbff149c6720"],["/2020/static/media/jeffLin_avatar.816ba05d.png","816ba05dc7a68146bdf2b2904b009e15"],["/2020/static/media/kishikawakatsumi.e50fb0aa.png","e50fb0aa95115f1fdbf1a3595f9d9c71"],["/2020/static/media/logo_5xruby.tw.d31ab51a.png","d31ab51ae93801c15b2b569ef1e11cb6"],["/2020/static/media/logo_KKCO.5029e270.png","5029e27038ecab6c06bfa72983b1162f"],["/2020/static/media/logo_catchplay.53864291.png","5386429112444c5ab108c85316db5c95"],["/2020/static/media/logo_cocoaheads_taipei.04bde3ff.png","04bde3ff74c544e0a126cfa3a94307a5"],["/2020/static/media/logo_coss_system.4728192d.png","4728192da16fdf2eb1b70932b0282454"],["/2020/static/media/logo_dcard.dd5423a9.png","dd5423a94b0b99c472b985a2c14c18c8"],["/2020/static/media/logo_esun.412fc611.png","412fc611329bdfbd60da1f6938b64a59"],["/2020/static/media/logo_grindr.507c8db5.png","507c8db5be285c904d27b1ddcf858717"],["/2020/static/media/logo_iplayground.da8f6e68.png","da8f6e688df7c831e213e0c5390416b4"],["/2020/static/media/logo_keyxentic.185b57fe.png","185b57fe147194909ef03782e8d8c302"],["/2020/static/media/logo_pic-collage.060d67d7.png","060d67d71ebcbdbf25fb588f5a748ec7"],["/2020/static/media/logo_swift_girls.e221c42c.png","e221c42c05790a392b97ad4ee8fd66aa"],["/2020/static/media/logo_twdc.2fc9fe32.png","2fc9fe327d44695dc4ee76fe76317823"],["/2020/static/media/lynn.84535022.jpg","845350223f77217c9986a14e996b2c93"],["/2020/static/media/meme.705091af.png","705091af9edca50f6a3cfb145762a758"],["/2020/static/media/superbil.3ddef241.png","3ddef241854ac7383bd927aadaffbe9c"],["/2020/static/media/zonble.0bdeff22.jpg","0bdeff22424e7b29eda10b109d40db59"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/2020/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
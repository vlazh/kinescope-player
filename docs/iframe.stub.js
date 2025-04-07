!function(){"use strict";var e={96295:function(e,t,n){function r(e){if(null==e)return e;try{return JSON.parse(e)}catch(t){return e}}function o(){var e=/^APP_/i,t={NODE_ENV:"production",APP_SSR:!1,APP_TEST:!1,APP_DOCS_BASE_PATH:"/kinescope-player/docs",APP_VERSION:"2.155.3"},o=Object.keys(t).filter((t=>e.test(t))).reduce(((e,n)=>(e[n]=r(t[n]),e)),{NODE_ENV:r(t.NODE_ENV||"development"),APP_SSR:!1,APP_TEST:!1}),i={raw:o,envStringify(){return{"process.env":Object.keys(this.raw).reduce(((e,t)=>{var n=t;return e[t]=JSON.stringify(this.raw[n]),e}),{})}},has:e=>e in o,get:e=>o[e],get ssr(){return!0===this.raw.APP_SSR},get dev(){return"development"===this.raw.NODE_ENV},get test(){return"test"===this.raw.NODE_ENV||!0===this.raw.APP_TEST},get prod(){return"production"===this.raw.NODE_ENV},ifDev(e,t){return this.dev?"function"==typeof e?e():e:"function"==typeof t?t():t},ifTest(e,t){return this.test?"function"==typeof e?e():e:"function"==typeof t?t():t},ifProd(e,t){return this.prod?"function"==typeof e?e():e:"function"==typeof t?t():t}};return("undefined"==typeof window?n.g:window).Proxy?new Proxy(i,{get:(e,t)=>"string"!=typeof t||t in e?e[t]:e.raw[t],has:(e,t)=>t in e||t in e.raw}):i}var i=o();t.Ay=i}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(w){if("object"==typeof window)return window}}(),function(){if(void 0!==n){var e=n.u,t=n.e,r={},o={};n.u=function(t){return e(t)+(r.hasOwnProperty(t)?"?"+r[t]:"")},n.e=function(i){return t(i).catch((function(t){var a=o.hasOwnProperty(i)?o[i]:5;if(a<1){var s=e(i);throw t.message="Loading chunk "+i+" failed after 5 retries.\n("+s+")",t.request=s,t}return new Promise((function(e){var t=5-a+1;setTimeout((function(){var s="cache-bust=true"+("&retry-attempt="+t);r[i]=s,o[i]=a-1,e(n.e(i))}),0)}))}))}}}();var{currentScript:r}=document;const o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var i,a=new Uint8Array(16);for(var s=[],u=0;u<256;++u)s.push((u+256).toString(16).slice(1));function l(e,t){return void 0===t&&(t=0),(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const c=function(e,t,n){var r,s;if(o.randomUUID&&!t&&!e)return o.randomUUID();var u=null!=(r=null!=(s=(e=e||{}).random)?s:null==e.rng?void 0:e.rng())?r:function(){if(!i){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");i=crypto.getRandomValues.bind(crypto)}return i(a)}();if(u.length<16)throw new Error("Random bytes length must be >= 16");if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t){if((n=n||0)<0||n+16>t.length)throw new RangeError("UUID byte range "+n+":"+(n+15)+" is out of buffer bounds");for(var c=0;c<16;++c)t[n+c]=u[c];return t}return l(u)};function f(){}class d{constructor(e){this.name=void 0,this.name=e}}class v extends d{initialize(){}notifyOfChange(){}factory(e,t){if("undefined"!=typeof console&&"none"!==t){var n=t,r=function(e,t){return t in e}(console,n)&&"function"==typeof console[n]?n:"debug";return console[r].bind(console)}}}function g(e,t){if(!{}.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var p=0;function h(e){return"__private_"+p+++"_"+e}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var w,m={rootLoggerName:"",defaultLevel:"debug",loggers:{},plugins:{},levels:w=["none","error","warn","info","debug","v1","v2","trace"],levelsMap:E(w),factory:P};function E(e){return e.reduce(((e,t,n)=>(e[t]=n,e)),{})}function P(e,t,n){var r=[],o=O.normalizeLevel(e);return Object.values(n).forEach((e=>{var[n,i]=e,a=i[m.rootLoggerName],s=i[t.name],u=n.factory(t,o,y({},a,s));u&&r.push(u)})),0===r.length?f:function(){for(var e=0;e<r.length;e+=1)r[e](...arguments)}}function b(){return Object.values(m.loggers)}function L(){return Object.values(m.plugins).map((e=>{var[t]=e;return t}))}function S(e){for(var t=e.getLevels(),n=0;n<t.length;n+=1){var r=t[n];e[r]=e.isLevelEnabled(r)?m.factory(r,e,m.plugins):f}}var O,_=h("e"),M=h("t");class R{constructor(e,t){this.name=void 0,Object.defineProperty(this,_,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),this.name=e,g(this,_)[_]=t,this.setLevel(t),L().forEach((e=>e.initialize(this)))}getLevels(){return O.getLevels()}getLevel(){var e;return null!=(e=g(this,M)[M])?e:g(this,_)[_]}getLevelNumber(){var e;return null!=(e=m.levelsMap[this.getLevel()])?e:-1}setLevel(e){var t=O.normalizeLevel(e),n=g(this,M)[M];return n===t||(g(this,M)[M]=t,n!==g(this,M)[M]&&(S(this),null!=n&&L().forEach((e=>e.notifyOfChange(this))))),this}isLevelEnabled(e){return this.getLevelNumber()>=m.levelsMap[O.normalizeLevel(e)]}log(){this.info&&this.info(...arguments)}use(e,t){e instanceof O.Plugin&&O.register(e);var n="string"==typeof e?e:e.name,r=m.plugins[n];if(!r)throw new Error("Invalid plugin: "+n);return r[1][this.name]=t||{},S(this),this}}!function(e){function t(e){var t="number"==typeof e?m.levels[e]:(m.levelsMap[e],e);if(null==t)throw new Error("Invalid level: "+e);return t}function n(){return m.defaultLevel}function r(e){m.defaultLevel=t(e)}function o(e){var t=e.name;m.plugins[t]||(m.plugins[t]=[e,{}])}function i(t,n){t instanceof e.Plugin&&o(t),b().forEach((e=>e.use(t,n)))}e.Plugin=d,e.normalizeLevel=t,e.getDefaultLevel=n,e.setDefaultLevel=r,e.getLevels=function(){return m.levels},e.getLogger=function(e,r){if(!m.loggers[e]){var o=new R(e,t(null!=r?r:n()));m.loggers[e]=o}return m.loggers[e]},e.getLoggers=function(){return y({},m.loggers)},e.getPlugins=function(){return Object.entries(m.plugins).reduce(((e,t)=>{var[n,[r]]=t;return e[n]=r,e}),{})},e.configure=function(e){var{levels:t,level:n,factory:o}=e,i=b();i.forEach((e=>function(e){for(var t=e.getLevels(),n=0;n<t.length;n+=1)delete e[t[n]]}(e))),m.levels=t,m.levelsMap=E(t),r(n),o&&(m.factory=o),i.forEach((e=>e.setLevel(n)))},e.register=o,e.use=i,i(new v("console"))}(O||(O={}));const D=O;var A="@_IFRAME_PING",N="@_IFRAME_HOST_READY",T="@_IFRAME_CLIENT_READY";function I(e,t){return!!e&&e.type===t.Ping}function C(e,t){return!!e&&e.type===t.TargetReady}function j(e){for(var t=new Array,n=0;n<e.length;n+=1){var r=e[n],o=r instanceof HTMLIFrameElement?r.contentWindow:r;o&&t.push(o)}return t}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(null,arguments)}function V(e){var t,n,{id:r,label:o,strictTargets:i=!0,messagesTypes:a,channel:s,logger:u=D.getLogger("AutoConnector"),onSendData:l,onConnect:f}=e,d=r||c(),v=o||d,g=new Map,p="open"===s?new Map:void 0,h=(e,t,n,r,o)=>{if(window!==t)if(function(e){return!(void 0!==window.MessagePort&&e instanceof MessagePort||void 0!==window.ServiceWorker&&e instanceof ServiceWorker)}(t)){t.postMessage(e,n,o);var i=t===window.parent?"iframe parent":"iframe";u.v1(v+": Post message to "+i+" (uid="+r+",self.uid="+d+",origin="+n+"):",e)}else t.postMessage(e,o&&{transfer:o}),u.v1(v+": Post message to MessageEventSource (uid="+r+",self.uid="+d+"):",e)},y=(e,t,n)=>{h({uid:d,type:a.Ping},e,t,n)},w=e=>{var n,r,o,c;if(e.source&&e.source!==window&&(I(e.data,a)||C(e.data,a))&&e.data.uid!==d){var w=e.source,m=e.data.uid;if(u.v1(v+": Receive message from iframe (uid="+m+",self.uid="+d+",origin="+e.origin+"):",e.data),i&&t&&!t.has(w))u.v1(v+": Could not find target (uid="+m+",self.uid="+d+") by message.source.");else{var E=function(e){var{origin:t}=e;return t&&"null"!==t&&"undefined"!==t?t:"*"}(e);if(I(e.data,a)&&(null==(n=g.get(m))||!n.Ping))return g.set(m,U({},g.get(m),{Ping:!0})),void y(w,E,m);var P=!1;if(null!=(r=g.get(m))&&r.Ping&&(null==(o=g.get(m))||!o.SelfReady)){g.set(m,U({},g.get(m),{SelfReady:!0}));var b={target:w,origin:E},L=p?((e,t)=>{var n=null!=(e=null==(t=p.get(m))?void 0:t[0])?e:new MessageChannel;return p.set(m,[n,b]),n.port2})():void 0;((e,t,n,r,o)=>{h({uid:d,type:a.SelfReady,data:e},t,n,r,o?[o]:void 0)})(l?l(b):void 0,w,E,m,L),P=!1}if(C(e.data,a)&&null!=(c=g.get(m))&&c.SelfReady){var S;g.delete(m),null==(S=t)||S.delete(w);var O=(()=>{if("open"===s){var t,n=null==p||null==(t=p.get(m))?void 0:t[0].port1;if(!n)throw new Error("Something went wrong: MessageChannel is not created despite the fact that the `channel` option is `open`.");return n}if("use"===s){var r=e.ports[0];if(!r)throw new Error("MessagePort is not received despite the fact that the `channel` option is `use`. The `channel` option of connector on another side must be equals `open`.");return r}})(),{data:_}=e.data,M=()=>{u.v1(v+": Connection established (self.uid="+d+" + uid="+m+")."),f({data:_,target:w,origin:E},O)};P?setTimeout(M,0):M()}}}},m=()=>{n&&(n(),n=void 0)};return{start:function(e,r){if(void 0===r&&(r={}),!n||r.append){if(r.append){var o=t;m(),t=o}var i=()=>{var n=(()=>{var t="function"==typeof e?e():e;return t.length>0?t:void 0})(),o=n&&j(n);if(o){var i=new Set(o);r.append?(t||(t=new Set),i.forEach((e=>t.add(e)))):t=i,window.addEventListener("message",w),(r.append?i:t).forEach((e=>{e!==window&&y(e,"*","")}))}},a="function"==typeof e?function(e){return"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),()=>{document.removeEventListener("DOMContentLoaded",e)}}(i):i();n=()=>{a&&a(),window.removeEventListener("message",w),t=void 0}}else u.warn(v+": Already started. You should first call `stop`.")},stop:m,isStarted:()=>!!n,close:e=>{var n=e instanceof Set?e:new Set(j(e));if(0!==n.size&&(p&&p.forEach(((e,t)=>{var[r,o]=e;n.has(o.target)&&(r.port1.close(),r.port2.close(),p.delete(t))})),t)){var r=t;n.forEach((e=>r.delete(e)))}},destroy:()=>{m(),g.clear(),p&&(p.forEach((e=>{var[t]=e;t.port1.close(),t.port2.close()})),p.clear())},[Symbol.dispose](){this.destroy()}}}var x=n(96295);D.use(new class extends d{constructor(e,t){super(e),this.storageKey=void 0,this.levelMap={},this.storageKey=t}initialize(e){try{var t=e.name?this.storageKey+":"+e.name:this.storageKey,n=window.localStorage.getItem(t);null!=n&&e.setLevel(n)}catch(r){}this.levelMap[e.name]=e.getLevel()}notifyOfChange(e){var t=this.levelMap[e.name],n=e.getLevel();if(t!==n){this.levelMap[e.name]=n;try{var r=e.name?this.storageKey+":"+e.name:this.storageKey;window.localStorage.setItem(r,n)}catch(o){}}}factory(){}}("LocalStoragePlugin","logger:kinescope")),D.setDefaultLevel(x.Ay.ifProd("warn","debug"));const z=D.getLogger("player");!function(){if(window===window.parent)return;const e=(()=>{var e,t;try{return decodeURIComponent(null!==(e=new URL(null!=t?t:"",null==r?void 0:r.src).searchParams.get("msg"))&&void 0!==e?e:"")}catch(n){return void console.error(n)}})()||window.KinescopeIframeStubMessage||"No player",t=V({logger:z,label:"Player[Stub]",channel:"open",messagesTypes:{Ping:A,SelfReady:T,TargetReady:N},onSendData:()=>({stub:!0,message:e}),onConnect:()=>{t.destroy()}});t.start((()=>[window.parent]))}()}();
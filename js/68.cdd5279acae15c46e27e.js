(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[68],{4155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,a=[],l=!1,f=-1;function s(){l&&c&&(l=!1,c.length?a=c.concat(a):f=-1,a.length&&p())}function p(){if(!l){var e=u(s);l=!0;for(var t=a.length;t;){for(c=a,a=[];++f<t;)c&&c[f].run();f=-1,t=a.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new y(e,t)),1!==a.length||l||u(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},5068:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return null!==e&&"object"===n(e)&&e&&"function"==typeof e.then}r.r(t),r.d(t,{ActionType:()=>f,createPromise:()=>s,default:()=>p});var i=r(4155);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f.Pending,f.Fulfilled,f.Rejected],r=e.promiseTypeSuffixes||t,n=void 0===e.promiseTypeDelimiter?"_":e.promiseTypeDelimiter;return function(e){var t=e.dispatch;return function(e){return function(i){var c,l;if(!i.payload)return e(i);var f=i.payload;if(o(f))c=f;else if(o(f.promise))c=f.promise,l=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return e(i);if(c=f.promise?f.promise():f(),l=f.promise?f.data:void 0,!o(c))return e(a({},i,{payload:c}))}var s=i.type,p=i.meta,y=u(r,3),d=y[0],h=y[1],m=y[2],v=function(e,t){return a({type:[s,t?m:h].join(n)},null==e?{}:{payload:e},{},void 0!==p?{meta:p}:{},{},t?{error:!0}:{})};return e(a({type:[s,d].join(n)},void 0!==l?{payload:l}:{},{},void 0!==p?{meta:p}:{})),c.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=v(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=v(e,!0);throw t(r),e}))}}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch;return"function"==typeof t?s()({dispatch:t}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/68.e79188b2872fb5531d3371a31f06d0e0.js.map
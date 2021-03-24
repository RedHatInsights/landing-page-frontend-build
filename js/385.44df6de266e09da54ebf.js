/*! For license information please see 385.44df6de266e09da54ebf.js.LICENSE.txt */
(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[385],{44291:(e,t,n)=>{"use strict";n.d(t,{v:()=>w});var r,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],a=o.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},f=function(e){return!(e.disabled||function(e){return l(e)&&"hidden"===e.type}(e)||function(e){if("hidden"===getComputedStyle(e).visibility)return!0;var t=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(t,"details:not([open]) *"))return!0;for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(e))},s=function(e){return!(!f(e)||function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(e)||u(e)<0)},p=o.concat("iframe").join(","),d=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,p)&&f(e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var y,h=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1];t!==e&&t.pause()}var n=y.indexOf(e);-1===n||y.splice(n,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),m=function(e){return setTimeout(e,0)},w=function(e,t){var n,o=document,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),f={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},p=function(e){return f.containers.some((function(t){return t.contains(e)}))},y=function(e){var t=l[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=o.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},w=function(){var e;if(null!==y("initialFocus"))e=y("initialFocus");else if(p(o.activeElement))e=o.activeElement;else{var t=f.tabbableGroups[0];e=t&&t.firstTabbableNode||y("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},g=function(){if(f.tabbableGroups=f.containers.map((function(e){var t,n,r,o,l,f,p,d=(n=[],r=[],(o=e,l=(t=t||{}).includeContainer,f=s,p=Array.prototype.slice.apply(o.querySelectorAll(a)),l&&i.call(o,a)&&p.unshift(o),p.filter(f)).forEach((function(e,t){var o=u(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(c).map((function(e){return e.node})).concat(n));if(d.length>0)return{firstTabbableNode:d[0],lastTabbableNode:d[d.length-1]}})).filter((function(e){return!!e})),f.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},O=function e(t){t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!l.preventScroll}),f.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(w()))},_=function(e){p(e.target)||(l.clickOutsideDeactivates?n.deactivate({returnFocus:l.returnFocusOnDeactivate&&!d(e.target)}):l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||e.preventDefault())},S=function(e){var t=p(e.target);t||e.target instanceof Document?t&&(f.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),O(f.mostRecentlyFocusedNode||w()))},E=function(e){if(!1!==l.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){g();var t=null;if(f.tabbableGroups.length>0)if(e.shiftKey){var n=f.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?f.tabbableGroups.length-1:n-1;t=f.tabbableGroups[r].lastTabbableNode}}else{var o=f.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(o>=0){var a=o===f.tabbableGroups.length-1?0:o+1;t=f.tabbableGroups[a].firstTabbableNode}}else t=y("fallbackFocus");t&&(e.preventDefault(),O(t))}(e)},k=function(e){l.clickOutsideDeactivates||p(e.target)||l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},j=function(){if(f.active)return h.activateTrap(n),r=l.delayInitialFocus?m((function(){O(w())})):O(w()),o.addEventListener("focusin",S,!0),o.addEventListener("mousedown",_,{capture:!0,passive:!1}),o.addEventListener("touchstart",_,{capture:!0,passive:!1}),o.addEventListener("click",k,{capture:!0,passive:!1}),o.addEventListener("keydown",E,{capture:!0,passive:!1}),n},P=function(){if(f.active)return o.removeEventListener("focusin",S,!0),o.removeEventListener("mousedown",_,!0),o.removeEventListener("touchstart",_,!0),o.removeEventListener("click",k,!0),o.removeEventListener("keydown",E,!0),n};return(n={activate:function(e){if(f.active)return this;g(),f.active=!0,f.paused=!1,f.nodeFocusedBeforeActivation=o.activeElement;var t=e&&e.onActivate?e.onActivate:l.onActivate;return t&&t(),j(),this},deactivate:function(e){if(!f.active)return this;clearTimeout(r),P(),f.active=!1,f.paused=!1,h.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:l.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:l.returnFocusOnDeactivate)&&m((function(){var e;O((e=f.nodeFocusedBeforeActivation,y("setReturnFocus")||e))})),this},pause:function(){return f.paused||!f.active||(f.paused=!0,P()),this},unpause:function(){return f.paused&&f.active?(f.paused=!1,g(),j(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return f.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),f.active&&g(),this}}).updateContainerElements(e),n}},70655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>u,__param:()=>c,__metadata:()=>l,__awaiter:()=>f,__generator:()=>s,__createBinding:()=>p,__exportStar:()=>d,__values:()=>v,__read:()=>b,__spread:()=>y,__spreadArrays:()=>h,__await:()=>m,__asyncGenerator:()=>w,__asyncDelegator:()=>g,__asyncValues:()=>O,__makeTemplateObject:()=>_,__importStar:()=>S,__importDefault:()=>E,__classPrivateFieldGet:()=>k,__classPrivateFieldSet:()=>j});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function p(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,l):f(a[0][2],n)}catch(e){f(a[0][3],e)}var n}function c(e){u("next",e)}function l(e){u("throw",e)}function f(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}}}]);
//# sourceMappingURL=385.44df6de266e09da54ebf.js.map
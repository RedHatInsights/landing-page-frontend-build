(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[389],{70254:n=>{n.exports=function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=13)}([function(n,e){var t=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(n,e){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,e){var t=n.exports={version:"2.5.0"};"number"==typeof __e&&(__e=t)},function(n,e,t){n.exports=!t(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,e){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,e){var t={}.toString;n.exports=function(n){return t.call(n).slice(8,-1)}},function(n,e,t){var r=t(32)("wks"),o=t(9),i=t(0).Symbol,a="function"==typeof i;(n.exports=function(n){return r[n]||(r[n]=a&&i[n]||(a?i:o)("Symbol."+n))}).store=r},function(n,e,t){var r=t(0),o=t(2),i=t(8),a=t(22),u=t(10),c=function(n,e,t){var f,s,l,p,d=n&c.F,v=n&c.G,g=n&c.S,y=n&c.P,h=n&c.B,m=v?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,D=v?o:o[e]||(o[e]={}),b=D.prototype||(D.prototype={});for(f in v&&(t=e),t)l=((s=!d&&m&&void 0!==m[f])?m:t)[f],p=h&&s?u(l,r):y&&"function"==typeof l?u(Function.call,l):l,m&&a(m,f,l,n&c.U),D[f]!=l&&i(D,f,p),y&&b[f]!=l&&(b[f]=l)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,n.exports=c},function(n,e,t){var r=t(16),o=t(21);n.exports=t(3)?function(n,e,t){return r.f(n,e,o(1,t))}:function(n,e,t){return n[e]=t,n}},function(n,e){var t=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++t+r).toString(36))}},function(n,e,t){var r=t(24);n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)}}return function(){return n.apply(e,arguments)}}},function(n,e){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},function(n,e,t){var r=t(28),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(n&&e){var t=Array.isArray(e)?e:e.split(","),r=n.name||"",o=n.type||"",i=o.replace(/\/.*$/,"");return t.some((function(n){var e=n.trim();return"."===e.charAt(0)?r.toLowerCase().endsWith(e.toLowerCase()):e.endsWith("/*")?i===e.replace(/\/.*$/,""):o===e}))}return!0},t(14),t(34)},function(n,e,t){t(15),n.exports=t(2).Array.some},function(n,e,t){"use strict";var r=t(7),o=t(25)(3);r(r.P+r.F*!t(33)([].some,!0),"Array",{some:function(n){return o(this,n,arguments[1])}})},function(n,e,t){var r=t(17),o=t(18),i=t(20),a=Object.defineProperty;e.f=t(3)?Object.defineProperty:function(n,e,t){if(r(n),e=i(e,!0),r(t),o)try{return a(n,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(n[e]=t.value),n}},function(n,e,t){var r=t(1);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,e,t){n.exports=!t(3)&&!t(4)((function(){return 7!=Object.defineProperty(t(19)("div"),"a",{get:function(){return 7}}).a}))},function(n,e,t){var r=t(1),o=t(0).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,e,t){var r=t(1);n.exports=function(n,e){if(!r(n))return n;var t,o;if(e&&"function"==typeof(t=n.toString)&&!r(o=t.call(n)))return o;if("function"==typeof(t=n.valueOf)&&!r(o=t.call(n)))return o;if(!e&&"function"==typeof(t=n.toString)&&!r(o=t.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,e){n.exports=function(n,e){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:e}}},function(n,e,t){var r=t(0),o=t(8),i=t(23),a=t(9)("src"),u=Function.toString,c=(""+u).split("toString");t(2).inspectSource=function(n){return u.call(n)},(n.exports=function(n,e,t,u){var f="function"==typeof t;f&&(i(t,"name")||o(t,"name",e)),n[e]!==t&&(f&&(i(t,a)||o(t,a,n[e]?""+n[e]:c.join(String(e)))),n===r?n[e]=t:u?n[e]?n[e]=t:o(n,e,t):(delete n[e],o(n,e,t)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||u.call(this)}))},function(n,e){var t={}.hasOwnProperty;n.exports=function(n,e){return t.call(n,e)}},function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,e,t){var r=t(10),o=t(26),i=t(27),a=t(12),u=t(29);n.exports=function(n,e){var t=1==n,c=2==n,f=3==n,s=4==n,l=6==n,p=5==n||l,d=e||u;return function(e,u,v){for(var g,y,h=i(e),m=o(h),D=r(u,v,3),b=a(m.length),w=0,x=t?d(e,b):c?d(e,0):void 0;b>w;w++)if((p||w in m)&&(y=D(g=m[w],w,h),n))if(t)x[w]=y;else if(y)switch(n){case 3:return!0;case 5:return g;case 6:return w;case 2:x.push(g)}else if(s)return!1;return l?-1:f||s?s:x}}},function(n,e,t){var r=t(5);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},function(n,e,t){var r=t(11);n.exports=function(n){return Object(r(n))}},function(n,e){var t=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:t)(n)}},function(n,e,t){var r=t(30);n.exports=function(n,e){return new(r(n))(e)}},function(n,e,t){var r=t(1),o=t(31),i=t(6)("species");n.exports=function(n){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(n,e,t){var r=t(5);n.exports=Array.isArray||function(n){return"Array"==r(n)}},function(n,e,t){var r=t(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});n.exports=function(n){return o[n]||(o[n]={})}},function(n,e,t){"use strict";var r=t(4);n.exports=function(n,e){return!!n&&r((function(){e?n.call(null,(function(){}),1):n.call(null)}))}},function(n,e,t){t(35),n.exports=t(2).String.endsWith},function(n,e,t){"use strict";var r=t(7),o=t(12),i=t(36),a="".endsWith;r(r.P+r.F*t(38)("endsWith"),"String",{endsWith:function(n){var e=i(this,n,"endsWith"),t=arguments.length>1?arguments[1]:void 0,r=o(e.length),u=void 0===t?r:Math.min(o(t),r),c=String(n);return a?a.call(e,c,u):e.slice(u-c.length,u)===c}})},function(n,e,t){var r=t(37),o=t(11);n.exports=function(n,e,t){if(r(e))throw TypeError("String#"+t+" doesn't accept regex!");return String(o(n))}},function(n,e,t){var r=t(1),o=t(5),i=t(6)("match");n.exports=function(n){var e;return r(n)&&(void 0!==(e=n[i])?!!e:"RegExp"==o(n))}},function(n,e,t){var r=t(6)("match");n.exports=function(n){var e=/./;try{"/./"[n](e)}catch(t){try{return e[r]=!1,!"/./"[n](e)}catch(n){}}return!0}}])},41389:(n,e,t)=>{"use strict";t.d(e,{Z:()=>N});var r=t(80150),o=t.n(r);function i(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,u)}c((r=r.apply(n,e||[])).next())}))}function a(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function u(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}Object.create,Object.create;var c=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function f(n,e){var t=function(n){var e=n.name;if(e&&-1!==e.lastIndexOf(".")&&!n.type){var t=e.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(n,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return n}(n);if("string"!=typeof t.path){var r=n.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof e?e:"string"==typeof r&&r.length>0?r:n.name,writable:!1,configurable:!1,enumerable:!0})}return t}var s=[".DS_Store","Thumbs.db"];function l(n){return(null!==n.target&&n.target.files?v(n.target.files):[]).map((function(n){return f(n)}))}function p(n,e){return i(this,void 0,void 0,(function(){var t;return a(this,(function(r){switch(r.label){case 0:return n.items?(t=v(n.items).filter((function(n){return"file"===n.kind})),"drop"!==e?[2,t]:[4,Promise.all(t.map(g))]):[3,2];case 1:return[2,d(y(r.sent()))];case 2:return[2,d(v(n.files).map((function(n){return f(n)})))]}}))}))}function d(n){return n.filter((function(n){return-1===s.indexOf(n.name)}))}function v(n){for(var e=[],t=0;t<n.length;t++){var r=n[t];e.push(r)}return e}function g(n){if("function"!=typeof n.webkitGetAsEntry)return h(n);var e=n.webkitGetAsEntry();return e&&e.isDirectory?D(e):h(n)}function y(n){return n.reduce((function(n,e){return function(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(u(arguments[e]));return n}(n,Array.isArray(e)?y(e):[e])}),[])}function h(n){var e=n.getAsFile();if(!e)return Promise.reject(n+" is not a File");var t=f(e);return Promise.resolve(t)}function m(n){return i(this,void 0,void 0,(function(){return a(this,(function(e){return[2,n.isDirectory?D(n):b(n)]}))}))}function D(n){var e=n.createReader();return new Promise((function(n,t){var r=[];!function o(){var u=this;e.readEntries((function(e){return i(u,void 0,void 0,(function(){var i,u,c;return a(this,(function(a){switch(a.label){case 0:if(e.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),n(i),[3,4];case 3:return u=a.sent(),t(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(e.map(m)),r.push(c),o(),a.label=6;case 6:return[2]}}))}))}),(function(n){t(n)}))}()}))}function b(n){return i(this,void 0,void 0,(function(){return a(this,(function(e){return[2,new Promise((function(e,t){n.file((function(t){var r=f(t,n.fullPath);e(r)}),(function(n){t(n)}))}))]}))}))}var w=t(45697),x=t.n(w),O=t(70254),S=t.n(O),F=("function"==typeof Symbol&&Symbol.iterator,"undefined"==typeof document||!document||!document.createElement||"multiple"in document.createElement("input"));function P(n,e){return"application/x-moz-file"===n.type||S()(n,e)}function j(n,e,t){return n.size<=e&&n.size>=t}function E(n){return"function"==typeof n.isPropagationStopped?n.isPropagationStopped():void 0!==n.cancelBubble&&n.cancelBubble}function A(n){return void 0!==n.defaultPrevented?n.defaultPrevented:"function"==typeof n.isDefaultPrevented&&n.isDefaultPrevented()}function k(n){return!n.dataTransfer||Array.prototype.some.call(n.dataTransfer.types,(function(n){return"Files"===n||"application/x-moz-file"===n}))}function _(n){n.preventDefault()}function T(n){return-1!==n.indexOf("MSIE")||-1!==n.indexOf("Trident/")}function C(n){return-1!==n.indexOf("Edge/")}function L(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return T(n)||C(n)}function I(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return e.some((function(e){return e&&e.apply(void 0,[n].concat(r)),n.defaultPrevented}))}}var R=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},M=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();function z(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function B(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}function K(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}function H(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function W(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}var G=function(n){function e(){var n,t,r;H(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=W(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(i))),r.state={draggedFiles:[],acceptedFiles:[],rejectedFiles:[]},r.isFileDialogActive=!1,r.onDocumentDrop=function(n){r.node&&r.node.contains(n.target)||(n.preventDefault(),r.dragTargets=[])},r.onDragStart=function(n){n.persist(),r.props.onDragStart&&k(n)&&r.props.onDragStart.call(r,n)},r.onDragEnter=function(n){n.preventDefault(),-1===r.dragTargets.indexOf(n.target)&&r.dragTargets.push(n.target),n.persist(),k(n)&&(Promise.resolve(r.props.getDataTransferItems(n)).then((function(e){E(n)||r.setState({draggedFiles:e,isDragActive:!0})})),r.props.onDragEnter&&r.props.onDragEnter.call(r,n))},r.onDragOver=function(n){return n.preventDefault(),n.persist(),n.dataTransfer&&(n.dataTransfer.dropEffect="copy"),r.props.onDragOver&&k(n)&&r.props.onDragOver.call(r,n),!1},r.onDragLeave=function(n){n.preventDefault(),n.persist(),r.dragTargets=r.dragTargets.filter((function(e){return e!==n.target&&r.node.contains(e)})),r.dragTargets.length>0||(r.setState({isDragActive:!1,draggedFiles:[]}),r.props.onDragLeave&&k(n)&&r.props.onDragLeave.call(r,n))},r.onDrop=function(n){var e=r.props,t=e.onDrop,o=e.onDropAccepted,i=e.onDropRejected,a=e.multiple,u=e.accept,c=e.getDataTransferItems;n.preventDefault(),n.persist(),r.dragTargets=[],r.isFileDialogActive=!1,r.draggedFiles=null,r.setState({isDragActive:!1,draggedFiles:[]}),k(n)&&Promise.resolve(c(n)).then((function(e){var c=[],f=[];E(n)||(e.forEach((function(n){P(n,u)&&j(n,r.props.maxSize,r.props.minSize)?c.push(n):f.push(n)})),!a&&c.length>1&&f.push.apply(f,K(c.splice(0))),r.setState({acceptedFiles:c,rejectedFiles:f},(function(){t&&t.call(r,c,f,n),f.length>0&&i&&i.call(r,f,n),c.length>0&&o&&o.call(r,c,n)})))}))},r.onClick=function(n){var e=r.props.onClick;e&&e.call(r,n),A(n)||(n.stopPropagation(),L()?setTimeout(r.open,0):r.open())},r.onInputElementClick=function(n){n.stopPropagation()},r.onFileDialogCancel=function(){var n=r.props.onFileDialogCancel;r.isFileDialogActive&&setTimeout((function(){null!=r.input&&(r.input.files.length||(r.isFileDialogActive=!1,"function"==typeof n&&n()))}),300)},r.onFocus=function(n){var e=r.props.onFocus;e&&e.call(r,n),A(n)||r.setState({isFocused:!0})},r.onBlur=function(n){var e=r.props.onBlur;e&&e.call(r,n),A(n)||r.setState({isFocused:!1})},r.onKeyDown=function(n){var e=r.props.onKeyDown;r.node.isEqualNode(n.target)&&(e&&e.call(r,n),A(n)||32!==n.keyCode&&13!==n.keyCode||(n.preventDefault(),r.open()))},r.composeHandler=function(n){return r.props.disabled?null:n},r.getRootProps=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,o=void 0===t?"ref":t,i=e.onKeyDown,a=e.onFocus,u=e.onBlur,c=e.onClick,f=e.onDragStart,s=e.onDragEnter,l=e.onDragOver,p=e.onDragLeave,d=e.onDrop,v=B(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragStart","onDragEnter","onDragOver","onDragLeave","onDrop"]);return R((z(n={onKeyDown:r.composeHandler(i?I(i,r.onKeyDown):r.onKeyDown),onFocus:r.composeHandler(a?I(a,r.onFocus):r.onFocus),onBlur:r.composeHandler(u?I(u,r.onBlur):r.onBlur),onClick:r.composeHandler(c?I(c,r.onClick):r.onClick),onDragStart:r.composeHandler(f?I(f,r.onDragStart):r.onDragStart),onDragEnter:r.composeHandler(s?I(s,r.onDragEnter):r.onDragEnter),onDragOver:r.composeHandler(l?I(l,r.onDragOver):r.onDragOver),onDragLeave:r.composeHandler(p?I(p,r.onDragLeave):r.onDragLeave),onDrop:r.composeHandler(d?I(d,r.onDrop):r.onDrop)},o,r.setNodeRef),z(n,"tabIndex",r.props.disabled?-1:0),n),v)},r.getInputProps=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.refKey,t=void 0===e?"ref":e,o=n.onChange,i=n.onClick,a=B(n,["refKey","onChange","onClick"]),u=r.props,c=u.accept,f=u.multiple,s=u.name,l=z({accept:c,type:"file",style:{display:"none"},multiple:F&&f,onChange:I(o,r.onDrop),onClick:I(i,r.onInputElementClick),autoComplete:"off",tabIndex:-1},t,r.setInputRef);return s&&s.length&&(l.name=s),R({},l,a)},r.setNodeRef=function(n){r.node=n},r.setInputRef=function(n){r.input=n},r.open=function(){r.isFileDialogActive=!0,r.input&&(r.input.value=null,r.input.click())},W(r,t)}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),M(e,[{key:"componentDidMount",value:function(){var n=this.props.preventDropOnDocument;this.dragTargets=[],n&&(document.addEventListener("dragover",_,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),window.addEventListener("focus",this.onFileDialogCancel,!1)}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",_),document.removeEventListener("drop",this.onDocumentDrop)),window.removeEventListener("focus",this.onFileDialogCancel,!1)}},{key:"render",value:function(){var n,e,t=this.props,r=t.children,o=t.multiple,i=t.disabled,a=this.state,u=a.isDragActive,c=a.isFocused,f=a.draggedFiles,s=a.acceptedFiles,l=a.rejectedFiles,p=f.length,d=o||p<=1,v=p>0&&(n=f,e=this.props.accept,n.every((function(n){return P(n,e)})));return r({isDragActive:u,isDragAccept:v,isDragReject:p>0&&(!v||!d),draggedFiles:f,acceptedFiles:s,rejectedFiles:l,isFocused:c&&!i,getRootProps:this.getRootProps,getInputProps:this.getInputProps,open:this.open})}}]),e}(o().Component);const N=G;G.propTypes={accept:x().oneOfType([x().string,x().arrayOf(x().string)]),children:x().func,disabled:x().bool,preventDropOnDocument:x().bool,multiple:x().bool,name:x().string,maxSize:x().number,minSize:x().number,getDataTransferItems:x().func,onClick:x().func,onFocus:x().func,onBlur:x().func,onKeyDown:x().func,onDrop:x().func,onDropAccepted:x().func,onDropRejected:x().func,onDragStart:x().func,onDragEnter:x().func,onDragOver:x().func,onDragLeave:x().func,onFileDialogCancel:x().func},G.defaultProps={preventDropOnDocument:!0,disabled:!1,multiple:!0,maxSize:1/0,minSize:0,getDataTransferItems:function(n){return i(this,void 0,void 0,(function(){return a(this,(function(e){return[2,(t=n,t.dataTransfer&&n.dataTransfer?p(n.dataTransfer,n.type):l(n))];var t}))}))}}}}]);
//# sourceMappingURL=389.bb8ff122bad39db8cef4.js.map
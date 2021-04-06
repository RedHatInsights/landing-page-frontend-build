(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[252],{24685:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>T});var r=n(22122),i=n(6610),o=n(5991),s=n(63349),a=n(10379),c=n(46070),u=n(77608),l=n(96156),f=n(92950),p=n.n(f),d=n(12181),A=n(29971),m=n(45697),g=n.n(m),h=n(21458),v=n(81253),y=n(43547),b=n(68774),O=n(68340),C=n(56715),w=n(36438);n(46735);var k=function(e){(0,a.Z)(d,e);var t,n,f=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var i=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,i.Z)(this,d),t=f.call(this,e),(0,l.Z)((0,s.Z)(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,l.Z)((0,s.Z)(t),"setDismissTimeout",(function(){t.props.dismissable||(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,l.Z)((0,s.Z)(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind((0,s.Z)(t)),t.setDismissTimeout(),t}return(0,o.Z)(d,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.dismissable,i=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,s=e.requestId,a=(0,v.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId"]);return p().createElement(y.b,(0,r.Z)({className:"notification-item",title:i&&i.replace(/<\/?[^>]+(>|$)/g,"")},a,{actionClose:n?p().createElement(C.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},p().createElement(w.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&p().createElement(b.D,null,p().createElement(O.x,{component:O.q.small},"Tracking Id: ",o)),s&&p().createElement(b.D,null,p().createElement(O.x,{component:O.q.small},"Request Id: ",s)))}}]),d}(f.Component);k.propTypes={dismissable:g().bool,onDismiss:g().func.isRequired,id:g().string.isRequired,variant:g().string.isRequired,title:g().string.isRequired,description:g().node,dismissDelay:g().number,requestId:g().string,sentryId:g().string},k.defaultProps={dismissDelay:5e3};const D=k;n(57544);var j=n(32203),P=n(62394),x=n(47173),E=n(71070),Z=n(48140),B=n(86050),_=function(e){var t=e.page,n=e.onSetPage,r=e.onClearAll,i=e.count;return p().createElement(j.Z,{className:"notification-item"},p().createElement(P.e,null,p().createElement(Z.a,null,p().createElement(B.Z,null,p().createElement(x.zx,{variant:x.Wu.link,className:"ins-c-pagination__clear-all",onClick:r},"Clear all")),p().createElement(B.Z,null,p().createElement(E.t,{itemCount:i,variant:E.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:n})))))};_.propTypes={count:g().number,page:g().number,onSetPage:g().func,onClearAll:g().func},_.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const N=_;var S=function(e){(0,a.Z)(A,e);var t,n,f=(t=A,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var i=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function A(){var e;(0,i.Z)(this,A);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=f.call.apply(f,[this].concat(n)),(0,l.Z)((0,s.Z)(e),"state",{page:1}),(0,l.Z)((0,s.Z)(e),"onSetPage",(function(t,n){e.setState({page:n})})),e}return(0,o.Z)(A,[{key:"render",value:function(){var e=this.state.page,t=this.props,n=t.notifications,i=t.removeNotification,o=t.rootId,s=t.onClearAll,a=n&&n.length<=5?n:n&&n.slice(5*(e-1),5*e);return!n||Array.isArray(n)&&0===n.length?null:(0,d.createPortal)(p().createElement("div",{className:"notifications-portal"},n&&n.length>5&&p().createElement(N,{onSetPage:this.onSetPage,count:n.length,page:e,onClearAll:s}),a.map((function(e){return p().createElement(D,(0,r.Z)({onDismiss:i,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),A}(f.Component);S.propTypes={notifications:g().arrayOf(g().shape({id:g().string.isRequired,title:g().string.isRequired,variant:g().string.isRequired,description:g().node,dismissable:g().bool})),removeNotification:g().func.isRequired,onClearAll:g().func};const T=(0,A.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,h.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,h.L1)())}}}))(S)},84885:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var r=n(96156),i=n(27361),o=n.n(i),s=n(18721),a=n.n(s),c=n(21458);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t,n){if("string"==typeof e)return{title:"Error",description:e};var r=t;Array.isArray(t)&&(r=t.find((function(t){return a()(e,t)})));var i=n;return Array.isArray(n)&&(i=n.find((function(t){return a()(e,t)}))),{title:o()(e,r)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,n=e.hasCustomNotification,r=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!n&&!r&&i};const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},n=l({},t,{},e),r=function(e){return e.match(new RegExp("^.*".concat(n.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(n.fulfilledSuffix,"$")))},s=function(e){return e.match(new RegExp("^.*".concat(n.rejectedSuffix,"$")))},u={dismissable:!n.autoDismiss,dismissDelay:n.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(d){var A=d.meta,m=d.type;if(A&&A.notifications){var g=A.notifications;r(m)&&g.pending?t((0,c.wN)(l({},u,{},g.pending))):i(m)&&g.fulfilled?t((0,c.wN)(l({},u,{},g.fulfilled))):s(m)&&g.rejected&&t((0,c.wN)(l({},u,{},g.rejected,{sentryId:d.payload&&d.payload.sentryId,requestId:d.payload&&d.payload.requestId})))}if(p({isRejected:s(m),hasCustomNotification:A&&A.notifications&&A.notifications.rejected,noErrorOverride:A&&A.noError,dispatchDefaultFailure:n.dispatchDefaultFailure}))if(n.useStatusText)t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,n.errorTitleKey,"statusText"))));else{var h=Array.isArray(n.errorNamespaceKey)&&n.errorNamespaceKey.find((function(e){return a()(d.payload,e)}));h?o()(d.payload,h).map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,n.errorTitleKey,n.errorDescriptionKey))))})):Array.isArray(d.payload)?d.payload.map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,n.errorTitleKey,n.errorDescriptionKey))))})):t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,n.errorTitleKey,n.errorDescriptionKey))))}e(d)}}}}},17558:(e,t,n)=>{"use strict";n.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>s});var r="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(r,"ADD_NOTIFICATION"),o="".concat(r,"REMOVE_NOTIFICATION"),s="".concat(r,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i,FV:()=>o,L1:()=>s});var r=n(17558),i=function(e){return{type:r.Dv,payload:e}},o=function(e){return{type:r.Kf,payload:e}},s=function(){return{type:r.wt}}},83215:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i.wN,ee:()=>p});var r=n(17558),i=n(21458),o=n(96156),s=n(87329);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e,t){var n=t.payload;return[].concat((0,s.Z)(e),[c({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},n)])},l=function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return[].concat((0,s.Z)(e.slice(0,r)),(0,s.Z)(e.slice(r+1)))},f=[];const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.Dv:return u(e,t);case r.Kf:return l(e,t);case r.wt:return[];default:return e}}},34879:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(87329),i=n(6610),o=n(5991);const s=function(){function e(){(0,i.Z)(this,e),this.listeners=new Set}return(0,o.Z)(e,[{key:"getListeners",value:function(){return this.listeners}},{key:"getMiddleware",value:function(){var e=this;return function(){return function(t){return function(n){var r=e.callOnAction(n.type,n.payload);t(r?{type:"@@config/action-stopped",payload:n}:n)}}}}},{key:"addNew",value:function(e){var t=this;return this.listeners.add(e),function(){return t.listeners.delete(e)}}},{key:"callOnAction",value:function(e,t){for(var n=!1,i=function(){return n=!0},o=(0,r.Z)(this.listeners),s=0;s<o.length;s++)o[s].on===e&&o[s].hasOwnProperty("callback")&&o[s].callback({data:t,preventBubble:i});return n}}]),e}()},18546:(e,t,n)=>{"use strict";n.d(t,{Gg:()=>f,ZP:()=>d});var r=n(34699),i=n(87329),o=n(6610),s=n(5991),a=n(96156),c=n(14890);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,r.type)?e[r.type](n,r):n}}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.qC;(0,o.Z)(this,e);var s=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r;this.store=(0,c.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,s(c.md.apply(void 0,(0,i.Z)(n)))),this.reducers={}}return(0,s.Z)(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=l({},this.reducers,{},e),this.store.replaceReducer((0,c.UY)(l({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var n=(0,r.Z)(t,2),i=n[0],o=n[1];return l({},e,(0,a.Z)({},i,o))}),{}),t.store.replaceReducer((0,c.UY)(l({},t.reducers)))}}}]),e}();new p;const d=p},67336:(e,t,n)=>{"use strict";n.d(t,{JH:()=>l});var r,i=n(96156),o=n(87329),s=n(18546);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return r||(r=new s.ZP(e,(0,o.Z)(t),n)),r.register({routerData:function(e,t){var n=t.type,r=t.payload;return c({},e,{},"@@INSIGHTS-CORE/NAVIGATION"===n?r:{})}}),r}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return u(e,t,n)}},77460:(e,t,n)=>{"use strict";n.d(t,{eE:()=>d});var r=n(87757),i=n.n(r),o=n(96156),s=n(92137),a=(n(6610),n(10379),n(46070),n(77608),n(45366),n(9669)),c=n.n(a),u=n(39666);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){return(p=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Error;var d=c().create();d.interceptors.request.use((function(e){return p.apply(this,arguments)})),d.interceptors.response.use((function(e){return e.data?e.data:e})),d.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),d.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,u.e)((function(t){t.setTag("request_id",e.response.req_id)})),e})),d.interceptors.response.use(null,(function(e){var t;if(!c().isCancel(e))try{var n,r,i=f({},e);if(t=null===(n=i.response)||void 0===n||null===(r=n.headers)||void 0===r?void 0:r["x-rh-insights-request-id"],i.response&&i.response.data)throw f({},i.response.data,{statusText:i.response.statusText});throw e}catch(e){throw t||(e.sentryId=(0,u.Tb)(e)),e.requestId=t,e}}))},93454:(e,t,n)=>{"use strict";var r=n(95318);t.eE=void 0;var i=r(n(87757)),o=r(n(59713)),s=r(n(48926)),a=(r(n(34575)),r(n(2205)),r(n(78585)),r(n(29754)),r(n(65957)),r(n(9669))),c=n(57271);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){return(f=(0,s.default)(i.default.mark((function e(t){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Error;var p=a.default.create();t.eE=p,p.interceptors.request.use((function(e){return f.apply(this,arguments)})),p.interceptors.response.use((function(e){return e.data?e.data:e})),p.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),p.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,c.configureScope)((function(t){t.setTag("request_id",e.response.req_id)})),e})),p.interceptors.response.use(null,(function(e){var t;if(!a.default.isCancel(e))try{var n,r,i=l({},e);if(t=null===(n=i.response)||void 0===n||null===(r=n.headers)||void 0===r?void 0:r["x-rh-insights-request-id"],i.response&&i.response.data)throw l({},i.response.data,{statusText:i.response.statusText});throw e}catch(e){throw t||(e.sentryId=(0,c.captureException)(e)),e.requestId=t,e}}))},39338:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(22122),i=n(81253),o=n(87329),s=n(96156),a=n(6610),c=n(5991),u=n(10379),l=n(46070),f=n(77608),p=n(92950),d=n.n(p),A=n(45697),m=n.n(A),g=n(94184),h=n.n(g),v=n(29971);const y=d().createContext("light");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n(73706);var O=function(e){(0,u.Z)(A,e);var t,n,p=(t=A,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,f.Z)(t);if(n){var i=(0,f.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function A(){return(0,a.Z)(this,A),p.apply(this,arguments)}return(0,c.Z)(A,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,n=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.dynamic,(0,s.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[t.substr(1)])):e.staticPart=[].concat((0,o.Z)(e.staticPart),(0,o.Z)(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,o=(e.params,e.path,(0,i.Z)(e,["className","children","params","path"])),a=this.calculateLocation(),c=a.dynamic,u=a.staticPart;return d().createElement(y.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",i=h()((0,s.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:d().createElement("section",(0,r.Z)({},o,c,{"page-type":u.join("-"),className:"".concat(h()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(i)}),d().Children.map(n,(function(e){return d().cloneElement(e,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,r.Z)({},o,c,{"page-type":u.join("-"),className:"".concat(h()(t,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[e]}))}}]),A}(p.Component);O.propTypes={className:m().string,children:m().any.isRequired,params:m().any,path:m().string};const C=(0,v.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(O)},56455:(e,t,n)=>{"use strict";n.d(t,{i:()=>p,Z:()=>A});var r=n(22122),i=n(96156),o=n(81253),s=n(92950),a=n.n(s),c=n(45697),u=n.n(c),l=n(94184),f=n.n(l),p=(n(89254),{xs:"xs",sm:"sm",md:"md",lg:"lg"}),d=function(e){var t=e.size,n=e.isDark,s=e.className,c=(0,o.Z)(e,["size","isDark","className"]),u=f()("ins-c-skeleton","ins-c-skeleton__".concat(t),(0,i.Z)({},"ins-m-dark",n),s);return a().createElement("div",(0,r.Z)({className:u},c)," ")};const A=d;d.propTypes={className:u().string,size:u().oneOf(Object.values(p)),isDark:u().bool},d.defaultProps={size:p.md,isDark:!1}},6023:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(22122),i=n(96156),o=n(81253),s=n(92950),a=n.n(s),c=n(45697),u=n.n(c),l=n(94184),f=n.n(l),p=(n(60237),function(e){var t=e.centered,n=e.className,s=(0,o.Z)(e,["centered","className"]),c=f()("ins-c-spinner",(0,i.Z)({},"ins-m-center",t),n);return a().createElement("div",(0,r.Z)({role:"status",className:c},s),a().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))});p.propTypes={centered:u().bool,className:u().string};const d=p},51350:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(94015),i=n.n(r),o=n(23645),s=n.n(o)()(i());s.push([e.id,".notification-item{position:relative;margin:10px;word-break:break-word}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-notifications/Notification/notification.css"],names:[],mappings:"AAAA,mBAAmB,iBAAiB,CAAC,WAAW,CAAC,qBAAqB",sourcesContent:[".notification-item{position:relative;margin:10px;word-break:break-word}\n"],sourceRoot:""}]);const a=s},18447:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(94015),i=n.n(r),o=n(23645),s=n.n(o)()(i());s.push([e.id,".notifications-portal{position:fixed;top:0;right:0;z-index:2000}@media only screen and (max-width: 600px){.notifications-portal{margin:0;width:initial}}@media only screen and (min-width: 768px){.notifications-portal{margin:30px;width:708px}}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-notifications/NotificationPortal/notificationPortal.css"],names:[],mappings:"AAAA,sBAAsB,cAAc,CAAC,KAAK,CAAC,OAAO,CAAC,YAAY,CAAC,0CAA0C,sBAAsB,QAAQ,CAAC,aAAa,CAAE,CAAA,0CAA0C,sBAAsB,WAAW,CAAC,WAAW,CAAE",sourcesContent:[".notifications-portal{position:fixed;top:0;right:0;z-index:2000}@media only screen and (max-width: 600px){.notifications-portal{margin:0;width:initial}}@media only screen and (min-width: 768px){.notifications-portal{margin:30px;width:708px}}\n"],sourceRoot:""}]);const a=s},85106:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(94015),i=n.n(r),o=n(23645),s=n.n(o)()(i());s.push([e.id,".pf-l-page__main .pf-l-page__main-section.pf-m-dark:not(:first-child){background:var(--pf-global--BackgroundColor--dark-transparent-100)}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/Main/main.css"],names:[],mappings:"AAAA,sEAAsE,kEAAkE",sourcesContent:[".pf-l-page__main .pf-l-page__main-section.pf-m-dark:not(:first-child){background:var(--pf-global--BackgroundColor--dark-transparent-100)}\n"],sourceRoot:""}]);const a=s},94041:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(94015),i=n.n(r),o=n(23645),s=n.n(o)()(i());s.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-skeleton{animation-duration:1s;animation-iteration-count:infinite;animation-name:skeletonGradient;animation-timing-function:linear;background:var(--pf-global--disabled-color--200);background:linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem;border-radius:5px;border-radius:0.3125rem}.ins-c-skeleton__xs{width:16%}.ins-c-skeleton__sm{width:33%}.ins-c-skeleton__md{width:66%}.ins-c-skeleton__lg{width:100%}.ins-c-skeleton.ins-m-dark{background:#3c3c3c;background:linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem}@keyframes skeletonGradient{0%{background-position:-500px 0px;background-position:-31.25rem 0rem}100%{background-position:500px 0px;background-position:31.25rem 0rem}}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/Skeleton/skeleton.css"],names:[],mappings:"AAAA,MAAM,4BAAoB,CAAS,aAAa,YAAY,CAAC,gBAAgB,qBAAqB,CAAC,kCAAkC,CAAC,+BAA+B,CAAC,gCAAgC,CAAC,gDAAgD,CAAC,2EAA2E,CAAC,2BAA2B,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,UAAU,CAAC,2BAA2B,kBAAkB,CAAC,2EAA2E,CAAC,2BAA2B,CAAC,gCAAgC,CAAC,4BAA4B,GAAG,8BAA8B,CAAC,kCAAkC,CAAC,KAAK,6BAA6B,CAAC,iCAAiC,CAAA",sourcesContent:[":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-skeleton{animation-duration:1s;animation-iteration-count:infinite;animation-name:skeletonGradient;animation-timing-function:linear;background:var(--pf-global--disabled-color--200);background:linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem;border-radius:5px;border-radius:0.3125rem}.ins-c-skeleton__xs{width:16%}.ins-c-skeleton__sm{width:33%}.ins-c-skeleton__md{width:66%}.ins-c-skeleton__lg{width:100%}.ins-c-skeleton.ins-m-dark{background:#3c3c3c;background:linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem}@keyframes skeletonGradient{0%{background-position:-500px 0px;background-position:-31.25rem 0rem}100%{background-position:500px 0px;background-position:31.25rem 0rem}}\n"],sourceRoot:""}]);const a=s},92165:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(94015),i=n.n(r),o=n(23645),s=n.n(o)()(i());s.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}@keyframes spinner{to{transform:rotate(360deg)}}.ins-c-spinner{display:inline-flex}.ins-c-spinner.ins-m-center{display:flex;justify-content:center}.ins-c-spinner:before{content:'';width:30px;width:1.875rem;height:30px;height:1.875rem;border-radius:50%;border:3px solid var(--pf-global--active-color--200);border-top-color:var(--pf-global--active-color--100);animation:spinner 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/Spinner/spinner.css"],names:[],mappings:"AAAA,MAAM,4BAAoB,CAAS,aAAa,YAAY,CAAC,mBAAmB,GAAG,wBAAwB,CAAA,CAAE,eAAe,mBAAmB,CAAC,4BAA4B,YAAY,CAAC,sBAAsB,CAAC,sBAAsB,UAAU,CAAC,UAAU,CAAC,cAAc,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oDAAoD,CAAC,oDAAoD,CAAC,0DAA0D",sourcesContent:[":root{--ins-color--orange: #ec7a08}button:focus{outline:none}@keyframes spinner{to{transform:rotate(360deg)}}.ins-c-spinner{display:inline-flex}.ins-c-spinner.ins-m-center{display:flex;justify-content:center}.ins-c-spinner:before{content:'';width:30px;width:1.875rem;height:30px;height:1.875rem;border-radius:50%;border:3px solid var(--pf-global--active-color--200);border-top-color:var(--pf-global--active-color--100);animation:spinner 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n"],sourceRoot:""}]);const a=s},46735:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(51350),s=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var a=o.default.locals;e.hot.accept(51350,(t=>{o=n(51350),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),o.default.locals},57544:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(18447),s=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var a=o.default.locals;e.hot.accept(18447,(t=>{o=n(18447),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),o.default.locals},73706:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(85106),s=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var a=o.default.locals;e.hot.accept(85106,(t=>{o=n(85106),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),o.default.locals},89254:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(94041),s=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var a=o.default.locals;e.hot.accept(94041,(t=>{o=n(94041),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),o.default.locals},60237:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(92165),s=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var a=o.default.locals;e.hot.accept(92165,(t=>{o=n(92165),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){s()})),o.default.locals}}]);
//# sourceMappingURL=rhcsVendor.338c59d8ed5d1997481e.js.map
"use strict";(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[252],{4685:(e,t,r)=>{r.d(t,{ZP:()=>_});var n=r(2122),i=r(6610),o=r(5991),a=r(3349),s=r(379),c=r(6070),u=r(7608),l=r(6156),f=r(2950),p=r.n(f),d=r(2181),m=r(557),y=r(5697),v=r.n(y),g=r(1458),h=r(1253),O=r(3547),b=r(8774),D=r(8340),Z=r(6715),P=r(6438);var j=function(e){(0,s.Z)(d,e);var t,r,f=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var i=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,i.Z)(this,d),t=f.call(this,e),(0,l.Z)((0,a.Z)(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,l.Z)((0,a.Z)(t),"setDismissTimeout",(function(){t.props.autoDismiss&&(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,l.Z)((0,a.Z)(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind((0,a.Z)(t)),t.setDismissTimeout(),t}return(0,o.Z)(d,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,i=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,a=e.requestId,s=(e.autoDismiss,(0,h.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return p().createElement(O.b,(0,n.Z)({className:"notification-item",title:i&&i.replace(/<\/?[^>]+(>|$)/g,"")},s,{actionClose:r?p().createElement(Z.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},p().createElement(P.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&p().createElement(b.D,null,p().createElement(D.x,{component:D.q.small},"Tracking Id: ",o)),a&&p().createElement(b.D,null,p().createElement(D.x,{component:D.q.small},"Request Id: ",a)))}}]),d}(f.Component);j.propTypes={autoDismiss:v().bool,dismissable:v().bool,onDismiss:v().func.isRequired,id:v().string.isRequired,variant:v().oneOf(["info","success","warning","danger"]).isRequired,title:v().node.isRequired,description:v().node,dismissDelay:v().number,requestId:v().string,sentryId:v().string},j.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const w=j;var E=r(2203),N=r(2394),I=r(7173),T=r(1070),S=r(8140),k=r(6050),R=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,i=e.count;return p().createElement(E.Z,{className:"notification-item"},p().createElement(N.e,null,p().createElement(S.a,null,p().createElement(k.Z,null,p().createElement(I.zx,{variant:I.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),p().createElement(k.Z,null,p().createElement(T.t,{itemCount:i,variant:T.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};R.propTypes={count:v().number,page:v().number,onSetPage:v().func,onClearAll:v().func},R.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const C=R;var A=function(e){(0,s.Z)(m,e);var t,r,f=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var i=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function m(){var e;(0,i.Z)(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=f.call.apply(f,[this].concat(r)),(0,l.Z)((0,a.Z)(e),"state",{page:1}),(0,l.Z)((0,a.Z)(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return(0,o.Z)(m,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,i=t.removeNotification,o=t.rootId,a=t.onClearAll,s=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,d.createPortal)(p().createElement("div",{className:"notifications-portal"},r&&r.length>5&&p().createElement(C,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:a}),s.map((function(e){return p().createElement(w,(0,n.Z)({onDismiss:i,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),m}(f.Component);A.propTypes={notifications:v().arrayOf(v().shape({id:v().string.isRequired,title:v().string.isRequired,variant:v().string.isRequired,description:v().node,dismissable:v().bool})),removeNotification:v().func.isRequired,onClearAll:v().func,rootId:v().string};const _=(0,m.connect)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,g.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,g.L1)())}}}))(A)},4885:(e,t,r)=>{r.d(t,{ZP:()=>d});var n=r(6156),i=r(7361),o=r.n(i),a=r(8721),s=r.n(a),c=r(1458);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return s()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return s()(e,t)}))),{title:o()(e,n)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,r=e.hasCustomNotification,n=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!r&&!n&&i};const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},r=l(l({},t),e),n=function(e){return e.match(new RegExp("^.*".concat(r.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(r.fulfilledSuffix,"$")))},a=function(e){return e.match(new RegExp("^.*".concat(r.rejectedSuffix,"$")))},u={dismissable:!r.autoDismiss,dismissDelay:r.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(d){var m=d.meta,y=d.type;if(m&&m.notifications){var v=m.notifications;n(y)&&v.pending?t((0,c.wN)(l(l({},u),v.pending))):i(y)&&v.fulfilled?t((0,c.wN)(l(l({},u),v.fulfilled))):a(y)&&v.rejected&&t((0,c.wN)(l(l(l({},u),v.rejected),{},{sentryId:d.payload&&d.payload.sentryId,requestId:d.payload&&d.payload.requestId})))}if(p({isRejected:a(y),hasCustomNotification:m&&m.notifications&&m.notifications.rejected,noErrorOverride:m&&m.noError,dispatchDefaultFailure:r.dispatchDefaultFailure}))if(r.useStatusText)t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,"statusText"))));else{var g=Array.isArray(r.errorNamespaceKey)&&r.errorNamespaceKey.find((function(e){return s()(d.payload,e)}));g?o()(d.payload,g).map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):Array.isArray(d.payload)?d.payload.map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,r.errorDescriptionKey))))}e(d)}}}}},7558:(e,t,r)=>{r.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>a});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(n,"ADD_NOTIFICATION"),o="".concat(n,"REMOVE_NOTIFICATION"),a="".concat(n,"CLEAR_NOTIFICATIONS")},1458:(e,t,r)=>{r.d(t,{wN:()=>i,FV:()=>o,L1:()=>a});var n=r(7558),i=function(e){return{type:n.Dv,payload:e}},o=function(e){return{type:n.Kf,payload:e}},a=function(){return{type:n.wt}}},3215:(e,t,r)=>{r.d(t,{wN:()=>i.wN,ee:()=>p});var n=r(7558),i=r(1458),o=r(6156),a=r(8927);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e,t){var r=t.payload;return[].concat((0,a.Z)(e),[c({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},l=function(e,t){var r=t.payload,n=e.findIndex((function(e){return e.id===r}));return[].concat((0,a.Z)(e.slice(0,n)),(0,a.Z)(e.slice(n+1)))},f=[];const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.Dv:return u(e,t);case n.Kf:return l(e,t);case n.wt:return[];default:return e}}},4879:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8927),i=r(6610),o=r(5991);const a=function(){function e(){(0,i.Z)(this,e),this.listeners=new Set}return(0,o.Z)(e,[{key:"getListeners",value:function(){return this.listeners}},{key:"getMiddleware",value:function(){var e=this;return function(){return function(t){return function(r){var n=e.callOnAction(r.type,r.payload);t(n?{type:"@@config/action-stopped",payload:r}:r)}}}}},{key:"addNew",value:function(e){var t=this;return this.listeners.add(e),function(){return t.listeners.delete(e)}}},{key:"callOnAction",value:function(e,t){for(var r=!1,i=function(){return r=!0},o=(0,n.Z)(this.listeners),a=0;a<o.length;a++)o[a].on===e&&o[a].hasOwnProperty("callback")&&o[a].callback({data:t,preventBubble:i});return r}}]),e}()},8546:(e,t,r)=>{r.d(t,{Gg:()=>f,ZP:()=>d});var n=r(4738),i=r(8927),o=r(6610),a=r(5991),s=r(6156),c=r(4890);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,n.type)?e[n.type](r,n):r}}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.qC;(0,o.Z)(this,e);var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,c.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,a(c.md.apply(void 0,(0,i.Z)(r)))),this.reducers={}}return(0,a.Z)(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=l(l({},this.reducers),e),this.store.replaceReducer((0,c.UY)(l({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r=(0,n.Z)(t,2),i=r[0],o=r[1];return l(l({},e),{},(0,s.Z)({},i,o))}),{}),t.store.replaceReducer((0,c.UY)(l({},t.reducers)))}}}]),e}();new p;const d=p},7336:(e,t,r)=>{r.d(t,{JH:()=>l});var n,i=r(6156),o=r(8927),a=r(8546);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return n||(n=new a.ZP(e,(0,o.Z)(t),r)),n.register({routerData:function(e,t){var r=t.type,n=t.payload;return c(c({},e),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),n}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return u(e,t,r)}},9338:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(2122),i=r(1253),o=r(8927),a=r(6156),s=r(6610),c=r(5991),u=r(379),l=r(6070),f=r(7608),p=r(2950),d=r.n(p),m=r(5697),y=r.n(m),v=r(4184),g=r.n(v),h=r(557);const O=d().createContext("light");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){(0,u.Z)(m,e);var t,r,p=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,f.Z)(t);if(r){var i=(0,f.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function m(){return(0,s.Z)(this,m),p.apply(this,arguments)}return(0,c.Z)(m,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,r=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var n=insights.chrome.$internal.store.getState();if(t&&n)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=D(D({},e.dynamic),{},(0,a.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),r[t.substr(1)])):e.staticPart=[].concat((0,o.Z)(e.staticPart),(0,o.Z)(""!==t?[t]:[])),e}),{staticPart:[n.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,o=(e.params,e.path,(0,i.Z)(e,["className","children","params","path"])),s=this.calculateLocation(),c=s.dynamic,u=s.staticPart;return d().createElement(O.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",i=g()((0,a.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:d().createElement("section",(0,n.Z)({},o,c,{"page-type":u.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(i)}),d().Children.map(r,(function(e){return d().cloneElement(e,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,n.Z)({},o,c,{"page-type":u.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section"))}),r)}[e]}))}}]),m}(p.Component);Z.propTypes={className:y().string,children:y().any.isRequired,params:y().any,path:y().string};const P=(0,h.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(Z)},6455:(e,t,r)=>{r.d(t,{i:()=>p,Z:()=>m});var n=r(2122),i=r(6156),o=r(1253),a=r(2950),s=r.n(a),c=r(5697),u=r.n(c),l=r(4184),f=r.n(l),p={xs:"xs",sm:"sm",md:"md",lg:"lg"},d=function(e){var t=e.size,r=e.isDark,a=e.className,c=(0,o.Z)(e,["size","isDark","className"]),u=f()("ins-c-skeleton","ins-c-skeleton__".concat(t),(0,i.Z)({},"ins-m-dark",r),a);return s().createElement("div",(0,n.Z)({className:u},c)," ")};const m=d;d.propTypes={className:u().string,size:u().oneOf(Object.values(p)),isDark:u().bool},d.defaultProps={size:p.md,isDark:!1}},8873:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(2122),i=r(6156),o=r(1253),a=r(2950),s=r.n(a),c=r(5697),u=r.n(c),l=r(4184),f=r.n(l),p=function(e){var t=e.centered,r=e.className,a=(0,o.Z)(e,["centered","className"]),c=f()("ins-c-spinner",(0,i.Z)({},"ins-m-center",t),r);return s().createElement("div",(0,n.Z)({role:"status",className:c},a),s().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};p.propTypes={centered:u().bool,className:u().string};const d=p}}]);
//# sourceMappingURL=../sourcemaps/rhcsVendor.0c71afa918e51443de42.js.map
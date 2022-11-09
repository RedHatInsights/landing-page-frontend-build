(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[847],{8187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(885),a=n(2950),o=n.n(a),i=n(334),c=n(7336),s=n(3666),u=n(3069),l=n(4214),m=(0,a.lazy)((function(){return Promise.all([n.e(573),n.e(141)]).then(n.bind(n,7141))})),f=(0,a.lazy)((function(){return n.e(682).then(n.bind(n,682))})),d=(0,a.lazy)((function(){return n.e(118).then(n.bind(n,5118))})),p={landing:"/",maintenance:"/maintenance"},g=(0,a.createContext)();const y=function(){var e=(0,a.useState)(),t=(0,r.Z)(e,2),n=t[0],y=t[1];return(0,a.useEffect)((function(){(0,c.JH)().register({contentStore:l.ZP}),insights.chrome.init(),insights.chrome.identifyApp("landing"),window.insights.chrome.auth.getUser().then((function(e){return e&&y(e.identity.user.is_org_admin)}))}),[]),o().createElement(u.Z,{locale:"en"},o().createElement(g.Provider,{value:{isOrgAdmin:n}},o().createElement(a.Suspense,{fallback:o().createElement(s.Bullseye,null,o().createElement(s.Spinner,{size:"xl"}))},o().createElement(i.Switch,null,o().createElement(i.Route,{exact:!0,path:p.landing,component:m}),o().createElement(i.Route,{exact:!0,path:p.landingBeta,component:m}),o().createElement(i.Route,{exact:!0,path:p.maintenance,component:f}),o().createElement(i.Route,{path:"*",component:d})))))}},3142:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(2950),a=n.n(r),o=n(334),i=n(557),c=n(2941),s=n(319),u=n(8187),l=n(5697),m=n.n(l),f=window.location.pathname.split("/");f.shift();var d=function(e){var t=e.logger;return a().createElement(i.Provider,{store:(0,s.S)(t).getStore()},a().createElement(a().Fragment,null,a().createElement(o.BrowserRouter,{basename:"/".concat("beta"===f[0]?"beta/":"")},a().createElement(u.Z,null)),a().createElement(c.ZP,null)))};d.propTypes={logger:m().func};const p=d},9086:(e,t,n)=>{"use strict";n.d(t,{Uy:()=>r,gh:()=>a,Qz:()=>o});var r="LOAD_DATA",a="REMOVE_ESTATE_TILE",o="REMOVE_RECOMMENDATION_TILE"},4214:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var r,a=n(5987),o=n(4942),i=n(9036),c=n(9086),s=["items"],u=["items"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){var n=e.items,r=void 0===n?[]:n;return m(m({},(0,a.Z)(e,u)),{},{items:r.filter((function(e){return e.id!==t}))})}const d=(0,i.Gg)((r={},(0,o.Z)(r,c.Uy,(function(e,t){var n=t.payload,r=n.estate,a=n.recommendations,o=n.configTryLearn;return m(m({},e),{},{estate:r,recommendations:a,configTryLearn:o})})),(0,o.Z)(r,c.gh,(function(e,t){var n=t.payload;return m(m({},e),{},{estate:e.estate.map((function(e){var t=e.items;return m(m({},(0,a.Z)(e,s)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,o.Z)(r,c.Qz,(function(e,t){var n=t.payload,r=n.tileId,a=n.category;return m(m({},e),{},{recommendations:m(m({},e.recommendations),{},(0,o.Z)({},a,f(e.recommendations[a],r)))})})),r),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]})},319:(e,t,n)=>{"use strict";n.d(t,{S:()=>m});var r,a,o=n(2982),i=n(4879),c=n(7336),s=n(4885),u=n(3215),l=n(5068);function m(){r=new i.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(a=(0,c.JH)({},[r.getMiddleware(),l.ZP,(0,s.ZP)()].concat((0,o.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:u.ee}),a}},5467:()=>{},1754:()=>{},4946:()=>{},598:()=>{},108:()=>{},187:()=>{},3398:()=>{},6928:()=>{},6822:()=>{},9854:()=>{},4181:()=>{},1177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/847.c6f87ad1d410678cb36b999526800104.js.map
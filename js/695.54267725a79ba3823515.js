(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[695],{1824:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r,i=n(4738),a=n(2950),o=n.n(a),c=n(7194),u=n(7336),s=n(8270),l=n(3103),f=n(1253),m=n(6156),d=n(8546),p=n(9086),g=["items"],y=["items"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O=(0,d.Gg)((r={},(0,m.Z)(r,p.Uy,(function(e,t){var n=t.payload,r=n.estate,i=n.recommendations,a=n.configTryLearn;return E(E({},e),{},{estate:r,recommendations:i,configTryLearn:a})})),(0,m.Z)(r,p.gh,(function(e,t){var n=t.payload;return E(E({},e),{},{estate:e.estate.map((function(e){var t=e.items;return E(E({},(0,f.Z)(e,g)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,m.Z)(r,p.Qz,(function(e,t){var n=t.payload,r=n.tileId,i=n.category;return E(E({},e),{},{recommendations:e.recommendations.map((function(e){return e.id===i?function(e,t){var n=e.items,r=void 0===n?[]:n;return E(E({},(0,f.Z)(e,y)),{},{items:r.filter((function(e){return e.id!==t}))})}(e,r):e}))})})),r),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]});var b=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(345)]).then(n.bind(n,1345))})),v=(0,a.lazy)((function(){return Promise.all([n.e(224),n.e(682)]).then(n.bind(n,682))})),w=(0,a.lazy)((function(){return Promise.all([n.e(594),n.e(118)]).then(n.bind(n,5118))})),P={landing:"/",maintenance:"/maintenance"},Z=(0,a.createContext)();const j=function(){var e=(0,a.useState)(),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,a.useEffect)((function(){(0,u.JH)().register({contentStore:O}),insights.chrome.init(),insights.chrome.identifyApp("landing"),window.insights.chrome.auth.getUser().then((function(e){return e&&r(e.identity.user.is_org_admin)}))}),[]),o().createElement(l.Z,{locale:"en"},o().createElement(Z.Provider,{value:{isOrgAdmin:n}},o().createElement(a.Suspense,{fallback:o().createElement(s.Bullseye,null,o().createElement(s.Spinner,{size:"xl"}))},o().createElement(c.Switch,null,o().createElement(c.Route,{exact:!0,path:P.landing,component:b}),o().createElement(c.Route,{exact:!0,path:P.landingBeta,component:b}),o().createElement(c.Route,{exact:!0,path:P.maintenance,component:v}),o().createElement(c.Route,{path:"*",component:w})))))}},9086:(e,t,n)=>{"use strict";n.d(t,{Uy:()=>r,gh:()=>i,Qz:()=>a});var r="LOAD_DATA",i="REMOVE_ESTATE_TILE",a="REMOVE_RECOMMENDATION_TILE"},319:(e,t,n)=>{"use strict";n.d(t,{S:()=>f});var r,i,a=n(8927),o=n(4879),c=n(7336),u=n(4885),s=n(3215),l=n(5068);function f(){r=new o.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(i=(0,c.JH)({},[r.getMiddleware(),l.ZP,(0,u.ZP)()].concat((0,a.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:s.ee}),i}}}]);
//# sourceMappingURL=../sourcemaps/695.83297391a4073df9c824.js.map
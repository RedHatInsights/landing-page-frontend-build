(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[687],{12407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r,i=n(34699),a=n(92950),o=n.n(a),c=(n(77838),n(47194)),u=n(67336),s=n(74828),l=n(84115),f=n(81253),m=n(96156),d=n(18546),p=n(44896);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=(0,d.Gg)((r={},(0,m.Z)(r,p.Uy,(function(e,t){var n=t.payload,r=n.estate,i=n.recommendations,a=n.configTryLearn;return y(y({},e),{},{estate:r,recommendations:i,configTryLearn:a})})),(0,m.Z)(r,p.gh,(function(e,t){var n=t.payload;return y(y({},e),{},{estate:e.estate.map((function(e){var t=e.items;return y(y({},(0,f.Z)(e,["items"])),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,m.Z)(r,p.Qz,(function(e,t){var n=t.payload,r=n.tileId,i=n.category;return y(y({},e),{},{recommendations:e.recommendations.map((function(e){return e.id===i?function(e,t){var n=e.items,r=void 0===n?[]:n;return y(y({},(0,f.Z)(e,["items"])),{},{items:r.filter((function(e){return e.id!==t}))})}(e,r):e}))})})),r),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]});n(71247);var E=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(114),n.e(79),n.e(16)]).then(n.bind(n,46016))})),O=(0,a.lazy)((function(){return Promise.all([n.e(254),n.e(376)]).then(n.bind(n,3376))})),b=(0,a.lazy)((function(){return Promise.all([n.e(554),n.e(867)]).then(n.bind(n,62867))})),v={landing:"/",maintenance:"/maintenance"},w=(0,a.createContext)();const P=function(){var e=(0,a.useState)(),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,a.useEffect)((function(){(0,u.JH)().register({contentStore:h}),insights.chrome.init(),insights.chrome.identifyApp("landing"),window.insights.chrome.auth.getUser().then((function(e){return e&&r(e.identity.user.is_org_admin)}))}),[]),o().createElement(l.Z,{locale:"en"},o().createElement(w.Provider,{value:{isOrgAdmin:n}},o().createElement(a.Suspense,{fallback:o().createElement(s.Bullseye,null,o().createElement(s.Spinner,{size:"xl"}))},o().createElement(c.Switch,null,o().createElement(c.Route,{exact:!0,path:v.landing,component:E}),o().createElement(c.Route,{exact:!0,path:v.landingBeta,component:E}),o().createElement(c.Route,{exact:!0,path:v.maintenance,component:O}),o().createElement(c.Route,{path:"*",component:b})))))}},44896:(e,t,n)=>{"use strict";n.d(t,{Uy:()=>r,gh:()=>i,Qz:()=>a});var r="LOAD_DATA",i="REMOVE_ESTATE_TILE",a="REMOVE_RECOMMENDATION_TILE"},74719:(e,t,n)=>{"use strict";n.d(t,{S:()=>f});var r,i,a=n(87329),o=n(34879),c=n(67336),u=n(84885),s=n(83215),l=n(5068);function f(){r=new o.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(i=(0,c.JH)({},[r.getMiddleware(),l.ZP,(0,u.ZP)()].concat((0,a.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:s.ee}),i}}}]);
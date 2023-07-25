"use strict";(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[142],{8187:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(885),o=n(2950),a=n.n(o),i=n(9881),c=n(7336),l=n(5140),u=n(3669),s=n(4214),f=(0,o.lazy)((function(){return Promise.all([n.e(960),n.e(199)]).then(n.bind(n,7199))})),m=(0,o.lazy)((function(){return n.e(63).then(n.bind(n,7063))})),d=(0,o.lazy)((function(){return n.e(270).then(n.bind(n,1270))})),p=(0,o.createContext)();const g=function(){var e,t=(0,o.useState)(),n=(0,r.Z)(t,2),g=n[0],y=n[1],E=(0,l.Z)();return null==E||null===(e=E.updateDocumentTitle)||void 0===e||e.call(E,"Hybrid Cloud Console Home",!1),(0,o.useEffect)((function(){(0,c.JH)().register({contentStore:s.ZP}),E.auth.getUser().then((function(e){return e&&y(e.identity.user.is_org_admin)}))}),[]),a().createElement(p.Provider,{value:{isOrgAdmin:g}},a().createElement(o.Suspense,{fallback:a().createElement(u.Bullseye,null,a().createElement(u.Spinner,{size:"xl"}))},a().createElement(i.Routes,null,a().createElement(i.Route,{path:"/",element:a().createElement(f,null)}),a().createElement(i.Route,{path:"/maintenance",element:a().createElement(m,null)}),a().createElement(i.Route,{path:"*",element:a().createElement(d,null)}))))}},3142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(2950),o=n.n(r),a=n(8216),i=n(1344),c=n(319),l=n(8187),u=n(5697),s=n.n(u);window.location.pathname.split("/").shift();var f=function(e){var t=e.logger;return o().createElement(a.zt,{store:(0,c.S)(t).getStore()},o().createElement(o().Fragment,null,o().createElement(l.Z,null),o().createElement(i.ZP,null)))};f.propTypes={logger:s().func};const m=f},9086:(e,t,n)=>{n.d(t,{Qz:()=>a,Uy:()=>r,gh:()=>o});var r="LOAD_DATA",o="REMOVE_ESTATE_TILE",a="REMOVE_RECOMMENDATION_TILE"},4214:(e,t,n)=>{n.d(t,{ZP:()=>d});var r,o=n(5987),a=n(4572),i=n(9036),c=n(9086),l=["items"],u=["items"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){var n=e.items,r=void 0===n?[]:n;return f(f({},(0,o.Z)(e,u)),{},{items:r.filter((function(e){return e.id!==t}))})}const d=(0,i.Gg)((r={},(0,a.Z)(r,c.Uy,(function(e,t){var n=t.payload,r=n.estate,o=n.recommendations,a=n.configTryLearn;return f(f({},e),{},{estate:r,recommendations:o,configTryLearn:a})})),(0,a.Z)(r,c.gh,(function(e,t){var n=t.payload;return f(f({},e),{},{estate:e.estate.map((function(e){var t=e.items;return f(f({},(0,o.Z)(e,l)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,a.Z)(r,c.Qz,(function(e,t){var n=t.payload,r=n.tileId,o=n.category;return f(f({},e),{},{recommendations:f(f({},e.recommendations),{},(0,a.Z)({},o,m(e.recommendations[o],r)))})})),r),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]})},319:(e,t,n)=>{n.d(t,{S:()=>m});var r,o,a=n(2982),i=n(4879),c=n(7336),l=n(4885),u=n(3215),s=n(4157),f=n.n(s);function m(){r=new i.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,c.JH)({},[r.getMiddleware(),f(),(0,l.ZP)()].concat((0,a.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:u.ee}),o}}}]);
//# sourceMappingURL=../sourcemaps/142.d7efdc743aebc6db086a4c309f5d4ffb.js.map
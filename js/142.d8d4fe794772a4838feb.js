"use strict";(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[142],{8187:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(885),a=n(2950),o=n.n(a),c=n(9881),l=n(7336),i=n(5140),u=n(3669),s=n(6174),m=n(4214),f=(0,a.lazy)((function(){return Promise.all([n.e(882),n.e(716)]).then(n.bind(n,1716))})),d=(0,a.lazy)((function(){return n.e(63).then(n.bind(n,7063))})),p=(0,a.lazy)((function(){return n.e(270).then(n.bind(n,1270))})),g=(0,a.createContext)();const y=function(){var e,t=(0,a.useState)(),n=(0,r.Z)(t,2),y=n[0],E=n[1],O=(0,i.Z)();return null==O||null===(e=O.updateDocumentTitle)||void 0===e||e.call(O,"Hybrid Cloud Console Home",!1),(0,a.useEffect)((function(){(0,l.JH)().register({contentStore:m.ZP}),O.auth.getUser().then((function(e){return e&&E(e.identity.user.is_org_admin)}))}),[]),o().createElement(s.Z,{locale:"en"},o().createElement(g.Provider,{value:{isOrgAdmin:y}},o().createElement(a.Suspense,{fallback:o().createElement(u.Bullseye,null,o().createElement(u.Spinner,{size:"xl"}))},o().createElement(c.Routes,null,o().createElement(c.Route,{path:"/",element:o().createElement(f,null)}),o().createElement(c.Route,{path:"/maintenance",element:o().createElement(d,null)}),o().createElement(c.Route,{path:"*",element:o().createElement(p,null)})))))}},3142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(2950),a=n.n(r),o=n(8216),c=n(1344),l=n(319),i=n(8187),u=n(5697),s=n.n(u);window.location.pathname.split("/").shift();var m=function(e){var t=e.logger;return a().createElement(o.zt,{store:(0,l.S)(t).getStore()},a().createElement(a().Fragment,null,a().createElement(i.Z,null),a().createElement(c.ZP,null)))};m.propTypes={logger:s().func};const f=m},9086:(e,t,n)=>{n.d(t,{Qz:()=>o,Uy:()=>r,gh:()=>a});var r="LOAD_DATA",a="REMOVE_ESTATE_TILE",o="REMOVE_RECOMMENDATION_TILE"},4214:(e,t,n)=>{n.d(t,{ZP:()=>d});var r,a=n(5987),o=n(4572),c=n(9036),l=n(9086),i=["items"],u=["items"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){var n=e.items,r=void 0===n?[]:n;return m(m({},(0,a.Z)(e,u)),{},{items:r.filter((function(e){return e.id!==t}))})}const d=(0,c.Gg)((r={},(0,o.Z)(r,l.Uy,(function(e,t){var n=t.payload,r=n.estate,a=n.recommendations,o=n.configTryLearn;return m(m({},e),{},{estate:r,recommendations:a,configTryLearn:o})})),(0,o.Z)(r,l.gh,(function(e,t){var n=t.payload;return m(m({},e),{},{estate:e.estate.map((function(e){var t=e.items;return m(m({},(0,a.Z)(e,i)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,o.Z)(r,l.Qz,(function(e,t){var n=t.payload,r=n.tileId,a=n.category;return m(m({},e),{},{recommendations:m(m({},e.recommendations),{},(0,o.Z)({},a,f(e.recommendations[a],r)))})})),r),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]})},319:(e,t,n)=>{n.d(t,{S:()=>f});var r,a,o=n(2982),c=n(4879),l=n(7336),i=n(4885),u=n(3215),s=n(4157),m=n.n(s);function f(){r=new c.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(a=(0,l.JH)({},[r.getMiddleware(),m(),(0,i.ZP)()].concat((0,o.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:u.ee}),a}}}]);
//# sourceMappingURL=../sourcemaps/142.4e3f10b0becdaf8403de9231cbb03948.js.map
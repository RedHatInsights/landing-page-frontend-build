(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[891],{6803:(e,t,n)=>{"use strict";n.r(t);var r,a,o=n(2950),i=n.n(o),c=n(2181),l=n.n(c),u=n(334),s=n(557),m=n(9601),f=n(2982),d=n(4879),p=n(7336),g=n(4885),y=n(3215),E=n(5068);function h(){r=new d.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(a=(0,p.JH)({},[r.getMiddleware(),E.ZP,(0,g.ZP)()].concat((0,f.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:y.ee}),a}var b,v=n(885),O=n(5040),w=n(9558),P=n(5987),Z=n(4942),j=n(9036),_=n(9086),T=["items"],S=["items"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,Z.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t){var n=e.items,r=void 0===n?[]:n;return R(R({},(0,P.Z)(e,S)),{},{items:r.filter((function(e){return e.id!==t}))})}const k=(0,j.Gg)((b={},(0,Z.Z)(b,_.Uy,(function(e,t){var n=t.payload,r=n.estate,a=n.recommendations,o=n.configTryLearn;return R(R({},e),{},{estate:r,recommendations:a,configTryLearn:o})})),(0,Z.Z)(b,_.gh,(function(e,t){var n=t.payload;return R(R({},e),{},{estate:e.estate.map((function(e){var t=e.items;return R(R({},(0,P.Z)(e,T)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,Z.Z)(b,_.Qz,(function(e,t){var n=t.payload,r=n.tileId,a=n.category;return R(R({},e),{},{recommendations:R(R({},e.recommendations),{},(0,Z.Z)({},a,D(e.recommendations[a],r)))})})),b),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]});var z=(0,o.lazy)((function(){return Promise.all([n.e(681),n.e(243)]).then(n.bind(n,3455))})),L=(0,o.lazy)((function(){return n.e(682).then(n.bind(n,682))})),x=(0,o.lazy)((function(){return n.e(118).then(n.bind(n,5118))})),I={landing:"/",maintenance:"/maintenance"},M=(0,o.createContext)();const B=function(){var e=(0,o.useState)(),t=(0,v.Z)(e,2),n=t[0],r=t[1];return(0,o.useEffect)((function(){(0,p.JH)().register({contentStore:k}),insights.chrome.init(),insights.chrome.identifyApp("landing"),window.insights.chrome.auth.getUser().then((function(e){return e&&r(e.identity.user.is_org_admin)}))}),[]),i().createElement(w.Z,{locale:"en"},i().createElement(M.Provider,{value:{isOrgAdmin:n}},i().createElement(o.Suspense,{fallback:i().createElement(O.Bullseye,null,i().createElement(O.Spinner,{size:"xl"}))},i().createElement(u.Switch,null,i().createElement(u.Route,{exact:!0,path:I.landing,component:z}),i().createElement(u.Route,{exact:!0,path:I.landingBeta,component:z}),i().createElement(u.Route,{exact:!0,path:I.maintenance,component:L}),i().createElement(u.Route,{path:"*",component:x})))))};var C=n(5697),U=n.n(C),H=window.location.pathname.split("/");H.shift();var J=function(e){var t=e.logger;return i().createElement(s.Provider,{store:h(t).getStore()},i().createElement(i().Fragment,null,i().createElement(u.BrowserRouter,{basename:"/".concat("beta"===H[0]?"beta/":"")},i().createElement(B,null)),i().createElement(m.ZP,null)))};J.propTypes={logger:U().func};const N=J;var Q=document.getElementById("root");l().render(i().createElement(N,null),Q)},9086:(e,t,n)=>{"use strict";n.d(t,{Uy:()=>r,gh:()=>a,Qz:()=>o});var r="LOAD_DATA",a="REMOVE_ESTATE_TILE",o="REMOVE_RECOMMENDATION_TILE"},5467:()=>{},1754:()=>{},4946:()=>{},598:()=>{},108:()=>{},187:()=>{},3398:()=>{},6928:()=>{},6822:()=>{},9854:()=>{},4181:()=>{},1177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/891.52f4f785f283dec44daf76eb4b7bc5f5.js.map
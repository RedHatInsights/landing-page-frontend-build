(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[127],{1492:(e,t,n)=>{"use strict";n.r(t);var r,a,o=n(2950),i=n.n(o),c=n(2181),l=n.n(c),u=n(334),s=n(557),m=n(2941),f=n(2982),p=n(4879),d=n(7336),g=n(4885),E=n(3215),y=n(5068);function h(){r=new p.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(a=(0,d.JH)({},[r.getMiddleware(),y.ZP,(0,g.ZP)()].concat((0,f.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:E.ee}),a}var b,O=n(885),v=n(3666),w=n(3069),P=n(5987),Z=n(4942),j=n(9036),_=["items"],T=["items"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,Z.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t){var n=e.items,r=void 0===n?[]:n;return A(A({},(0,P.Z)(e,T)),{},{items:r.filter((function(e){return e.id!==t}))})}const D=(0,j.Gg)((b={},(0,Z.Z)(b,"LOAD_DATA",(function(e,t){var n=t.payload,r=n.estate,a=n.recommendations,o=n.configTryLearn;return A(A({},e),{},{estate:r,recommendations:a,configTryLearn:o})})),(0,Z.Z)(b,"REMOVE_ESTATE_TILE",(function(e,t){var n=t.payload;return A(A({},e),{},{estate:e.estate.map((function(e){var t=e.items;return A(A({},(0,P.Z)(e,_)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,Z.Z)(b,"REMOVE_RECOMMENDATION_TILE",(function(e,t){var n=t.payload,r=n.tileId,a=n.category;return A(A({},e),{},{recommendations:A(A({},e.recommendations),{},(0,Z.Z)({},a,R(e.recommendations[a],r)))})})),b),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]});var k=(0,o.lazy)((function(){return Promise.all([n.e(573),n.e(141)]).then(n.bind(n,7141))})),L=(0,o.lazy)((function(){return n.e(682).then(n.bind(n,682))})),x=(0,o.lazy)((function(){return n.e(118).then(n.bind(n,5118))})),I={landing:"/",maintenance:"/maintenance"},M=(0,o.createContext)();const z=function(){var e=(0,o.useState)(),t=(0,O.Z)(e,2),n=t[0],r=t[1];return(0,o.useEffect)((function(){(0,d.JH)().register({contentStore:D}),insights.chrome.init(),insights.chrome.identifyApp("landing"),window.insights.chrome.auth.getUser().then((function(e){return e&&r(e.identity.user.is_org_admin)}))}),[]),i().createElement(w.Z,{locale:"en"},i().createElement(M.Provider,{value:{isOrgAdmin:n}},i().createElement(o.Suspense,{fallback:i().createElement(v.Bullseye,null,i().createElement(v.Spinner,{size:"xl"}))},i().createElement(u.Switch,null,i().createElement(u.Route,{exact:!0,path:I.landing,component:k}),i().createElement(u.Route,{exact:!0,path:I.landingBeta,component:k}),i().createElement(u.Route,{exact:!0,path:I.maintenance,component:L}),i().createElement(u.Route,{path:"*",component:x})))))};var B=n(5697),C=n.n(B),H=window.location.pathname.split("/");H.shift();var J=function(e){var t=e.logger;return i().createElement(s.Provider,{store:h(t).getStore()},i().createElement(i().Fragment,null,i().createElement(u.BrowserRouter,{basename:"/".concat("beta"===H[0]?"beta/":"")},i().createElement(z,null)),i().createElement(m.ZP,null)))};J.propTypes={logger:C().func};const N=J;var V=document.getElementById("root");l().render(i().createElement(N,null),V)},5467:()=>{},1754:()=>{},4946:()=>{},598:()=>{},108:()=>{},187:()=>{},3398:()=>{},6928:()=>{},6822:()=>{},9854:()=>{},4181:()=>{},1177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/127.08e161df700ed63bf4a68eca25c8e8c4.js.map
"use strict";(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[492],{1492:(e,t,n)=>{n.r(t);var r,o,a=n(2950),c=n.n(a),l=n(2181),i=n.n(l),u=n(8216),s=n(1344),m=n(2982),f=n(4879),d=n(7336),p=n(4885),g=n(3215),E=n(4157),y=n.n(E);function O(){r=new f.Z;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(o=(0,d.JH)({},[r.getMiddleware(),y(),(0,p.ZP)()].concat((0,m.Z)(t.filter((function(e){return"function"==typeof e})))))).register({notifications:g.ee}),o}var v,b=n(885),h=n(9881),w=n(5140),Z=n(3669),P=n(5987),j=n(4572),T=n(9036),_=["items"],D=["items"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t){var n=e.items,r=void 0===n?[]:n;return A(A({},(0,P.Z)(e,D)),{},{items:r.filter((function(e){return e.id!==t}))})}const k=(0,T.Gg)((v={},(0,j.Z)(v,"LOAD_DATA",(function(e,t){var n=t.payload,r=n.estate,o=n.recommendations,a=n.configTryLearn;return A(A({},e),{},{estate:r,recommendations:o,configTryLearn:a})})),(0,j.Z)(v,"REMOVE_ESTATE_TILE",(function(e,t){var n=t.payload;return A(A({},e),{},{estate:e.estate.map((function(e){var t=e.items;return A(A({},(0,P.Z)(e,_)),{},{items:t.filter((function(e){return e.id!==n}))})}))})})),(0,j.Z)(v,"REMOVE_RECOMMENDATION_TILE",(function(e,t){var n=t.payload,r=n.tileId,o=n.category;return A(A({},e),{},{recommendations:A(A({},e.recommendations),{},(0,j.Z)({},o,R(e.recommendations[o],r)))})})),v),{loaded:!1,estate:[],recommendations:[],configTryLearn:[]});var C=(0,a.lazy)((function(){return Promise.all([n.e(960),n.e(199)]).then(n.bind(n,7199))})),L=(0,a.lazy)((function(){return n.e(63).then(n.bind(n,7063))})),z=(0,a.lazy)((function(){return n.e(270).then(n.bind(n,1270))})),I=(0,a.createContext)();const M=function(){var e,t=(0,a.useState)(),n=(0,b.Z)(t,2),r=n[0],o=n[1],l=(0,w.Z)();return null==l||null===(e=l.updateDocumentTitle)||void 0===e||e.call(l,"Hybrid Cloud Console Home",!1),(0,a.useEffect)((function(){(0,d.JH)().register({contentStore:k}),l.auth.getUser().then((function(e){return e&&o(e.identity.user.is_org_admin)}))}),[]),c().createElement(I.Provider,{value:{isOrgAdmin:r}},c().createElement(a.Suspense,{fallback:c().createElement(Z.Bullseye,null,c().createElement(Z.Spinner,{size:"xl"}))},c().createElement(h.Routes,null,c().createElement(h.Route,{path:"/",element:c().createElement(C,null)}),c().createElement(h.Route,{path:"/maintenance",element:c().createElement(L,null)}),c().createElement(h.Route,{path:"*",element:c().createElement(z,null)}))))};var H=n(5697),x=n.n(H);window.location.pathname.split("/").shift();var B=function(e){var t=e.logger;return c().createElement(u.zt,{store:O(t).getStore()},c().createElement(c().Fragment,null,c().createElement(M,null),c().createElement(s.ZP,null)))};B.propTypes={logger:x().func};const J=B;var N=document.getElementById("root");i().render(c().createElement(J,null),N)}}]);
//# sourceMappingURL=../sourcemaps/492.a9ae346af4472bde16a8c6876decafc7.js.map
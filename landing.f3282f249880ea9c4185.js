var landing;(()=>{"use strict";var e,r,t,n,a,o,i,l,d,u,s,f,c,h,p,m,v,g,y,b={4070:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(77),t.e(55),t.e(950),t.e(181),t.e(365),t.e(142)]).then((()=>()=>t(3142)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=b,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>"js/"+e+"."+P.h()+".js",P.miniCssF=e=>"css/"+e+"."+{55:"89d163199fd2cea68e60",63:"188946b44977226643b4",270:"b337247b71cc4728843a",716:"f6f562b494fb180995cf"}[e]+".css",P.h=()=>"f3282f249880ea9c4185",P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="landing-page-frontend:",P.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var o=P.S[t],i="landing-page-frontend",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},d=[];return"default"===t&&(l("@patternfly/react-core","4.276.6",(()=>Promise.all([P.e(116),P.e(475),P.e(950),P.e(181),P.e(933)]).then((()=>()=>P(3475))))),l("@patternfly/react-icons","4.93.6",(()=>Promise.all([P.e(116),P.e(757),P.e(950),P.e(655)]).then((()=>()=>P(7757))))),l("@redhat-cloud-services/chrome","0.0.5",(()=>Promise.all([P.e(642),P.e(950),P.e(23)]).then((()=>()=>P(642))))),l("@scalprum/react-core","0.2.11",(()=>Promise.all([P.e(77),P.e(185),P.e(950)]).then((()=>()=>P(2185))))),l("react-dom","17.0.2",(()=>Promise.all([P.e(935),P.e(950)]).then((()=>()=>P(3935))))),l("react-router-dom","6.8.0",(()=>Promise.all([P.e(818),P.e(950)]).then((()=>()=>P(9818))))),l("react","17.0.2",(()=>P.e(294).then((()=>()=>P(7294))))),l("redux-promise-middleware","6.1.3",(()=>P.e(68).then((()=>()=>P(5068)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),P.p="/apps/landing/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+d()+")":1===l?"("+d()+" || "+d()+")":2===l?i.pop()+" "+i.pop():a(l))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,d=!0;;l++,i++){var u,s,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(u=r[i]))[0]))return!d||("u"==f?l>n&&!a:""==f!=a);if("u"==s){if(!d||"u"!=f)return!1}else if(d)if(f==s)if(l<=n){if(u!=e[l])return!1}else{if(a?u>e[l]:u<e[l])return!1;u!=e[l]&&(d=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;d=!1,l--}else{if(l<=n||s<f!=a)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",d=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,a,n)),s(e[t][a])},u=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},s=e=>(e.loaded=1,e.get()),c=(f=e=>function(r,t,n,a){var o=P.I(r);return o&&o.then?o.then(e.bind(e,r,P.S[r],t,n,a)):e(r,P.S[r],t,n,a)})(((e,r,t,n,a)=>r&&P.o(r,t)?d(r,0,t,n):a())),h=f(((e,r,t,n,a)=>{var o=r&&P.o(r,t)&&u(r,t,n);return o?s(o):a()})),p={},m={2950:()=>c("default","react",[1,17,0,2],(()=>P.e(294).then((()=>()=>P(7294))))),2181:()=>c("default","react-dom",[1,17,0,2],(()=>P.e(935).then((()=>()=>P(3935))))),3023:()=>c("default","react-router-dom",[,[1,6,0,0],[1,5,0,0],1],(()=>P.e(818).then((()=>()=>P(9818))))),3669:()=>h("default","@patternfly/react-core",[4,4,276,6],(()=>Promise.all([P.e(116),P.e(475),P.e(745)]).then((()=>()=>P(3475))))),4025:()=>c("default","@scalprum/react-core",[0],(()=>P.e(185).then((()=>()=>P(2185))))),4157:()=>h("default","redux-promise-middleware",[1,6,1,3],(()=>P.e(68).then((()=>()=>P(5068))))),6989:()=>h("default","@patternfly/react-icons",[1,4,93,6],(()=>Promise.all([P.e(116),P.e(757)]).then((()=>()=>P(7757))))),9881:()=>c("default","react-router-dom",[1,6,8,0],(()=>P.e(818).then((()=>()=>P(9818))))),5396:()=>c("default","@redhat-cloud-services/chrome",[3,0,0,5],(()=>Promise.all([P.e(642),P.e(23)]).then((()=>()=>P(642)))))},v={23:[3023],181:[2181],365:[3669,4025,4157,6989,9881],716:[5396],950:[2950]},P.f.consumes=(e,r)=>{P.o(v,e)&&v[e].forEach((e=>{if(P.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},n=r=>{delete p[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var a=m[e]();a.then?r.push(p[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},g=e=>new Promise(((r,t)=>{var n=P.miniCssF(e),a=P.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),n(d)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),y={246:0},P.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{55:1,63:1,270:1,716:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={246:0};P.f.j=(r,t)=>{var n=P.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|23|365|950)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=P.p+P.u(r),i=new Error;P.l(o,(t=>{if(P.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,d=0;if(o.some((r=>0!==e[r]))){for(n in i)P.o(i,n)&&(P.m[n]=i[n]);l&&l(P)}for(r&&r(t);d<o.length;d++)a=o[d],P.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=P(4070);landing=S})();
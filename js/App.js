!function(e){function n(n){for(var a,r,c=n[0],l=n[1],s=n[2],p=0,d=[];p<c.length;p++)r=c[p],i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(m&&m(n);d.length;)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var l=t[c];0!==i[l]&&(a=!1)}a&&(o.splice(n--,1),e=r(r.s=t[0]))}return e}var a={},i={1:0},o=[];function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/apps/landing/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var m=l;o.push([270,0]),t()}({248:function(e,n,t){var a=t(249);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},249:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".ins-c-open-card {\n  color: var(--pf-global--link--Color); }\n\n.ins-c-card__link:hover {\n  text-decoration: none; }\n  .ins-c-card__link:hover .ins-c-open-card {\n    color: var(--pf-global--link--Color--hover);\n    text-decoration: underline; }\n",""])},250:function(e,n,t){var a=t(251);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},251:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,'/* stylelint-enable */\n.ins-c-hero {\n  background: url("/apps/chrome/assets/images/fedora-background-left.svg");\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .ins-c-hero h1.pf-c-title {\n    color: white;\n    text-align: center;\n    font-size: 44px;\n    font-size: 2.75rem; }\n  .ins-c-hero h2 {\n    text-align: center;\n    font-size: 18px;\n    font-size: 1.125rem;\n    color: var(--pf-global--Color--200); }\n  @media screen and (min-width: 0) {\n    .ins-c-hero {\n      min-height: 400px;\n      min-height: 25rem; } }\n  @media screen and (min-width: 768px) {\n    .ins-c-hero {\n      min-height: 550px;\n      min-height: 34.375rem; } }\n',""])},252:function(e,n,t){var a=t(253);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},253:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".ins-c-marketing {\n  padding-top: 40px;\n  padding-top: 2.5rem; }\n  .ins-c-marketing .pf-c-card__header,\n  .ins-c-marketing .pf-c-card__body,\n  .ins-c-marketing .ins-c-application-logo,\n  .ins-c-marketing .pf-c-card__footer {\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center; }\n  .ins-c-marketing .pf-c-card {\n    padding: 40px 0px;\n    padding: 2.5rem 0rem; }\n    .ins-c-marketing .pf-c-card img.ins-c-application-info__logo {\n      min-height: 65px;\n      min-height: 4.0625rem; }\n    .ins-c-marketing .pf-c-card .pf-c-card__footer {\n      margin-top: 40px; }\n  .ins-c-marketing .pf-l-split.pf-m-gutter > :not(:last-child) {\n    margin-right: 8px;\n    margin-right: 0.46875rem; }\n  .ins-c-marketing .ins-c-open-card {\n    color: var(--pf-global--link--Color); }\n  .ins-c-marketing .ins-c-card__link:hover {\n    text-decoration: none; }\n    .ins-c-marketing .ins-c-card__link:hover .ins-c-open-card {\n      color: var(--pf-global--link--Color--hover);\n      text-decoration: underline; }\n",""])},254:function(e,n,t){var a=t(255);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},255:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".ins-c-footer__menu {\n  background: white;\n  box-shadow: var(--pf-global--BoxShadow--sm);\n  z-index: 2;\n  padding: 60px;\n  padding: 3.75rem; }\n  .ins-c-footer__menu a {\n    display: block; }\n    .ins-c-footer__menu a + a {\n      margin-top: 15px;\n      margin-top: 0.9375rem; }\n  .ins-c-footer__menu .ins-m-inline {\n    display: inline; }\n",""])},256:function(e,n,t){var a=t(257);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},257:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,":root {\n  --ins-c-redhat-red: #e00; }\n\n#redhat-logo .cls-1 {\n  fill: var(--ins-c-redhat-red); }\n",""])},258:function(e,n,t){var a=t(259);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},259:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,"/* stylelint-enable */\nfooter.ins-c-footer__traditional {\n  padding: 30px 60px;\n  padding: 1.875rem 3.75rem;\n  background-color: var(--pf-c-page__main-section--BackgroundColor); }\n  footer.ins-c-footer__traditional svg {\n    width: 150px;\n    width: 9.375rem; }\n  footer.ins-c-footer__traditional .ins-c-footer__traditional-nav .copyright {\n    color: var(--pf-global--Color--200);\n    margin-right: 30px;\n    margin-right: 1.875rem; }\n  footer.ins-c-footer__traditional .ins-c-footer__traditional-nav * {\n    font-size: var(--pf-global--FontSize--sm); }\n  @media screen and (min-width: 992px) {\n    footer.ins-c-footer__traditional .ins-c-footer__traditional-nav li + li::before {\n      content: '|';\n      color: var(--pf-global--Color--200);\n      margin-right: var(--pf-global--spacer--md); } }\n",""])},260:function(e,n,t){var a=t(261);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},261:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,":root {\n  --ins-global--Color--green: #37912f; }\n\n.ins-c-application-info .ins-m-gray {\n  color: var(--pf-global--Color--200); }\n\n.ins-m-tech-preview {\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n  color: var(--ins-global--Color--green); }\n\n.pf-c-card.ins-c-application-info {\n  height: 100%; }\n  .pf-c-card.ins-c-application-info img.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem; }\n  .pf-c-card.ins-c-application-info svg.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem;\n    width: 56px;\n    width: 3.5rem; }\n\n.pf-c-card .ins-c-navigation {\n  color: var(--pf-global--active-color--100); }\n\n.pf-c-modal-box__body .pf-c-empty-state img.ins-c-application-info__logo {\n  height: 76px;\n  height: 4.75rem; }\n\nsvg.ins-c-icon__active {\n  fill: var(--pf-global--active-color--100); }\n",""])},270:function(e,n,t){"use strict";t.r(n);var a,i=t(1),o=t.n(i),r=t(12),c=t.n(r),l=t(74),s=t(17),m=t(112),p=t.n(m),d=t(28),g=t(116),u=t(117);var f=t(0),h=t.n(f),v=t(47),y=t(56),E=t(81),b=t.n(E),_=t(46),x=t.n(_),w=t(118),k=t.n(w),T=t(119),O=t.n(T),H=t(120),C=t.n(H),M=t(121),N=t.n(M),P=t(82),R=t.n(P),S=t(122),j=t.n(S),I=t(37),A=t.n(I),z=t(98),L=t(44),V=t(79),F=t(64),G=t(78),U=t(35),B=function(){return o.a.createElement(d.PageHeader,null,o.a.createElement(d.PageHeaderTitle,{title:"Manage my Red Hat infrastructure"}))},Z=t(100),D=t(101),J=t(94),K=t(97),Y=t(104),q=t(105),Q=t(95),W=t(96),X=t(102),$=t(103),ee=t(274),ne=t(275),te=(t(248),0===window.location.pathname.indexOf("/beta")),ae=function(e){var n=e.technologies;return o.a.createElement(i.Fragment,null,o.a.createElement(Z.a,{sm:12,md:6,lg:te?3:4,gutter:"md"},n.map(function(e,n){var t=e.icon,a=e.image,i=e.iconProps,r=e.title,c=e.url,l=e.body,s=e.isPreview,m=e.id;return o.a.createElement(D.a,{key:n},o.a.createElement("a",{className:"ins-c-card__link",href:"./".concat(c),"aria-label":"Go to ".concat(r)},o.a.createElement(J.a,{className:"ins-c-application-info","application-id":m},o.a.createElement(K.a,null,o.a.createElement(Y.a,{gutter:"sm"},o.a.createElement(q.a,null,a&&o.a.createElement("img",{className:"ins-c-application-info__logo","aria-hidden":!0,src:a,alt:"".concat(r," logo")}),t&&o.a.createElement(t,b()({className:"ins-c-application-info__logo ins-c-icon__active","aria-hidden":!0,size:"xl",alt:"".concat(r," logo")},i))),o.a.createElement(q.a,null,o.a.createElement(F.a,{headingLevel:"h2",size:"2xl"},r)))),o.a.createElement(Q.a,null,o.a.createElement(Y.a,null,s&&o.a.createElement(q.a,null,o.a.createElement("div",{className:"ins-m-tech-preview"},o.a.createElement(ee.a,{size:"sm"})," Tech Preview")),o.a.createElement(q.a,null,o.a.createElement("span",{className:"ins-m-gray"},l)))),o.a.createElement(W.a,null,o.a.createElement(X.a,{gutter:"sm",className:"ins-c-open-card"},o.a.createElement($.a,null,"Open"),o.a.createElement($.a,null,o.a.createElement(ne.a,{size:"sm"})))))))})))};ae.propTypes={technologies:h.a.arrayOf(h.a.shape({name:h.a.string,icon:h.a.oneOfType([h.a.func,h.a.string]),body:h.a.node,tite:h.a.node,isPreview:h.a.bool}))},ae.defaultProps={technologies:[]};var ie=Object(s.connect)(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{technologies:{activeTechnologies:[]}}).technologies;return{technologies:e&&e.activeTechnologies.filter(function(e){return!e.disabled})}})(ae),oe=t(52),re=(t(250),function(){return o.a.createElement("section",{className:"pf-c-page__main-section ins-c-hero pf-m-fill"},o.a.createElement(oe.a,{className:"pf-l-flex pf-m-column pf-m-align-items-center"},o.a.createElement(F.a,{className:"ins-c-hero__title pf-m-spacer-lg"}," Explore our open, multicloud tools "),o.a.createElement(F.a,{headingLevel:"h2",className:"pf-m-spacer-xl"}," Discover Red Hat ",o.a.createElement("sup",null,"®")," software-as-a-service "),o.a.createElement(U.c,{onClick:function(){return window.insights.chrome.auth.login()}}," Log in to your Red Hat account"),o.a.createElement("a",{href:"https://www.redhat.com/en/customers"}," Not a customer? ")))}),ce=(t(252),function(e){var n=e.technologies;return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,null),o.a.createElement(d.Main,{className:"ins-c-marketing pf-m-no-fill"},o.a.createElement(Z.a,{sm:12,md:6,lg:4,gutter:"md"},n.map(function(e,n){var t=e.marketingImage,a=e.title,i=e.marketingUrl,r=e.marketingText,c=e.id;return o.a.createElement(D.a,{key:n},o.a.createElement("a",{className:"ins-c-card__link",href:i,"aria-label":"Go to ".concat(a)},o.a.createElement(J.a,{className:"ins-c-application-info","application-id":c},o.a.createElement(K.a,null,o.a.createElement(Y.a,{gutter:"sm"},o.a.createElement(q.a,{className:"ins-c-application-logo"},t&&o.a.createElement("img",{className:"ins-c-application-info__logo","aria-hidden":!0,src:t,alt:"".concat(a," logo")})))),o.a.createElement(Q.a,null,o.a.createElement(Y.a,null,o.a.createElement(q.a,null,o.a.createElement("span",{className:"ins-m-gray"},r)))),o.a.createElement(W.a,null,o.a.createElement(X.a,{gutter:"sm",className:"ins-c-open-card"},o.a.createElement($.a,null,"Get Started"),o.a.createElement($.a,null,o.a.createElement(ne.a,{size:"sm"})))))))}))))});ce.propTypes={technologies:h.a.arrayOf(h.a.shape({name:h.a.string,icon:h.a.oneOfType([h.a.func,h.a.string]),body:h.a.node,tite:h.a.node,isPreview:h.a.bool}))},ce.defaultProps={technologies:[]};var le=Object(s.connect)(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{technologies:{activeTechnologies:[]}}).technologies;return{technologies:e&&e.activeTechnologies.filter(function(e){return e.marketing})}})(ce),se=t(99),me=t(85),pe=t(276),de=(t(254),function(){return o.a.createElement("div",{className:"ins-c-footer__menu"},o.a.createElement(Z.a,{sm:12,md:3,gutter:"lg"},o.a.createElement(D.a,null,o.a.createElement(se.a,null,o.a.createElement(me.b,{component:me.a.h2},"Support and resources")),o.a.createElement("a",{href:"https://access.redhat.com/support"},"Get support"),o.a.createElement("a",{href:"https://access.redhat.com/support/customer-service"},"Contact customer service")),o.a.createElement(D.a,null,o.a.createElement(se.a,null,o.a.createElement(me.b,{component:me.a.h2},"About")),o.a.createElement("a",{href:"https://www.redhat.com/en/technologies/management/insights"},"Red Hat Insights"),o.a.createElement("a",{href:"https://www.redhat.com/en/technologies/management/smart-management"},"Red Hat Smart Management"),o.a.createElement("a",{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift"},"Red Hat OpenShift")),o.a.createElement(D.a,null,o.a.createElement(se.a,null,o.a.createElement(me.b,{component:me.a.h2},"Feedback")),o.a.createElement(X.a,{gutter:"md"},o.a.createElement($.a,null,o.a.createElement(pe.a,{size:"xl",className:"ins-c-icon__active"})),o.a.createElement($.a,{isFilled:!0},o.a.createElement("a",{className:"ins-m-inline"},"Tell us about your experience")," using Red Hat Cloud Services software, and how we can improve.")))))}),ge=(t(256),function(){return o.a.createElement("svg",{id:"redhat-logo","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 613 145"},o.a.createElement("defs",null),o.a.createElement("title",null,"RedHat-Logo-A-Color"),o.a.createElement("path",{className:"cls-1",d:"M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"}),o.a.createElement("path",{d:"M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"}),o.a.createElement("path",{d:"M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"}))}),ue=(t(258),function(){return o.a.createElement("footer",{role:"contentinfo",className:"ins-c-footer__traditional pf-l-flex pf-m-column pf-m-row-on-lg pf-m-align-items-center-on-lg"},o.a.createElement(ge,null),o.a.createElement("div",{className:"ins-c-footer__traditional-nav pf-l-flex pf-m-column pf-m-row-on-lg pf-m-flex-1-on-lg pf-m-justify-content-flex-end-on-lg"},o.a.createElement("p",{className:"copyright pf-m-spacer-xl-on-lg"},"Copyright © 2019 Red Hat, Inc."),o.a.createElement("nav",null,o.a.createElement("ul",{className:"pf-l-flex pf-m-column pf-m-row-on-md"},o.a.createElement("li",null,o.a.createElement("a",{className:"nav-link",href:"https://www.redhat.com/en/about/privacy-policy"},"Privacy Policy")),o.a.createElement("li",null,o.a.createElement("a",{className:"nav-link",href:"https://access.redhat.com/help/terms/"},"Terms of Use")),o.a.createElement("li",null,o.a.createElement("a",{className:"nav-link",href:"https://www.redhat.com/en/about/all-policies-guidelines"},"All Policies and Guidelines"))))))}),fe=t(43),he=(t(260),function(e){function n(){var e,t;k()(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=C()(this,(e=N()(n)).call.apply(e,[this].concat(i))),A()(R()(t),"state",{isModalOpen:!1}),A()(R()(t),"handleModalToggle",function(){t.setState({isModalOpen:!1})}),t}return j()(n,e),O()(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.location.search.slice(1).split("&").reduce(function(e,n){return x()({},e,A()({},n.split("=")[0],Object.values(fe.a).find(function(e){return e.entitlement===n.split("=")[1]})))},{});this.setState(x()({},n,{isModalOpen:n&&Object.keys(n).length>0})),window.insights.chrome.auth.getUser().then(function(){e.setState({unauthed:!1})}).catch(function(){e.setState({unauthed:!0})})}},{key:"render",value:function(){var e=this.state,n=e.isModalOpen,t=e.not_entitled,a=e.unauthed;return o.a.createElement(i.Fragment,null,a?o.a.createElement(le,null):o.a.createElement(i.Fragment,null,o.a.createElement(B,null),o.a.createElement(d.Main,null,o.a.createElement(ie,null)),o.a.createElement(de,null)),o.a.createElement(ue,null),t&&o.a.createElement(z.a,{title:"You are not entitled to use this application",isOpen:n,onClose:this.handleModalToggle},o.a.createElement(L.b,null,t.icon&&o.a.createElement(V.a,b()({icon:t.icon,className:"ins-c-icon__active"},t.iconProps,{size:"lg"})),t.image&&o.a.createElement("img",{className:"ins-c-application-info__logo","aria-hidden":!0,src:t.image,alt:"".concat(t.title," logo")}),o.a.createElement(F.a,{headingLevel:"h5",size:"lg"},t.emptyTitle),o.a.createElement(G.a,null,t.emptyText),t.emptyAction&&o.a.createElement(U.c,{variant:"primary",onClick:function(){t.emptyAction.navigate&&(window.location.href=t.emptyAction.navigate)}},t.emptyAction.title),o.a.createElement(U.c,{variant:"link",onClick:this.handleModalToggle},"Close"))))}}]),n}(i.Component));he.propTypes={history:h.a.object,loadTechnologies:h.a.func,location:h.a.shape({search:h.a.string})},he.defaultProps={loadTechnologies:function(){}};var ve=Object(v.e)(he),ye=t(62),Ee=t(63),be=(t(87),{landing:"/"}),_e=function(e){var n=e.loadTechnologies;return Object(i.useEffect)(function(){Object(d.getRegistry)().register({technologies:ye.a}),n(fe.a),insights.chrome.init(),insights.chrome.identifyApp("landing")}),o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:be.landing,component:ve}),o.a.createElement(v.a,{exact:!0,path:be.landingBeta,component:ve}),o.a.createElement(v.a,{path:"*",component:y.a}))};_e.propTypes={history:h.a.object,loadTechnologies:h.a.func},_e.defaultProps={loadTechnologies:function(){}};var xe=Object(v.e)(Object(s.connect)(null,function(e){return{loadTechnologies:function(n){return e(Object(Ee.a)(n))}}})(_e)),we=window.location.pathname.split("/");we.shift(),c.a.render(o.a.createElement(s.Provider,{store:function(){a=new p.a;for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Object(d.getRegistry)({},[a.getMiddleware(),u.a,Object(g.notificationsMiddleware)()].concat(n))}().getStore()},o.a.createElement(l.a,{basename:"/".concat("beta"===we[0]?"beta/":"")},o.a.createElement(xe,null))),document.getElementById("root"))},34:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="TECHNOLOGIES"},43:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var a=t(126),i=t(127),o=t(57),r=t.n(o),c=t(58),l=t.n(c),s=t(59),m=t.n(s),p=t(60),d=t.n(p),g=t(61),u=t.n(g),f=[{entitlement:"insights",marketing:!0,marketingImage:m.a,marketingText:"Proactively identify and remediate threats to security, performance, and stability.",marketingUrl:"https://access.redhat.com/products/red-hat-insights#getstarted",name:"insights",id:"insights",url:"insights/actions",icon:a.a,title:"Red Hat Insights",emptyTitle:"Red Hat Insights is included with every Red Hat Enterprise Linux subscription",emptyText:"Proactively identify and remediate threats to security, performance, availability,         and stability with Red Hat Insights. Activate Red Hat Insights to get started today.",emptyAction:{title:"Activate Red Hat Insights",navigate:"https://www.redhat.com/wapps/eval/index.html?evaluation_id=1036"},body:"Identify and remediate configuration issues in your Red Hat environments."},{entitlement:"smart_management",marketing:!0,marketingImage:u.a,marketingText:"Operate and protect your Red Hat platforms.",marketingUrl:"https://access.redhat.com/products/cloud_management_services_for_red_hat_enterprise_linux/#getstarted",id:"RHEL",url:"rhel/dashboard",image:r.a,emptyTitle:"Learn how to get started with cloud management services for Red Hat Enterprise Linux",emptyText:"Monitor your Red Hat environments to track system compliance, configration,         security, and efficiency. Upgrade to get started today.",emptyAction:{title:"Learn More",navigate:"https://www.redhat.com/en/technologies/management/smart-management"},title:"Cloud Management Services for Red Hat Enterprise Linux",body:"Monitor and manage issues like security and compliance for your Red Hat Enterprise Linux systems."},{id:"Openshift",url:"openshift",entitlement:"openshift",marketing:!0,marketingImage:d.a,marketingText:"Install, register, and manage OpenShift 4 clusters.",marketingUrl:"https://try.openshift.com/",icon:i.a,iconProps:{style:{fill:"#DB242F"}},emptyTitle:"Get Started with Red Hat Openshift",emptyText:"Test drive industry's leading container application platform in your browser,         and see how easy it is to use Kubernetes in your organization today.",emptyAction:{title:"Try it free"},title:"Red Hat OpenShift Cluster Manager",body:"Install, register, and manage OpenShift 4 clusters."},{id:"Hybrid",url:"hybrid/catalog",entitlement:"hybrid_cloud",marketing:!1,disabled:0!==window.location.pathname.indexOf("/beta"),image:l.a,emptyTitle:"Hybrid cloud management services Technology Preview access",emptyText:"The Red Hat hybrid cloud management services Technology Preview is currently         restricted to Red Hat customers.",emptyAction:{title:"Okay"},title:"Hybrid cloud management services",body:"Govern, automate, and manage multi-cloud environments.",isPreview:!0}]},56:function(e,n,t){"use strict";var a=t(1),i=t.n(a),o=t(0),r=t.n(o),c=t(125),l=t(44),s=t(79),m=t(64),p=t(78),d=t(35),g=t(80),u=t(17),f=function(e){window.location.href="./".concat(e)},h=function(e){var n=e.technologies;return i.a.createElement("div",null,i.a.createElement(l.b,{variant:l.a.full},i.a.createElement(s.a,{icon:c.a}),i.a.createElement(m.a,{headingLevel:"h5",size:"lg"},"Page not found"),i.a.createElement(p.a,null,"Looks like you have reached the end of Red Hat Cloud Services."),i.a.createElement(d.c,{variant:"primary",onClick:function(){return f("")}},"Take me home"),i.a.createElement(g.a,null,n&&n.map(function(e,n){return i.a.createElement(d.c,{key:n,variant:"link",onClick:function(){return f(e.url)}},e.title)}))))};h.propTypes={technologies:r.a.arrayOf(r.a.shape({url:r.a.string,title:r.a.string})),history:r.a.shape({push:r.a.func})},h.defaultProps={technologies:[],history:{push:function(){}}},n.a=Object(u.connect)(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{technologies:{activeTechnologies:[]}}).technologies;return{technologies:e&&e.activeTechnologies.filter(function(e){return!e.disabled})}})(h)},57:function(e,n,t){e.exports=t.p+"fonts/hcm.svg"},58:function(e,n,t){e.exports=t.p+"fonts/rhel-cs.svg"},59:function(e,n,t){e.exports=t.p+"fonts/insightsMarketing.svg"},60:function(e,n,t){e.exports=t.p+"fonts/openShiftMarketing.svg"},61:function(e,n,t){e.exports=t.p+"fonts/smartManagementMarketing.svg"},62:function(e,n,t){"use strict";var a=t(37),i=t.n(a),o=t(46),r=t.n(o),c=t(83),l=t(34);n.a=Object(c.applyReducerHash)(i()({},l.a,function(e,n){var t=n.payload;return r()({},e,{activeTechnologies:t})}),{loaded:!0,activeTechnologies:[]})},63:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=t(34),i=function(e){return{type:a.a,payload:e}}},87:function(e,n,t){var a=t(88);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,i);a.locals&&(e.exports=a.locals)},88:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,":root {\n  --ins-global--Color--green: #37912f; }\n\n.ins-c-application-info .ins-m-gray {\n  color: var(--pf-global--Color--200); }\n\n.ins-m-tech-preview {\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n  color: var(--ins-global--Color--green); }\n\n.pf-c-card.ins-c-application-info {\n  height: 100%; }\n  .pf-c-card.ins-c-application-info img.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem; }\n  .pf-c-card.ins-c-application-info svg.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem;\n    width: 56px;\n    width: 3.5rem; }\n\n.pf-c-card .ins-c-navigation {\n  color: var(--pf-global--active-color--100); }\n\n.pf-c-modal-box__body .pf-c-empty-state img.ins-c-application-info__logo {\n  height: 76px;\n  height: 4.75rem; }\n\nsvg.ins-c-icon__active {\n  fill: var(--pf-global--active-color--100); }\n",""])}});
//# sourceMappingURL=../sourcemaps/App.js.map
!function(e){function t(t){for(var i,o,c=t[0],s=t[1],l=t[2],p=0,d=[];p<c.length;p++)o=c[p],a[o]&&d.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={3:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/apps/landing/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([271,0]),n()}({271:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(12),o=n.n(r),c=n(17),s=n(0),l=n.n(s),u=n(56),p=n(63),d=n(43),f=(n(87),function(e){var t=e.loadTechnologies;return Object(i.useEffect)(function(){t(d.a)}),a.a.createElement("section",{"page-type":"",className:"pf-l-page__main-section pf-c-page__main-section"},a.a.createElement(u.a,null))});f.propTypes={history:l.a.object,loadTechnologies:l.a.func},f.defaultProps={loadTechnologies:function(){}};var g=Object(c.connect)(null,function(e){return{loadTechnologies:function(t){return e(Object(p.a)(t))}}})(f),m=n(39),h=n(62);o.a.render(a.a.createElement(c.Provider,{store:Object(m.createStore)(Object(m.combineReducers)({technologies:h.a},{}))},a.a.createElement(g,null)),document.getElementById("root"))},34:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i="TECHNOLOGIES"},43:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var i=n(126),a=n(127),r=n(57),o=n.n(r),c=n(58),s=n.n(c),l=n(59),u=n.n(l),p=n(60),d=n.n(p),f=n(61),g=n.n(f),m=[{entitlement:"insights",marketing:!0,marketingImage:u.a,marketingText:"Proactively identify and remediate threats to security, performance, and stability.",marketingUrl:"https://access.redhat.com/products/red-hat-insights#getstarted",name:"insights",id:"insights",url:"insights/actions",icon:i.a,title:"Red Hat Insights",emptyTitle:"Red Hat Insights is included with every Red Hat Enterprise Linux subscription",emptyText:"Proactively identify and remediate threats to security, performance, availability,         and stability with Red Hat Insights. Activate Red Hat Insights to get started today.",emptyAction:{title:"Activate Red Hat Insights",navigate:"https://www.redhat.com/wapps/eval/index.html?evaluation_id=1036"},body:"Identify and remediate configuration issues in your Red Hat environments."},{entitlement:"smart_management",marketing:!0,marketingImage:g.a,marketingText:"Operate and protect your Red Hat platforms.",marketingUrl:"https://access.redhat.com/products/cloud_management_services_for_red_hat_enterprise_linux/#getstarted",id:"RHEL",url:"rhel/dashboard",image:o.a,emptyTitle:"Learn how to get started with cloud management services for Red Hat Enterprise Linux",emptyText:"Monitor your Red Hat environments to track system compliance, configration,         security, and efficiency. Upgrade to get started today.",emptyAction:{title:"Learn More",navigate:"https://www.redhat.com/en/technologies/management/smart-management"},title:"Cloud Management Services for Red Hat Enterprise Linux",body:"Monitor and manage issues like security and compliance for your Red Hat Enterprise Linux systems."},{id:"Openshift",url:"openshift",entitlement:"openshift",marketing:!0,marketingImage:d.a,marketingText:"Install, register, and manage OpenShift 4 clusters.",marketingUrl:"https://try.openshift.com/",icon:a.a,iconProps:{style:{fill:"#DB242F"}},emptyTitle:"Get Started with Red Hat Openshift",emptyText:"Test drive industry's leading container application platform in your browser,         and see how easy it is to use Kubernetes in your organization today.",emptyAction:{title:"Try it free"},title:"Red Hat OpenShift Cluster Manager",body:"Install, register, and manage OpenShift 4 clusters."},{id:"Hybrid",url:"hybrid/catalog",entitlement:"hybrid_cloud",marketing:!1,disabled:0!==window.location.pathname.indexOf("/beta"),image:s.a,emptyTitle:"Hybrid cloud management services Technology Preview access",emptyText:"The Red Hat hybrid cloud management services Technology Preview is currently         restricted to Red Hat customers.",emptyAction:{title:"Okay"},title:"Hybrid cloud management services",body:"Govern, automate, and manage multi-cloud environments.",isPreview:!0}]},56:function(e,t,n){"use strict";var i=n(1),a=n.n(i),r=n(0),o=n.n(r),c=n(125),s=n(44),l=n(79),u=n(64),p=n(78),d=n(35),f=n(80),g=n(17),m=function(e){window.location.href="./".concat(e)},h=function(e){var t=e.technologies;return a.a.createElement("div",null,a.a.createElement(s.b,{variant:s.a.full},a.a.createElement(l.a,{icon:c.a}),a.a.createElement(u.a,{headingLevel:"h5",size:"lg"},"Page not found"),a.a.createElement(p.a,null,"Looks like you have reached the end of Red Hat Cloud Services."),a.a.createElement(d.c,{variant:"primary",onClick:function(){return m("")}},"Take me home"),a.a.createElement(f.a,null,t&&t.map(function(e,t){return a.a.createElement(d.c,{key:t,variant:"link",onClick:function(){return m(e.url)}},e.title)}))))};h.propTypes={technologies:o.a.arrayOf(o.a.shape({url:o.a.string,title:o.a.string})),history:o.a.shape({push:o.a.func})},h.defaultProps={technologies:[],history:{push:function(){}}},t.a=Object(g.connect)(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{technologies:{activeTechnologies:[]}}).technologies;return{technologies:e&&e.activeTechnologies.filter(function(e){return!e.disabled})}})(h)},57:function(e,t,n){e.exports=n.p+"fonts/hcm.svg"},58:function(e,t,n){e.exports=n.p+"fonts/rhel-cs.svg"},59:function(e,t,n){e.exports=n.p+"fonts/insightsMarketing.svg"},60:function(e,t,n){e.exports=n.p+"fonts/openShiftMarketing.svg"},61:function(e,t,n){e.exports=n.p+"fonts/smartManagementMarketing.svg"},62:function(e,t,n){"use strict";var i=n(37),a=n.n(i),r=n(46),o=n.n(r),c=n(83),s=n(34);t.a=Object(c.applyReducerHash)(a()({},s.a,function(e,t){var n=t.payload;return o()({},e,{activeTechnologies:n})}),{loaded:!0,activeTechnologies:[]})},63:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(34),a=function(e){return{type:i.a,payload:e}}},87:function(e,t,n){var i=n(88);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(5)(i,a);i.locals&&(e.exports=i.locals)},88:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,":root {\n  --ins-global--Color--green: #37912f; }\n\n.ins-c-application-info .ins-m-gray {\n  color: var(--pf-global--Color--200); }\n\n.ins-m-tech-preview {\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n  color: var(--ins-global--Color--green); }\n\n.pf-c-card.ins-c-application-info {\n  height: 100%; }\n  .pf-c-card.ins-c-application-info img.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem; }\n  .pf-c-card.ins-c-application-info svg.ins-c-application-info__logo {\n    height: 56px;\n    height: 3.5rem;\n    width: 56px;\n    width: 3.5rem; }\n\n.pf-c-card .ins-c-navigation {\n  color: var(--pf-global--active-color--100); }\n\n.pf-c-modal-box__body .pf-c-empty-state img.ins-c-application-info__logo {\n  height: 76px;\n  height: 4.75rem; }\n\nsvg.ins-c-icon__active {\n  fill: var(--pf-global--active-color--100); }\n\n.pf-c-modal-box .pf-c-title {\n  white-space: normal; }\n",""])}});
//# sourceMappingURL=../sourcemaps/NotFound.js.map
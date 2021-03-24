(self.webpackChunklanding_page_frontend=self.webpackChunklanding_page_frontend||[]).push([[444],{32286:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var i=n(94015),a=n.n(i),s=n(23645),o=n.n(s)()(a());o.push([t.id,".landing .pf-c-page__main{display:block !important}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,0BACiB,wBAAwB",sourcesContent:[".landing{\n.pf-c-page__main{display:block !important}\n\n}"],sourceRoot:""}]);const r=o},63862:(t,e,n)=>{"use strict";n.d(e,{c:()=>u});var i=n(92950),a=n.n(i);const s=n.p+"fonts/Automation.svg",o=n.p+"fonts/Subscriptions.svg",r=n.p+"fonts/Cost.svg",c=n.p+"fonts/Insights.svg",l=n.p+"fonts/Migrations.svg",p=n.p+"fonts/Openshift.svg",m=n.p+"fonts/SAP.svg";var u=[{entitlement:"insights",marketing:!0,marketingImage:n.p+"fonts/insightsMarketing.svg",marketingText:"Proactively identify and remediate threats to security, performance, and stability.",marketingUrls:{learnMore:"https://www.redhat.com/en/technologies/management/insights"},name:"insights",id:"insights",url:"insights",baseApp:"/dashboard",apps:{dashboard:"/dashboard",patch:"/patch",advisor:"/advisor",drift:"/drift",vulnerability:"/vulnerability",policies:"/policies",compliance:"/compliance"},image:c,title:"Insights",emptyTitle:"Insights is included with every Red Hat Enterprise Linux subscription",emptyText:"Proactively identify and remediate threats to security, performance, availability,         and stability with Insights. Activate Insights to get started today.",emptyID:"insights",emptyAction:{primary:{title:"Get started",navigate:"https://www.redhat.com/wapps/eval/index.html?evaluation_id=1036"},close:{title:"Not now"}},body:"Identify and remediate configuration issues in your Red Hat® environments."},{id:"Openshift",url:"openshift",baseApp:"/",apps:{"cluster manager":"/"},entitlement:"openshift",marketing:!0,marketingImage:n.p+"fonts/openShiftMarketing.svg",marketingText:"Install, register, and manage OpenShift® 4 clusters.",marketingUrls:{learnMore:"https://try.openshift.com"},image:p,emptyTitle:"Get Started with Openshift.",emptyID:"openshift",emptyText:"Test drive industry's leading container application platform in your browser,         and see how easy it is to use Kubernetes in your organization today.",emptyAction:{primary:{title:"Try it free"}},title:"OpenShift Cluster Manager",body:"Install, register, and manage OpenShift® 4 clusters."},{id:"Ansible",entitlement:"ansible",url:"ansible",baseApp:"/automation-analytics",image:s,title:"Ansible Automation Platform",body:"Extend your automation with analytics, content management, and policy and governance.",apps:{"automation analytics":"/automation-analytics","automation hub":"/automation-hub","automation services catalog":"/catalog"},marketing:!0,marketingImage:n.p+"fonts/ansibleMarketing.svg",marketingText:"Extend your automation with analytics, policy and governance, and content management.",marketingUrls:{learnMore:"http://ansible.com/products/automation-platform",tryIt:"https://www.redhat.com/en/technologies/management/ansible/try-it"},emptyTitle:"Ansible Automation Platform services requires a valid subscription",emptyText:"Get analytics and knowledge on your automation, access to certified content, and more with a         Ansible Automation Platform subscription.",emptyID:"ansible",emptyAction:{primary:{title:"Learn more",navigate:"https://www.ansible.com/products/automation-platform"},close:{title:"Not now"}}},{id:"subscriptions",entitlement:"subscriptions",url:"subscriptions",image:o,title:"Subscription Watch",body:"Account-level summaries of your Red Hat subscription utilization",baseApp:"/rhel-sw",apps:{"Red Hat Enterprise Linux":"/rhel-sw",OpenShift:"/openshift-sw"},marketing:!1,emptyTitle:"Subscription Watch",emptyID:"subscription-watch",emptyText:["Subscription Watch enables you to understand your total subscription usage and capacity across your hybrid infrastructure over time.",a().createElement("br",{key:"sw1"}),a().createElement("br",{key:"sw2"}),"If you are interested in trying Subscription Watch, your Red Hat account team can help."],emptyAction:{primary:{title:"Contact us",navigate:"https://access.redhat.com/account-team"},close:{title:"Not now"}}},{id:"sap",url:"insights",baseApp:"/sap",entitlement:"insights",marketing:!1,image:m,apps:{dashboard:"/sap"},title:"Insights for SAP",body:"Leverage Insights to manage, optimize and remediate risks to your SAP landscape."},{id:"Cost Management",url:"cost-management",baseApp:"/",entitlement:"cost_management",marketing:!1,image:r,apps:{"cost management":"/"},emptyTitle:"Cost Management for OpenShift",emptyID:"cost-management",emptyText:"Cost Management provides visibility and analysis for your OpenShift         and cloud costs. To obtain access to Cost Management, become an OpenShift customer.",emptyAction:{primary:{title:"Learn more",navigate:"https://www.redhat.com/en/technologies/cloud-computing/openshift"},close:{title:"Not now"}},title:"Cost Management",body:"Analyze, forecast and optimize your OpenShift cluster costs in hybrid cloud environments."},{id:"migrations",entitlement:"migrations",url:"migrations",image:l,title:"Migration Services",body:"Get recommendations on migrating your applications and infrastructure to Red Hat.",baseApp:"/migration-analytics",apps:{"migration analytics":"/migration-analytics"},marketing:!1,emptyTitle:"Migration Analytics requires a CloudForms subscription.",emptyID:"migration-analytics",emptyText:"Migration Analytics lets you examine workloads in your environment and evaluate         the effort needed to migrate or modernize each. Learn more to request a free CloudForms evaluation subscription",emptyAction:{primary:{title:"Request an evaluation",navigate:"https://access.redhat.com/products/red-hat-cloudforms-migrations/evaluation"},secondary:{title:"Take a tour"},close:{title:"Not now"}}},{id:"settings",entitlement:"settings",url:"settings",disabled:!0,emptyAlertTitle:"You need an account number to access this page"},{id:"user-preferences",entitlement:"user_preferences",url:"user-preferences",disabled:!0,emptyAlertTitle:"You need an account number to access this page"},{id:"internal",entitlement:"internal",url:"internal",disabled:!0,emptyAlertTitle:"You do not have access to this page"}]},58757:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var i=n(96156),a=n(18546),s=n(37303);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const c=(0,a.Gg)((0,i.Z)({},s.rK,(function(t,e){var n=e.payload;return r(r({},t),{},{activeTechnologies:n})})),{loaded:!0,activeTechnologies:[]})},20139:(t,e,n)=>{"use strict";var i=n(93379),a=n.n(i),s=n(32286),o=a()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||t.hot.invalidate){var r=s.default.locals;t.hot.accept(32286,(e=>{s=n(32286),function(t,e,n){if(!t&&e||t&&!e)return!1;var i;for(i in t)if(t[i]!==e[i])return!1;for(i in e)if(!t[i])return!1;return!0}(r,s.default.locals)?(r=s.default.locals,o(s.default)):t.hot.invalidate()}))}t.hot.dispose((function(){o()})),s.default.locals}}]);
//# sourceMappingURL=444.83d8db9621d1a2b0a4cf.js.map
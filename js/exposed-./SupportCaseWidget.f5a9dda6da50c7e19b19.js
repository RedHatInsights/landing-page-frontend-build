(self.webpackChunklanding=self.webpackChunklanding||[]).push([[3623],{5140:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(1942),n=function(){return n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};const l=function(e){var t,a=(0,r.useScalprum)(),l=(null===(t=a.api)||void 0===t?void 0:t.chrome)||{};return l=n(n({},l),{initialized:a.initialized}),"function"==typeof e?e(l):l}},6347:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var r=a(6029),n=a.n(r),l=a(8800),s=a(5697),c=a(5863),i=a(1630),o=a(4576),m=a(7397),u=a(5521),p=a(5995),d=a(9058),h=a(2910),g=a(6026),y=a(1579),f=a(4282),E=a.n(f),v=a(6696),S=a.n(v),b=a(5140),w=a(5353),x=a(8632),k=a(8296);const C=e=>{var{children:t,className:a}=e,n=(0,w.__rest)(e,["children","className"]);return r.createElement("caption",Object.assign({className:(0,k.i)(x.Z.tableCaption,a)},n),t)};C.displayName="Caption",a(3336);const T={circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},N=e=>{var{className:t,width:a,height:n,fontSize:l,shape:s,screenreaderText:c}=e,i=(0,w.__rest)(e,["className","width","height","fontSize","shape","screenreaderText"]);const o=l?Object.values(T).find((e=>e===`pf-m-text-${l}`)):void 0;return r.createElement("div",Object.assign({},i,{className:(0,k.i)("pf-v5-c-skeleton",l&&o,"circle"===s&&T.circle,"square"===s&&T.square,t)},(a||n)&&{style:Object.assign({"--pf-v5-c-skeleton--Width":a||void 0,"--pf-v5-c-skeleton--Height":n||void 0},i.style)}),r.createElement("span",{className:"pf-v5-screen-reader"},c))};function _(e){return Array.isArray(e.columns)}N.displayName="Skeleton";const L=e=>{const{variant:t,rows:a=5,caption:r}=e,l=_(e)?e.columns.length:e.numberOfColumns,c=[...new Array(l)],d=[...new Array(a)].map(((e,t)=>n().createElement(o.Tr,{key:t},c.map(((e,t)=>n().createElement(p.Td,{key:t},n().createElement(N,null)))))));return n().createElement(s.i,{"aria-label":"Loading",variant:t},r&&n().createElement(C,null,r),n().createElement(i.h,null,n().createElement(o.Tr,null,_(e)?e.columns.map(((e,t)=>n().createElement(m.Th,{key:t},e))):c.map(((e,t)=>n().createElement(m.Th,{key:t},n().createElement(N,null)))))),n().createElement(u.p,null,d))};var O=a(5522);const B="Case ID",I="Issue summary",M="Modified by",j="Severity",F="Status",z="1 (Urgent)",A="2 (High)",$="3 (Normal)",q="4 (Low)";var G=a(4674),P=a(9116),W=a(3018),H=a(497),U=a.n(H);const Z=()=>{const[e,t]=n().useState(!1),[a,r]=n().useState(!1),[l,s]=n().useState({severity:[],status:[]}),c=n().useCallback(((e,t,a)=>{if(!t||"string"!=typeof a)return;const r=t.target.checked;s((t=>{const n=t[e]||[];return{...t,[e]:r?[...n,a]:n.filter((e=>e!=e))}}))}),[]),i=(e,t)=>{const a={severity:l.severity.filter((e=>e!==t)),status:l.status.filter((e=>e!==t))};s({severity:"Severity"===e?a[e]:l.severity,status:"Status"===e?a[e]:l.status})},o=e=>{const t={severity:"Severity"===e?[]:l.severity,status:"Status"===e?[]:l.status};s(t)},m=()=>{t(!e)},u=()=>{r(!a)},p=["Closed","Waiting on Customer","Waiting on Red Hat"],d=[A,q,$,z],h=n().createElement(W.SelectList,null,p.map((e=>n().createElement(W.SelectOption,{hasCheckbox:!0,key:e,value:e,isSelected:l.status.includes(e)},e)))),g=n().createElement(W.SelectList,null,d.map((e=>n().createElement(W.SelectOption,{hasCheckbox:!0,key:e,value:e,isSelected:l.severity.includes(e)},e)))),y=n().createElement(n().Fragment,null,n().createElement(G.ToolbarGroup,{variant:"filter-group"},n().createElement(G.ToolbarFilter,{chips:l.severity,deleteChip:(e,t)=>i(e,t),deleteChipGroup:e=>o(e),categoryName:"Severity"},n().createElement(W.Select,{"aria-label":"Severity",role:"menu",toggle:t=>n().createElement(P.MenuToggle,{ref:t,onClick:m,isExpanded:e,style:{width:"140px"}},"Severity"),onSelect:(e,t)=>((e,t)=>{c("severity",e,t)})(e,t),selected:l.severity,isOpen:e,onOpenChange:e=>t(e)},g)),n().createElement(G.ToolbarFilter,{chips:l.status,deleteChip:(e,t)=>i(e,t),deleteChipGroup:e=>o(e),categoryName:"Status"},n().createElement(W.Select,{"aria-label":"Status",role:"menu",toggle:e=>n().createElement(P.MenuToggle,{ref:e,onClick:u,isExpanded:a,style:{width:"140px"}},"Status"),onSelect:(e,t)=>((e,t)=>{c("status",e,t)})(e,t),selected:l.status,isOpen:a,onOpenChange:e=>r(e)},h)))),f=n().createElement(n().Fragment,null,n().createElement(G.ToolbarToggleGroup,{toggleIcon:n().createElement(U(),null),breakpoint:"xl"},y));return n().createElement(G.Toolbar,{id:"toolbar-with-filter",className:"pf-m-toggle-group-container",collapseListedFiltersBreakpoint:"xl"},n().createElement(G.ToolbarContent,null,f))},D="https://access.redhat.com/support/cases/#/case/new/get-support?caseCreate=true",J=()=>{const[e,t]=(0,r.useState)([]),a=(0,b.Z)(),[f,v]=(0,r.useState)(!1),[w,x]=(0,r.useState)({index:0,direction:l.B.asc}),k=[{name:"Case ID",sort:(e,t)=>e.caseNumber.localeCompare(t.caseNumber)},{name:"Issue summary",sort:(e,t)=>e.summary.localeCompare(t.summary)},{name:"Modified by",sort:(e,t)=>e.lastModifiedById.localeCompare(t.lastModifiedById)},{name:"Severity",sort:(e,t)=>e.severity.localeCompare(t.severity)},{name:"Status",sort:(e,t)=>e.status.localeCompare(t.status)}],C=(a,r,n)=>{x({index:r,direction:n});const s=[...e].sort(((e,t)=>{const a=k[r].sort;return n===l.B.asc?a(e,t):a(t,e)}));t([...s])};return(0,r.useEffect)((()=>{v(!0),(async()=>{const e=await a.auth.getToken(),r=await a.auth.getUser(),n={method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({createdBySSOName:`${r?.identity.user?.username}`})};try{const e=await fetch((l=a.getEnvironment(),`https://api.access${"stage"===l||"frhStage"===l?".stage":""}.redhat.com/support/v1/cases/filter`),n),{cases:r}=await e.json();t(r||[]),v(!1)}catch(e){console.error("Unable to fetch support cases",e)}var l})()}),[]),n().createElement(n().Fragment,null,f?n().createElement(L,{rows:3,columns:[B,I,M,j,F]}):0===e.length?n().createElement(h.EmptyState,{variant:h.EmptyStateVariant.lg},n().createElement(h.EmptyStateIcon,{icon:S()}),n().createElement(y.Title,{headingLevel:"h4",size:"lg"},"No open support cases"),n().createElement(h.EmptyStateBody,null,n().createElement(g.Stack,null,n().createElement(g.StackItem,null,"We can't find any active support cases opened by you."))),n().createElement(d.Button,{variant:"link",icon:n().createElement(E(),null),iconPosition:"end",href:D,onClick:()=>{window.open(D,"_blank")}},"Open a support case")):n().createElement(s.i,{"aria-label":"Support case table widget",variant:c.B.compact},n().createElement(i.h,null,n().createElement(n().Fragment,null,n().createElement(Z,null),n().createElement(o.Tr,null,k.map(((e,t)=>n().createElement(m.Th,{key:t,sort:{sortBy:w,onSort:C,columnIndex:t}},e.name)))))),n().createElement(u.p,null,e?.slice(0,5).map((e=>{return n().createElement(o.Tr,{key:e.id},n().createElement(p.Td,{dataLabel:B},n().createElement(d.Button,{className:"pf-v5-u-pl-0",variant:"link",icon:n().createElement(E(),null),iconPosition:"end",component:"a",href:`https://access.redhat.com/support/cases/#/case/${e.caseNumber}`},e.caseNumber)),n().createElement(p.Td,{dataLabel:I},e.summary),n().createElement(p.Td,{dataLabel:M},e.lastModifiedById),n().createElement(p.Td,{dataLabel:j},(t=e.severity,{[z]:n().createElement(O.Label,{color:"red"},t),[A]:n().createElement(O.Label,{color:"orange"},t),[$]:n().createElement(O.Label,{color:"blue"},t),[q]:n().createElement(O.Label,{color:"grey"},t)}[t]??"")),n().createElement(p.Td,{dataLabel:F},e.status));var t})))))}},1452:()=>{},8392:()=>{},4946:()=>{},2857:()=>{},8992:()=>{},187:()=>{},1626:()=>{},8572:()=>{},8379:()=>{},1993:()=>{},3336:()=>{},6822:()=>{},4994:()=>{},4690:()=>{},7494:()=>{},7761:()=>{},9854:()=>{},4543:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./SupportCaseWidget.9aba5eb5b0a40386b581810c078636e7.js.map
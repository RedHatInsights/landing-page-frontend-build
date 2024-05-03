(self.webpackChunklanding=self.webpackChunklanding||[]).push([[3623],{26121:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var n=a(28416),l=a.n(n),r=a(5697),c=a(75863),s=a(51630),o=a(4576),m=a(44160),i=a(75521),u=a(94616),p=a(99058),d=a(42910),E=a(76026),h=a(1579),y=a(44282),b=a.n(y),g=a(56696),T=a.n(g),f=a(55140),S=a(12913),v=a(75522);const L="Case ID",k="Issue summary",w="Modified by",B="Severity",N="Status",C=()=>{const[e,t]=(0,n.useState)([]),a=(0,f.Z)(),[y,g]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{g(!0),(async()=>{const e=await a.auth.getToken(),n=await a.auth.getUser(),l={method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({createdBySSOName:`${n?.identity.user?.username}`})};try{const e=await fetch("https://api.access.stage.redhat.com/support/v1/cases/filter",l),{cases:a}=await e.json();t(a),g(!1)}catch(e){console.error("Unable to fetch support cases",e)}})()}),[]),l().createElement(l().Fragment,null,y?l().createElement(S.Z,{rows:3,columns:[L,k,w,B,N]}):0===e.length?l().createElement(d.EmptyState,{variant:d.EmptyStateVariant.lg},l().createElement(d.EmptyStateIcon,{icon:T()}),l().createElement(h.Title,{headingLevel:"h4",size:"lg"},"No open support cases"),l().createElement(d.EmptyStateBody,null,l().createElement(E.Stack,null,l().createElement(E.StackItem,null,"We can't find any active support cases opened by you."))),l().createElement(p.Button,{variant:"link",icon:l().createElement(b(),null),iconPosition:"end",href:"https://access.redhat.com/support/cases/#/case/new/get-support?caseCreate=true"},"Open a support case")):l().createElement(r.i,{"aria-label":"Support case table widget",variant:c.B.compact},l().createElement(s.h,null,l().createElement(o.Tr,null,l().createElement(m.Th,null,L),l().createElement(m.Th,null,k),l().createElement(m.Th,null,w),l().createElement(m.Th,null,B),l().createElement(m.Th,null,N))),l().createElement(i.p,null,e?.slice(0,5).map((e=>{return l().createElement(o.Tr,{key:e.id},l().createElement(u.Td,{dataLabel:L},l().createElement(p.Button,{className:"pf-v5-u-pl-0",variant:"link",icon:l().createElement(b(),null),iconPosition:"end",component:"a",href:`https://access.redhat.com/support/cases/#/case/${e.caseNumber}`},e.caseNumber)),l().createElement(u.Td,{dataLabel:k},e.summary),l().createElement(u.Td,{dataLabel:w},e.lastModifiedById),l().createElement(u.Td,{dataLabel:B},(t=e.severity,{"1 (Urgent)":l().createElement(v.Label,{color:"red"},t),"2 (High)":l().createElement(v.Label,{color:"orange"},t),"3 (Normal)":l().createElement(v.Label,{color:"blue"},t),"4 (Low)":l().createElement(v.Label,{color:"grey"},t)}[t]??"")),l().createElement(u.Td,{dataLabel:N},e.status));var t})))))}},45467:()=>{},11452:()=>{},34946:()=>{},32857:()=>{},28992:()=>{},21626:()=>{},8572:()=>{},98379:()=>{},91993:()=>{},66822:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../../sourcemaps/exposed-./SupportCaseWidget.56007d9bfc1005003f376cd2d0cde074.js.map
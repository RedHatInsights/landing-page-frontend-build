"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[187],{4335:(e,a,i)=>{i.d(a,{zx:()=>h,qE:()=>b,L$:()=>u,Wu:()=>p});var s=i(5353),n=i(8416);i(4946);const l={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"};var t=i(8296),r=i(7619),c=i(2472);i(1452);const d="pf-m-read",o="pf-m-unread",m=e=>{var{isRead:a=!1,className:i="",children:l="",screenReaderText:r}=e,c=(0,s.__rest)(e,["isRead","className","children","screenReaderText"]);return n.createElement("span",Object.assign({},c,{className:(0,t.i)("pf-v5-c-badge",a?d:o,i)}),l,r&&n.createElement("span",{className:"pf-v5-screen-reader"},r))};var p,u,b;m.displayName="Badge",function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(p||(p={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(u||(u={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(b||(b={}));const f=e=>{var{children:a=null,className:i="",component:d="button",isActive:o=!1,isBlock:f=!1,isDisabled:g=!1,isAriaDisabled:v=!1,isLoading:N=null,isDanger:C=!1,spinnerAriaValueText:y,spinnerAriaLabelledBy:_,spinnerAriaLabel:k,size:E=b.default,inoperableEvents:x=["onClick","onKeyPress"],isInline:I=!1,type:O=u.button,variant:S=p.primary,iconPosition:A="start","aria-label":j=null,icon:R=null,ouiaId:$,ouiaSafe:D=!0,tabIndex:w=null,innerRef:L,countOptions:P}=e,B=(0,s.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const F=(0,c.S$)(h.displayName,$,D,S),T=d,q="button"===T,z=I&&"span"===T,V=x.reduce(((e,a)=>Object.assign(Object.assign({},e),{[a]:e=>{e.preventDefault()}})),{});return n.createElement(T,Object.assign({},B,v?V:null,{"aria-disabled":g||v,"aria-label":j,className:(0,t.i)(l.button,l.modifiers[S],f&&l.modifiers.block,g&&l.modifiers.disabled,v&&l.modifiers.ariaDisabled,o&&l.modifiers.active,I&&S===p.link&&l.modifiers.inline,C&&(S===p.secondary||S===p.link)&&l.modifiers.danger,null!==N&&S!==p.plain&&l.modifiers.progress,N&&l.modifiers.inProgress,E===b.sm&&l.modifiers.small,E===b.lg&&l.modifiers.displayLg,i),disabled:q?g:null,tabIndex:null!==w?w:g?q?null:-1:v?null:z?0:void 0,type:q||z?O:null,role:z?"button":null,ref:L},F),N&&n.createElement("span",{className:(0,t.i)(l.buttonProgress)},n.createElement(r.$,{size:r.S.md,isInline:I,"aria-valuetext":y,"aria-label":k,"aria-labelledby":_})),S===p.plain&&null===a&&R?R:null,S!==p.plain&&R&&("start"===A||"left"===A)&&n.createElement("span",{className:(0,t.i)(l.buttonIcon,l.modifiers.start)},R),a,S!==p.plain&&R&&("end"===A||"right"===A)&&n.createElement("span",{className:(0,t.i)(l.buttonIcon,l.modifiers.end)},R),P&&n.createElement("span",{className:(0,t.i)(l.buttonCount,P.className)},n.createElement(m,{isRead:P.isRead},P.count)))},h=n.forwardRef(((e,a)=>n.createElement(f,Object.assign({innerRef:a},e))));h.displayName="Button"},2187:(e,a,i)=>{i.r(a),i.d(a,{Card:()=>I,CardBody:()=>O,CardContext:()=>x,CardExpandableContent:()=>S,CardFooter:()=>A,CardHeader:()=>G,CardTitle:()=>j});var s=i(5353),n=i(8416);i(598);const l="pf-m-selectable",t="pf-m-clickable",r="pf-m-selected",c="pf-m-current",d="pf-m-disabled",o="pf-m-selectable-raised",m="pf-m-non-selectable-raised",p="pf-m-selected-raised",u="pf-m-compact",b="pf-m-display-lg",f="pf-m-flat",h="pf-m-plain",g="pf-m-rounded",v="pf-m-expanded",N="pf-m-full-height",C="pf-m-toggle-right",y="pf-m-no-offset",_="pf-m-no-fill";var k=i(8296),E=i(2472);const x=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1,isClickable:!1,isSelectable:!1,isDisabled:!1}),I=e=>{var{children:a,id:i="",className:C,component:y="div",isCompact:_=!1,isSelectable:O=!1,isClickable:S=!1,isDisabled:A=!1,isSelectableRaised:j=!1,isSelected:R=!1,isDisabledRaised:$=!1,isFlat:D=!1,isExpanded:w=!1,isRounded:L=!1,isLarge:P=!1,isFullHeight:B=!1,isPlain:F=!1,ouiaId:T,ouiaSafe:q=!0,hasSelectableInput:z=!1,selectableInputAriaLabel:V,onSelectableInputChange:H=(()=>{})}=e,M=(0,s.__rest)(e,["children","id","className","component","isCompact","isSelectable","isClickable","isDisabled","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const W=y,G=(0,E.S$)(I.displayName,T,q),[K,U]=n.useState(""),[J,Q]=n.useState();_&&P&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),P=!1);const X=n.useRef(!1);return n.useEffect((()=>{V?Q({"aria-label":V}):K?Q({"aria-labelledby":K}):z&&!X.current&&(Q({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[z,V,K]),n.createElement(x.Provider,{value:{cardId:i,registerTitleId:e=>{U(e),X.current=!!e},isExpanded:w,isClickable:S,isSelectable:O,isDisabled:A,hasSelectableInput:z}},z&&n.createElement("input",Object.assign({className:"pf-v5-screen-reader",id:`${i}-input`},J,{type:"checkbox",checked:R,onChange:e=>H(e,i),disabled:$,tabIndex:-1})),n.createElement(W,Object.assign({id:i,className:(0,k.i)("pf-v5-c-card",_&&u,w&&v,D&&f,L&&g,P&&b,B&&N,F&&h,$?(0,k.i)(m):j?(0,k.i)(o,R&&p):O&&S?(0,k.i)(l,t,R&&c):O?(0,k.i)(l,R&&r):S?(0,k.i)(t,R&&r):"",A&&d,C),tabIndex:j?"0":void 0},M,G),a))};I.displayName="Card";const O=e=>{var{children:a,className:i,component:l="div",isFilled:t=!0}=e,r=(0,s.__rest)(e,["children","className","component","isFilled"]);const c=l;return n.createElement(c,Object.assign({className:(0,k.i)("pf-v5-c-card__body",!t&&_,i)},r),a)};O.displayName="CardBody";const S=e=>{var{children:a,className:i}=e,l=(0,s.__rest)(e,["children","className"]);return n.createElement(x.Consumer,null,(({isExpanded:e})=>e?n.createElement("div",Object.assign({className:(0,k.i)("pf-v5-c-card__expandable-content",i)},l),a):null))};S.displayName="CardExpandableContent";const A=e=>{var{children:a,className:i,component:l="div"}=e,t=(0,s.__rest)(e,["children","className","component"]);const r=l;return n.createElement(r,Object.assign({className:(0,k.i)("pf-v5-c-card__footer",i)},t),a)};A.displayName="CardFooter";const j=e=>{var{children:a,className:i,component:l="div"}=e,t=(0,s.__rest)(e,["children","className","component"]);const{cardId:r,registerTitleId:c}=n.useContext(x),d=l,o=r?`${r}-title`:"";return n.useEffect((()=>(c(o),()=>c(""))),[c,o]),n.createElement("div",{className:(0,k.i)("pf-v5-c-card__title")},n.createElement(d,Object.assign({className:(0,k.i)("pf-v5-c-card__title-text",i),id:o||void 0},t),a))};j.displayName="CardTitle";const R=e=>{var{children:a,className:i}=e,l=(0,s.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,k.i)("pf-v5-c-card__header-main",i)},l),a)};R.displayName="CardHeaderMain";const $=e=>{var{children:a,className:i,hasNoOffset:l=!1}=e,t=(0,s.__rest)(e,["children","className","hasNoOffset"]);return n.createElement("div",Object.assign({className:(0,k.i)("pf-v5-c-card__actions",l&&y,i)},t),a)};$.displayName="CardActions";const D=e=>{var{children:a,className:i}=e,l=(0,s.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,k.i)("pf-v5-c-card__selectable-actions",i)},l),a)};D.displayName="CardSelectableActions";var w=i(4335);let L=0;const P=function({name:e,xOffset:a=0,yOffset:i=0,width:l,height:t,svgPath:r}){var c;return(c=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+L++}render(){const e=this.props,{title:c,className:d}=e,o=(0,s.__rest)(e,["title","className"]),m=d?`pf-v5-svg ${d}`:"pf-v5-svg",p=Boolean(c),u=[a,i,l,t].join(" ");return n.createElement("svg",Object.assign({className:m,viewBox:u,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},o),p&&n.createElement("title",{id:this.id},c),n.createElement("path",{d:r}))}}).displayName=e,c}({name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0});i(9624);const B="pf-m-standalone",F="pf-m-disabled",T="pf-v5-c-radio",q="pf-v5-c-radio__label";class z extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,E.ql)(z.displayName)}}render(){const e=this.props,{"aria-label":a,checked:i,className:l,inputClassName:t,defaultChecked:r,isLabelWrapped:c,isLabelBeforeButton:d,isChecked:o,isDisabled:m,isValid:p,label:u,onChange:b,description:f,body:h,ouiaId:g,ouiaSafe:v=!0}=e,N=(0,s.__rest)(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe"]);N.id||console.error("Radio:","id is required to make input accessible");const C=n.createElement("input",Object.assign({},N,{className:(0,k.i)("pf-v5-c-radio__input",t),type:"radio",onChange:this.handleChange,"aria-invalid":!p,disabled:m,checked:i||o},void 0===i&&{defaultChecked:r},!u&&{"aria-label":a},(0,E.dp)(z.displayName,void 0!==g?g:this.state.ouiaStateId,v)));let y=null;u&&c?y=n.createElement("span",{className:(0,k.i)(q,m&&F)},u):u&&(y=n.createElement("label",{className:(0,k.i)(q,m&&F),htmlFor:N.id},u));const _=f?n.createElement("span",{className:(0,k.i)("pf-v5-c-radio__description")},f):null,x=h?n.createElement("span",{className:(0,k.i)("pf-v5-c-radio__body")},h):null,I=d?n.createElement(n.Fragment,null,y,C,_,x):n.createElement(n.Fragment,null,C,y,_,x);return c?n.createElement("label",{className:(0,k.i)(T,l),htmlFor:N.id},I):n.createElement("div",{className:(0,k.i)(T,!u&&B,l)},I)}}z.displayName="Radio",z.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}},i(2857);const V="pf-m-standalone",H="pf-m-disabled",M=()=>{};class W extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,E.ql)(W.displayName)}}render(){const e=this.props,{"aria-label":a,className:i,inputClassName:l,onChange:t,isValid:r,isDisabled:c,isRequired:d,isChecked:o,label:m,checked:p,defaultChecked:u,description:b,body:f,ouiaId:h,ouiaSafe:g,component:v}=e,N=(0,s.__rest)(e,["aria-label","className","inputClassName","onChange","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);N.id||console.error("Checkbox:","id is required to make input accessible");const C={};return([!0,!1].includes(p)||!0===o)&&(C.checked=p||o),t!==M&&(C.checked=o),[!1,!0].includes(u)&&(C.defaultChecked=u),C.checked=null!==C.checked&&C.checked,n.createElement(v,{className:(0,k.i)("pf-v5-c-check",!m&&V,i)},n.createElement("input",Object.assign({},N,{className:(0,k.i)("pf-v5-c-check__input",l),type:"checkbox",onChange:this.handleChange,"aria-invalid":!r,"aria-label":a,disabled:c,required:d,ref:e=>e&&(e.indeterminate=null===o)},C,(0,E.dp)(W.displayName,void 0!==h?h:this.state.ouiaStateId,g))),m&&n.createElement("label",{className:(0,k.i)("pf-v5-c-check__label",c&&H),htmlFor:N.id},m,d&&n.createElement("span",{className:(0,k.i)("pf-v5-c-check__label-required"),"aria-hidden":"true"},"*")),b&&n.createElement("span",{className:(0,k.i)("pf-v5-c-check__description")},b),f&&n.createElement("span",{className:(0,k.i)("pf-v5-c-check__body")},f))}}W.displayName="Checkbox",W.defaultProps={className:"",isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:M,ouiaSafe:!0,component:"div"};const G=e=>{var{children:a,className:i,actions:l,selectableActions:t,id:r,onExpand:c,toggleButtonProps:d,isToggleRightAligned:o}=e,m=(0,s.__rest)(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return n.createElement(x.Consumer,null,(({cardId:e,isClickable:s,isSelectable:p,isDisabled:u,hasSelectableInput:b})=>{const f=n.createElement("div",{className:(0,k.i)("pf-v5-c-card__header-toggle")},n.createElement(w.zx,Object.assign({variant:"plain",type:"button",onClick:a=>{c(a,e)}},d),n.createElement("span",{className:(0,k.i)("pf-v5-c-card__header-toggle-icon")},n.createElement(P,{"aria-hidden":"true"})))),h=s&&!p||p&&!s,g=b;(null==l?void 0:l.actions)&&h&&!g&&console.warn((s?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const v=e=>{s&&((null==t?void 0:t.onClickAction)?t.onClickAction(e):(null==t?void 0:t.to)&&window.open(t.to,t.isExternalLink?"_blank":"_self"))},N=()=>{const e={className:"pf-m-standalone",inputClassName:s&&!p&&"pf-v5-screen-reader",label:n.createElement(n.Fragment,null),"aria-label":t.selectableActionAriaLabel,"aria-labelledby":t.selectableActionAriaLabelledby,id:t.selectableActionId,name:t.name,isDisabled:u};return s&&!p?Object.assign(Object.assign({},e),{onClick:v}):p?Object.assign(Object.assign({},e),{onChange:t.onChange,isChecked:t.isChecked}):e};return n.createElement("div",Object.assign({className:(0,k.i)("pf-v5-c-card__header",o&&C,i),id:r},m),c&&!o&&f,(l||t&&(s||p))&&n.createElement($,{className:null==l?void 0:l.className,hasNoOffset:(null==l?void 0:l.hasNoOffset)||(null==t?void 0:t.hasNoOffset)},null==l?void 0:l.actions,t&&(s||p)&&n.createElement(D,{className:null==t?void 0:t.className},"single"===(null==t?void 0:t.variant)||s&&!p?n.createElement(z,Object.assign({},N())):n.createElement(W,Object.assign({},N())))),a&&n.createElement(R,null,a),c&&o&&f)}))};G.displayName="CardHeader"},7619:(e,a,i)=>{i.d(a,{$:()=>c,S:()=>t});var s=i(5353),n=i(8416);i(6822);const l={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var t,r=i(8296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(t||(t={}));const c=e=>{var{className:a="",size:i="xl","aria-valuetext":t="Loading...",diameter:c,isInline:d=!1,"aria-label":o,"aria-labelledBy":m}=e,p=(0,s.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return n.createElement("svg",Object.assign({className:(0,r.i)(l.spinner,d?l.modifiers.inline:l.modifiers[i],a),role:"progressbar","aria-valuetext":t,viewBox:"0 0 100 100"},c&&{style:{"--pf-v5-c-spinner--diameter":c}},o&&{"aria-label":o},m&&{"aria-labelledBy":m},!o&&!m&&{"aria-label":"Contents"},p),n.createElement("circle",{className:l.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};c.displayName="Spinner"},2472:(e,a,i)=>{i.d(a,{S$:()=>c,dp:()=>r,ql:()=>o});var s=i(8416);let n=0;const l="OUIA-Generated-",t={};function r(e,a,i=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":i,"data-ouia-component-id":a}}const c=(e,a,i=!0,s)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":i,"data-ouia-component-id":d(e,a,s)}),d=(e,a,i)=>{const n=(0,s.useMemo)((()=>o(e,i)),[e,i]);return null!=a?a:n};function o(e,a){try{let i;return i="undefined"!=typeof window?`${window.location.href}-${e}-${a||""}`:`${e}-${a||""}`,t[i]||(t[i]=0),`${l}${e}-${a?`${a}-`:""}${++t[i]}`}catch(i){return`${l}${e}-${a?`${a}-`:""}${++n}`}}},8296:(e,a,i)=>{function s(...e){const a=[],i={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const n=typeof e;if("string"===n||"number"===n)a.push(e);else if(Array.isArray(e)&&e.length){const i=s(...e);i&&a.push(i)}else if("object"===n)for(const s in e)i.call(e,s)&&e[s]&&a.push(s)})),a.join(" ")}i.d(a,{i:()=>s})}}]);
//# sourceMappingURL=../sourcemaps/187.4e0261968d4995e665e564f6aa5c215c.js.map
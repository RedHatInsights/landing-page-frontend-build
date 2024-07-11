"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[8793],{32588:(e,a,t)=>{t.d(a,{zx:()=>f,qE:()=>u,L$:()=>m,Wu:()=>p});var n=t(65353),l=t(28416),i=t(80480),s=t(38296),r=t(2372),o=t(62472),c=t(12971);const d=e=>{var{isRead:a=!1,className:t="",children:i="",screenReaderText:r}=e,o=(0,n.__rest)(e,["isRead","className","children","screenReaderText"]);return l.createElement("span",Object.assign({},o,{className:(0,s.i)(c.Z.badge,a?c.Z.modifiers.read:c.Z.modifiers.unread,t)}),i,r&&l.createElement("span",{className:"pf-v5-screen-reader"},r))};var p,m,u;d.displayName="Badge",function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(p||(p={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(m||(m={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(u||(u={}));const b=e=>{var{children:a=null,className:t="",component:c="button",isActive:b=!1,isBlock:g=!1,isDisabled:v=!1,isAriaDisabled:h=!1,isLoading:E=null,isDanger:x=!1,spinnerAriaValueText:N,spinnerAriaLabelledBy:y,spinnerAriaLabel:C,size:L=u.default,inoperableEvents:_=["onClick","onKeyPress"],isInline:k=!1,type:O=m.button,variant:P=p.primary,iconPosition:R="start","aria-label":Z=null,icon:I=null,ouiaId:w,ouiaSafe:A=!0,tabIndex:T=null,innerRef:B,countOptions:j}=e,S=(0,n.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const D=(0,o.S$)(f.displayName,w,A,P),$=c,z="button"===$,W=k&&"span"===$,V=_.reduce(((e,a)=>Object.assign(Object.assign({},e),{[a]:e=>{e.preventDefault()}})),{});return l.createElement($,Object.assign({},S,h?V:null,{"aria-disabled":v||h,"aria-label":Z,className:(0,s.i)(i.Z.button,i.Z.modifiers[P],g&&i.Z.modifiers.block,v&&i.Z.modifiers.disabled,h&&i.Z.modifiers.ariaDisabled,b&&i.Z.modifiers.active,k&&P===p.link&&i.Z.modifiers.inline,x&&(P===p.secondary||P===p.link)&&i.Z.modifiers.danger,null!==E&&P!==p.plain&&i.Z.modifiers.progress,E&&i.Z.modifiers.inProgress,L===u.sm&&i.Z.modifiers.small,L===u.lg&&i.Z.modifiers.displayLg,t),disabled:z?v:null,tabIndex:null!==T?T:v?z?null:-1:h?null:W?0:void 0,type:z||W?O:null,role:W?"button":null,ref:B},D),E&&l.createElement("span",{className:(0,s.i)(i.Z.buttonProgress)},l.createElement(r.$,{size:r.S.md,isInline:k,"aria-valuetext":N,"aria-label":C,"aria-labelledby":y})),P===p.plain&&null===a&&I?I:null,P!==p.plain&&I&&("start"===R||"left"===R)&&l.createElement("span",{className:(0,s.i)(i.Z.buttonIcon,i.Z.modifiers.start)},I),a,P!==p.plain&&I&&("end"===R||"right"===R)&&l.createElement("span",{className:(0,s.i)(i.Z.buttonIcon,i.Z.modifiers.end)},I),j&&l.createElement("span",{className:(0,s.i)(i.Z.buttonCount,j.className)},l.createElement(d,{isRead:j.isRead},j.count)))},f=l.forwardRef(((e,a)=>l.createElement(b,Object.assign({innerRef:a},e))));f.displayName="Button"},68793:(e,a,t)=>{t.r(a),t.d(a,{Label:()=>R,LabelGroup:()=>A});var n=t(65353),l=t(28416);t(82014);const i="pf-v5-c-label__content",s="pf-m-compact",r="pf-m-blue",o="pf-m-green",c="pf-m-orange",d="pf-m-red",p="pf-m-purple",m="pf-m-cyan",u="pf-m-gold",b="pf-m-outline",f="pf-m-overflow",g="pf-m-editable-active";t(24620);const v="pf-v5-c-label-group__label",h="pf-v5-c-label-group__list-item",E="pf-m-category",x="pf-m-vertical",N="pf-m-editable",y="pf-m-textarea";var C=t(32588),L=t(16545),_=t(38296),k=t(24307),O=t(6551);const P={blue:r,cyan:m,green:o,orange:c,purple:p,red:d,gold:u,grey:""},R=e=>{var{children:a,className:t="",color:r="grey",variant:o="filled",isCompact:c=!1,isEditable:d=!1,editableProps:p,textMaxWidth:m,tooltipPosition:u,icon:v,onClose:h,onClick:E,onEditCancel:x,onEditComplete:y,closeBtn:R,closeBtnAriaLabel:Z,closeBtnProps:I,href:w,isOverflowLabel:A,render:T}=e,B=(0,n.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[j,S]=(0,l.useState)(!1),[D,$]=(0,l.useState)(a),z=l.useRef(),W=l.useRef();l.useEffect((()=>(document.addEventListener("mousedown",V),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",V),document.removeEventListener("keydown",M)}))),l.useEffect((()=>{E&&w?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):E&&d&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[E,w,d]);const V=e=>{j&&W&&W.current&&!W.current.contains(e.target)&&(W.current.value&&y&&y(e,W.current.value),S(!1))},M=e=>{var t,n;const l=e.key;if((j||z&&z.current&&z.current.contains(e.target))&&(!j||W&&W.current&&W.current.contains(e.target))&&(!j||"Enter"!==l&&"Tab"!==l||(e.preventDefault(),e.stopImmediatePropagation(),W.current.value&&y&&y(e,W.current.value),S(!1),null===(t=null==z?void 0:z.current)||void 0===t||t.focus()),j&&"Escape"===l&&(e.preventDefault(),e.stopImmediatePropagation(),W.current.value&&(W.current.value=a,x&&x(e,a)),S(!1),null===(n=null==z?void 0:z.current)||void 0===n||n.focus()),!j&&"Enter"===l)){e.preventDefault(),e.stopImmediatePropagation(),S(!0);const a=e.target,t=document.createRange(),n=window.getSelection();t.selectNodeContents(a),t.collapse(!1),n.removeAllRanges(),n.addRange(t)}},F=A?"button":"span",G=l.createElement(C.zx,Object.assign({type:"button",variant:"plain",onClick:h,"aria-label":Z||`Close ${a}`},I),l.createElement(k.ZP,null)),q=l.createElement("span",{className:(0,_.i)("pf-v5-c-label__actions")},R||G),H=l.createRef(),J=l.useRef(),[K,Q]=l.useState(!1);(0,O.L)((()=>{const e=d?z:H;j||Q(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[j]);const U=l.createElement(l.Fragment,null,v&&l.createElement("span",{className:(0,_.i)("pf-v5-c-label__icon")},v),l.createElement("span",Object.assign({ref:H,className:(0,_.i)("pf-v5-c-label__text")},m&&{style:{"--pf-v5-c-label__text--MaxWidth":m}}),a));l.useEffect((()=>{j&&W&&W.current&&W.current.focus()}),[W,j]);let X="span";w?X="a":(d||E&&!A)&&(X="button");const Y={type:"button",onClick:E},ee="button"===X,ae=Object.assign(Object.assign(Object.assign(Object.assign({className:(0,_.i)(i)},K&&{tabIndex:0}),w&&{href:w}),ee&&Y),d&&Object.assign({ref:z,onClick:e=>{S(!0),e.stopPropagation()}},p));let te=l.createElement(X,Object.assign({},ae),U);return T?te=l.createElement(l.Fragment,null,K&&l.createElement(L.u,{triggerRef:J,content:a,position:u}),T({className:i,content:U,componentRef:J})):K&&(te=l.createElement(L.u,{content:a,position:u},te)),l.createElement(F,Object.assign({},B,{className:(0,_.i)("pf-v5-c-label",P[r],"outline"===o&&b,A&&f,c&&s,d&&N,j&&g,t),onClick:A?E:void 0}),!j&&te,!j&&h&&q,j&&l.createElement("input",Object.assign({className:(0,_.i)(i),type:"text",id:"editable-input",ref:W,value:D,onChange:()=>{$(W.current.value)}},p)))};R.displayName="Label";var Z=t(72781),I=t(80164),w=t(41724);class A extends l.Component{constructor(e){super(e),this.headingRef=l.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:a,tooltipPosition:t}=this.props,{isTooltipVisible:n}=this.state;return n?l.createElement(L.u,{position:t,content:a},l.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,_.i)(v)},l.createElement("span",{"aria-hidden":"true",id:e},a))):l.createElement("span",{ref:this.headingRef,className:(0,_.i)(v),"aria-hidden":"true",id:e},a)}render(){const e=this.props,{categoryName:a,children:t,className:i,isClosable:r,isCompact:o,closeBtnAriaLabel:c,"aria-label":d,onClick:p,numLabels:m,expandedText:u,collapsedText:b,defaultIsOpen:f,tooltipPosition:g,isVertical:v,isEditable:L,hasEditableTextArea:k,editableTextAreaProps:O,addLabelControl:P}=e,A=(0,n.__rest)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:T}=this.state,B=l.Children.toArray(t),j=B.length,S=(0,I.tJ)(b,{remaining:j-m}),D=e=>{const t=T?B:B.slice(0,m),n=l.createElement(l.Fragment,null,a&&this.renderLabel(e),l.createElement("ul",Object.assign({className:(0,_.i)("pf-v5-c-label-group__list")},a&&{"aria-labelledby":e},!a&&{"aria-label":d},{role:"list"},A),t.map(((e,a)=>l.createElement("li",{className:(0,_.i)(h),key:a},e))),j>m&&l.createElement("li",{className:(0,_.i)(h)},l.createElement(R,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,_.i)(o&&s)},T?u:S)),P&&l.createElement("li",{className:(0,_.i)(h)},P),L&&k&&l.createElement("li",{className:(0,_.i)(h,y)},l.createElement("textarea",Object.assign({className:(0,_.i)("pf-v5-c-label-group__textarea"),rows:1,tabIndex:0},O))))),b=l.createElement("div",{className:(0,_.i)("pf-v5-c-label-group__close")},l.createElement(C.zx,{variant:"plain","aria-label":c,onClick:p,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},l.createElement(Z.ZP,{"aria-hidden":"true"})));return l.createElement("div",{className:(0,_.i)("pf-v5-c-label-group",i,a&&E,v&&x,L&&N)},l.createElement("div",{className:(0,_.i)("pf-v5-c-label-group__main")},n),r&&b)};return 0===j&&void 0===P?null:l.createElement(w.w,null,(e=>D(this.props.id||e)))}}A.displayName="LabelGroup",A.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},2372:(e,a,t)=>{t.d(a,{$:()=>o,S:()=>n});var n,l=t(65353),i=t(28416),s=t(62698),r=t(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(n||(n={}));const o=e=>{var{className:a="",size:t="xl","aria-valuetext":n="Loading...",diameter:o,isInline:c=!1,"aria-label":d,"aria-labelledBy":p}=e,m=(0,l.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return i.createElement("svg",Object.assign({className:(0,r.i)(s.Z.spinner,c?s.Z.modifiers.inline:s.Z.modifiers[t],a),role:"progressbar","aria-valuetext":n,viewBox:"0 0 100 100"},o&&{style:{"--pf-v5-c-spinner--diameter":o}},d&&{"aria-label":d},p&&{"aria-labelledBy":p},!d&&!p&&{"aria-label":"Contents"},m),i.createElement("circle",{className:s.Z.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};o.displayName="Spinner"},41724:(e,a,t)=>{t.d(a,{w:()=>i});var n=t(28416);let l=0;class i extends n.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${l++}`}render(){return this.props.children(this.id)}}i.displayName="GenerateId",i.defaultProps={prefix:"pf-random-id-"}},72781:(e,a,t)=>{t.d(a,{ZP:()=>n});const n=(0,t(40400).I)({name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/8793.f4d80e071e242abc546ce6f76a564697.js.map
"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[3683],{65064:(e,t,a)=>{a.r(t),a.d(t,{Alert:()=>N,AlertActionCloseButton:()=>A,AlertActionLink:()=>I,AlertContext:()=>h,AlertGroup:()=>M,AlertVariant:()=>x});var n=a(65353),i=a(28416),l=a(38296);a(81754);const o={alert:"pf-v5-c-alert",alertAction:"pf-v5-c-alert__action",alertActionGroup:"pf-v5-c-alert__action-group",alertDescription:"pf-v5-c-alert__description",alertIcon:"pf-v5-c-alert__icon",alertTitle:"pf-v5-c-alert__title",alertToggle:"pf-v5-c-alert__toggle",alertToggleIcon:"pf-v5-c-alert__toggle-icon",button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{custom:"pf-m-custom",success:"pf-m-success",danger:"pf-m-danger",warning:"pf-m-warning",info:"pf-m-info",inline:"pf-m-inline",plain:"pf-m-plain",expandable:"pf-m-expandable",expanded:"pf-m-expanded",truncate:"pf-m-truncate"},themeDark:"pf-v5-theme-dark"};var r=a(68778),s=a(43047),c=a(69957),m=a(40400);const p=(0,m.I)({name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0}),f=(0,m.I)({name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0}),u={success:r.ZP,danger:s.ZP,warning:c.ZP,info:p,custom:f},d=e=>{var{variant:t,customIcon:a,className:r=""}=e,s=(0,n.__rest)(e,["variant","customIcon","className"]);const c=u[t];return c?i.createElement("div",Object.assign({},s,{className:(0,l.i)(o.alertIcon,r)}),a||i.createElement(c,null)):null};var v=a(80164),g=a(62472);const h=i.createContext(null),C="--pf-v5-c-alert__title--max-lines";var b=a(16545),E=a(32588),L=a(93174);const _=e=>{var{"aria-label":t="",variantLabel:a,onToggleExpand:r,isExpanded:s=!1}=e,c=(0,n.__rest)(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:m,variantLabel:p}=i.useContext(h);return i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:r,"aria-expanded":s,"aria-label":""===t?`Toggle ${a||p} alert: ${m}`:t},c),i.createElement("span",{className:(0,l.i)(o.alertToggleIcon)},i.createElement(L.ZP,{"aria-hidden":"true"})))};var x;_.displayName="AlertToggleExpandButton",function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.custom="custom"}(x||(x={}));const N=e=>{var{variant:t=x.custom,isInline:a=!1,isPlain:r=!1,isLiveRegion:s=!1,variantLabel:c=`${(0,v.kC)(t)} alert:`,actionClose:m,actionLinks:p,title:f,component:u="h4",children:E="",className:L="",ouiaId:T,ouiaSafe:A=!0,timeout:I=!1,timeoutAnimation:k=3e3,onTimeout:w=(()=>{}),truncateTitle:O=0,tooltipPosition:M,customIcon:P,isExpandable:y=!1,toggleAriaLabel:z=`${(0,v.kC)(t)} alert details`,onMouseEnter:R=(()=>{}),onMouseLeave:S=(()=>{}),id:Z}=e,j=(0,n.__rest)(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","actionClose","actionLinks","title","component","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const $=(0,g.S$)(N.displayName,T,A,t),B=i.createElement(i.Fragment,null,i.createElement("span",{className:"pf-v5-screen-reader"},c),f),W=i.useRef(null),D=u,G=i.useRef(),[H,q]=(0,i.useState)(!1);i.useEffect((()=>{if(!W.current||!O)return;W.current.style.setProperty(C,O.toString());const e=W.current&&W.current.offsetHeight<W.current.scrollHeight;H!==e&&q(e)}),[W,O,H]);const[F,U]=(0,i.useState)(!1),[V,J]=(0,i.useState)(!0),[K,Q]=(0,i.useState)(),[X,Y]=(0,i.useState)(),ee=F&&V&&!K&&!X;i.useEffect((()=>{const e=!0===I?8e3:Number(I);if(e>0){const t=setTimeout((()=>U(!0)),e);return()=>clearTimeout(t)}}),[I]),i.useEffect((()=>{const e=()=>{G.current&&(G.current.contains(document.activeElement)?(Y(!0),J(!1)):X&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[X]),i.useEffect((()=>{if(!1===X||!1===K){const e=setTimeout((()=>J(!0)),k);return()=>clearTimeout(e)}}),[X,K,k]),i.useEffect((()=>{ee&&w()}),[ee,w]);const[te,ae]=(0,i.useState)(!1);if(ee)return null;const ne=i.createElement(D,Object.assign({},H&&{tabIndex:0},{ref:W,className:(0,l.i)(o.alertTitle,O&&o.modifiers.truncate)}),B);return i.createElement("div",Object.assign({ref:G,className:(0,l.i)(o.alert,a&&o.modifiers.inline,r&&o.modifiers.plain,y&&o.modifiers.expandable,te&&o.modifiers.expanded,o.modifiers[t],L)},$,s&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),J(!1),R(e)},onMouseLeave:e=>{Q(!1),S(e)},id:Z},j),y&&i.createElement(h.Provider,{value:{title:f,variantLabel:c}},i.createElement("div",{className:(0,l.i)(o.alertToggle)},i.createElement(_,{isExpanded:te,onToggleExpand:()=>{ae(!te)},"aria-label":z}))),i.createElement(d,{variant:t,customIcon:P}),H?i.createElement(b.u,{content:B,position:M},ne):ne,m&&i.createElement(h.Provider,{value:{title:f,variantLabel:c}},i.createElement("div",{className:(0,l.i)(o.alertAction)},m)),E&&(!y||y&&te)&&i.createElement("div",{className:(0,l.i)(o.alertDescription)},E),p&&i.createElement("div",{className:(0,l.i)(o.alertActionGroup)},p))};N.displayName="Alert";var T=a(24307);const A=e=>{var{className:t,onClose:a=(()=>{}),"aria-label":l="",variantLabel:o}=e,r=(0,n.__rest)(e,["className","onClose","aria-label","variantLabel"]);return i.createElement(h.Consumer,null,(({title:e,variantLabel:n})=>i.createElement(E.zx,Object.assign({variant:E.Wu.plain,onClick:a,"aria-label":""===l?`Close ${o||n} alert: ${e}`:l,className:t},r),i.createElement(T.ZP,null))))};A.displayName="AlertActionCloseButton";const I=e=>{var{className:t="",children:a}=e,l=(0,n.__rest)(e,["className","children"]);return i.createElement(E.zx,Object.assign({variant:E.Wu.link,isInline:!0,className:t},l),a)};I.displayName="AlertActionLink";var k=a(31051);a(81235);const w="pf-m-toast",O=e=>{var{className:t,children:a,isToast:o,isLiveRegion:r,onOverflowClick:s,overflowMessage:c}=e,m=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage"]);return i.createElement("ul",Object.assign({role:"list","aria-live":r?"polite":null,"aria-atomic":!r&&null,className:(0,l.i)("pf-v5-c-alert-group",t,o?w:"")},m),i.Children.toArray(a).map(((e,t)=>{var a;return i.createElement("li",{key:(null===(a=e.props)||void 0===a?void 0:a.id)||t},e)})),c&&i.createElement("li",null,i.createElement("button",{onClick:s,className:(0,l.i)("pf-v5-c-alert-group__overflow-button")},c)))};O.displayName="AlertGroupInline";class M extends i.Component{constructor(){super(...arguments),this.state={container:void 0}}componentDidMount(){const e=document.createElement("div"),t=this.getTargetElement();this.setState({container:e}),t.appendChild(e)}componentWillUnmount(){const e=this.getTargetElement();this.state.container&&e.removeChild(this.state.container)}getTargetElement(){const e=this.props.appendTo;return"function"==typeof e?e():e||document.body}render(){const e=this.props,{className:t,children:a,isToast:l,isLiveRegion:o,onOverflowClick:r,overflowMessage:s,"aria-label":c,appendTo:m}=e,p=(0,n.__rest)(e,["className","children","isToast","isLiveRegion","onOverflowClick","overflowMessage","aria-label","appendTo"]),f=i.createElement(O,Object.assign({onOverflowClick:r,className:t,isToast:l,isLiveRegion:o,overflowMessage:s,"aria-label":c},p),a);if(!this.props.isToast)return f;const u=this.state.container;return v.Nq&&u?k.createPortal(f,u):null}}M.displayName="AlertGroup"},68778:(e,t,a)=>{a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},69957:(e,t,a)=>{a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},24307:(e,t,a)=>{a.d(t,{ZP:()=>n});const n=(0,a(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},86478:(e,t,a)=>{a.d(t,{Z:()=>n}),a(49854);const n={modifiers:{top:"pf-m-top",topLeft:"pf-m-top-left",topRight:"pf-m-top-right",bottom:"pf-m-bottom",bottomLeft:"pf-m-bottom-left",bottomRight:"pf-m-bottom-right",left:"pf-m-left",leftTop:"pf-m-left-top",leftBottom:"pf-m-left-bottom",right:"pf-m-right",rightTop:"pf-m-right-top",rightBottom:"pf-m-right-bottom",textAlignLeft:"pf-m-text-align-left"},themeDark:"pf-v5-theme-dark",tooltip:"pf-v5-c-tooltip",tooltipArrow:"pf-v5-c-tooltip__arrow",tooltipContent:"pf-v5-c-tooltip__content"}},46481:(e,t,a)=>{a.d(t,{Z:()=>n});const n={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"}}}]);
//# sourceMappingURL=../sourcemaps/3683.2a28a5ebbf125fa5b3c85123cb8ef1ca.js.map
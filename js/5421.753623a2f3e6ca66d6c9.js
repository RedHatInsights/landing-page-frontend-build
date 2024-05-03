"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[5421],{5436:(e,t,n)=>{n.d(t,{Jd:()=>r,dy:()=>c,rf:()=>d});var r,i=n(65353),a=n(28416),o=n(13302),l=n(38296);!function(e){e.default="default",e.light200="light-200",e.noBackground="no-background"}(r||(r={}));const d=a.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"end",drawerRef:null,drawerContentRef:null,isInline:!1}),c=e=>{var{className:t="",children:n,isExpanded:r=!1,isInline:c=!1,isStatic:s=!1,position:u="end",onExpand:m=(()=>{})}=e,p=(0,i.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);const g=a.useRef(),f=a.useRef();return a.createElement(d.Provider,{value:{isExpanded:r,isStatic:s,onExpand:m,position:u,drawerRef:g,drawerContentRef:f,isInline:c}},a.createElement("div",Object.assign({className:(0,l.i)(o.Z.drawer,r&&o.Z.modifiers.expanded,c&&o.Z.modifiers.inline,s&&o.Z.modifiers.static,("left"===u||"start"===u)&&o.Z.modifiers.panelLeft,"bottom"===u&&o.Z.modifiers.panelBottom,t),ref:g},p),n))};c.displayName="Drawer"},34241:(e,t,n)=>{n.d(t,{s:()=>c});var r=n(65353),i=n(28416),a=n(13302),o=n(38296);const l=e=>{var{className:t="",children:n}=e,l=(0,r.__rest)(e,["className","children"]);return i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerMain,t)},l),n)};l.displayName="DrawerMain";var d=n(5436);const c=e=>{var{className:t="",children:n,panelContent:c,colorVariant:s=d.Jd.default}=e,u=(0,r.__rest)(e,["className","children","panelContent","colorVariant"]);const{drawerContentRef:m}=i.useContext(d.rf);return i.createElement(l,null,i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerContent,s===d.Jd.light200&&a.Z.modifiers.light_200,s===d.Jd.noBackground&&a.Z.modifiers.noBackground,t),ref:m},u),n),c)};c.displayName="DrawerContent"},16537:(e,t,n)=>{n.d(t,{s:()=>l});var r=n(65353),i=n(28416),a=n(13302),o=n(38296);const l=e=>{var{className:t="",children:n,hasPadding:l=!1}=e,d=(0,r.__rest)(e,["className","children","hasPadding"]);return i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerBody,l&&a.Z.modifiers.padding,t)},d),n)};l.displayName="DrawerContentBody"},16941:(e,t,n)=>{n.d(t,{S:()=>p});var r=n(65353),i=n(28416),a=n(13302),o=n(38296),l=n(5436),d=n(80164),c=n(41724),s=n(27017);let u=null,m=0;const p=e=>{var{className:t="",id:n,children:p,hasNoBorder:g=!1,isResizable:f=!1,onResize:w,minSize:h,defaultSize:v,maxSize:_,increment:C=5,resizeAriaLabel:B="Resize",widths:R,colorVariant:x=l.Jd.default,focusTrap:b}=e,E=(0,r.__rest)(e,["className","id","children","hasNoBorder","isResizable","onResize","minSize","defaultSize","maxSize","increment","resizeAriaLabel","widths","colorVariant","focusTrap"]);const O=i.useRef(),y=i.useRef(),[N,S]=i.useState(0),{position:L,isExpanded:Z,isStatic:k,onExpand:z,drawerRef:P,drawerContentRef:D,isInline:A}=i.useContext(l.rf),F=!k&&!Z,[X,I]=i.useState(!F),[T,M]=i.useState(!1),J=i.useRef(null);let V,j,H,U,Y=0,K=!0;k&&(null==b?void 0:b.enabled)&&console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."),i.useEffect((()=>{!k&&Z&&I(Z)}),[k,Z]);const q=()=>{let e,t;const n="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction");!A||"end"!==L&&"right"!==L?!A||"start"!==L&&"left"!==L?"end"===L||"right"===L?n?(e=D.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=D.current.getBoundingClientRect().left-D.current.getBoundingClientRect().right):(e=D.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=D.current.getBoundingClientRect().right-D.current.getBoundingClientRect().left):"start"===L||"left"===L?n?(e=y.current.getBoundingClientRect().left-D.current.getBoundingClientRect().right,t=D.current.getBoundingClientRect().left-D.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-D.current.getBoundingClientRect().left,t=D.current.getBoundingClientRect().right-D.current.getBoundingClientRect().left):"bottom"===L&&(e=D.current.getBoundingClientRect().bottom-y.current.getBoundingClientRect().top,t=D.current.getBoundingClientRect().bottom-D.current.getBoundingClientRect().top):n?(e=y.current.getBoundingClientRect().left-O.current.getBoundingClientRect().right,t=P.current.getBoundingClientRect().left-P.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-O.current.getBoundingClientRect().left,t=P.current.getBoundingClientRect().right-P.current.getBoundingClientRect().left):n?(e=O.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=P.current.getBoundingClientRect().left-P.current.getBoundingClientRect().right):(e=O.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=P.current.getBoundingClientRect().right-P.current.getBoundingClientRect().left);const r=e/t*100;return Math.round(100*(r+Number.EPSILON))/100},G=e=>{e.stopPropagation(),document.addEventListener("touchmove",te,{passive:!1}),document.addEventListener("touchend",ee),u=!0},Q=e=>{e.stopPropagation(),e.preventDefault(),document.addEventListener("mousemove",$),document.addEventListener("mouseup",ne),P.current.classList.add((0,o.i)(a.Z.modifiers.resizing)),u=!0,K=!0},W=(e,t)=>{const n="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction");if(e.stopPropagation(),!u)return;K&&(V=O.current.getBoundingClientRect(),n?(H=V.right,j=V.left):(j=V.right,H=V.left),U=V.bottom,K=!1);let r=0;r="end"===L||"right"===L?n?t-j:j-t:"start"===L||"left"===L?n?H-t:t-H:U-t,"bottom"===L&&(O.current.style.overflowAnchor="none"),O.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",r+"px"),Y=r,S(q())},$=i.useCallback((e=>{const t="bottom"===L?e.clientY:e.clientX;W(e,t)}),[]),ee=i.useCallback((e=>{e.stopPropagation(),u&&(u=!1,w&&w(e,Y,n),document.removeEventListener("touchmove",te),document.removeEventListener("touchend",ee))}),[]),te=i.useCallback((e=>{e.preventDefault(),e.stopImmediatePropagation();const t="bottom"===L?e.touches[0].clientY:e.touches[0].clientX;W(e,t)}),[]),ne=i.useCallback((e=>{u&&(P.current.classList.remove((0,o.i)(a.Z.modifiers.resizing)),u=!1,w&&w(e,Y,n),K=!0,document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",ne))}),[]),re=e=>{const t="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction"),r=e.key;if("Escape"!==r&&"Enter"!==r&&"ArrowUp"!==r&&"ArrowDown"!==r&&"ArrowLeft"!==r&&"ArrowRight"!==r)return void(u&&e.preventDefault());e.preventDefault(),"Escape"!==r&&"Enter"!==r||w&&w(e,Y,n);const i=O.current.getBoundingClientRect();m="bottom"===L?i.height:i.width;let a=0;"ArrowRight"===r?a=t?"left"===L||"start"===L?-C:C:"left"===L||"start"===L?C:-C:"ArrowLeft"===r?a=t?"left"===L||"start"===L?C:-C:"left"===L||"start"===L?-C:C:"ArrowUp"===r?a=C:"ArrowDown"===r&&(a=-C),m+=a,"bottom"===L&&(O.current.style.overflowAnchor="none"),O.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",m+"px"),Y=m,S(q())},ie={};v&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis"]=v),h&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--min"]=h),_&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--max"]=_);const ae=(null==b?void 0:b.enabled)&&!k,oe=ae?s.i:"div";return i.createElement(c.w,{prefix:"pf-drawer-panel-"},(e=>{const r={tabIndex:-1,"aria-modal":!0,role:"dialog",active:T,"aria-labelledby":(null==b?void 0:b["aria-labelledby"])||n||e,focusTrapOptions:{fallbackFocus:()=>O.current,onActivate:()=>{J.current!==document.activeElement&&(J.current=document.activeElement)},onDeactivate:()=>{J.current&&J.current.focus&&J.current.focus()},clickOutsideDeactivates:!0,returnFocusOnDeactivate:!1,initialFocus:(null==b?void 0:b.elementToFocusOnExpand)||void 0,escapeDeactivates:!1}};return i.createElement(oe,Object.assign({},ae&&r,{id:n||e,className:(0,o.i)(a.Z.drawerPanel,f&&a.Z.modifiers.resizable,g&&a.Z.modifiers.noBorder,(0,d.wt)(R,a.Z),x===l.Jd.light200&&a.Z.modifiers.light_200,x===l.Jd.noBackground&&a.Z.modifiers.noBackground,t),onTransitionEnd:e=>{e.target===O.current&&(F||"transform"!==e.nativeEvent.propertyName||z(e),I(!F),ae&&"transform"===e.nativeEvent.propertyName&&M((e=>!e)))},hidden:F},(v||h||_)&&{style:ie},E,{ref:O}),X&&i.createElement(i.Fragment,null,f&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,o.i)(a.Z.drawerSplitter,"bottom"!==L&&a.Z.modifiers.vertical),role:"separator",tabIndex:0,"aria-orientation":"bottom"===L?"horizontal":"vertical","aria-label":B,"aria-valuenow":N,"aria-valuemin":0,"aria-valuemax":100,"aria-controls":n||e,onMouseDown:Q,onKeyDown:re,onTouchStart:G,ref:y},i.createElement("div",{className:(0,o.i)(a.Z.drawerSplitterHandle),"aria-hidden":!0})),i.createElement("div",{className:(0,o.i)(a.Z.drawerPanelMain)},p)),!f&&p))}))};p.displayName="DrawerPanelContent"},13302:(e,t,n)=>{n.d(t,{Z:()=>r}),n(80897);const r={dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",drawerActions:"pf-v5-c-drawer__actions",drawerBody:"pf-v5-c-drawer__body",drawerClose:"pf-v5-c-drawer__close",drawerContent:"pf-v5-c-drawer__content",drawerHead:"pf-v5-c-drawer__head",drawerMain:"pf-v5-c-drawer__main",drawerPanel:"pf-v5-c-drawer__panel",drawerPanelMain:"pf-v5-c-drawer__panel-main",drawerSection:"pf-v5-c-drawer__section",drawerSplitter:"pf-v5-c-drawer__splitter",drawerSplitterHandle:"pf-v5-c-drawer__splitter-handle",modifiers:{panelBottom:"pf-m-panel-bottom",inline:"pf-m-inline",noBorder:"pf-m-no-border",resizable:"pf-m-resizable",static:"pf-m-static",panelLeft:"pf-m-panel-left",expanded:"pf-m-expanded",resizing:"pf-m-resizing",noBackground:"pf-m-no-background",light_200:"pf-m-light-200",noPadding:"pf-m-no-padding",padding:"pf-m-padding",vertical:"pf-m-vertical",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl",inlineOnLg:"pf-m-inline-on-lg",staticOnLg:"pf-m-static-on-lg",inlineOnXl:"pf-m-inline-on-xl",staticOnXl:"pf-m-static-on-xl",inlineOn_2xl:"pf-m-inline-on-2xl",staticOn_2xl:"pf-m-static-on-2xl"},pageMain:"pf-v5-c-page__main",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/5421.796246d8b33c5321137a72c4f1b05c30.js.map
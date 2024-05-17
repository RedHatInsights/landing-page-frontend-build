"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[3818],{5436:(e,t,n)=>{n.d(t,{Jd:()=>r,dy:()=>c,rf:()=>d});var r,i=n(65353),a=n(28416),o=n(13302),l=n(38296);!function(e){e.default="default",e.light200="light-200",e.noBackground="no-background"}(r||(r={}));const d=a.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"end",drawerRef:null,drawerContentRef:null,isInline:!1}),c=e=>{var{className:t="",children:n,isExpanded:r=!1,isInline:c=!1,isStatic:s=!1,position:u="end",onExpand:p=(()=>{})}=e,f=(0,i.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);const m=a.useRef(),g=a.useRef();return a.createElement(d.Provider,{value:{isExpanded:r,isStatic:s,onExpand:p,position:u,drawerRef:m,drawerContentRef:g,isInline:c}},a.createElement("div",Object.assign({className:(0,l.i)(o.Z.drawer,r&&o.Z.modifiers.expanded,c&&o.Z.modifiers.inline,s&&o.Z.modifiers.static,("left"===u||"start"===u)&&o.Z.modifiers.panelLeft,"bottom"===u&&o.Z.modifiers.panelBottom,t),ref:m},f),n))};c.displayName="Drawer"},34241:(e,t,n)=>{n.d(t,{s:()=>c});var r=n(65353),i=n(28416),a=n(13302),o=n(38296);const l=e=>{var{className:t="",children:n}=e,l=(0,r.__rest)(e,["className","children"]);return i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerMain,t)},l),n)};l.displayName="DrawerMain";var d=n(5436);const c=e=>{var{className:t="",children:n,panelContent:c,colorVariant:s=d.Jd.default}=e,u=(0,r.__rest)(e,["className","children","panelContent","colorVariant"]);const{drawerContentRef:p}=i.useContext(d.rf);return i.createElement(l,null,i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerContent,s===d.Jd.light200&&a.Z.modifiers.light_200,s===d.Jd.noBackground&&a.Z.modifiers.noBackground,t),ref:p},u),n),c)};c.displayName="DrawerContent"},16537:(e,t,n)=>{n.d(t,{s:()=>l});var r=n(65353),i=n(28416),a=n(13302),o=n(38296);const l=e=>{var{className:t="",children:n,hasPadding:l=!1}=e,d=(0,r.__rest)(e,["className","children","hasPadding"]);return i.createElement("div",Object.assign({className:(0,o.i)(a.Z.drawerBody,l&&a.Z.modifiers.padding,t)},d),n)};l.displayName="DrawerContentBody"},3401:(e,t,n)=>{n.d(t,{S:()=>g});var r=n(65353),i=n(28416),a=n.n(i),o=n(13302),l=n(38296),d=n(5436),c=n(80164),s=n(41724),u=n(44291);const p=(0,i.forwardRef)((function(e,t){var{active:n=!0,paused:o=!1,focusTrapOptions:l={},preventScrollOnDeactivate:d=!1}=e,c=(0,r.__rest)(e,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const s=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>s.current));const p=(0,i.useRef)(null);(0,i.useEffect)((()=>{const e=(0,u.v)(s.current,Object.assign(Object.assign({},l),{returnFocusOnDeactivate:!1}));return p.current=e,()=>{e.deactivate()}}),[]),(0,i.useEffect)((()=>{const e=p.current;n?null==e||e.activate():null==e||e.deactivate()}),[n]),(0,i.useEffect)((()=>{const e=p.current;o?null==e||e.pause():null==e||e.unpause()}),[o]);const f=(0,i.useRef)("undefined"!=typeof document?document.activeElement:null);return function(e){const t=(0,i.useRef)(e);t.current=e,(0,i.useEffect)((()=>()=>{t.current()}),[])}((()=>{!1!==l.returnFocusOnDeactivate&&f.current instanceof HTMLElement&&f.current.focus({preventScroll:d})})),a().createElement("div",Object.assign({ref:s},c))}));p.displayName="FocusTrap";let f=null,m=0;const g=e=>{var{className:t="",id:n,children:a,hasNoBorder:u=!1,isResizable:g=!1,onResize:w,minSize:h,defaultSize:v,maxSize:_,increment:C=5,resizeAriaLabel:R="Resize",widths:x,colorVariant:B=d.Jd.default,focusTrap:b}=e,E=(0,r.__rest)(e,["className","id","children","hasNoBorder","isResizable","onResize","minSize","defaultSize","maxSize","increment","resizeAriaLabel","widths","colorVariant","focusTrap"]);const O=i.useRef(),y=i.useRef(),[N,S]=i.useState(0),{position:L,isExpanded:Z,isStatic:D,onExpand:P,drawerRef:k,drawerContentRef:z,isInline:A}=i.useContext(d.rf),F=!D&&!Z,[T,I]=i.useState(!F),[X,M]=i.useState(!1),j=i.useRef(null);let J,V,H,U,Y=0,$=!0;D&&(null==b?void 0:b.enabled)&&console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."),i.useEffect((()=>{!D&&Z&&I(Z)}),[D,Z]);const G=()=>{let e,t;const n="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction");!A||"end"!==L&&"right"!==L?!A||"start"!==L&&"left"!==L?"end"===L||"right"===L?n?(e=z.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=z.current.getBoundingClientRect().left-z.current.getBoundingClientRect().right):(e=z.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=z.current.getBoundingClientRect().right-z.current.getBoundingClientRect().left):"start"===L||"left"===L?n?(e=y.current.getBoundingClientRect().left-z.current.getBoundingClientRect().right,t=z.current.getBoundingClientRect().left-z.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-z.current.getBoundingClientRect().left,t=z.current.getBoundingClientRect().right-z.current.getBoundingClientRect().left):"bottom"===L&&(e=z.current.getBoundingClientRect().bottom-y.current.getBoundingClientRect().top,t=z.current.getBoundingClientRect().bottom-z.current.getBoundingClientRect().top):n?(e=y.current.getBoundingClientRect().left-O.current.getBoundingClientRect().right,t=k.current.getBoundingClientRect().left-k.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-O.current.getBoundingClientRect().left,t=k.current.getBoundingClientRect().right-k.current.getBoundingClientRect().left):n?(e=O.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=k.current.getBoundingClientRect().left-k.current.getBoundingClientRect().right):(e=O.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=k.current.getBoundingClientRect().right-k.current.getBoundingClientRect().left);const r=e/t*100;return Math.round(100*(r+Number.EPSILON))/100},K=e=>{e.stopPropagation(),document.addEventListener("touchmove",te,{passive:!1}),document.addEventListener("touchend",ee),f=!0},q=e=>{e.stopPropagation(),e.preventDefault(),document.addEventListener("mousemove",W),document.addEventListener("mouseup",ne),k.current.classList.add((0,l.i)(o.Z.modifiers.resizing)),f=!0,$=!0},Q=(e,t)=>{const n="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction");if(e.stopPropagation(),!f)return;$&&(J=O.current.getBoundingClientRect(),n?(H=J.right,V=J.left):(V=J.right,H=J.left),U=J.bottom,$=!1);let r=0;r="end"===L||"right"===L?n?t-V:V-t:"start"===L||"left"===L?n?H-t:t-H:U-t,"bottom"===L&&(O.current.style.overflowAnchor="none"),O.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",r+"px"),Y=r,S(G())},W=i.useCallback((e=>{const t="bottom"===L?e.clientY:e.clientX;Q(e,t)}),[]),ee=i.useCallback((e=>{e.stopPropagation(),f&&(f=!1,w&&w(e,Y,n),document.removeEventListener("touchmove",te),document.removeEventListener("touchend",ee))}),[]),te=i.useCallback((e=>{e.preventDefault(),e.stopImmediatePropagation();const t="bottom"===L?e.touches[0].clientY:e.touches[0].clientX;Q(e,t)}),[]),ne=i.useCallback((e=>{f&&(k.current.classList.remove((0,l.i)(o.Z.modifiers.resizing)),f=!1,w&&w(e,Y,n),$=!0,document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",ne))}),[]),re=e=>{const t="rtl"===window.getComputedStyle(O.current).getPropertyValue("direction"),r=e.key;if("Escape"!==r&&"Enter"!==r&&"ArrowUp"!==r&&"ArrowDown"!==r&&"ArrowLeft"!==r&&"ArrowRight"!==r)return void(f&&e.preventDefault());e.preventDefault(),"Escape"!==r&&"Enter"!==r||w&&w(e,Y,n);const i=O.current.getBoundingClientRect();m="bottom"===L?i.height:i.width;let a=0;"ArrowRight"===r?a=t?"left"===L||"start"===L?-C:C:"left"===L||"start"===L?C:-C:"ArrowLeft"===r?a=t?"left"===L||"start"===L?C:-C:"left"===L||"start"===L?-C:C:"ArrowUp"===r?a=C:"ArrowDown"===r&&(a=-C),m+=a,"bottom"===L&&(O.current.style.overflowAnchor="none"),O.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",m+"px"),Y=m,S(G())},ie={};v&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis"]=v),h&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--min"]=h),_&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--max"]=_);const ae=(null==b?void 0:b.enabled)&&!D,oe=ae?p:"div";return i.createElement(s.w,{prefix:"pf-drawer-panel-"},(e=>{const r={tabIndex:-1,"aria-modal":!0,role:"dialog",active:X,"aria-labelledby":(null==b?void 0:b["aria-labelledby"])||n||e,focusTrapOptions:{fallbackFocus:()=>O.current,onActivate:()=>{j.current!==document.activeElement&&(j.current=document.activeElement)},onDeactivate:()=>{j.current&&j.current.focus&&j.current.focus()},clickOutsideDeactivates:!0,returnFocusOnDeactivate:!1,initialFocus:(null==b?void 0:b.elementToFocusOnExpand)||void 0,escapeDeactivates:!1}};return i.createElement(oe,Object.assign({},ae&&r,{id:n||e,className:(0,l.i)(o.Z.drawerPanel,g&&o.Z.modifiers.resizable,u&&o.Z.modifiers.noBorder,(0,c.wt)(x,o.Z),B===d.Jd.light200&&o.Z.modifiers.light_200,B===d.Jd.noBackground&&o.Z.modifiers.noBackground,t),onTransitionEnd:e=>{e.target===O.current&&(F||"transform"!==e.nativeEvent.propertyName||P(e),I(!F),ae&&"transform"===e.nativeEvent.propertyName&&M((e=>!e)))},hidden:F},(v||h||_)&&{style:ie},E,{ref:O}),T&&i.createElement(i.Fragment,null,g&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,l.i)(o.Z.drawerSplitter,"bottom"!==L&&o.Z.modifiers.vertical),role:"separator",tabIndex:0,"aria-orientation":"bottom"===L?"horizontal":"vertical","aria-label":R,"aria-valuenow":N,"aria-valuemin":0,"aria-valuemax":100,"aria-controls":n||e,onMouseDown:q,onKeyDown:re,onTouchStart:K,ref:y},i.createElement("div",{className:(0,l.i)(o.Z.drawerSplitterHandle),"aria-hidden":!0})),i.createElement("div",{className:(0,l.i)(o.Z.drawerPanelMain)},a)),!g&&a))}))};g.displayName="DrawerPanelContent"},41724:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(28416);let i=0;class a extends r.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${i++}`}render(){return this.props.children(this.id)}}a.displayName="GenerateId",a.defaultProps={prefix:"pf-random-id-"}},13302:(e,t,n)=>{n.d(t,{Z:()=>r}),n(80897);const r={dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",drawerActions:"pf-v5-c-drawer__actions",drawerBody:"pf-v5-c-drawer__body",drawerClose:"pf-v5-c-drawer__close",drawerContent:"pf-v5-c-drawer__content",drawerHead:"pf-v5-c-drawer__head",drawerMain:"pf-v5-c-drawer__main",drawerPanel:"pf-v5-c-drawer__panel",drawerPanelMain:"pf-v5-c-drawer__panel-main",drawerSection:"pf-v5-c-drawer__section",drawerSplitter:"pf-v5-c-drawer__splitter",drawerSplitterHandle:"pf-v5-c-drawer__splitter-handle",modifiers:{panelBottom:"pf-m-panel-bottom",inline:"pf-m-inline",noBorder:"pf-m-no-border",resizable:"pf-m-resizable",static:"pf-m-static",panelLeft:"pf-m-panel-left",expanded:"pf-m-expanded",resizing:"pf-m-resizing",noBackground:"pf-m-no-background",light_200:"pf-m-light-200",noPadding:"pf-m-no-padding",padding:"pf-m-padding",vertical:"pf-m-vertical",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl",inlineOnLg:"pf-m-inline-on-lg",staticOnLg:"pf-m-static-on-lg",inlineOnXl:"pf-m-inline-on-xl",staticOnXl:"pf-m-static-on-xl",inlineOn_2xl:"pf-m-inline-on-2xl",staticOn_2xl:"pf-m-static-on-2xl"},pageMain:"pf-v5-c-page__main",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/3818.485ee93194e4e782904e95be91a25057.js.map
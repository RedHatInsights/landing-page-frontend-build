"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[314],{2588:(e,t,n)=>{n.d(t,{zx:()=>g,qE:()=>p,L$:()=>m,Wu:()=>u});var r=n(5353),a=n(6029),i=n(480),l=n(8296),s=n(2372),o=n(2472),d=n(2971);const c=e=>{var{isRead:t=!1,className:n="",children:i="",screenReaderText:s}=e,o=(0,r.__rest)(e,["isRead","className","children","screenReaderText"]);return a.createElement("span",Object.assign({},o,{className:(0,l.i)(d.Z.badge,t?d.Z.modifiers.read:d.Z.modifiers.unread,n)}),i,s&&a.createElement("span",{className:"pf-v5-screen-reader"},s))};var u,m,p;c.displayName="Badge",function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(u||(u={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(m||(m={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(p||(p={}));const f=e=>{var{children:t=null,className:n="",component:d="button",isActive:f=!1,isBlock:w=!1,isDisabled:h=!1,isAriaDisabled:v=!1,isLoading:b=null,isDanger:_=!1,spinnerAriaValueText:C,spinnerAriaLabelledBy:x,spinnerAriaLabel:B,size:N=p.default,inoperableEvents:E=["onClick","onKeyPress"],isInline:R=!1,type:y=m.button,variant:O=u.primary,iconPosition:D="start","aria-label":P=null,icon:S=null,ouiaId:L,ouiaSafe:k=!0,tabIndex:z=null,innerRef:A,countOptions:Z}=e,I=(0,r.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const j=(0,o.S$)(g.displayName,L,k,O),T=d,F="button"===T,V=R&&"span"===T,X=E.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return a.createElement(T,Object.assign({},I,v?X:null,{"aria-disabled":h||v,"aria-label":P,className:(0,l.i)(i.Z.button,i.Z.modifiers[O],w&&i.Z.modifiers.block,h&&i.Z.modifiers.disabled,v&&i.Z.modifiers.ariaDisabled,f&&i.Z.modifiers.active,R&&O===u.link&&i.Z.modifiers.inline,_&&(O===u.secondary||O===u.link)&&i.Z.modifiers.danger,null!==b&&O!==u.plain&&i.Z.modifiers.progress,b&&i.Z.modifiers.inProgress,N===p.sm&&i.Z.modifiers.small,N===p.lg&&i.Z.modifiers.displayLg,n),disabled:F?h:null,tabIndex:null!==z?z:h?F?null:-1:v?null:V?0:void 0,type:F||V?y:null,role:V?"button":null,ref:A},j),b&&a.createElement("span",{className:(0,l.i)(i.Z.buttonProgress)},a.createElement(s.$,{size:s.S.md,isInline:R,"aria-valuetext":C,"aria-label":B,"aria-labelledby":x})),O===u.plain&&null===t&&S?S:null,O!==u.plain&&S&&("start"===D||"left"===D)&&a.createElement("span",{className:(0,l.i)(i.Z.buttonIcon,i.Z.modifiers.start)},S),t,O!==u.plain&&S&&("end"===D||"right"===D)&&a.createElement("span",{className:(0,l.i)(i.Z.buttonIcon,i.Z.modifiers.end)},S),Z&&a.createElement("span",{className:(0,l.i)(i.Z.buttonCount,Z.className)},a.createElement(c,{isRead:Z.isRead},Z.count)))},g=a.forwardRef(((e,t)=>a.createElement(f,Object.assign({innerRef:t},e))));g.displayName="Button"},314:(e,t,n)=>{n.r(t),n.d(t,{Drawer:()=>c,DrawerActions:()=>u,DrawerCloseButton:()=>f,DrawerColorVariant:()=>s,DrawerContent:()=>w,DrawerContentBody:()=>h,DrawerContext:()=>d,DrawerHead:()=>b,DrawerPanelBody:()=>v,DrawerPanelContent:()=>R,DrawerSection:()=>y});var r=n(5353),a=n(6029),i=n.n(a);n(897);const l={dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",drawerActions:"pf-v5-c-drawer__actions",drawerBody:"pf-v5-c-drawer__body",drawerClose:"pf-v5-c-drawer__close",drawerContent:"pf-v5-c-drawer__content",drawerHead:"pf-v5-c-drawer__head",drawerMain:"pf-v5-c-drawer__main",drawerPanel:"pf-v5-c-drawer__panel",drawerPanelMain:"pf-v5-c-drawer__panel-main",drawerSection:"pf-v5-c-drawer__section",drawerSplitter:"pf-v5-c-drawer__splitter",drawerSplitterHandle:"pf-v5-c-drawer__splitter-handle",modifiers:{panelBottom:"pf-m-panel-bottom",inline:"pf-m-inline",noBorder:"pf-m-no-border",resizable:"pf-m-resizable",static:"pf-m-static",panelLeft:"pf-m-panel-left",expanded:"pf-m-expanded",resizing:"pf-m-resizing",noBackground:"pf-m-no-background",light_200:"pf-m-light-200",noPadding:"pf-m-no-padding",padding:"pf-m-padding",vertical:"pf-m-vertical",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl",inlineOnLg:"pf-m-inline-on-lg",staticOnLg:"pf-m-static-on-lg",inlineOnXl:"pf-m-inline-on-xl",staticOnXl:"pf-m-static-on-xl",inlineOn_2xl:"pf-m-inline-on-2xl",staticOn_2xl:"pf-m-static-on-2xl"},pageMain:"pf-v5-c-page__main",themeDark:"pf-v5-theme-dark"};var s,o=n(8296);!function(e){e.default="default",e.light200="light-200",e.noBackground="no-background"}(s||(s={}));const d=a.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"end",drawerRef:null,drawerContentRef:null,isInline:!1}),c=e=>{var{className:t="",children:n,isExpanded:i=!1,isInline:s=!1,isStatic:c=!1,position:u="end",onExpand:m=(()=>{})}=e,p=(0,r.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);const f=a.useRef(),g=a.useRef();return a.createElement(d.Provider,{value:{isExpanded:i,isStatic:c,onExpand:m,position:u,drawerRef:f,drawerContentRef:g,isInline:s}},a.createElement("div",Object.assign({className:(0,o.i)(l.drawer,i&&l.modifiers.expanded,s&&l.modifiers.inline,c&&l.modifiers.static,("left"===u||"start"===u)&&l.modifiers.panelLeft,"bottom"===u&&l.modifiers.panelBottom,t),ref:f},p),n))};c.displayName="Drawer";const u=e=>{var{className:t="",children:n}=e,i=(0,r.__rest)(e,["className","children"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerActions,t)},i),n)};u.displayName="DrawerActions";var m=n(2588),p=n(4307);const f=e=>{var{className:t="",onClose:n=(()=>{}),"aria-label":i="Close drawer panel"}=e,s=(0,r.__rest)(e,["className","onClose","aria-label"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerClose,t)},s),a.createElement(m.zx,{variant:"plain",onClick:n,"aria-label":i},a.createElement(p.ZP,null)))};f.displayName="DrawerCloseButton";const g=e=>{var{className:t="",children:n}=e,i=(0,r.__rest)(e,["className","children"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerMain,t)},i),n)};g.displayName="DrawerMain";const w=e=>{var{className:t="",children:n,panelContent:i,colorVariant:c=s.default}=e,u=(0,r.__rest)(e,["className","children","panelContent","colorVariant"]);const{drawerContentRef:m}=a.useContext(d);return a.createElement(g,null,a.createElement("div",Object.assign({className:(0,o.i)(l.drawerContent,c===s.light200&&l.modifiers.light_200,c===s.noBackground&&l.modifiers.noBackground,t),ref:m},u),n),i)};w.displayName="DrawerContent";const h=e=>{var{className:t="",children:n,hasPadding:i=!1}=e,s=(0,r.__rest)(e,["className","children","hasPadding"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerBody,i&&l.modifiers.padding,t)},s),n)};h.displayName="DrawerContentBody";const v=e=>{var{className:t="",children:n,hasNoPadding:i=!1}=e,s=(0,r.__rest)(e,["className","children","hasNoPadding"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerBody,i&&l.modifiers.noPadding,t)},s),n)};v.displayName="DrawerPanelBody";const b=e=>{var{className:t="",children:n,hasNoPadding:i=!1}=e,s=(0,r.__rest)(e,["className","children","hasNoPadding"]);return a.createElement(v,{hasNoPadding:i},a.createElement("div",Object.assign({className:(0,o.i)(l.drawerHead,t)},s),n))};b.displayName="DrawerHead";var _=n(164),C=n(1724),x=n(4291);const B=(0,a.forwardRef)((function(e,t){var{active:n=!0,paused:l=!1,focusTrapOptions:s={},preventScrollOnDeactivate:o=!1}=e,d=(0,r.__rest)(e,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const c=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(()=>c.current));const u=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=(0,x.v)(c.current,Object.assign(Object.assign({},s),{returnFocusOnDeactivate:!1}));return u.current=e,()=>{e.deactivate()}}),[]),(0,a.useEffect)((()=>{const e=u.current;n?null==e||e.activate():null==e||e.deactivate()}),[n]),(0,a.useEffect)((()=>{const e=u.current;l?null==e||e.pause():null==e||e.unpause()}),[l]);const m=(0,a.useRef)("undefined"!=typeof document?document.activeElement:null);return function(e){const t=(0,a.useRef)(e);t.current=e,(0,a.useEffect)((()=>()=>{t.current()}),[])}((()=>{!1!==s.returnFocusOnDeactivate&&m.current instanceof HTMLElement&&m.current.focus({preventScroll:o})})),i().createElement("div",Object.assign({ref:c},d))}));B.displayName="FocusTrap";let N=null,E=0;const R=e=>{var{className:t="",id:n,children:i,hasNoBorder:c=!1,isResizable:u=!1,onResize:m,minSize:p,defaultSize:f,maxSize:g,increment:w=5,resizeAriaLabel:h="Resize",widths:v,colorVariant:b=s.default,focusTrap:x}=e,R=(0,r.__rest)(e,["className","id","children","hasNoBorder","isResizable","onResize","minSize","defaultSize","maxSize","increment","resizeAriaLabel","widths","colorVariant","focusTrap"]);const y=a.useRef(),O=a.useRef(),[D,P]=a.useState(0),{position:S,isExpanded:L,isStatic:k,onExpand:z,drawerRef:A,drawerContentRef:Z,isInline:I}=a.useContext(d),j=!k&&!L,[T,F]=a.useState(!j),[V,X]=a.useState(!1),M=a.useRef(null);let H,$,K,U,Y=0,q=!0;k&&(null==x?void 0:x.enabled)&&console.warn("DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap."),a.useEffect((()=>{!k&&L&&F(L)}),[k,L]);const G=()=>{let e,t;const n="rtl"===window.getComputedStyle(y.current).getPropertyValue("direction");!I||"end"!==S&&"right"!==S?!I||"start"!==S&&"left"!==S?"end"===S||"right"===S?n?(e=Z.current.getBoundingClientRect().left-O.current.getBoundingClientRect().right,t=Z.current.getBoundingClientRect().left-Z.current.getBoundingClientRect().right):(e=Z.current.getBoundingClientRect().right-O.current.getBoundingClientRect().left,t=Z.current.getBoundingClientRect().right-Z.current.getBoundingClientRect().left):"start"===S||"left"===S?n?(e=O.current.getBoundingClientRect().left-Z.current.getBoundingClientRect().right,t=Z.current.getBoundingClientRect().left-Z.current.getBoundingClientRect().right):(e=O.current.getBoundingClientRect().right-Z.current.getBoundingClientRect().left,t=Z.current.getBoundingClientRect().right-Z.current.getBoundingClientRect().left):"bottom"===S&&(e=Z.current.getBoundingClientRect().bottom-O.current.getBoundingClientRect().top,t=Z.current.getBoundingClientRect().bottom-Z.current.getBoundingClientRect().top):n?(e=O.current.getBoundingClientRect().left-y.current.getBoundingClientRect().right,t=A.current.getBoundingClientRect().left-A.current.getBoundingClientRect().right):(e=O.current.getBoundingClientRect().right-y.current.getBoundingClientRect().left,t=A.current.getBoundingClientRect().right-A.current.getBoundingClientRect().left):n?(e=y.current.getBoundingClientRect().left-O.current.getBoundingClientRect().right,t=A.current.getBoundingClientRect().left-A.current.getBoundingClientRect().right):(e=y.current.getBoundingClientRect().right-O.current.getBoundingClientRect().left,t=A.current.getBoundingClientRect().right-A.current.getBoundingClientRect().left);const r=e/t*100;return Math.round(100*(r+Number.EPSILON))/100},W=e=>{e.stopPropagation(),document.addEventListener("touchmove",ne,{passive:!1}),document.addEventListener("touchend",te),N=!0},J=e=>{e.stopPropagation(),e.preventDefault(),document.addEventListener("mousemove",ee),document.addEventListener("mouseup",re),A.current.classList.add((0,o.i)(l.modifiers.resizing)),N=!0,q=!0},Q=(e,t)=>{const n="rtl"===window.getComputedStyle(y.current).getPropertyValue("direction");if(e.stopPropagation(),!N)return;q&&(H=y.current.getBoundingClientRect(),n?(K=H.right,$=H.left):($=H.right,K=H.left),U=H.bottom,q=!1);let r=0;r="end"===S||"right"===S?n?t-$:$-t:"start"===S||"left"===S?n?K-t:t-K:U-t,"bottom"===S&&(y.current.style.overflowAnchor="none"),y.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",r+"px"),Y=r,P(G())},ee=a.useCallback((e=>{const t="bottom"===S?e.clientY:e.clientX;Q(e,t)}),[]),te=a.useCallback((e=>{e.stopPropagation(),N&&(N=!1,m&&m(e,Y,n),document.removeEventListener("touchmove",ne),document.removeEventListener("touchend",te))}),[]),ne=a.useCallback((e=>{e.preventDefault(),e.stopImmediatePropagation();const t="bottom"===S?e.touches[0].clientY:e.touches[0].clientX;Q(e,t)}),[]),re=a.useCallback((e=>{N&&(A.current.classList.remove((0,o.i)(l.modifiers.resizing)),N=!1,m&&m(e,Y,n),q=!0,document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",re))}),[]),ae=e=>{const t="rtl"===window.getComputedStyle(y.current).getPropertyValue("direction"),r=e.key;if("Escape"!==r&&"Enter"!==r&&"ArrowUp"!==r&&"ArrowDown"!==r&&"ArrowLeft"!==r&&"ArrowRight"!==r)return void(N&&e.preventDefault());e.preventDefault(),"Escape"!==r&&"Enter"!==r||m&&m(e,Y,n);const a=y.current.getBoundingClientRect();E="bottom"===S?a.height:a.width;let i=0;"ArrowRight"===r?i=t?"left"===S||"start"===S?-w:w:"left"===S||"start"===S?w:-w:"ArrowLeft"===r?i=t?"left"===S||"start"===S?w:-w:"left"===S||"start"===S?-w:w:"ArrowUp"===r?i=w:"ArrowDown"===r&&(i=-w),E+=i,"bottom"===S&&(y.current.style.overflowAnchor="none"),y.current.style.setProperty("--pf-v5-c-drawer__panel--md--FlexBasis",E+"px"),Y=E,P(G())},ie={};f&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis"]=f),p&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--min"]=p),g&&(ie["--pf-v5-c-drawer__panel--md--FlexBasis--max"]=g);const le=(null==x?void 0:x.enabled)&&!k,se=le?B:"div";return a.createElement(C.w,{prefix:"pf-drawer-panel-"},(e=>{const r={tabIndex:-1,"aria-modal":!0,role:"dialog",active:V,"aria-labelledby":(null==x?void 0:x["aria-labelledby"])||n||e,focusTrapOptions:{fallbackFocus:()=>y.current,onActivate:()=>{M.current!==document.activeElement&&(M.current=document.activeElement)},onDeactivate:()=>{M.current&&M.current.focus&&M.current.focus()},clickOutsideDeactivates:!0,returnFocusOnDeactivate:!1,initialFocus:(null==x?void 0:x.elementToFocusOnExpand)||void 0,escapeDeactivates:!1}};return a.createElement(se,Object.assign({},le&&r,{id:n||e,className:(0,o.i)(l.drawerPanel,u&&l.modifiers.resizable,c&&l.modifiers.noBorder,(0,_.wt)(v,l),b===s.light200&&l.modifiers.light_200,b===s.noBackground&&l.modifiers.noBackground,t),onTransitionEnd:e=>{e.target===y.current&&(j||"transform"!==e.nativeEvent.propertyName||z(e),F(!j),le&&"transform"===e.nativeEvent.propertyName&&X((e=>!e)))},hidden:j},(f||p||g)&&{style:ie},R,{ref:y}),T&&a.createElement(a.Fragment,null,u&&a.createElement(a.Fragment,null,a.createElement("div",{className:(0,o.i)(l.drawerSplitter,"bottom"!==S&&l.modifiers.vertical),role:"separator",tabIndex:0,"aria-orientation":"bottom"===S?"horizontal":"vertical","aria-label":h,"aria-valuenow":D,"aria-valuemin":0,"aria-valuemax":100,"aria-controls":n||e,onMouseDown:J,onKeyDown:ae,onTouchStart:W,ref:O},a.createElement("div",{className:(0,o.i)(l.drawerSplitterHandle),"aria-hidden":!0})),a.createElement("div",{className:(0,o.i)(l.drawerPanelMain)},i)),!u&&i))}))};R.displayName="DrawerPanelContent";const y=e=>{var{className:t="",children:n,colorVariant:i=s.default}=e,d=(0,r.__rest)(e,["className","children","colorVariant"]);return a.createElement("div",Object.assign({className:(0,o.i)(l.drawerSection,i===s.light200&&l.modifiers.light_200,i===s.noBackground&&l.modifiers.noBackground,t)},d),n)};y.displayName="DrawerSection"},2372:(e,t,n)=>{n.d(t,{$:()=>o,S:()=>r});var r,a=n(5353),i=n(6029),l=n(2698),s=n(8296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));const o=e=>{var{className:t="",size:n="xl","aria-valuetext":r="Loading...",diameter:o,isInline:d=!1,"aria-label":c,"aria-labelledBy":u}=e,m=(0,a.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return i.createElement("svg",Object.assign({className:(0,s.i)(l.Z.spinner,d?l.Z.modifiers.inline:l.Z.modifiers[n],t),role:"progressbar","aria-valuetext":r,viewBox:"0 0 100 100"},o&&{style:{"--pf-v5-c-spinner--diameter":o}},c&&{"aria-label":c},u&&{"aria-labelledBy":u},!c&&!u&&{"aria-label":"Contents"},m),i.createElement("circle",{className:l.Z.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};o.displayName="Spinner"},1724:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(6029);let a=0;class i extends r.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${a++}`}render(){return this.props.children(this.id)}}i.displayName="GenerateId",i.defaultProps={prefix:"pf-random-id-"}}}]);
//# sourceMappingURL=../sourcemaps/314.aaf3d376de14d6d49545f002b9ed755c.js.map
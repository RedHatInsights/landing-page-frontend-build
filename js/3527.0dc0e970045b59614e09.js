"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[3527],{63527:(e,a,i)=>{i.r(a),i.d(a,{Page:()=>w,PageBreadcrumb:()=>k,PageContext:()=>h,PageContextConsumer:()=>b,PageContextProvider:()=>f,PageGroup:()=>u,PageLayouts:()=>v,PageNavigation:()=>E,PageSection:()=>T,PageSectionTypes:()=>M,PageSectionVariants:()=>N,PageSidebar:()=>_,PageSidebarBody:()=>y,PageSidebarContext:()=>B,PageToggleButton:()=>I,pageContextDefaults:()=>g,pageSidebarContextDefaults:()=>O});var t=i(65353),n=i(28416);i(92084);const r={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"};var o=i(38296),s=i(17766),d=i(80164),l=i(3401),p=i(5436),c=i(34241),m=i(16537);const g={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:d.iu,getVerticalBreakpoint:d.xb},h=n.createContext(g),f=h.Provider,b=h.Consumer,u=e=>{var{className:a="",children:i,stickyOnBreakpoint:s,hasShadowTop:l=!1,hasShadowBottom:p=!1,hasOverflowScroll:c=!1,"aria-label":m}=e,g=(0,t.__rest)(e,["className","children","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:f,getVerticalBreakpoint:b}=n.useContext(h);return n.useEffect((()=>{c&&!m&&console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[c,m]),n.createElement("div",Object.assign({},g,{className:(0,o.i)(r.pageMainGroup,(0,d.wt)(s,r,"sticky-",b(f),!0),l&&r.modifiers.shadowTop,p&&r.modifiers.shadowBottom,c&&r.modifiers.overflowScroll,a)},c&&{tabIndex:0,role:"region","aria-label":m}),i)};u.displayName="PageGroup";var v,S=i(84709);!function(e){e.vertical="vertical",e.horizontal="horizontal"}(v||(v={}));class w extends n.Component{constructor(e){super(e),this.mainRef=n.createRef(),this.pageRef=n.createRef(),this.observer=()=>{},this.getWindowWidth=()=>d.Nq?this.pageRef.current?this.pageRef.current.clientWidth:window.innerWidth:1200,this.isMobile=()=>this.getWindowWidth()<Number.parseInt(s.Z.value,10),this.resize=e=>{var a;const{onPageResize:i}=this.props,t=this.isMobile();if(i&&i(e,{mobileView:t,windowSize:this.getWindowWidth()}),t!==this.state.mobileView&&this.setState({mobileView:t}),null===(a=this.pageRef)||void 0===a?void 0:a.current){const e=this.pageRef.current.clientWidth,a=this.pageRef.current.clientHeight;this.state.width!==e&&this.setState({width:e}),this.state.height!==a&&this.setState({height:a})}},this.handleResize=(0,d.Ds)(this.resize,250),this.handleMainClick=()=>{this.isMobile()&&this.state.mobileIsSidebarOpen&&this.mainRef.current&&this.setState({mobileIsSidebarOpen:!1})},this.onSidebarToggleMobile=()=>{this.setState((e=>({mobileIsSidebarOpen:!e.mobileIsSidebarOpen})))},this.onSidebarToggleDesktop=()=>{this.setState((e=>({desktopIsSidebarOpen:!e.desktopIsSidebarOpen})))};const{isManagedSidebar:a,defaultManagedSidebarIsOpen:i}=e,t=!a||i;this.state={desktopIsSidebarOpen:t,mobileIsSidebarOpen:!1,mobileView:!1,width:null,height:null}}componentDidMount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer=(0,S.p)(this.pageRef.current,this.handleResize);const e=this.mainRef.current;e&&(e.addEventListener("mousedown",this.handleMainClick),e.addEventListener("touchstart",this.handleMainClick)),this.resize()}}componentWillUnmount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer();const e=this.mainRef.current;e&&(e.removeEventListener("mousedown",this.handleMainClick),e.removeEventListener("touchstart",this.handleMainClick))}}render(){const e=this.props,{breadcrumb:a,isBreadcrumbWidthLimited:i,className:s,children:g,header:h,sidebar:b,notificationDrawer:v,isNotificationDrawerExpanded:S,onNotificationDrawerExpand:w,isTertiaryNavWidthLimited:k,skipToContent:O,role:B,mainContainerId:_,isManagedSidebar:y,defaultManagedSidebarIsOpen:N,onPageResize:M,getBreakpoint:x,getVerticalBreakpoint:P,mainAriaLabel:T,mainTabIndex:E,mainComponent:C,tertiaryNav:I,isTertiaryNavGrouped:W,isBreadcrumbGrouped:L,additionalGroupedContent:R,groupProps:z,breadcrumbProps:H}=e,D=(0,t.__rest)(e,["breadcrumb","isBreadcrumbWidthLimited","className","children","header","sidebar","notificationDrawer","isNotificationDrawerExpanded","onNotificationDrawerExpand","isTertiaryNavWidthLimited","skipToContent","role","mainContainerId","isManagedSidebar","defaultManagedSidebarIsOpen","onPageResize","getBreakpoint","getVerticalBreakpoint","mainAriaLabel","mainTabIndex","mainComponent","tertiaryNav","isTertiaryNavGrouped","isBreadcrumbGrouped","additionalGroupedContent","groupProps","breadcrumbProps"]),{mobileView:V,mobileIsSidebarOpen:G,desktopIsSidebarOpen:j,width:A,height:F}=this.state,X={isManagedSidebar:y,onSidebarToggle:V?this.onSidebarToggleMobile:this.onSidebarToggleDesktop,isSidebarOpen:V?G:j,width:A,height:F,getBreakpoint:x,getVerticalBreakpoint:P};let q=null;I&&k?q=n.createElement("div",{className:(0,o.i)(r.pageMainNav,r.modifiers.limitWidth)},n.createElement("div",{className:(0,o.i)(r.pageMainBody)},I)):I&&(q=n.createElement("div",{className:(0,o.i)(r.pageMainNav)},I));const $=a?n.createElement("section",{className:(0,o.i)(r.pageMainBreadcrumb,i&&r.modifiers.limitWidth,(0,d.wt)(null==H?void 0:H.stickyOnBreakpoint,r,"sticky-",P(F),!0))},i?n.createElement("div",{className:(0,o.i)(r.pageMainBody)},a):a):null,U=W||L||R?n.createElement(u,Object.assign({},z),W&&q,L&&$,R):null,Z=C,J=n.createElement(Z,{ref:this.mainRef,role:B,id:_,className:(0,o.i)(r.pageMain),tabIndex:E,"aria-label":T},U,!W&&q,!L&&$,g),K=n.createElement(l.S,null,v);return n.createElement(f,{value:X},n.createElement("div",Object.assign({ref:this.pageRef},D,{className:(0,o.i)(r.page,null!==A&&null!==F&&"pf-m-resize-observer",null!==A&&`pf-m-breakpoint-${x(A)}`,null!==F&&`pf-m-height-breakpoint-${P(F)}`,s)}),O,h,b,v&&n.createElement("div",{className:(0,o.i)(r.pageDrawer)},n.createElement(p.dy,{isExpanded:S,onExpand:e=>w(e)},n.createElement(c.s,{panelContent:K},n.createElement(m.s,null,J)))),!v&&J))}}w.displayName="Page",w.defaultProps={isManagedSidebar:!1,isBreadcrumbWidthLimited:!1,defaultManagedSidebarIsOpen:!0,mainTabIndex:-1,isNotificationDrawerExpanded:!1,onNotificationDrawerExpand:()=>null,mainComponent:"main",getBreakpoint:d.iu,getVerticalBreakpoint:d.xb};const k=e=>{var{className:a="",children:i,isWidthLimited:s,stickyOnBreakpoint:l,hasShadowTop:p=!1,hasShadowBottom:c=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,f=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:u}=n.useContext(h);return n.useEffect((()=>{m&&!g&&console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),n.createElement("section",Object.assign({className:(0,o.i)(r.pageMainBreadcrumb,(0,d.wt)(l,r,"sticky-",u(b),!0),s&&r.modifiers.limitWidth,p&&r.modifiers.shadowTop,c&&r.modifiers.shadowBottom,m&&r.modifiers.overflowScroll,a)},m&&{tabIndex:0},{"aria-label":g},f),s&&n.createElement("div",{className:(0,o.i)(r.pageMainBody)},i),!s&&i)};k.displayName="PageBreadcrumb";const O={isSidebarOpen:!0},B=n.createContext(O),_=e=>{var{className:a="",children:i,isSidebarOpen:s=!0,theme:d="dark",id:l="page-sidebar"}=e,p=(0,t.__rest)(e,["className","children","isSidebarOpen","theme","id"]);return n.createElement(b,null,(({isManagedSidebar:e,isSidebarOpen:t})=>{const c=e?t:s;return n.createElement("div",Object.assign({id:l,className:(0,o.i)(r.pageSidebar,"light"===d&&r.modifiers.light,c&&r.modifiers.expanded,!c&&r.modifiers.collapsed,a),"aria-hidden":!c},p),n.createElement(B.Provider,{value:{isSidebarOpen:c}},i))}))};_.displayName="PageSidebar";const y=e=>{var{children:a,className:i,usePageInsets:s,isFilled:d}=e,l=(0,t.__rest)(e,["children","className","usePageInsets","isFilled"]);return n.createElement("div",Object.assign({className:(0,o.i)(r.pageSidebarBody,s&&r.modifiers.pageInsets,!1===d&&r.modifiers.noFill,!0===d&&r.modifiers.fill,i)},l),a)};var N,M;y.displayName="PageSidebarBody",function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(N||(N={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(M||(M={}));const x={[M.default]:r.pageMainSection,[M.nav]:r.pageMainNav,[M.subNav]:r.pageMainSubnav,[M.breadcrumb]:r.pageMainBreadcrumb,[M.tabs]:r.pageMainTabs,[M.wizard]:r.pageMainWizard},P={[N.default]:"",[N.light]:r.modifiers.light,[N.dark]:r.modifiers.dark_200,[N.darker]:r.modifiers.dark_100},T=e=>{var{className:a="",children:i,variant:s="default",type:l="default",padding:p,isFilled:c,isWidthLimited:m=!1,isCenterAligned:g=!1,stickyOnBreakpoint:f,hasShadowTop:b=!1,hasShadowBottom:u=!1,hasOverflowScroll:v=!1,"aria-label":S,component:w="section"}=e,k=(0,t.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:O,getVerticalBreakpoint:B}=n.useContext(h);n.useEffect((()=>{v&&!S&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[v,S]);const _=w;return n.createElement(_,Object.assign({},k,{className:(0,o.i)(x[l],(0,d.wt)(p,r),(0,d.wt)(f,r,"sticky-",B(O),!0),P[s],!1===c&&r.modifiers.noFill,!0===c&&r.modifiers.fill,m&&r.modifiers.limitWidth,m&&g&&l!==M.subNav&&r.modifiers.alignCenter,b&&r.modifiers.shadowTop,u&&r.modifiers.shadowBottom,v&&r.modifiers.overflowScroll,a)},v&&{tabIndex:0},{"aria-label":S}),m&&n.createElement("div",{className:(0,o.i)(r.pageMainBody)},i),!m&&i)};T.displayName="PageSection";const E=e=>{var{className:a="",children:i,isWidthLimited:s,stickyOnBreakpoint:l,hasShadowTop:p=!1,hasShadowBottom:c=!1,hasOverflowScroll:m=!1,"aria-label":g}=e,f=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:u}=n.useContext(h);return n.useEffect((()=>{m&&!g&&console.warn("PageNavigation: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,g]),n.createElement("div",Object.assign({className:(0,o.i)(r.pageMainNav,(0,d.wt)(l,r,"sticky-",u(b),!0),s&&r.modifiers.limitWidth,p&&r.modifiers.shadowTop,c&&r.modifiers.shadowBottom,m&&r.modifiers.overflowScroll,a)},m&&{tabIndex:0,role:"region","aria-label":g},f),s&&n.createElement("div",{className:(0,o.i)(r.pageMainBody)},i),!s&&i)};E.displayName="PageNavigation";var C=i(32588);const I=e=>{var{children:a,isSidebarOpen:i=!0,onSidebarToggle:r=(()=>{}),id:o="nav-toggle"}=e,s=(0,t.__rest)(e,["children","isSidebarOpen","onSidebarToggle","id"]);return n.createElement(b,null,(({isManagedSidebar:e,onSidebarToggle:t,isSidebarOpen:d})=>{const l=e?t:r,p=e?d:i;return n.createElement(C.zx,Object.assign({id:o,onClick:l,"aria-label":"Side navigation toggle","aria-expanded":p?"true":"false",variant:C.Wu.plain},s),a)}))};I.displayName="PageToggleButton"}}]);
//# sourceMappingURL=../sourcemaps/3527.a0312a7f31a9426b65b85bf9980ccb56.js.map
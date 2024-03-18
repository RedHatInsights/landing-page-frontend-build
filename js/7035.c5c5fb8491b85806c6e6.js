"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[7035],{31495:(e,a,i)=>{i.d(a,{Mi:()=>s,Uv:()=>r,wk:()=>d,z1:()=>o});var t=i(28416),n=i(80164);const r={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:n.iu,getVerticalBreakpoint:n.xb},o=t.createContext(r),s=o.Provider,d=o.Consumer},50442:(e,a,i)=>{i.d(a,{$E:()=>p,az:()=>l,kP:()=>d});var t=i(65353),n=i(28416),r=i(41145),o=i(38296),s=i(31495);const d={isSidebarOpen:!0},l=n.createContext(d),p=e=>{var{className:a="",children:i,isSidebarOpen:d=!0,theme:p="dark",id:c="page-sidebar"}=e,m=(0,t.__rest)(e,["className","children","isSidebarOpen","theme","id"]);return n.createElement(s.wk,null,(({isManagedSidebar:e,isSidebarOpen:t})=>{const s=e?t:d;return n.createElement("div",Object.assign({id:c,className:(0,o.i)(r.Z.pageSidebar,"light"===p&&r.Z.modifiers.light,s&&r.Z.modifiers.expanded,!s&&r.Z.modifiers.collapsed,a),"aria-hidden":!s},m),n.createElement(l.Provider,{value:{isSidebarOpen:s}},i))}))};p.displayName="PageSidebar"},37035:(e,a,i)=>{i.r(a),i.d(a,{Page:()=>u,PageBreadcrumb:()=>v,PageContext:()=>g.z1,PageContextConsumer:()=>g.wk,PageContextProvider:()=>g.Mi,PageGroup:()=>h,PageLayouts:()=>f,PageNavigation:()=>N,PageSection:()=>y,PageSectionTypes:()=>O,PageSectionVariants:()=>k,PageSidebar:()=>S.$E,PageSidebarBody:()=>w,PageSidebarContext:()=>S.az,PageToggleButton:()=>Z,pageContextDefaults:()=>g.Uv,pageSidebarContextDefaults:()=>S.kP});var t=i(65353),n=i(28416),r=i(41145),o=i(38296),s=i(17766),d=i(80164),l=i(16941),p=i(5436),c=i(34241),m=i(16537),g=i(31495);const h=e=>{var{className:a="",children:i,stickyOnBreakpoint:s,hasShadowTop:l=!1,hasShadowBottom:p=!1,hasOverflowScroll:c=!1,"aria-label":m}=e,h=(0,t.__rest)(e,["className","children","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:f,getVerticalBreakpoint:b}=n.useContext(g.z1);return n.useEffect((()=>{c&&!m&&console.warn("PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[c,m]),n.createElement("div",Object.assign({},h,{className:(0,o.i)(r.Z.pageMainGroup,(0,d.wt)(s,r.Z,"sticky-",b(f),!0),l&&r.Z.modifiers.shadowTop,p&&r.Z.modifiers.shadowBottom,c&&r.Z.modifiers.overflowScroll,a)},c&&{tabIndex:0,role:"region","aria-label":m}),i)};h.displayName="PageGroup";var f,b=i(84709);!function(e){e.vertical="vertical",e.horizontal="horizontal"}(f||(f={}));class u extends n.Component{constructor(e){super(e),this.mainRef=n.createRef(),this.pageRef=n.createRef(),this.observer=()=>{},this.getWindowWidth=()=>d.Nq?this.pageRef.current?this.pageRef.current.clientWidth:window.innerWidth:1200,this.isMobile=()=>this.getWindowWidth()<Number.parseInt(s.Z.value,10),this.resize=e=>{var a;const{onPageResize:i}=this.props,t=this.isMobile();if(i&&i(e,{mobileView:t,windowSize:this.getWindowWidth()}),t!==this.state.mobileView&&this.setState({mobileView:t}),null===(a=this.pageRef)||void 0===a?void 0:a.current){const e=this.pageRef.current.clientWidth,a=this.pageRef.current.clientHeight;this.state.width!==e&&this.setState({width:e}),this.state.height!==a&&this.setState({height:a})}},this.handleResize=(0,d.Ds)(this.resize,250),this.handleMainClick=()=>{this.isMobile()&&this.state.mobileIsSidebarOpen&&this.mainRef.current&&this.setState({mobileIsSidebarOpen:!1})},this.onSidebarToggleMobile=()=>{this.setState((e=>({mobileIsSidebarOpen:!e.mobileIsSidebarOpen})))},this.onSidebarToggleDesktop=()=>{this.setState((e=>({desktopIsSidebarOpen:!e.desktopIsSidebarOpen})))};const{isManagedSidebar:a,defaultManagedSidebarIsOpen:i}=e,t=!a||i;this.state={desktopIsSidebarOpen:t,mobileIsSidebarOpen:!1,mobileView:!1,width:null,height:null}}componentDidMount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer=(0,b.p)(this.pageRef.current,this.handleResize);const e=this.mainRef.current;e&&(e.addEventListener("mousedown",this.handleMainClick),e.addEventListener("touchstart",this.handleMainClick)),this.resize()}}componentWillUnmount(){const{isManagedSidebar:e,onPageResize:a}=this.props;if(e||a){this.observer();const e=this.mainRef.current;e&&(e.removeEventListener("mousedown",this.handleMainClick),e.removeEventListener("touchstart",this.handleMainClick))}}render(){const e=this.props,{breadcrumb:a,isBreadcrumbWidthLimited:i,className:s,children:f,header:b,sidebar:u,notificationDrawer:v,isNotificationDrawerExpanded:S,onNotificationDrawerExpand:w,isTertiaryNavWidthLimited:k,skipToContent:O,role:B,mainContainerId:_,isManagedSidebar:y,defaultManagedSidebarIsOpen:N,onPageResize:M,getBreakpoint:Z,getVerticalBreakpoint:x,mainAriaLabel:P,mainTabIndex:T,mainComponent:E,tertiaryNav:C,isTertiaryNavGrouped:I,isBreadcrumbGrouped:W,additionalGroupedContent:z,groupProps:L,breadcrumbProps:R}=e,H=(0,t.__rest)(e,["breadcrumb","isBreadcrumbWidthLimited","className","children","header","sidebar","notificationDrawer","isNotificationDrawerExpanded","onNotificationDrawerExpand","isTertiaryNavWidthLimited","skipToContent","role","mainContainerId","isManagedSidebar","defaultManagedSidebarIsOpen","onPageResize","getBreakpoint","getVerticalBreakpoint","mainAriaLabel","mainTabIndex","mainComponent","tertiaryNav","isTertiaryNavGrouped","isBreadcrumbGrouped","additionalGroupedContent","groupProps","breadcrumbProps"]),{mobileView:D,mobileIsSidebarOpen:V,desktopIsSidebarOpen:G,width:j,height:A}=this.state,F={isManagedSidebar:y,onSidebarToggle:D?this.onSidebarToggleMobile:this.onSidebarToggleDesktop,isSidebarOpen:D?V:G,width:j,height:A,getBreakpoint:Z,getVerticalBreakpoint:x};let X=null;C&&k?X=n.createElement("div",{className:(0,o.i)(r.Z.pageMainNav,r.Z.modifiers.limitWidth)},n.createElement("div",{className:(0,o.i)(r.Z.pageMainBody)},C)):C&&(X=n.createElement("div",{className:(0,o.i)(r.Z.pageMainNav)},C));const q=a?n.createElement("section",{className:(0,o.i)(r.Z.pageMainBreadcrumb,i&&r.Z.modifiers.limitWidth,(0,d.wt)(null==R?void 0:R.stickyOnBreakpoint,r.Z,"sticky-",x(A),!0))},i?n.createElement("div",{className:(0,o.i)(r.Z.pageMainBody)},a):a):null,$=I||W||z?n.createElement(h,Object.assign({},L),I&&X,W&&q,z):null,U=E,J=n.createElement(U,{ref:this.mainRef,role:B,id:_,className:(0,o.i)(r.Z.pageMain),tabIndex:T,"aria-label":P},$,!I&&X,!W&&q,f),K=n.createElement(l.S,null,v);return n.createElement(g.Mi,{value:F},n.createElement("div",Object.assign({ref:this.pageRef},H,{className:(0,o.i)(r.Z.page,null!==j&&null!==A&&"pf-m-resize-observer",null!==j&&`pf-m-breakpoint-${Z(j)}`,null!==A&&`pf-m-height-breakpoint-${x(A)}`,s)}),O,b,u,v&&n.createElement("div",{className:(0,o.i)(r.Z.pageDrawer)},n.createElement(p.dy,{isExpanded:S,onExpand:e=>w(e)},n.createElement(c.s,{panelContent:K},n.createElement(m.s,null,J)))),!v&&J))}}u.displayName="Page",u.defaultProps={isManagedSidebar:!1,isBreadcrumbWidthLimited:!1,defaultManagedSidebarIsOpen:!0,mainTabIndex:-1,isNotificationDrawerExpanded:!1,onNotificationDrawerExpand:()=>null,mainComponent:"main",getBreakpoint:d.iu,getVerticalBreakpoint:d.xb};const v=e=>{var{className:a="",children:i,isWidthLimited:s,stickyOnBreakpoint:l,hasShadowTop:p=!1,hasShadowBottom:c=!1,hasOverflowScroll:m=!1,"aria-label":h}=e,f=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:u}=n.useContext(g.z1);return n.useEffect((()=>{m&&!h&&console.warn("PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,h]),n.createElement("section",Object.assign({className:(0,o.i)(r.Z.pageMainBreadcrumb,(0,d.wt)(l,r.Z,"sticky-",u(b),!0),s&&r.Z.modifiers.limitWidth,p&&r.Z.modifiers.shadowTop,c&&r.Z.modifiers.shadowBottom,m&&r.Z.modifiers.overflowScroll,a)},m&&{tabIndex:0},{"aria-label":h},f),s&&n.createElement("div",{className:(0,o.i)(r.Z.pageMainBody)},i),!s&&i)};v.displayName="PageBreadcrumb";var S=i(50442);const w=e=>{var{children:a,className:i,usePageInsets:s,isFilled:d}=e,l=(0,t.__rest)(e,["children","className","usePageInsets","isFilled"]);return n.createElement("div",Object.assign({className:(0,o.i)(r.Z.pageSidebarBody,s&&r.Z.modifiers.pageInsets,!1===d&&r.Z.modifiers.noFill,!0===d&&r.Z.modifiers.fill,i)},l),a)};var k,O;w.displayName="PageSidebarBody",function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(k||(k={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(O||(O={}));const B={[O.default]:r.Z.pageMainSection,[O.nav]:r.Z.pageMainNav,[O.subNav]:r.Z.pageMainSubnav,[O.breadcrumb]:r.Z.pageMainBreadcrumb,[O.tabs]:r.Z.pageMainTabs,[O.wizard]:r.Z.pageMainWizard},_={[k.default]:"",[k.light]:r.Z.modifiers.light,[k.dark]:r.Z.modifiers.dark_200,[k.darker]:r.Z.modifiers.dark_100},y=e=>{var{className:a="",children:i,variant:s="default",type:l="default",padding:p,isFilled:c,isWidthLimited:m=!1,isCenterAligned:h=!1,stickyOnBreakpoint:f,hasShadowTop:b=!1,hasShadowBottom:u=!1,hasOverflowScroll:v=!1,"aria-label":S,component:w="section"}=e,k=(0,t.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:y,getVerticalBreakpoint:N}=n.useContext(g.z1);n.useEffect((()=>{v&&!S&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[v,S]);const M=w;return n.createElement(M,Object.assign({},k,{className:(0,o.i)(B[l],(0,d.wt)(p,r.Z),(0,d.wt)(f,r.Z,"sticky-",N(y),!0),_[s],!1===c&&r.Z.modifiers.noFill,!0===c&&r.Z.modifiers.fill,m&&r.Z.modifiers.limitWidth,m&&h&&l!==O.subNav&&r.Z.modifiers.alignCenter,b&&r.Z.modifiers.shadowTop,u&&r.Z.modifiers.shadowBottom,v&&r.Z.modifiers.overflowScroll,a)},v&&{tabIndex:0},{"aria-label":S}),m&&n.createElement("div",{className:(0,o.i)(r.Z.pageMainBody)},i),!m&&i)};y.displayName="PageSection";const N=e=>{var{className:a="",children:i,isWidthLimited:s,stickyOnBreakpoint:l,hasShadowTop:p=!1,hasShadowBottom:c=!1,hasOverflowScroll:m=!1,"aria-label":h}=e,f=(0,t.__rest)(e,["className","children","isWidthLimited","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label"]);const{height:b,getVerticalBreakpoint:u}=n.useContext(g.z1);return n.useEffect((()=>{m&&!h&&console.warn("PageNavigation: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[m,h]),n.createElement("div",Object.assign({className:(0,o.i)(r.Z.pageMainNav,(0,d.wt)(l,r.Z,"sticky-",u(b),!0),s&&r.Z.modifiers.limitWidth,p&&r.Z.modifiers.shadowTop,c&&r.Z.modifiers.shadowBottom,m&&r.Z.modifiers.overflowScroll,a)},m&&{tabIndex:0,role:"region","aria-label":h},f),s&&n.createElement("div",{className:(0,o.i)(r.Z.pageMainBody)},i),!s&&i)};N.displayName="PageNavigation";var M=i(47173);const Z=e=>{var{children:a,isSidebarOpen:i=!0,onSidebarToggle:r=(()=>{}),id:o="nav-toggle"}=e,s=(0,t.__rest)(e,["children","isSidebarOpen","onSidebarToggle","id"]);return n.createElement(g.wk,null,(({isManagedSidebar:e,onSidebarToggle:t,isSidebarOpen:d})=>{const l=e?t:r,p=e?d:i;return n.createElement(M.zx,Object.assign({id:o,onClick:l,"aria-label":"Side navigation toggle","aria-expanded":p?"true":"false",variant:M.Wu.plain},s),a)}))};Z.displayName="PageToggleButton"},41145:(e,a,i)=>{i.d(a,{Z:()=>t}),i(92084);const t={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/7035.c514c042c2aeafe3fb0815f0d4a9f99d.js.map
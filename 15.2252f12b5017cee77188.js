(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{mWeK:function(t,e,n){"use strict";n.r(e);var l=n("CcnG"),o=function(){return function(){}}(),a=n("pMnS"),u=n("NcP4"),d=n("xYTU"),i=n("t68o"),r=n("yWMr"),s=n("No7X"),m=n("bIR2"),c=n("B8PE"),p=n("bujt"),g=n("UodH"),b=n("lLAP"),f=n("wFw1"),h=n("Mr+X"),v=n("SMsm"),y=n("21Lb"),k=n("OzfB"),w=n("Fzqc"),R=n("u7R8"),C=n("gIcY"),x=n("Ip0R"),D=n("Wf4p"),S=n("ZYjt"),N=n("dWZg"),A=l["ɵcrt"]({encapsulation:2,styles:[".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],data:{}});function G(t){return l["ɵvid"](2,[l["ɵqud"](671088640,1,{_buttonElement:0}),(t()(),l["ɵeld"](1,0,[[1,0],["button",1]],null,2,"button",[["class","mat-button-toggle-button"],["type","button"]],[[8,"id",0],[1,"tabindex",0],[1,"aria-pressed",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component._onButtonClick()&&l),l}),null,null)),(t()(),l["ɵeld"](2,0,null,null,1,"div",[["class","mat-button-toggle-label-content"]],null,null,null,null,null)),l["ɵncd"](null,0),(t()(),l["ɵeld"](4,0,null,null,0,"div",[["class","mat-button-toggle-focus-overlay"]],null,null,null,null,null)),(t()(),l["ɵeld"](5,0,null,null,1,"div",[["class","mat-button-toggle-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),l["ɵdid"](6,212992,null,0,D.x,[l.ElementRef,l.NgZone,N.a,[2,D.m],[2,f.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null)],(function(t,e){var n=e.component;t(e,6,0,n.disableRipple||n.disabled,l["ɵnov"](e,1))}),(function(t,e){var n=e.component;t(e,1,0,n.buttonId,n.disabled?-1:n.tabIndex,n.checked,n.disabled||null,n.name||null,n.ariaLabel,n.ariaLabelledby),t(e,5,0,l["ɵnov"](e,6).unbounded)}))}var L=n("oveR"),M=n("hNGQ"),T=n("+dxm"),E=n("jIY6"),F=function(){function t(t){var e=this;this.datePipe=t,this.users=[],this.columnDefs=[],this.rowData=[],this.convertMonthIndex=function(t){if(null!=t.value)return e.datePipe.transform((new Date).setMonth(t.value),"MMM")},this.convertDate=function(t){if(null!=t.value)return e.datePipe.transform(t.value)}}return Object.defineProperty(t.prototype,"timesheetSummaries",{get:function(){return this._timesheetSummaries},set:function(t){this._timesheetSummaries=t,this.initNgGrid(this.timesheetSummaries)},enumerable:!0,configurable:!0}),t.prototype.autoSizeGrid=function(){var t=this.dataGrid.columnApi.getAllColumns().filter((function(t){return"checkbox"!=t.getColId()}));this.dataGrid.columnApi.autoSizeColumns(t)},t.prototype.initNgGrid=function(t){if(this.columnDefs=[],this.rowData=[],!t||0==t.length)return null;var e=Object.getOwnPropertyNames(t[0]);e.includes("year")&&this.columnDefs.push({field:"year",headerName:"År",sortable:!0}),e.includes("month")&&this.columnDefs.push({field:"month",headerName:"Måned",sortable:!0,valueFormatter:this.convertMonthIndex}),e.includes("week")&&this.columnDefs.push({field:"week",headerName:"Uke",sortable:!0}),e.includes("date")&&this.columnDefs.push({field:"date",headerName:"Dato",sortable:!0,valueFormatter:this.convertDate}),this.columnDefs.push({field:"fullName",headerName:"Ansatt",sortable:!0}),this.columnDefs.push({field:"confirmedHours",headerName:"Låste timer",sortable:!0}),this.columnDefs.push({field:"openHours",headerName:"Åpne timer",sortable:!0});var n=t.reduce((function(t,e){return t+e.openHours}),0),l=t.reduce((function(t,e){return t+e.confirmedHours}),0);this.dataGrid&&this.dataGrid.api.setPinnedBottomRowData([{openHours:n,confirmedHours:l,userName:"Sum av timer",timesheets:[]}]),this.rowData=t},t}(),I=l["ɵcrt"]({encapsulation:2,styles:[],data:{}});function P(t){return l["ɵvid"](2,[l["ɵqud"](671088640,1,{dataGrid:0}),(t()(),l["ɵeld"](1,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-balham h-100"],["overlayNoRowsTemplate","Tomt"],["rowSelection","multiple"],["suppressColumnVirtualisation","true"],["suppressRowClickSelection","true"]],null,[[null,"modelUpdated"]],(function(t,e,n){var l=!0;return"modelUpdated"===e&&(l=!1!==t.component.autoSizeGrid()&&l),l}),L.b,L.a)),l["ɵprd"](512,null,M.AngularFrameworkOverrides,M.AngularFrameworkOverrides,[l.NgZone]),l["ɵprd"](512,null,T.AngularFrameworkComponentWrapper,T.AngularFrameworkComponentWrapper,[]),l["ɵdid"](4,4898816,[[1,4],["dataGrid",4]],1,E.AgGridAngular,[l.ElementRef,l.ViewContainerRef,M.AngularFrameworkOverrides,T.AngularFrameworkComponentWrapper,l.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],rowSelection:[2,"rowSelection"],overlayNoRowsTemplate:[3,"overlayNoRowsTemplate"],suppressRowClickSelection:[4,"suppressRowClickSelection"],suppressColumnVirtualisation:[5,"suppressColumnVirtualisation"]},{modelUpdated:"modelUpdated"}),l["ɵqud"](603979776,2,{columns:1})],(function(t,e){var n=e.component;t(e,4,0,n.rowData,n.columnDefs,"multiple","Tomt","true","true")}),null)}var B=n("VnD/"),j=n("1ua0"),_=n("k5Aa"),O=function(){function t(t,e,n,l){var o=this;this.userService=t,this.mainNavService=e,this.timesheetService=n,this._bottomSheet=l,this.groupByTypes=_.b,this.filter$=this.timesheetService.filter$,this.groupBy$=this.timesheetService.groupBy$,this.timesheetSummaries$=this.timesheetService.timesheetSummaries$,this.users$=this.userService.getAll$(),this.changeGroupingType=function(t){return o.timesheetService.addGroupBy(t)},this.configureMainNav()}return t.prototype.openBottomSheet=function(t){var e=this;this._bottomSheet.open(j.c,{data:{filter:t,disabledFilters:["status"]}}).afterDismissed().pipe(Object(B.a)((function(t){return null!=t}))).subscribe((function(t){return e.timesheetService.addFilter(t)}))},t.prototype.configureMainNav=function(){var t=this.mainNavService.getDefaultConfig();t.title="Timestatistikk",this.mainNavService.addConfig(t)},t}(),$=n("oggH"),U=n("kn+k"),V=n("Mj79"),W=n("BgWK"),q=l["ɵcrt"]({encapsulation:2,styles:[],data:{}});function Y(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,4,"button",[["class","bg-accent anim-block"],["mat-mini-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.openBottomSheet(t.context.$implicit)&&l),l}),p.d,p.b)),l["ɵdid"](1,180224,null,0,g.b,[l.ElementRef,b.f,[2,f.a]],null,null),(t()(),l["ɵeld"](2,0,null,0,2,"mat-icon",[["class","scale-125 mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),l["ɵdid"](3,9158656,null,0,v.b,[l.ElementRef,v.d,[8,null],[2,v.a],[2,l.ErrorHandler]],null,null),(t()(),l["ɵted"](-1,0,["filter_list"]))],(function(t,e){t(e,3,0)}),(function(t,e){t(e,0,0,l["ɵnov"](e,1).disabled||null,"NoopAnimations"===l["ɵnov"](e,1)._animationMode),t(e,2,0,l["ɵnov"](e,3).inline,"primary"!==l["ɵnov"](e,3).color&&"accent"!==l["ɵnov"](e,3).color&&"warn"!==l["ɵnov"](e,3).color)}))}function H(t){return l["ɵvid"](2,[(t()(),l["ɵeld"](0,0,null,null,34,"div",[["class","h-100 p-2"],["fxLayout","column"],["fxLayoutGap","8px"]],null,null,null,null,null)),l["ɵdid"](1,671744,null,0,y.c,[l.ElementRef,k.i,[2,y.i],k.f],{fxLayout:[0,"fxLayout"]},null),l["ɵdid"](2,1720320,null,0,y.d,[l.ElementRef,l.NgZone,w.b,k.i,[2,y.h],k.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(t()(),l["ɵeld"](3,0,null,null,26,"span",[["fxLayout","row"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),l["ɵdid"](4,671744,null,0,y.c,[l.ElementRef,k.i,[2,y.i],k.f],{fxLayout:[0,"fxLayout"]},null),l["ɵdid"](5,671744,null,0,y.b,[l.ElementRef,k.i,[2,y.g],k.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(t()(),l["ɵeld"](6,0,null,null,20,"mat-button-toggle-group",[["aria-label","Grupper etter tidsperiode"],["class","anim-block mat-button-toggle-group"],["role","group"]],[[1,"aria-disabled",0],[2,"mat-button-toggle-vertical",null],[2,"mat-button-toggle-group-appearance-standard",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(t,e,n){var l=!0;return"ngModelChange"===e&&(l=!1!==t.component.changeGroupingType(n)&&l),l}),null,null)),l["ɵprd"](6144,null,R.d,null,[R.c]),l["ɵdid"](8,1130496,null,1,R.c,[l.ChangeDetectorRef,[2,R.a]],null,null),l["ɵqud"](603979776,1,{_buttonToggles:1}),l["ɵprd"](1024,null,C.l,(function(t){return[t]}),[R.c]),l["ɵdid"](11,671744,null,0,C.q,[[8,null],[8,null],[8,null],[6,C.l]],{model:[0,"model"]},{update:"ngModelChange"}),l["ɵpid"](131072,x.b,[l.ChangeDetectorRef]),l["ɵprd"](2048,null,C.m,null,[C.q]),l["ɵdid"](14,16384,null,0,C.n,[[4,C.m]],null,null),(t()(),l["ɵeld"](15,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"focus"]],(function(t,e,n){var o=!0;return"focus"===e&&(o=!1!==l["ɵnov"](t,16).focus()&&o),o}),G,A)),l["ɵdid"](16,245760,[[1,4]],0,R.b,[[2,R.c],l.ChangeDetectorRef,l.ElementRef,b.f,[8,null],[2,R.a]],{value:[0,"value"]},null),(t()(),l["ɵted"](-1,0,["Dag"])),(t()(),l["ɵeld"](18,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"focus"]],(function(t,e,n){var o=!0;return"focus"===e&&(o=!1!==l["ɵnov"](t,19).focus()&&o),o}),G,A)),l["ɵdid"](19,245760,[[1,4]],0,R.b,[[2,R.c],l.ChangeDetectorRef,l.ElementRef,b.f,[8,null],[2,R.a]],{value:[0,"value"]},null),(t()(),l["ɵted"](-1,0,["Uke"])),(t()(),l["ɵeld"](21,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"focus"]],(function(t,e,n){var o=!0;return"focus"===e&&(o=!1!==l["ɵnov"](t,22).focus()&&o),o}),G,A)),l["ɵdid"](22,245760,[[1,4]],0,R.b,[[2,R.c],l.ChangeDetectorRef,l.ElementRef,b.f,[8,null],[2,R.a]],{value:[0,"value"]},null),(t()(),l["ɵted"](-1,0,["Måned"])),(t()(),l["ɵeld"](24,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"focus"]],(function(t,e,n){var o=!0;return"focus"===e&&(o=!1!==l["ɵnov"](t,25).focus()&&o),o}),G,A)),l["ɵdid"](25,245760,[[1,4]],0,R.b,[[2,R.c],l.ChangeDetectorRef,l.ElementRef,b.f,[8,null],[2,R.a]],{value:[0,"value"]},null),(t()(),l["ɵted"](-1,0,["År"])),(t()(),l["ɵand"](16777216,null,null,2,null,Y)),l["ɵdid"](28,16384,null,0,x.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),l["ɵpid"](131072,x.b,[l.ChangeDetectorRef]),(t()(),l["ɵeld"](30,0,null,null,4,"app-timesheet-statistic-table",[["class","mat-elevation-z2"],["fxFlex",""]],null,null,null,P,I)),l["ɵdid"](31,671744,null,0,y.a,[l.ElementRef,k.i,k.e,y.f,k.f],{fxFlex:[0,"fxFlex"]},null),l["ɵdid"](32,49152,null,0,F,[x.e],{users:[0,"users"],timesheetSummaries:[1,"timesheetSummaries"]},null),l["ɵpid"](131072,x.b,[l.ChangeDetectorRef]),l["ɵpid"](131072,x.b,[l.ChangeDetectorRef])],(function(t,e){var n=e.component;t(e,1,0,"column"),t(e,2,0,"8px"),t(e,4,0,"row"),t(e,5,0,"space-between center"),t(e,8,0),t(e,11,0,l["ɵunv"](e,11,0,l["ɵnov"](e,12).transform(n.groupBy$))),t(e,16,0,n.groupByTypes.Day),t(e,19,0,n.groupByTypes.Week),t(e,22,0,n.groupByTypes.Month),t(e,25,0,n.groupByTypes.Year),t(e,28,0,l["ɵunv"](e,28,0,l["ɵnov"](e,29).transform(n.filter$))),t(e,31,0,""),t(e,32,0,l["ɵunv"](e,32,0,l["ɵnov"](e,33).transform(n.users$)),l["ɵunv"](e,32,1,l["ɵnov"](e,34).transform(n.timesheetSummaries$)))}),(function(t,e){t(e,6,0,l["ɵnov"](e,8).disabled,l["ɵnov"](e,8).vertical,"standard"===l["ɵnov"](e,8).appearance,l["ɵnov"](e,14).ngClassUntouched,l["ɵnov"](e,14).ngClassTouched,l["ɵnov"](e,14).ngClassPristine,l["ɵnov"](e,14).ngClassDirty,l["ɵnov"](e,14).ngClassValid,l["ɵnov"](e,14).ngClassInvalid,l["ɵnov"](e,14).ngClassPending),t(e,15,0,!l["ɵnov"](e,16).buttonToggleGroup,l["ɵnov"](e,16).checked,l["ɵnov"](e,16).disabled,"standard"===l["ɵnov"](e,16).appearance,-1,l["ɵnov"](e,16).id,null),t(e,18,0,!l["ɵnov"](e,19).buttonToggleGroup,l["ɵnov"](e,19).checked,l["ɵnov"](e,19).disabled,"standard"===l["ɵnov"](e,19).appearance,-1,l["ɵnov"](e,19).id,null),t(e,21,0,!l["ɵnov"](e,22).buttonToggleGroup,l["ɵnov"](e,22).checked,l["ɵnov"](e,22).disabled,"standard"===l["ɵnov"](e,22).appearance,-1,l["ɵnov"](e,22).id,null),t(e,24,0,!l["ɵnov"](e,25).buttonToggleGroup,l["ɵnov"](e,25).checked,l["ɵnov"](e,25).disabled,"standard"===l["ɵnov"](e,25).appearance,-1,l["ɵnov"](e,25).id,null)}))}function z(t){return l["ɵvid"](0,[(t()(),l["ɵeld"](0,0,null,null,1,"app-timesheet-statistic",[],null,null,null,H,q)),l["ɵdid"](1,49152,null,0,O,[$.a,U.a,V.a,W.b],null,null)],null,null)}var Z=l["ɵccf"]("app-timesheet-statistic",O,z,{},{},[]),K=n("EVGQ"),Q=n("M2Lx"),X=n("eDkP"),J=n("uGex"),tt=n("v9Dh"),et=n("mVsa"),nt=n("o3x0"),lt=n("4tE/"),ot=n("Tq4R"),at=n("rAFq"),ut=n("Gvy5"),dt=n("4D9t"),it=n("bMPK"),rt=n("UiI2"),st=n("ZYCi"),mt=n("vGXY"),ct=n("8mMr"),pt=n("qAlS"),gt=n("Nsh5"),bt=n("6Wmm"),ft=n("LC5p"),ht=n("0/Q6"),vt=n("seP3"),yt=n("/VYK"),kt=n("b716"),wt=n("4c35"),Rt=n("9It4"),Ct=n("YhbO"),xt=n("jlZm"),Dt=n("La40"),St=n("vARd"),Nt=n("de3e"),At=n("Blfk"),Gt=n("FVSy"),Lt=n("r43C"),Mt=n("ssao"),Tt=n("1v46"),Et=n("hUWP"),Ft=n("3pJQ"),It=n("V9q+"),Pt=n("jRYl"),Bt=n("KL2N"),jt=n("QX+E"),_t=n("PCNd"),Ot=function(){return function(){}}(),$t=n("SXLW"),Ut=n("DEyP"),Vt=n("EFU/");n.d(e,"TimesheetStatisticModuleNgFactory",(function(){return Wt}));var Wt=l["ɵcmf"](o,[],(function(t){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[a.a,u.a,d.a,d.b,i.a,r.a,s.a,m.a,c.a,Z,K.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](4608,x.n,x.m,[l.LOCALE_ID,[2,x.E]]),l["ɵmpd"](4608,C.w,C.w,[]),l["ɵmpd"](4608,Q.c,Q.c,[]),l["ɵmpd"](4608,D.d,D.d,[]),l["ɵmpd"](4608,X.d,X.d,[X.j,X.f,l.ComponentFactoryResolver,X.i,X.g,l.Injector,l.NgZone,x.d,w.b,[2,x.h]]),l["ɵmpd"](5120,X.k,X.l,[X.d]),l["ɵmpd"](5120,J.a,J.b,[X.d]),l["ɵmpd"](5120,tt.a,tt.b,[X.d]),l["ɵmpd"](4608,S.e,D.e,[[2,D.i],[2,D.n]]),l["ɵmpd"](5120,et.a,et.d,[X.d]),l["ɵmpd"](5120,nt.c,nt.d,[X.d]),l["ɵmpd"](135680,nt.e,nt.e,[X.d,l.Injector,[2,x.h],[2,nt.b],nt.c,[3,nt.e],X.f]),l["ɵmpd"](5120,lt.b,lt.c,[X.d]),l["ɵmpd"](4608,C.e,C.e,[]),l["ɵmpd"](5120,l.APP_BOOTSTRAP_LISTENER,(function(t,e){return[k.j(t,e)]}),[x.d,l.PLATFORM_ID]),l["ɵmpd"](5120,ot.b,ot.d,[X.d]),l["ɵmpd"](4608,ot.e,ot.e,[X.d,l.Injector,[2,x.h],ot.b,[2,ot.a],[3,ot.e],X.f]),l["ɵmpd"](4608,at.a,ut.a,[]),l["ɵmpd"](5120,dt.a,dt.c,[X.d]),l["ɵmpd"](4608,it.a,rt.a,[[2,it.b],N.a]),l["ɵmpd"](4608,x.e,x.e,[l.LOCALE_ID]),l["ɵmpd"](1073742336,x.c,x.c,[]),l["ɵmpd"](1073742336,C.v,C.v,[]),l["ɵmpd"](1073742336,C.i,C.i,[]),l["ɵmpd"](1073742336,st.o,st.o,[[2,st.t],[2,st.k]]),l["ɵmpd"](1073742336,mt.c,mt.c,[]),l["ɵmpd"](1073742336,w.a,w.a,[]),l["ɵmpd"](1073742336,D.n,D.n,[[2,D.f],[2,S.f]]),l["ɵmpd"](1073742336,N.b,N.b,[]),l["ɵmpd"](1073742336,D.y,D.y,[]),l["ɵmpd"](1073742336,g.c,g.c,[]),l["ɵmpd"](1073742336,ct.b,ct.b,[]),l["ɵmpd"](1073742336,v.c,v.c,[]),l["ɵmpd"](1073742336,pt.g,pt.g,[]),l["ɵmpd"](1073742336,gt.h,gt.h,[]),l["ɵmpd"](1073742336,Q.d,Q.d,[]),l["ɵmpd"](1073742336,b.a,b.a,[]),l["ɵmpd"](1073742336,bt.a,bt.a,[]),l["ɵmpd"](1073742336,D.p,D.p,[]),l["ɵmpd"](1073742336,D.w,D.w,[]),l["ɵmpd"](1073742336,ft.b,ft.b,[]),l["ɵmpd"](1073742336,ht.d,ht.d,[]),l["ɵmpd"](1073742336,vt.e,vt.e,[]),l["ɵmpd"](1073742336,yt.c,yt.c,[]),l["ɵmpd"](1073742336,kt.b,kt.b,[]),l["ɵmpd"](1073742336,wt.g,wt.g,[]),l["ɵmpd"](1073742336,X.h,X.h,[]),l["ɵmpd"](1073742336,D.t,D.t,[]),l["ɵmpd"](1073742336,J.d,J.d,[]),l["ɵmpd"](1073742336,Rt.d,Rt.d,[]),l["ɵmpd"](1073742336,tt.c,tt.c,[]),l["ɵmpd"](1073742336,Ct.c,Ct.c,[]),l["ɵmpd"](1073742336,xt.d,xt.d,[]),l["ɵmpd"](1073742336,Dt.j,Dt.j,[]),l["ɵmpd"](1073742336,et.c,et.c,[]),l["ɵmpd"](1073742336,et.b,et.b,[]),l["ɵmpd"](1073742336,St.e,St.e,[]),l["ɵmpd"](1073742336,Nt.d,Nt.d,[]),l["ɵmpd"](1073742336,Nt.c,Nt.c,[]),l["ɵmpd"](1073742336,nt.i,nt.i,[]),l["ɵmpd"](1073742336,lt.e,lt.e,[]),l["ɵmpd"](1073742336,At.c,At.c,[]),l["ɵmpd"](1073742336,W.e,W.e,[]),l["ɵmpd"](1073742336,R.e,R.e,[]),l["ɵmpd"](1073742336,Gt.d,Gt.d,[]),l["ɵmpd"](1073742336,Lt.b,Lt.b,[]),l["ɵmpd"](1073742336,Mt.a,Mt.a,[]),l["ɵmpd"](1073742336,C.s,C.s,[]),l["ɵmpd"](1073742336,Tt.a,Tt.a,[]),l["ɵmpd"](1073742336,k.c,k.c,[]),l["ɵmpd"](1073742336,y.e,y.e,[]),l["ɵmpd"](1073742336,Et.c,Et.c,[]),l["ɵmpd"](1073742336,Ft.a,Ft.a,[]),l["ɵmpd"](1073742336,It.a,It.a,[[2,k.g],l.PLATFORM_ID]),l["ɵmpd"](1073742336,Pt.a,Pt.a,[]),l["ɵmpd"](1073742336,Bt.a,Bt.a,[]),l["ɵmpd"](1073742336,jt.a,jt.a,[]),l["ɵmpd"](1073742336,jt.b,jt.b,[]),l["ɵmpd"](1073742336,_t.a,_t.a,[]),l["ɵmpd"](1073742336,Ot,Ot,[]),l["ɵmpd"](1073742336,$t.AgGridModule,$t.AgGridModule,[]),l["ɵmpd"](1073742336,Ut.a,Ut.a,[]),l["ɵmpd"](1073742336,o,o,[]),l["ɵmpd"](256,it.b,"no",[]),l["ɵmpd"](256,Vt.a,_t.b,[]),l["ɵmpd"](1024,st.i,(function(){return[[{path:"",component:O}]]}),[])])}))}}]);
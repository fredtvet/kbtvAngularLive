(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"K/8C":function(e,l,n){"use strict";n.r(l);var a=n("8Y7J");class t{}var o=n("pMnS"),d=n("MlvX"),i=n("Xd0L"),r=n("6sDv"),u=n("rqpR"),c=n("7QIX"),p=n("WJ2q"),m=n("WTUP"),s=n("iInd"),g=n("wHOn"),v=n("VDRc"),f=n("/q54"),h=n("IP0z"),b=n("dJrM"),C=n("HsOI"),w=n("/HVE"),y=n("omvX"),_=n("Azqq"),S=n("JjoW"),R=n("s7LF"),D=n("hOhj"),F=n("5GAg"),k=n("SVse"),q=n("hNGQ"),N=n("+dxm"),T=n("jIY6"),O=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(e){return a["\u0275vid"](0,[],null,null)}n("ey9i");var A=n("quSY"),L=n("R/1h"),E=n("M0ag");class I{constructor(e,l,n,a,t){this.employerService=e,this.missionTypeService=l,this.missionService=n,this.reportTypeService=a,this.dialog=t,this.mainNavConfig=new L.a,this.columnDefs=[],this.rowData=[],this.tables=["Oppdrag","Oppdragstyper","Oppdragsgivere","Rapporttyper"],this.tableSub$=new A.a,this.openDeleteDialog=()=>{this.dialog.open(E.a).afterClosed().subscribe(e=>{e&&this.deleteSelectedCells()})},this.mainNavConfig.deleteEnabled=!0}initNgGrid(e){if(this.columnDefs=[],this.rowData=[],0==e.length)return null;this.columnDefs.push({checkboxSelection:!0,width:42,pinned:"left",lockPosition:!0}),Object.getOwnPropertyNames(e[0]).forEach(e=>this.addColumnDef(e)),this.rowData=e}editCell(e){this.getCurrentService().update$(e).subscribe()}deleteSelectedCells(){const e=this.dataGrid.api.getSelectedNodes().map(e=>e.data.id);if(0==e.length)return!1;this.getCurrentService().deleteRange$(e).subscribe()}changeTable(){this.tableSub$.unsubscribe(),this.tableSub$=this.getCurrentService().getAll$().subscribe(e=>this.initNgGrid(e))}addColumnDef(e){let l=e.toLowerCase();if("updatedat"==l||"createdat"==l||"employer"==l||"missiontype"==l)return!1;let n={field:e,sortable:!0,resizable:!0,editable:!0,lockPosition:!0};"id"==l&&(n.resizable=!1,n.width=40),(l.toLowerCase().includes("id")||"finished"==l)&&(n.editable=!1),this.columnDefs.push(n)}getCurrentService(){switch(this.currentTable){case"Oppdrag":return this.missionService;case"Oppdragstyper":return this.missionTypeService;case"Oppdragsgivere":return this.employerService;case"Rapporttyper":return this.reportTypeService}}}var P=n("wEB+"),M=n("dEfl"),G=n("gYF6"),V=n("pS1d"),j=n("s6ns"),z=a["\u0275crt"]({encapsulation:0,styles:[[".mat-form-field-wrapper{padding-bottom:0!important}  .mat-form-field-flex{height:59.5px!important}  .mat-form-field-underline{margin-bottom:-1.25em!important}.data-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - (59.5 * 1px))!important}"]],data:{}});function W(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(e,l,n){var t=!0;return"click"===l&&(t=!1!==a["\u0275nov"](e,1)._selectViaInteraction()&&t),"keydown"===l&&(t=!1!==a["\u0275nov"](e,1)._handleKeydown(n)&&t),t}),d.c,d.a)),a["\u0275did"](1,8568832,[[11,4]],0,i.q,[a.ElementRef,a.ChangeDetectorRef,[2,i.j],[2,i.p]],{value:[0,"value"]},null),(e()(),a["\u0275ted"](2,0,["",""]))],(function(e,l){e(l,1,0,a["\u0275inlineInterpolate"](1,"",l.context.$implicit,""))}),(function(e,l){e(l,0,0,a["\u0275nov"](l,1)._getTabIndex(),a["\u0275nov"](l,1).selected,a["\u0275nov"](l,1).multiple,a["\u0275nov"](l,1).active,a["\u0275nov"](l,1).id,a["\u0275nov"](l,1)._getAriaSelected(),a["\u0275nov"](l,1).disabled.toString(),a["\u0275nov"](l,1).disabled),e(l,2,0,l.context.$implicit)}))}function Z(e){return a["\u0275vid"](0,[a["\u0275qud"](671088640,1,{dataGrid:0}),(e()(),a["\u0275eld"](1,0,null,null,35,"app-main-nav",[],null,[[null,"deleteEvent"]],(function(e,l,n){var a=!0;return"deleteEvent"===l&&(a=!1!==e.component.openDeleteDialog()&&a),a}),r.b,r.a)),a["\u0275did"](2,376832,null,0,u.a,[c.a,p.a,m.a,s.k,g.a],{config:[0,"config"]},{deleteEvent:"deleteEvent"}),(e()(),a["\u0275eld"](3,0,null,0,33,"div",[["class","static-page-container"],["fxLayout","column"],["fxLayoutGap","8px"]],null,null,null,null,null)),a["\u0275did"](4,671744,null,0,v.c,[a.ElementRef,f.i,[2,v.i],f.f],{fxLayout:[0,"fxLayout"]},null),a["\u0275did"](5,1720320,null,0,v.d,[a.ElementRef,a.NgZone,h.b,f.i,[2,v.h],f.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(e()(),a["\u0275eld"](6,0,null,null,25,"mat-form-field",[["appearance","fill"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),a["\u0275did"](7,7520256,null,9,C.c,[a.ElementRef,a.ChangeDetectorRef,[2,i.h],[2,h.b],[2,C.a],w.a,a.NgZone,[2,y.a]],{appearance:[0,"appearance"]},null),a["\u0275qud"](603979776,2,{_controlNonStatic:0}),a["\u0275qud"](335544320,3,{_controlStatic:0}),a["\u0275qud"](603979776,4,{_labelChildNonStatic:0}),a["\u0275qud"](335544320,5,{_labelChildStatic:0}),a["\u0275qud"](603979776,6,{_placeholderChild:0}),a["\u0275qud"](603979776,7,{_errorChildren:1}),a["\u0275qud"](603979776,8,{_hintChildren:1}),a["\u0275qud"](603979776,9,{_prefixChildren:1}),a["\u0275qud"](603979776,10,{_suffixChildren:1}),(e()(),a["\u0275eld"](17,0,null,3,2,"mat-label",[],null,null,null,null,null)),a["\u0275did"](18,16384,[[4,4],[5,4]],0,C.g,[],null,null),(e()(),a["\u0275ted"](-1,null,["Velg"])),(e()(),a["\u0275eld"](20,0,null,1,11,"mat-select",[["class","mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"selectionChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(e,l,n){var t=!0,o=e.component;return"keydown"===l&&(t=!1!==a["\u0275nov"](e,25)._handleKeydown(n)&&t),"focus"===l&&(t=!1!==a["\u0275nov"](e,25)._onFocus()&&t),"blur"===l&&(t=!1!==a["\u0275nov"](e,25)._onBlur()&&t),"ngModelChange"===l&&(t=!1!==(o.currentTable=n)&&t),"selectionChange"===l&&(t=!1!==o.changeTable()&&t),t}),_.b,_.a)),a["\u0275prd"](6144,null,i.j,null,[S.c]),a["\u0275did"](22,671744,null,0,R.p,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a["\u0275prd"](2048,null,R.l,null,[R.p]),a["\u0275did"](24,16384,null,0,R.m,[[4,R.l]],null,null),a["\u0275did"](25,2080768,null,3,S.c,[D.e,a.ChangeDetectorRef,a.NgZone,i.b,a.ElementRef,[2,h.b],[2,R.o],[2,R.g],[2,C.c],[6,R.l],[8,null],S.a,F.i],null,{selectionChange:"selectionChange"}),a["\u0275qud"](603979776,11,{options:1}),a["\u0275qud"](603979776,12,{optionGroups:1}),a["\u0275qud"](603979776,13,{customTrigger:0}),a["\u0275prd"](2048,[[2,4],[3,4]],C.d,null,[S.c]),(e()(),a["\u0275and"](16777216,null,1,1,null,W)),a["\u0275did"](31,278528,null,0,k.k,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),a["\u0275eld"](32,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-balham-dark data-container"],["overlayNoRowsTemplate","Tomt"],["rowSelection","multiple"],["suppressRowClickSelection","true"]],null,[[null,"cellValueChanged"]],(function(e,l,n){var a=!0;return"cellValueChanged"===l&&(a=!1!==e.component.editCell(n.data)&&a),a}),x,O)),a["\u0275prd"](512,null,q.AngularFrameworkOverrides,q.AngularFrameworkOverrides,[a.NgZone]),a["\u0275prd"](512,null,N.AngularFrameworkComponentWrapper,N.AngularFrameworkComponentWrapper,[]),a["\u0275did"](35,4898816,[[1,4],["dataGrid",4]],1,T.AgGridAngular,[a.ElementRef,a.ViewContainerRef,q.AngularFrameworkOverrides,N.AngularFrameworkComponentWrapper,a.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],rowSelection:[2,"rowSelection"],overlayNoRowsTemplate:[3,"overlayNoRowsTemplate"],suppressRowClickSelection:[4,"suppressRowClickSelection"]},{cellValueChanged:"cellValueChanged"}),a["\u0275qud"](603979776,14,{columns:1})],(function(e,l){var n=l.component;e(l,2,0,n.mainNavConfig),e(l,4,0,"column"),e(l,5,0,"8px"),e(l,7,0,"fill"),e(l,22,0,n.currentTable),e(l,25,0),e(l,31,0,n.tables),e(l,35,0,n.rowData,n.columnDefs,"multiple","Tomt","true")}),(function(e,l){e(l,6,1,["standard"==a["\u0275nov"](l,7).appearance,"fill"==a["\u0275nov"](l,7).appearance,"outline"==a["\u0275nov"](l,7).appearance,"legacy"==a["\u0275nov"](l,7).appearance,a["\u0275nov"](l,7)._control.errorState,a["\u0275nov"](l,7)._canLabelFloat,a["\u0275nov"](l,7)._shouldLabelFloat(),a["\u0275nov"](l,7)._hasFloatingLabel(),a["\u0275nov"](l,7)._hideControlPlaceholder(),a["\u0275nov"](l,7)._control.disabled,a["\u0275nov"](l,7)._control.autofilled,a["\u0275nov"](l,7)._control.focused,"accent"==a["\u0275nov"](l,7).color,"warn"==a["\u0275nov"](l,7).color,a["\u0275nov"](l,7)._shouldForward("untouched"),a["\u0275nov"](l,7)._shouldForward("touched"),a["\u0275nov"](l,7)._shouldForward("pristine"),a["\u0275nov"](l,7)._shouldForward("dirty"),a["\u0275nov"](l,7)._shouldForward("valid"),a["\u0275nov"](l,7)._shouldForward("invalid"),a["\u0275nov"](l,7)._shouldForward("pending"),!a["\u0275nov"](l,7)._animationsEnabled]),e(l,20,1,[a["\u0275nov"](l,24).ngClassUntouched,a["\u0275nov"](l,24).ngClassTouched,a["\u0275nov"](l,24).ngClassPristine,a["\u0275nov"](l,24).ngClassDirty,a["\u0275nov"](l,24).ngClassValid,a["\u0275nov"](l,24).ngClassInvalid,a["\u0275nov"](l,24).ngClassPending,a["\u0275nov"](l,25).id,a["\u0275nov"](l,25).tabIndex,a["\u0275nov"](l,25)._getAriaLabel(),a["\u0275nov"](l,25)._getAriaLabelledby(),a["\u0275nov"](l,25).required.toString(),a["\u0275nov"](l,25).disabled.toString(),a["\u0275nov"](l,25).errorState,a["\u0275nov"](l,25).panelOpen?a["\u0275nov"](l,25)._optionIds:null,a["\u0275nov"](l,25).multiple,a["\u0275nov"](l,25)._ariaDescribedby||null,a["\u0275nov"](l,25)._getAriaActiveDescendant(),a["\u0275nov"](l,25).disabled,a["\u0275nov"](l,25).errorState,a["\u0275nov"](l,25).required,a["\u0275nov"](l,25).empty])}))}function J(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-data-manager",[],null,null,null,Z,z)),a["\u0275did"](1,49152,null,0,I,[P.a,M.a,G.a,V.a,j.e],null,null)],null,null)}var $=a["\u0275ccf"]("app-data-manager",I,J,{},{},[]),B=n("t68o"),Q=n("zbXB"),H=n("NcP4"),K=n("xYTU"),X=n("fj1o"),Y=n("POq0"),U=n("QQfA"),ee=n("821u"),le=n("Mz6y"),ne=n("cUpR"),ae=n("OIZN"),te=n("gavF"),oe=n("/Co4");const de={allowedRoles:[E.f.Leder]};class ie{}var re=n("Fwaw"),ue=n("BzsH"),ce=n("Gi4r"),pe=n("BV1i"),me=n("KPQW"),se=n("02hT"),ge=n("Q+lL"),ve=n("FVPZ"),fe=n("oapL"),he=n("ZwOa"),be=n("zMNK"),Ce=n("elxJ"),we=n("kNGD"),ye=n("zQui"),_e=n("8rEH"),Se=n("igqZ"),Re=n("5Bek"),De=n("c9fC"),Fe=n("rWV4"),ke=n("dFDH"),qe=n("r0V8"),Ne=n("W5yJ"),Te=n("ssao"),Oe=n("1v46"),xe=n("ura0"),Ae=n("Nhcz"),Le=n("u9T3"),Ee=n("SXLW"),Ie=n("PCNd"),Pe=n("ecC8"),Me=n("dvZr");n.d(l,"DataManagementModuleNgFactory",(function(){return Ge}));var Ge=a["\u0275cmf"](t,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,$,B.a,Q.b,Q.a,H.a,K.a,K.b,X.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,k.n,k.m,[a.LOCALE_ID,[2,k.C]]),a["\u0275mpd"](4608,R.u,R.u,[]),a["\u0275mpd"](4608,Y.c,Y.c,[]),a["\u0275mpd"](4608,i.b,i.b,[]),a["\u0275mpd"](4608,U.c,U.c,[U.i,U.e,a.ComponentFactoryResolver,U.h,U.f,a.Injector,a.NgZone,k.d,h.b,[2,k.h]]),a["\u0275mpd"](5120,U.j,U.k,[U.c]),a["\u0275mpd"](5120,S.a,S.b,[U.c]),a["\u0275mpd"](5120,j.c,j.d,[U.c]),a["\u0275mpd"](135680,j.e,j.e,[U.c,a.Injector,[2,k.h],[2,j.b],j.c,[3,j.e],U.e]),a["\u0275mpd"](4608,ee.h,ee.h,[]),a["\u0275mpd"](5120,ee.a,ee.b,[U.c]),a["\u0275mpd"](4608,i.a,i.x,[[2,i.f],w.a]),a["\u0275mpd"](5120,le.a,le.b,[U.c]),a["\u0275mpd"](4608,ne.e,i.c,[[2,i.g],[2,i.l]]),a["\u0275mpd"](5120,ae.b,ae.a,[[3,ae.b]]),a["\u0275mpd"](5120,te.c,te.j,[U.c]),a["\u0275mpd"](5120,oe.b,oe.c,[U.c]),a["\u0275mpd"](4608,R.e,R.e,[]),a["\u0275mpd"](5120,a.APP_BOOTSTRAP_LISTENER,(function(e,l){return[f.j(e,l)]}),[k.d,a.PLATFORM_ID]),a["\u0275mpd"](1073742336,k.c,k.c,[]),a["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),a["\u0275mpd"](1073742336,ie,ie,[]),a["\u0275mpd"](1073742336,R.t,R.t,[]),a["\u0275mpd"](1073742336,R.i,R.i,[]),a["\u0275mpd"](1073742336,c.c,c.c,[]),a["\u0275mpd"](1073742336,h.a,h.a,[]),a["\u0275mpd"](1073742336,i.l,i.l,[[2,i.d],[2,ne.f]]),a["\u0275mpd"](1073742336,w.b,w.b,[]),a["\u0275mpd"](1073742336,i.w,i.w,[]),a["\u0275mpd"](1073742336,re.c,re.c,[]),a["\u0275mpd"](1073742336,ue.b,ue.b,[]),a["\u0275mpd"](1073742336,ce.c,ce.c,[]),a["\u0275mpd"](1073742336,D.c,D.c,[]),a["\u0275mpd"](1073742336,pe.h,pe.h,[]),a["\u0275mpd"](1073742336,Y.d,Y.d,[]),a["\u0275mpd"](1073742336,F.a,F.a,[]),a["\u0275mpd"](1073742336,me.a,me.a,[]),a["\u0275mpd"](1073742336,i.n,i.n,[]),a["\u0275mpd"](1073742336,i.u,i.u,[]),a["\u0275mpd"](1073742336,se.b,se.b,[]),a["\u0275mpd"](1073742336,ge.d,ge.d,[]),a["\u0275mpd"](1073742336,ve.a,ve.a,[]),a["\u0275mpd"](1073742336,C.e,C.e,[]),a["\u0275mpd"](1073742336,fe.c,fe.c,[]),a["\u0275mpd"](1073742336,he.b,he.b,[]),a["\u0275mpd"](1073742336,be.g,be.g,[]),a["\u0275mpd"](1073742336,U.g,U.g,[]),a["\u0275mpd"](1073742336,i.r,i.r,[]),a["\u0275mpd"](1073742336,S.d,S.d,[]),a["\u0275mpd"](1073742336,Ce.a,Ce.a,[]),a["\u0275mpd"](1073742336,j.k,j.k,[]),a["\u0275mpd"](1073742336,ee.i,ee.i,[]),a["\u0275mpd"](1073742336,i.y,i.y,[]),a["\u0275mpd"](1073742336,i.o,i.o,[]),a["\u0275mpd"](1073742336,we.b,we.b,[]),a["\u0275mpd"](1073742336,le.c,le.c,[]),a["\u0275mpd"](1073742336,ye.o,ye.o,[]),a["\u0275mpd"](1073742336,_e.a,_e.a,[]),a["\u0275mpd"](1073742336,ae.c,ae.c,[]),a["\u0275mpd"](1073742336,Se.a,Se.a,[]),a["\u0275mpd"](1073742336,Re.c,Re.c,[]),a["\u0275mpd"](1073742336,De.d,De.d,[]),a["\u0275mpd"](1073742336,Fe.j,Fe.j,[]),a["\u0275mpd"](1073742336,te.i,te.i,[]),a["\u0275mpd"](1073742336,te.f,te.f,[]),a["\u0275mpd"](1073742336,ke.e,ke.e,[]),a["\u0275mpd"](1073742336,qe.d,qe.d,[]),a["\u0275mpd"](1073742336,qe.c,qe.c,[]),a["\u0275mpd"](1073742336,oe.e,oe.e,[]),a["\u0275mpd"](1073742336,Ne.c,Ne.c,[]),a["\u0275mpd"](1073742336,Te.a,Te.a,[]),a["\u0275mpd"](1073742336,R.q,R.q,[]),a["\u0275mpd"](1073742336,Oe.a,Oe.a,[]),a["\u0275mpd"](1073742336,f.c,f.c,[]),a["\u0275mpd"](1073742336,v.e,v.e,[]),a["\u0275mpd"](1073742336,xe.b,xe.b,[]),a["\u0275mpd"](1073742336,Ae.a,Ae.a,[]),a["\u0275mpd"](1073742336,Le.a,Le.a,[[2,f.g],a.PLATFORM_ID]),a["\u0275mpd"](1073742336,Ee.AgGridModule,Ee.AgGridModule,[]),a["\u0275mpd"](1073742336,Ie.a,Ie.a,[]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,s.i,(function(){return[[{path:"",component:I,pathMatch:"full",canActivate:[Pe.a],data:de}]]}),[]),a["\u0275mpd"](256,i.e,i.i,[]),a["\u0275mpd"](256,we.a,{separatorKeyCodes:[Me.f]},[])])}))}}]);
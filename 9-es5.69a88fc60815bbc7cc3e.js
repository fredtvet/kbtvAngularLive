function _defineProperties(e,n){for(var l=0;l<n.length;l++){var a=n[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,l){return n&&_defineProperties(e.prototype,n),l&&_defineProperties(e,l),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"K/8C":function(e,n,l){"use strict";l.r(n);var a=l("8Y7J"),t=function e(){_classCallCheck(this,e)},o=l("pMnS"),d=l("MlvX"),r=l("Xd0L"),i=l("6sDv"),u=l("rqpR"),c=l("7QIX"),p=l("WJ2q"),m=l("WTUP"),s=l("iInd"),f=l("wHOn"),v=l("VDRc"),g=l("/q54"),h=l("IP0z"),b=l("dJrM"),C=l("HsOI"),y=l("/HVE"),w=l("omvX"),_=l("Azqq"),k=l("JjoW"),S=l("s7LF"),F=l("hOhj"),D=l("5GAg"),q=l("SVse"),O=l("hNGQ"),R=l("+dxm"),x=l("jIY6"),A=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(e){return a["\u0275vid"](0,[],null,null)}l("ey9i");var T=l("quSY"),P=function(){function e(n,l,a,t){_classCallCheck(this,e),this.employerService=n,this.missionTypeService=l,this.missionService=a,this.reportTypeService=t,this.columnDefs=[],this.rowData=[],this.tables=["Oppdrag","Oppdragstyper","Oppdragsgivere","Rapporttyper"],this.tableSub$=new T.a}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"editCell",value:function(e){console.log(e),this.getService(this.currentTable).update$(e).subscribe((function(e){return console.log("success")}))}},{key:"initNgGrid",value:function(e){var n=this;if(0==e.length)return null;this.columnDefs=[],this.rowData=[],Object.getOwnPropertyNames(e[0]).forEach((function(e){return n.addColumnDef(e)})),this.rowData=e}},{key:"changeTable",value:function(e){var n=this;this.tableSub$.unsubscribe(),this.tableSub$=this.getService(e).getAll$().subscribe((function(e){return n.initNgGrid(e)}))}},{key:"addColumnDef",value:function(e){var n=e.toLowerCase();if("updatedat"==n||"createdat"==n)return!1;var l={field:e,sortable:!0,resizable:!0,editable:!0,checkboxSelection:!1};"id"==n&&(l.checkboxSelection=!0,l.resizable=!1),(n.toLowerCase().includes("id")||"finished"==n)&&(l.editable=!1),this.columnDefs.push(l)}},{key:"getService",value:function(e){switch(e){case"Oppdrag":return this.missionService;case"Oppdragstyper":return this.missionTypeService;case"Oppdragsgivere":return this.employerService;case"Rapporttyper":return this.reportTypeService}}}]),e}(),I=l("wEB+"),N=l("dEfl"),M=l("gYF6"),E=l("pS1d"),V=a["\u0275crt"]({encapsulation:0,styles:[[".mat-form-field-wrapper{padding-bottom:0!important}  .mat-form-field-flex{height:59.5px!important}  .mat-form-field-underline{margin-bottom:-1.25em!important}.data-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - (59.5 * 1px))!important}"]],data:{}});function j(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(e,n,l){var t=!0;return"click"===n&&(t=!1!==a["\u0275nov"](e,1)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==a["\u0275nov"](e,1)._handleKeydown(l)&&t),t}),d.c,d.a)),a["\u0275did"](1,8568832,[[10,4]],0,r.q,[a.ElementRef,a.ChangeDetectorRef,[2,r.j],[2,r.p]],{value:[0,"value"]},null),(e()(),a["\u0275ted"](2,0,["",""]))],(function(e,n){e(n,1,0,a["\u0275inlineInterpolate"](1,"",n.context.$implicit,""))}),(function(e,n){e(n,0,0,a["\u0275nov"](n,1)._getTabIndex(),a["\u0275nov"](n,1).selected,a["\u0275nov"](n,1).multiple,a["\u0275nov"](n,1).active,a["\u0275nov"](n,1).id,a["\u0275nov"](n,1)._getAriaSelected(),a["\u0275nov"](n,1).disabled.toString(),a["\u0275nov"](n,1).disabled),e(n,2,0,n.context.$implicit)}))}function G(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,35,"app-main-nav",[],null,null,null,i.b,i.a)),a["\u0275did"](1,376832,null,0,u.a,[c.a,p.a,m.a,s.k,f.a],null,null),(e()(),a["\u0275eld"](2,0,null,0,33,"div",[["class","static-page-container"],["fxLayout","column"],["fxLayoutGap","8px"]],null,null,null,null,null)),a["\u0275did"](3,671744,null,0,v.c,[a.ElementRef,g.i,[2,v.i],g.f],{fxLayout:[0,"fxLayout"]},null),a["\u0275did"](4,1720320,null,0,v.d,[a.ElementRef,a.NgZone,h.b,g.i,[2,v.h],g.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(e()(),a["\u0275eld"](5,0,null,null,25,"mat-form-field",[["appearance","fill"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),a["\u0275did"](6,7520256,null,9,C.c,[a.ElementRef,a.ChangeDetectorRef,[2,r.h],[2,h.b],[2,C.a],y.a,a.NgZone,[2,w.a]],{appearance:[0,"appearance"]},null),a["\u0275qud"](603979776,1,{_controlNonStatic:0}),a["\u0275qud"](335544320,2,{_controlStatic:0}),a["\u0275qud"](603979776,3,{_labelChildNonStatic:0}),a["\u0275qud"](335544320,4,{_labelChildStatic:0}),a["\u0275qud"](603979776,5,{_placeholderChild:0}),a["\u0275qud"](603979776,6,{_errorChildren:1}),a["\u0275qud"](603979776,7,{_hintChildren:1}),a["\u0275qud"](603979776,8,{_prefixChildren:1}),a["\u0275qud"](603979776,9,{_suffixChildren:1}),(e()(),a["\u0275eld"](16,0,null,3,2,"mat-label",[],null,null,null,null,null)),a["\u0275did"](17,16384,[[3,4],[4,4]],0,C.g,[],null,null),(e()(),a["\u0275ted"](-1,null,["Velg"])),(e()(),a["\u0275eld"](19,0,null,1,11,"mat-select",[["class","mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"selectionChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(e,n,l){var t=!0,o=e.component;return"keydown"===n&&(t=!1!==a["\u0275nov"](e,24)._handleKeydown(l)&&t),"focus"===n&&(t=!1!==a["\u0275nov"](e,24)._onFocus()&&t),"blur"===n&&(t=!1!==a["\u0275nov"](e,24)._onBlur()&&t),"ngModelChange"===n&&(t=!1!==(o.currentTable=l)&&t),"selectionChange"===n&&(t=!1!==o.changeTable(l.value)&&t),t}),_.b,_.a)),a["\u0275prd"](6144,null,r.j,null,[k.c]),a["\u0275did"](21,671744,null,0,S.p,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a["\u0275prd"](2048,null,S.l,null,[S.p]),a["\u0275did"](23,16384,null,0,S.m,[[4,S.l]],null,null),a["\u0275did"](24,2080768,null,3,k.c,[F.e,a.ChangeDetectorRef,a.NgZone,r.b,a.ElementRef,[2,h.b],[2,S.o],[2,S.g],[2,C.c],[6,S.l],[8,null],k.a,D.i],null,{selectionChange:"selectionChange"}),a["\u0275qud"](603979776,10,{options:1}),a["\u0275qud"](603979776,11,{optionGroups:1}),a["\u0275qud"](603979776,12,{customTrigger:0}),a["\u0275prd"](2048,[[1,4],[2,4]],C.d,null,[k.c]),(e()(),a["\u0275and"](16777216,null,1,1,null,j)),a["\u0275did"](30,278528,null,0,q.k,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),a["\u0275eld"](31,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-balham-dark data-container"]],null,[[null,"cellValueChanged"]],(function(e,n,l){var a=!0;return"cellValueChanged"===n&&(a=!1!==e.component.editCell(l.data)&&a),a}),L,A)),a["\u0275prd"](512,null,O.AngularFrameworkOverrides,O.AngularFrameworkOverrides,[a.NgZone]),a["\u0275prd"](512,null,R.AngularFrameworkComponentWrapper,R.AngularFrameworkComponentWrapper,[]),a["\u0275did"](34,4898816,null,1,x.AgGridAngular,[a.ElementRef,a.ViewContainerRef,O.AngularFrameworkOverrides,R.AngularFrameworkComponentWrapper,a.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"]},{cellValueChanged:"cellValueChanged"}),a["\u0275qud"](603979776,13,{columns:1})],(function(e,n){var l=n.component;e(n,1,0),e(n,3,0,"column"),e(n,4,0,"8px"),e(n,6,0,"fill"),e(n,21,0,l.currentTable),e(n,24,0),e(n,30,0,l.tables),e(n,34,0,l.rowData,l.columnDefs)}),(function(e,n){e(n,5,1,["standard"==a["\u0275nov"](n,6).appearance,"fill"==a["\u0275nov"](n,6).appearance,"outline"==a["\u0275nov"](n,6).appearance,"legacy"==a["\u0275nov"](n,6).appearance,a["\u0275nov"](n,6)._control.errorState,a["\u0275nov"](n,6)._canLabelFloat,a["\u0275nov"](n,6)._shouldLabelFloat(),a["\u0275nov"](n,6)._hasFloatingLabel(),a["\u0275nov"](n,6)._hideControlPlaceholder(),a["\u0275nov"](n,6)._control.disabled,a["\u0275nov"](n,6)._control.autofilled,a["\u0275nov"](n,6)._control.focused,"accent"==a["\u0275nov"](n,6).color,"warn"==a["\u0275nov"](n,6).color,a["\u0275nov"](n,6)._shouldForward("untouched"),a["\u0275nov"](n,6)._shouldForward("touched"),a["\u0275nov"](n,6)._shouldForward("pristine"),a["\u0275nov"](n,6)._shouldForward("dirty"),a["\u0275nov"](n,6)._shouldForward("valid"),a["\u0275nov"](n,6)._shouldForward("invalid"),a["\u0275nov"](n,6)._shouldForward("pending"),!a["\u0275nov"](n,6)._animationsEnabled]),e(n,19,1,[a["\u0275nov"](n,23).ngClassUntouched,a["\u0275nov"](n,23).ngClassTouched,a["\u0275nov"](n,23).ngClassPristine,a["\u0275nov"](n,23).ngClassDirty,a["\u0275nov"](n,23).ngClassValid,a["\u0275nov"](n,23).ngClassInvalid,a["\u0275nov"](n,23).ngClassPending,a["\u0275nov"](n,24).id,a["\u0275nov"](n,24).tabIndex,a["\u0275nov"](n,24)._getAriaLabel(),a["\u0275nov"](n,24)._getAriaLabelledby(),a["\u0275nov"](n,24).required.toString(),a["\u0275nov"](n,24).disabled.toString(),a["\u0275nov"](n,24).errorState,a["\u0275nov"](n,24).panelOpen?a["\u0275nov"](n,24)._optionIds:null,a["\u0275nov"](n,24).multiple,a["\u0275nov"](n,24)._ariaDescribedby||null,a["\u0275nov"](n,24)._getAriaActiveDescendant(),a["\u0275nov"](n,24).disabled,a["\u0275nov"](n,24).errorState,a["\u0275nov"](n,24).required,a["\u0275nov"](n,24).empty])}))}var z=a["\u0275ccf"]("app-data-manager",P,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-data-manager",[],null,null,null,G,V)),a["\u0275did"](1,114688,null,0,P,[I.a,N.a,M.a,E.a],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),W=l("t68o"),Z=l("zbXB"),J=l("NcP4"),B=l("xYTU"),Q=l("POq0"),$=l("QQfA"),H=l("s6ns"),K=l("821u"),X=l("Mz6y"),Y=l("cUpR"),U=l("OIZN"),ee=l("gavF"),ne=l("/Co4"),le={allowedRoles:[l("M0ag").f.Leder]},ae=function e(){_classCallCheck(this,e)},te=l("Fwaw"),oe=l("BzsH"),de=l("Gi4r"),re=l("BV1i"),ie=l("KPQW"),ue=l("02hT"),ce=l("Q+lL"),pe=l("FVPZ"),me=l("oapL"),se=l("ZwOa"),fe=l("zMNK"),ve=l("elxJ"),ge=l("kNGD"),he=l("zQui"),be=l("8rEH"),Ce=l("igqZ"),ye=l("5Bek"),we=l("c9fC"),_e=l("rWV4"),ke=l("dFDH"),Se=l("r0V8"),Fe=l("W5yJ"),De=l("ssao"),qe=l("1v46"),Oe=l("ura0"),Re=l("Nhcz"),xe=l("u9T3"),Ae=l("SXLW"),Le=l("PCNd"),Te=l("ecC8"),Pe=l("dvZr");l.d(n,"DataManagementModuleNgFactory",(function(){return Ie}));var Ie=a["\u0275cmf"](t,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,z,W.a,Z.b,Z.a,J.a,B.a,B.b]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,q.n,q.m,[a.LOCALE_ID,[2,q.C]]),a["\u0275mpd"](4608,S.u,S.u,[]),a["\u0275mpd"](4608,Q.c,Q.c,[]),a["\u0275mpd"](4608,r.b,r.b,[]),a["\u0275mpd"](4608,$.c,$.c,[$.i,$.e,a.ComponentFactoryResolver,$.h,$.f,a.Injector,a.NgZone,q.d,h.b,[2,q.h]]),a["\u0275mpd"](5120,$.j,$.k,[$.c]),a["\u0275mpd"](5120,k.a,k.b,[$.c]),a["\u0275mpd"](5120,H.c,H.d,[$.c]),a["\u0275mpd"](135680,H.e,H.e,[$.c,a.Injector,[2,q.h],[2,H.b],H.c,[3,H.e],$.e]),a["\u0275mpd"](4608,K.h,K.h,[]),a["\u0275mpd"](5120,K.a,K.b,[$.c]),a["\u0275mpd"](4608,r.a,r.x,[[2,r.f],y.a]),a["\u0275mpd"](5120,X.a,X.b,[$.c]),a["\u0275mpd"](4608,Y.e,r.c,[[2,r.g],[2,r.l]]),a["\u0275mpd"](5120,U.b,U.a,[[3,U.b]]),a["\u0275mpd"](5120,ee.c,ee.j,[$.c]),a["\u0275mpd"](5120,ne.b,ne.c,[$.c]),a["\u0275mpd"](4608,S.e,S.e,[]),a["\u0275mpd"](5120,a.APP_BOOTSTRAP_LISTENER,(function(e,n){return[g.j(e,n)]}),[q.d,a.PLATFORM_ID]),a["\u0275mpd"](1073742336,q.c,q.c,[]),a["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),a["\u0275mpd"](1073742336,ae,ae,[]),a["\u0275mpd"](1073742336,S.t,S.t,[]),a["\u0275mpd"](1073742336,S.i,S.i,[]),a["\u0275mpd"](1073742336,c.c,c.c,[]),a["\u0275mpd"](1073742336,h.a,h.a,[]),a["\u0275mpd"](1073742336,r.l,r.l,[[2,r.d],[2,Y.f]]),a["\u0275mpd"](1073742336,y.b,y.b,[]),a["\u0275mpd"](1073742336,r.w,r.w,[]),a["\u0275mpd"](1073742336,te.c,te.c,[]),a["\u0275mpd"](1073742336,oe.b,oe.b,[]),a["\u0275mpd"](1073742336,de.c,de.c,[]),a["\u0275mpd"](1073742336,F.c,F.c,[]),a["\u0275mpd"](1073742336,re.h,re.h,[]),a["\u0275mpd"](1073742336,Q.d,Q.d,[]),a["\u0275mpd"](1073742336,D.a,D.a,[]),a["\u0275mpd"](1073742336,ie.a,ie.a,[]),a["\u0275mpd"](1073742336,r.n,r.n,[]),a["\u0275mpd"](1073742336,r.u,r.u,[]),a["\u0275mpd"](1073742336,ue.b,ue.b,[]),a["\u0275mpd"](1073742336,ce.d,ce.d,[]),a["\u0275mpd"](1073742336,pe.a,pe.a,[]),a["\u0275mpd"](1073742336,C.e,C.e,[]),a["\u0275mpd"](1073742336,me.c,me.c,[]),a["\u0275mpd"](1073742336,se.b,se.b,[]),a["\u0275mpd"](1073742336,fe.g,fe.g,[]),a["\u0275mpd"](1073742336,$.g,$.g,[]),a["\u0275mpd"](1073742336,r.r,r.r,[]),a["\u0275mpd"](1073742336,k.d,k.d,[]),a["\u0275mpd"](1073742336,ve.a,ve.a,[]),a["\u0275mpd"](1073742336,H.k,H.k,[]),a["\u0275mpd"](1073742336,K.i,K.i,[]),a["\u0275mpd"](1073742336,r.y,r.y,[]),a["\u0275mpd"](1073742336,r.o,r.o,[]),a["\u0275mpd"](1073742336,ge.b,ge.b,[]),a["\u0275mpd"](1073742336,X.c,X.c,[]),a["\u0275mpd"](1073742336,he.o,he.o,[]),a["\u0275mpd"](1073742336,be.a,be.a,[]),a["\u0275mpd"](1073742336,U.c,U.c,[]),a["\u0275mpd"](1073742336,Ce.a,Ce.a,[]),a["\u0275mpd"](1073742336,ye.c,ye.c,[]),a["\u0275mpd"](1073742336,we.d,we.d,[]),a["\u0275mpd"](1073742336,_e.j,_e.j,[]),a["\u0275mpd"](1073742336,ee.i,ee.i,[]),a["\u0275mpd"](1073742336,ee.f,ee.f,[]),a["\u0275mpd"](1073742336,ke.e,ke.e,[]),a["\u0275mpd"](1073742336,Se.d,Se.d,[]),a["\u0275mpd"](1073742336,Se.c,Se.c,[]),a["\u0275mpd"](1073742336,ne.e,ne.e,[]),a["\u0275mpd"](1073742336,Fe.c,Fe.c,[]),a["\u0275mpd"](1073742336,De.a,De.a,[]),a["\u0275mpd"](1073742336,S.q,S.q,[]),a["\u0275mpd"](1073742336,qe.a,qe.a,[]),a["\u0275mpd"](1073742336,g.c,g.c,[]),a["\u0275mpd"](1073742336,v.e,v.e,[]),a["\u0275mpd"](1073742336,Oe.b,Oe.b,[]),a["\u0275mpd"](1073742336,Re.a,Re.a,[]),a["\u0275mpd"](1073742336,xe.a,xe.a,[[2,g.g],a.PLATFORM_ID]),a["\u0275mpd"](1073742336,Ae.AgGridModule,Ae.AgGridModule,[]),a["\u0275mpd"](1073742336,Le.a,Le.a,[]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,s.i,(function(){return[[{path:"",component:P,pathMatch:"full",canActivate:[Te.a],data:le}]]}),[]),a["\u0275mpd"](256,r.e,r.i,[]),a["\u0275mpd"](256,ge.a,{separatorKeyCodes:[Pe.f]},[])])}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1eh6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("K9Ia"),a=n("TYT/"),i=function(){function e(){this.unsubscribe=new r.a}return e.prototype.ngOnDestroy=function(){this.unsubscribe.next(),this.unsubscribe.complete()},e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e}),e}()},"6tST":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("2WDa"),a=Object(r.p)("listAnimation",[Object(r.o)("* <=> *",[Object(r.j)(":enter",[Object(r.n)({opacity:0}),Object(r.l)("60ms",Object(r.e)("600ms ease-out",Object(r.n)({opacity:1})))],{optional:!0}),Object(r.j)(":leave",Object(r.e)("200ms",Object(r.n)({opacity:0})),{optional:!0})])])},"RHY+":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("TYT/"),a=function(){function e(){}return e.prototype.transform=function(e,t,n){return void 0===n&&(n="asc"),e.sort((function(e,r){if(!e[t])return 1;if(!r[t])return-1;var a=new Date(e[t]).getTime(),i=new Date(r[t]).getTime();return"asc"===n?a-i:i-a}))},e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"sortByDate",type:e,pure:!0}),e}()},tkcm:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n("TYT/"),a=n("k5Aa"),i=n("ZH9y"),o=n("uLXW"),l=n("Valr"),s=n("p+mS"),c=n("eHTH"),d=n("agxM"),m=n("QJY3"),p=n("MqYC"),u=n("XIAg"),f=n("cSbt"),g=n("iYur"),v=n("GsDI"),h=n("mWkv"),y=n("z17N"),b=function(){function e(){}return e.prototype.transform=function(e,t){return null!=e&&e.includes(t)},e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"arrayIncludes",type:e,pure:!0}),e}();function x(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"mat-option",9),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275property"]("value",n),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate2"](" ",n.firstName," ",n.lastName," ")}}function C(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"mat-form-field",5),r["\u0275\u0275elementStart"](2,"mat-select",6),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().filterPreset.user=e})),r["\u0275\u0275elementStart"](3,"mat-option"),r["\u0275\u0275text"](4,"Ingen"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](5,x,2,3,"mat-option",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](6,"mat-divider"),r["\u0275\u0275element"](7,"span",8),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngModel",a.filterPreset.user),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",a.users)}}function S(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",14),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).filterPreset.mission=null})),r["\u0275\u0275elementStart"](1,"mat-icon"),r["\u0275\u0275text"](2,"close"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"mat-option",9),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275property"]("value",n),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",n.address," ")}}function E(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"mat-form-field",5),r["\u0275\u0275elementStart"](2,"input",10),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().filterPreset.mission=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,S,3,0,"button",11),r["\u0275\u0275elementStart"](4,"mat-autocomplete",12,13),r["\u0275\u0275template"](6,w,2,2,"mat-option",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](7,"mat-divider"),r["\u0275\u0275element"](8,"span",8),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275reference"](5),i=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("matAutocomplete",a)("ngModel",i.filterPreset.mission),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.filterPreset.mission),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("displayWith",i.displayFnMission),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",i.missions)}}function M(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",14),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](3).filterPreset.dateRange=null})),r["\u0275\u0275elementStart"](1,"mat-icon"),r["\u0275\u0275text"](2,"close"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function P(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"mat-form-field",19),r["\u0275\u0275elementStart"](2,"input",20),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).filterPreset.dateRange=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,M,3,0,"button",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"owl-date-time",21,22),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275reference"](5),i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("owlDateTimeTrigger",a)("owlDateTime",a)("ngModel",i.filterPreset.dateRange),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.filterPreset.dateRange),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("pickerMode","dialog")("pickerType","calendar")}}function k(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",14),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](3).filterPreset.dateRange=null})),r["\u0275\u0275elementStart"](1,"mat-icon"),r["\u0275\u0275text"](2,"close"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}}function V(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"mat-form-field",19),r["\u0275\u0275elementStart"](2,"input",23),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"](2).filterPreset.dateRange=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,k,3,0,"button",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"owl-date-time",24,25),r["\u0275\u0275listener"]("monthSelected",(function(e){r["\u0275\u0275restoreView"](n);var t=r["\u0275\u0275reference"](5);return r["\u0275\u0275nextContext"](2).chosenMonthHandler(e,t)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275reference"](5),i=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("owlDateTimeTrigger",a)("owlDateTime",a)("ngModel",i.filterPreset.dateRange),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",i.filterPreset.dateRange),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("pickerMode","dialog")("pickerType","calendar")("startView","multi-years")}}function I(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label",15),r["\u0275\u0275text"](2,"Velg tidsrom"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"mat-radio-group",16),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().updateDateRangePreset(e)})),r["\u0275\u0275elementStart"](4,"mat-radio-button",9),r["\u0275\u0275text"](5," Denne uken "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"mat-radio-button",9),r["\u0275\u0275text"](7," Denne m\xe5ned "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"mat-radio-button",9),r["\u0275\u0275text"](9," I \xe5r "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"mat-radio-button",9,17),r["\u0275\u0275text"](12," Velg m\xe5ned "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"mat-radio-button",9,18),r["\u0275\u0275text"](15," Velg tid "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](16,"mat-radio-button",9),r["\u0275\u0275text"](17," Vis alt "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](18,P,6,6,"ng-container",1),r["\u0275\u0275template"](19,V,6,7,"ng-container",1),r["\u0275\u0275element"](20,"mat-divider"),r["\u0275\u0275element"](21,"span",8),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275reference"](11),i=r["\u0275\u0275reference"](14),o=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",o.filterPreset.dateRangePreset),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("value",o.dateRangePresets.CurrentWeek),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",o.dateRangePresets.CurrentMonth),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",o.dateRangePresets.CurrentYear),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",o.dateRangePresets.CustomMonth),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("value",o.dateRangePresets.Custom),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("value",o.dateRangePresets.ShowAll),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",i.checked),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",a.checked)}}function R(e,t){if(1&e){var n=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"label",15),r["\u0275\u0275text"](2,"Velg status"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"mat-radio-group",26),r["\u0275\u0275listener"]("ngModelChange",(function(e){return r["\u0275\u0275restoreView"](n),r["\u0275\u0275nextContext"]().filterPreset.status=e})),r["\u0275\u0275elementStart"](4,"mat-radio-button",9),r["\u0275\u0275text"](5," \xc5pen "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"mat-radio-button",9),r["\u0275\u0275text"](7," L\xe5st "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](8,"mat-divider"),r["\u0275\u0275element"](9,"span",8),r["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngModel",a.filterPreset.status),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("value",a.timesheetStatus.Open),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("value",a.timesheetStatus.Confirmed)}}var T=function(){function e(e){this.dateTimeService=e,this.timesheetStatus=a.g,this.dateRangePresets=a.a,this.missions=[],this.users=[],this.disabledFilters=[],this.filterChanged=new r.EventEmitter}return e.prototype.updateDateRangePreset=function(e){this.filterPreset.dateRangePreset=e,this.filterPreset.dateRange=this.dateTimeService.getRangeByDateRangePreset(e)},e.prototype.applyFilter=function(){this.filterChanged.emit(this.filterPreset)},e.prototype.close=function(){this.filterChanged.emit()},e.prototype.displayFnMission=function(e){return null==e?null:e.address},e.prototype.chosenMonthHandler=function(e,t){this.filterPreset.dateRange=this.dateTimeService.getMonthRange(e),t.close()},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-timesheet-filter"]],inputs:{missions:"missions",users:"users",filterPreset:"filterPreset",disabledFilters:"disabledFilters"},outputs:{filterChanged:"filterChanged"},decls:14,vars:16,consts:[["fxLayout","column","fxLayoutAlign","space-around stretch"],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"click"],[2,"max-width","400px"],["placeholder","Velg ansatt",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"mb-2"],[3,"value"],["matInput","","placeholder","Oppdrag","aria-label","Velg oppdrag",3,"matAutocomplete","ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Lukk",3,"click",4,"ngIf"],[3,"displayWith"],["auto1","matAutocomplete"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Lukk",3,"click"],[1,"mat-caption"],["color","primary","fxLayoutGap","8px",1,"mb-2",3,"ngModel","ngModelChange"],["customMonthSelect",""],["customDateRangeSelect",""],[2,"width","164px"],["matInput","","placeholder","Velg tidsrom","selectMode","range",3,"owlDateTimeTrigger","owlDateTime","ngModel","ngModelChange"],[3,"pickerMode","pickerType"],["customDateRange",""],["matInput","","placeholder","Velg m\xe5ned","selectMode","range",3,"owlDateTimeTrigger","owlDateTime","ngModel","ngModelChange"],[3,"pickerMode","pickerType","startView","monthSelected"],["customMonth",""],["color","primary","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px",1,"mb-2",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,C,8,2,"ng-container",1),r["\u0275\u0275pipe"](2,"arrayIncludes"),r["\u0275\u0275template"](3,E,9,5,"ng-container",1),r["\u0275\u0275pipe"](4,"arrayIncludes"),r["\u0275\u0275template"](5,I,22,9,"ng-container",1),r["\u0275\u0275pipe"](6,"arrayIncludes"),r["\u0275\u0275template"](7,R,10,3,"ng-container",1),r["\u0275\u0275pipe"](8,"arrayIncludes"),r["\u0275\u0275elementStart"](9,"span",2),r["\u0275\u0275elementStart"](10,"button",3),r["\u0275\u0275listener"]("click",(function(){return t.close()})),r["\u0275\u0275text"](11,"Avbryt"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"button",4),r["\u0275\u0275listener"]("click",(function(){return t.applyFilter()})),r["\u0275\u0275text"](13,"Bruk"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind2"](2,4,t.disabledFilters,"user")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind2"](4,7,t.disabledFilters,"mission")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind2"](6,10,t.disabledFilters,"dateRange")),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind2"](8,13,t.disabledFilters,"status")))},directives:[o.c,o.b,l.l,s.b,c.c,d.a,m.l,m.o,p.k,l.k,u.a,f.a,g.c,m.b,g.a,c.h,v.a,h.b,o.d,h.a,y.d,y.g,y.c],pipes:[b],encapsulation:2,changeDetection:0}),e}(),F=n("h/AT"),D=n("F/XL"),O=n("R5A2"),j=n("dJ3e"),A=n("9tSM"),L=function(){function e(e,t,n,r){var a=this;this._missionService=e,this._userService=t,this._bottomSheetRef=n,this.data=r,this.updateFilter=function(e){return a.close(e)},this.close=function(e){return a._bottomSheetRef.dismiss(e)}}return e.prototype.ngOnInit=function(){this.navConfig={title:"Velg filtre",leftBtn:{icon:"close",callback:this.close}},this.initalizeObservables()},e.prototype.initalizeObservables=function(){this.missions$=null!=this.data.disabledFilters&&this.data.disabledFilters.includes("mission")?Object(D.a)([]):this._missionService.getAll$(),this.users$=null!=this.data.disabledFilters&&this.data.disabledFilters.includes("user")?Object(D.a)([]):this._userService.getAll$()},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](O.a),r["\u0275\u0275directiveInject"](j.A),r["\u0275\u0275directiveInject"](F.d),r["\u0275\u0275directiveInject"](F.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-timesheet-filter-sheet-wrapper"]],decls:4,vars:9,consts:[[3,"config"],[3,"missions","users","filterPreset","disabledFilters","filterChanged"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"app-simple-top-nav",0),r["\u0275\u0275elementStart"](1,"app-timesheet-filter",1),r["\u0275\u0275listener"]("filterChanged",(function(e){return t.updateFilter(e)})),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("config",t.navConfig),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("missions",r["\u0275\u0275pipeBind1"](2,5,t.missions$))("users",r["\u0275\u0275pipeBind1"](3,7,t.users$))("filterPreset",t.data.filter)("disabledFilters",t.data.disabledFilters))},directives:[A.a,T],pipes:[l.b],encapsulation:2}),e}();n("kxXi"),n("NeHM"),n("t4cV"),n("yMcq")}}]);
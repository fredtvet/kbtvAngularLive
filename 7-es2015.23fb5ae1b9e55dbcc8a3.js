(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{j0av:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class r{}var t=e("pMnS"),o=e("t68o"),i=e("zbXB"),u=e("NcP4"),b=e("xYTU"),d=e("bujt"),s=e("Fwaw"),c=e("5GAg"),m=e("omvX"),p=e("Mr+X"),f=e("Gi4r"),h=e("NvT6"),g=e("W5yJ"),E=e("/HVE"),C=e("SVse"),v=e("6pcp"),y=e("BXZ7"),_=e("6UMx"),k=e("Q+lL"),F=e("6sDv"),S=e("rqpR"),w=e("7QIX"),x=e("WJ2q"),L=e("WTUP"),N=e("iInd"),O=e("wHOn"),I=e("VDRc"),q=e("/q54"),K=e("IP0z"),A=e("Pohz"),M=e("TtEo"),R=e("02hT"),D=e("M0ag");class J{constructor(l,n,e){this.employerService=l,this.identityService=n,this.router=e,this.ROLES=D.f}ngOnInit(){this.employerService.getAll$().subscribe(l=>this.employers=l),this.identityService.currentUser$.subscribe(l=>this.currentUser=l)}editEmployer(l){this.router.navigate(["oppdragsgivere",l,"rediger"])}createEmployer(){this.router.navigate(["oppdragsgivere","ny"])}}var P=e("wEB+"),B=a.qb({encapsulation:2,styles:[],data:{}});function V(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,4,"button",[["aria-label","ny"],["color","primary"],["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.createEmployer()&&a),a}),d.b,d.a)),a.rb(1,180224,null,0,s.b,[a.k,c.g,[2,m.a]],{color:[0,"color"]},null),(l()(),a.sb(2,0,null,0,2,"mat-icon",[["class","icon_125 mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),a.rb(3,9158656,null,0,f.b,[a.k,f.d,[8,null],[2,f.a],[2,a.l]],null,null),(l()(),a.Mb(-1,0,["add"]))],(function(l,n){l(n,1,0,"primary"),l(n,3,0)}),(function(l,n){l(n,0,0,a.Eb(n,1).disabled||null,"NoopAnimations"===a.Eb(n,1)._animationMode),l(n,2,0,a.Eb(n,3).inline,"primary"!==a.Eb(n,3).color&&"accent"!==a.Eb(n,3).color&&"warn"!==a.Eb(n,3).color)}))}function j(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"mat-spinner",[["class","center-spinner mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,h.b,h.a)),a.rb(1,114688,null,0,g.d,[a.k,E.a,[2,C.d],[2,m.a],g.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Eb(n,1)._noopAnimations,a.Eb(n,1).diameter,a.Eb(n,1).diameter)}))}function T(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,5,"app-nav-list-item",[],null,[[null,"click"]],(function(l,n,e){var a=!0,r=l.component;return"click"===n&&(a=!1!==(r.currentUser.role==r.ROLES.Leder?r.editEmployer(l.context.$implicit.id):"")&&a),a}),v.b,v.a)),a.rb(1,114688,null,0,y.a,[],{config:[0,"config"],last:[1,"last"]},null),a.Hb(2,{name:0,icon:1}),a.Hb(3,{name:0,icon:1}),a.Fb(4,2),a.Hb(5,{mainLine:0,startIcon:1,endIcon:2,subLines:3})],(function(l,n){var e=n.component,a=l(n,5,0,n.context.$implicit.name,"work",e.currentUser.role==e.ROLES.Leder?"edit":"",l(n,4,0,l(n,2,0,n.context.$implicit.phoneNumber||"Ingen kontaktnummer","phone"),l(n,3,0,n.context.$implicit.address||"Ingen addresse","home")));l(n,1,0,a,n.context.last)}),null)}function z(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,3,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,_.d,_.b)),a.rb(1,704512,null,0,k.g,[],null,null),(l()(),a.hb(16777216,null,0,1,null,T)),a.rb(3,278528,null,0,C.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.employers)}),null)}function U(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,23,"app-main-nav",[],null,null,null,F.b,F.a)),a.rb(1,376832,null,0,S.a,[w.a,x.a,L.a,N.k,O.a],null,null),(l()(),a.sb(2,0,null,0,21,"div",[["class","static-page-container"],["fxLayout","column"],["fxLayoutGap","8px"]],null,null,null,null,null)),a.rb(3,671744,null,0,I.c,[a.k,q.i,[2,I.i],q.f],{fxLayout:[0,"fxLayout"]},null),a.rb(4,1720320,null,0,I.d,[a.k,a.y,K.b,q.i,[2,I.h],q.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),a.sb(5,0,null,null,10,"div",[["class","content-header"],["fxFlex","10"]],null,null,null,null,null)),a.rb(6,671744,null,0,I.a,[a.k,q.i,q.e,I.f,q.f],{fxFlex:[0,"fxFlex"]},null),(l()(),a.sb(7,0,null,null,8,"div",[["fxFlex",""],["fxLayout","row"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),a.rb(8,671744,null,0,I.c,[a.k,q.i,[2,I.i],q.f],{fxLayout:[0,"fxLayout"]},null),a.rb(9,671744,null,0,I.b,[a.k,q.i,[2,I.g],q.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),a.rb(10,671744,null,0,I.a,[a.k,q.i,q.e,I.f,q.f],{fxFlex:[0,"fxFlex"]},null),(l()(),a.sb(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Oppdragsgivere"])),(l()(),a.hb(16777216,null,null,2,null,V)),a.rb(14,16384,null,0,A.a,[a.k,a.L,a.O,x.a],{ifRole:[0,"ifRole"]},null),a.Fb(15,2),(l()(),a.sb(16,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,M.b,M.a)),a.rb(17,49152,null,0,R.a,[],null,null),(l()(),a.sb(18,0,null,null,5,"div",[["class","static-page-content"],["fxFlex","90"]],null,null,null,null,null)),a.rb(19,671744,null,0,I.a,[a.k,q.i,q.e,I.f,q.f],{fxFlex:[0,"fxFlex"]},null),(l()(),a.hb(16777216,null,null,1,null,j)),a.rb(21,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,z)),a.rb(23,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0),l(n,3,0,"column"),l(n,4,0,"8px"),l(n,6,0,"10"),l(n,8,0,"row"),l(n,9,0,"space-between center"),l(n,10,0,"");var a=l(n,15,0,e.ROLES.Leder,e.ROLES.Mellomleder);l(n,14,0,a),l(n,19,0,"90"),l(n,21,0,!e.employers),l(n,23,0,e.employers)}),(function(l,n){l(n,16,0,a.Eb(n,17).vertical?"vertical":"horizontal",a.Eb(n,17).vertical,!a.Eb(n,17).vertical,a.Eb(n,17).inset)}))}function $(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"app-employer-list",[],null,null,null,U,B)),a.rb(1,114688,null,0,J,[P.a,x.a,N.k],null,null)],(function(l,n){l(n,1,0)}),null)}var H=a.ob("app-employer-list",J,$,{},{},[]),G=e("HsOI"),Q=e("s7LF"),W=e("dJrM"),X=e("Xd0L"),Z=e("ZwOa"),Y=e("oapL"),ll=e("d7n7");class nl{constructor(l){this._formBuilder=l,this.formSubmitted=new a.m,this.googleOptions={types:["geocode"],componentRestrictions:{country:"no"}},this.isCreateForm=!1}ngOnInit(){null==this.employer&&(this.employer=new D.b,this.isCreateForm=!0),this.initalizeForm()}initalizeForm(){this.employerForm=this._formBuilder.group({id:this.employer.id,name:[this.employer.name,[Q.s.required,Q.s.maxLength(200)]],phoneNumber:[this.employer.phoneNumber,[Q.s.minLength(4),Q.s.maxLength(12)]],address:[this.employer.address,[Q.s.maxLength(100)]]})}onSubmit(){const{value:l,valid:n}=this.employerForm;n&&this.employerForm.dirty&&this.formSubmitted.emit(l)}handleAddressChange(l){this.employerForm.controls.address.setValue(l.formatted_address)}get name(){return this.employerForm.get("name")}get phoneNumber(){return this.employerForm.get("phoneNumber")}get address(){return this.employerForm.get("address")}}var el=a.qb({encapsulation:2,styles:[],data:{}});function al(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[6,4]],0,G.b,[],null,null),(l()(),a.Mb(-1,null,[" Navn er ett obligatorisk felt p\xe5 maks 200 tegn. "]))],null,(function(l,n){l(n,0,0,a.Eb(n,1).id)}))}function rl(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[15,4]],0,G.b,[],null,null),(l()(),a.Mb(-1,null,[" Kontaktnummer m\xe5 v\xe6re mellom 4 og 12 siffer. "]))],null,(function(l,n){l(n,0,0,a.Eb(n,1).id)}))}function tl(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[24,4]],0,G.b,[],null,null),(l()(),a.Mb(-1,null,[" Addresse kan maks ha 100 tegn. "]))],null,(function(l,n){l(n,0,0,a.Eb(n,1).id)}))}function ol(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,74,"form",[["class","form-container"],["fxLayout","column"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var r=!0;return"submit"===n&&(r=!1!==a.Eb(l,2).onSubmit(e)&&r),"reset"===n&&(r=!1!==a.Eb(l,2).onReset()&&r),r}),null,null)),a.rb(1,16384,null,0,Q.w,[],null,null),a.rb(2,540672,null,0,Q.g,[[8,null],[8,null]],{form:[0,"form"]},null),a.Jb(2048,null,Q.c,null,[Q.g]),a.rb(4,16384,null,0,Q.n,[[4,Q.c]],null,null),a.rb(5,671744,null,0,I.c,[a.k,q.i,[2,I.i],q.f],{fxLayout:[0,"fxLayout"]},null),(l()(),a.sb(6,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,W.b,W.a)),a.rb(7,7520256,null,9,G.c,[a.k,a.h,[2,X.h],[2,K.b],[2,G.a],E.a,a.y,[2,m.a]],null,null),a.Kb(603979776,1,{_controlNonStatic:0}),a.Kb(335544320,2,{_controlStatic:0}),a.Kb(603979776,3,{_labelChildNonStatic:0}),a.Kb(335544320,4,{_labelChildStatic:0}),a.Kb(603979776,5,{_placeholderChild:0}),a.Kb(603979776,6,{_errorChildren:1}),a.Kb(603979776,7,{_hintChildren:1}),a.Kb(603979776,8,{_prefixChildren:1}),a.Kb(603979776,9,{_suffixChildren:1}),(l()(),a.sb(17,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","name"],["matInput",""],["placeholder","Navn"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var r=!0;return"input"===n&&(r=!1!==a.Eb(l,18)._handleInput(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,18).onTouched()&&r),"compositionstart"===n&&(r=!1!==a.Eb(l,18)._compositionStart()&&r),"compositionend"===n&&(r=!1!==a.Eb(l,18)._compositionEnd(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,25)._focusChanged(!1)&&r),"focus"===n&&(r=!1!==a.Eb(l,25)._focusChanged(!0)&&r),"input"===n&&(r=!1!==a.Eb(l,25)._onInput()&&r),r}),null,null)),a.rb(18,16384,null,0,Q.d,[a.D,a.k,[2,Q.a]],null,null),a.rb(19,16384,null,0,Q.r,[],{required:[0,"required"]},null),a.Jb(1024,null,Q.j,(function(l){return[l]}),[Q.r]),a.Jb(1024,null,Q.k,(function(l){return[l]}),[Q.d]),a.rb(22,671744,null,0,Q.f,[[3,Q.c],[6,Q.j],[8,null],[6,Q.k],[2,Q.v]],{name:[0,"name"]},null),a.Jb(2048,null,Q.l,null,[Q.f]),a.rb(24,16384,null,0,Q.m,[[4,Q.l]],null,null),a.rb(25,999424,null,0,Z.a,[a.k,E.a,[6,Q.l],[2,Q.o],[2,Q.g],X.b,[8,null],Y.a,a.y],{placeholder:[0,"placeholder"],required:[1,"required"]},null),a.Jb(2048,[[1,4],[2,4]],G.d,null,[Z.a]),(l()(),a.hb(16777216,null,5,1,null,al)),a.rb(28,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(29,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,W.b,W.a)),a.rb(30,7520256,null,9,G.c,[a.k,a.h,[2,X.h],[2,K.b],[2,G.a],E.a,a.y,[2,m.a]],null,null),a.Kb(603979776,10,{_controlNonStatic:0}),a.Kb(335544320,11,{_controlStatic:0}),a.Kb(603979776,12,{_labelChildNonStatic:0}),a.Kb(335544320,13,{_labelChildStatic:0}),a.Kb(603979776,14,{_placeholderChild:0}),a.Kb(603979776,15,{_errorChildren:1}),a.Kb(603979776,16,{_hintChildren:1}),a.Kb(603979776,17,{_prefixChildren:1}),a.Kb(603979776,18,{_suffixChildren:1}),(l()(),a.sb(40,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","phoneNumber"],["matInput",""],["placeholder","Kontaktnummer"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var r=!0;return"input"===n&&(r=!1!==a.Eb(l,41)._handleInput(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,41).onTouched()&&r),"compositionstart"===n&&(r=!1!==a.Eb(l,41)._compositionStart()&&r),"compositionend"===n&&(r=!1!==a.Eb(l,41)._compositionEnd(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,46)._focusChanged(!1)&&r),"focus"===n&&(r=!1!==a.Eb(l,46)._focusChanged(!0)&&r),"input"===n&&(r=!1!==a.Eb(l,46)._onInput()&&r),r}),null,null)),a.rb(41,16384,null,0,Q.d,[a.D,a.k,[2,Q.a]],null,null),a.Jb(1024,null,Q.k,(function(l){return[l]}),[Q.d]),a.rb(43,671744,null,0,Q.f,[[3,Q.c],[8,null],[8,null],[6,Q.k],[2,Q.v]],{name:[0,"name"]},null),a.Jb(2048,null,Q.l,null,[Q.f]),a.rb(45,16384,null,0,Q.m,[[4,Q.l]],null,null),a.rb(46,999424,null,0,Z.a,[a.k,E.a,[6,Q.l],[2,Q.o],[2,Q.g],X.b,[8,null],Y.a,a.y],{placeholder:[0,"placeholder"]},null),a.Jb(2048,[[10,4],[11,4]],G.d,null,[Z.a]),(l()(),a.hb(16777216,null,5,1,null,rl)),a.rb(49,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(50,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,W.b,W.a)),a.rb(51,7520256,null,9,G.c,[a.k,a.h,[2,X.h],[2,K.b],[2,G.a],E.a,a.y,[2,m.a]],null,null),a.Kb(603979776,19,{_controlNonStatic:0}),a.Kb(335544320,20,{_controlStatic:0}),a.Kb(603979776,21,{_labelChildNonStatic:0}),a.Kb(335544320,22,{_labelChildStatic:0}),a.Kb(603979776,23,{_placeholderChild:0}),a.Kb(603979776,24,{_errorChildren:1}),a.Kb(603979776,25,{_hintChildren:1}),a.Kb(603979776,26,{_prefixChildren:1}),a.Kb(603979776,27,{_suffixChildren:1}),(l()(),a.sb(61,0,null,1,8,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","address"],["matInput",""],["ngx-google-places-autocomplete",""],["placeholder","Addresse"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"onAddressChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var r=!0,t=l.component;return"input"===n&&(r=!1!==a.Eb(l,62)._handleInput(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,62).onTouched()&&r),"compositionstart"===n&&(r=!1!==a.Eb(l,62)._compositionStart()&&r),"compositionend"===n&&(r=!1!==a.Eb(l,62)._compositionEnd(e.target.value)&&r),"blur"===n&&(r=!1!==a.Eb(l,67)._focusChanged(!1)&&r),"focus"===n&&(r=!1!==a.Eb(l,67)._focusChanged(!0)&&r),"input"===n&&(r=!1!==a.Eb(l,67)._onInput()&&r),"onAddressChange"===n&&(r=!1!==t.handleAddressChange(e)&&r),r}),null,null)),a.rb(62,16384,null,0,Q.d,[a.D,a.k,[2,Q.a]],null,null),a.Jb(1024,null,Q.k,(function(l){return[l]}),[Q.d]),a.rb(64,671744,null,0,Q.f,[[3,Q.c],[8,null],[8,null],[6,Q.k],[2,Q.v]],{name:[0,"name"]},null),a.Jb(2048,null,Q.l,null,[Q.f]),a.rb(66,16384,null,0,Q.m,[[4,Q.l]],null,null),a.rb(67,999424,null,0,Z.a,[a.k,E.a,[6,Q.l],[2,Q.o],[2,Q.g],X.b,[8,null],Y.a,a.y],{placeholder:[0,"placeholder"]},null),a.rb(68,4210688,[["placesRef",4]],0,ll.a,[a.k,a.y],{options:[0,"options"]},{onAddressChange:"onAddressChange"}),a.Jb(2048,[[19,4],[20,4]],G.d,null,[Z.a]),(l()(),a.hb(16777216,null,5,1,null,tl)),a.rb(71,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(72,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.onSubmit()&&a),a}),d.b,d.a)),a.rb(73,180224,null,0,s.b,[a.k,c.g,[2,m.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),a.Mb(-1,0,["Lagre"]))],(function(l,n){var e=n.component;l(n,2,0,e.employerForm),l(n,5,0,"column"),l(n,19,0,""),l(n,22,0,"name"),l(n,25,0,"Navn",""),l(n,28,0,e.name.invalid),l(n,43,0,"phoneNumber"),l(n,46,0,"Kontaktnummer"),l(n,49,0,e.phoneNumber.invalid),l(n,64,0,"address"),l(n,67,0,"Addresse"),l(n,68,0,e.googleOptions),l(n,71,0,e.address.invalid),l(n,73,0,e.employerForm.invalid||e.employerForm.pristine,"primary")}),(function(l,n){l(n,0,0,a.Eb(n,4).ngClassUntouched,a.Eb(n,4).ngClassTouched,a.Eb(n,4).ngClassPristine,a.Eb(n,4).ngClassDirty,a.Eb(n,4).ngClassValid,a.Eb(n,4).ngClassInvalid,a.Eb(n,4).ngClassPending),l(n,6,1,["standard"==a.Eb(n,7).appearance,"fill"==a.Eb(n,7).appearance,"outline"==a.Eb(n,7).appearance,"legacy"==a.Eb(n,7).appearance,a.Eb(n,7)._control.errorState,a.Eb(n,7)._canLabelFloat,a.Eb(n,7)._shouldLabelFloat(),a.Eb(n,7)._hasFloatingLabel(),a.Eb(n,7)._hideControlPlaceholder(),a.Eb(n,7)._control.disabled,a.Eb(n,7)._control.autofilled,a.Eb(n,7)._control.focused,"accent"==a.Eb(n,7).color,"warn"==a.Eb(n,7).color,a.Eb(n,7)._shouldForward("untouched"),a.Eb(n,7)._shouldForward("touched"),a.Eb(n,7)._shouldForward("pristine"),a.Eb(n,7)._shouldForward("dirty"),a.Eb(n,7)._shouldForward("valid"),a.Eb(n,7)._shouldForward("invalid"),a.Eb(n,7)._shouldForward("pending"),!a.Eb(n,7)._animationsEnabled]),l(n,17,1,[a.Eb(n,19).required?"":null,a.Eb(n,24).ngClassUntouched,a.Eb(n,24).ngClassTouched,a.Eb(n,24).ngClassPristine,a.Eb(n,24).ngClassDirty,a.Eb(n,24).ngClassValid,a.Eb(n,24).ngClassInvalid,a.Eb(n,24).ngClassPending,a.Eb(n,25)._isServer,a.Eb(n,25).id,a.Eb(n,25).placeholder,a.Eb(n,25).disabled,a.Eb(n,25).required,a.Eb(n,25).readonly&&!a.Eb(n,25)._isNativeSelect||null,a.Eb(n,25)._ariaDescribedby||null,a.Eb(n,25).errorState,a.Eb(n,25).required.toString()]),l(n,29,1,["standard"==a.Eb(n,30).appearance,"fill"==a.Eb(n,30).appearance,"outline"==a.Eb(n,30).appearance,"legacy"==a.Eb(n,30).appearance,a.Eb(n,30)._control.errorState,a.Eb(n,30)._canLabelFloat,a.Eb(n,30)._shouldLabelFloat(),a.Eb(n,30)._hasFloatingLabel(),a.Eb(n,30)._hideControlPlaceholder(),a.Eb(n,30)._control.disabled,a.Eb(n,30)._control.autofilled,a.Eb(n,30)._control.focused,"accent"==a.Eb(n,30).color,"warn"==a.Eb(n,30).color,a.Eb(n,30)._shouldForward("untouched"),a.Eb(n,30)._shouldForward("touched"),a.Eb(n,30)._shouldForward("pristine"),a.Eb(n,30)._shouldForward("dirty"),a.Eb(n,30)._shouldForward("valid"),a.Eb(n,30)._shouldForward("invalid"),a.Eb(n,30)._shouldForward("pending"),!a.Eb(n,30)._animationsEnabled]),l(n,40,1,[a.Eb(n,45).ngClassUntouched,a.Eb(n,45).ngClassTouched,a.Eb(n,45).ngClassPristine,a.Eb(n,45).ngClassDirty,a.Eb(n,45).ngClassValid,a.Eb(n,45).ngClassInvalid,a.Eb(n,45).ngClassPending,a.Eb(n,46)._isServer,a.Eb(n,46).id,a.Eb(n,46).placeholder,a.Eb(n,46).disabled,a.Eb(n,46).required,a.Eb(n,46).readonly&&!a.Eb(n,46)._isNativeSelect||null,a.Eb(n,46)._ariaDescribedby||null,a.Eb(n,46).errorState,a.Eb(n,46).required.toString()]),l(n,50,1,["standard"==a.Eb(n,51).appearance,"fill"==a.Eb(n,51).appearance,"outline"==a.Eb(n,51).appearance,"legacy"==a.Eb(n,51).appearance,a.Eb(n,51)._control.errorState,a.Eb(n,51)._canLabelFloat,a.Eb(n,51)._shouldLabelFloat(),a.Eb(n,51)._hasFloatingLabel(),a.Eb(n,51)._hideControlPlaceholder(),a.Eb(n,51)._control.disabled,a.Eb(n,51)._control.autofilled,a.Eb(n,51)._control.focused,"accent"==a.Eb(n,51).color,"warn"==a.Eb(n,51).color,a.Eb(n,51)._shouldForward("untouched"),a.Eb(n,51)._shouldForward("touched"),a.Eb(n,51)._shouldForward("pristine"),a.Eb(n,51)._shouldForward("dirty"),a.Eb(n,51)._shouldForward("valid"),a.Eb(n,51)._shouldForward("invalid"),a.Eb(n,51)._shouldForward("pending"),!a.Eb(n,51)._animationsEnabled]),l(n,61,1,[a.Eb(n,66).ngClassUntouched,a.Eb(n,66).ngClassTouched,a.Eb(n,66).ngClassPristine,a.Eb(n,66).ngClassDirty,a.Eb(n,66).ngClassValid,a.Eb(n,66).ngClassInvalid,a.Eb(n,66).ngClassPending,a.Eb(n,67)._isServer,a.Eb(n,67).id,a.Eb(n,67).placeholder,a.Eb(n,67).disabled,a.Eb(n,67).required,a.Eb(n,67).readonly&&!a.Eb(n,67)._isNativeSelect||null,a.Eb(n,67)._ariaDescribedby||null,a.Eb(n,67).errorState,a.Eb(n,67).required.toString()]),l(n,72,0,a.Eb(n,73).disabled||null,"NoopAnimations"===a.Eb(n,73)._animationMode)}))}function il(l){return a.Ob(0,[(l()(),a.hb(16777216,null,null,1,null,ol)),a.rb(1,16384,null,0,C.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.employerForm)}),null)}var ul=e("R/1h"),bl=e("quSY");class dl extends D.h{constructor(l,n,e,a,r){super(),this.employerService=l,this.notificationService=n,this.route=e,this.router=a,this.dialog=r,this.ROLES=D.f,this.googleOptions={types:["geocode"],componentRestrictions:{country:"no"}},this.mainNavConfig=new ul.a,this.isCreateForm=!1,this.employerSub=new bl.a,this.openDeleteDialog=l=>{console.log(l),this.dialog.open(D.a).afterClosed().subscribe(l=>{l&&this.deleteEmployer()})}}ngOnInit(){let l=this.route.snapshot.paramMap.get("id");l?this.employerSub=this.employerService.get$(+l).subscribe(l=>this.employer=l):this.isCreateForm=!0,this.configureMainNav()}onSubmit(l){l?this.isCreateForm?this.createEmployer(l):this.updateEmployer(l):this.onBack()}deleteEmployer(){this.employerService.delete$(this.employer.id).subscribe(l=>{this.notificationService.setNotification("Vellykket! Oppdragsgiver slettet."),this.onBack()})}updateEmployer(l){this.employerService.update$(l).subscribe(l=>{this.notificationService.setNotification("Vellykket oppdatering!"),this.onBack()})}createEmployer(l){this.employerService.add$(l).subscribe(l=>{this.notificationService.setNotification("Vellykket! Ny oppdragsgiver registrert."),this.onBack()})}configureMainNav(){this.isCreateForm||(this.vertActions=[new D.e("Slett","delete_forever","delete",this.openDeleteDialog,[D.f.Leder])],this.mainNavConfig.vertActions=this.vertActions),this.mainNavConfig.title=this.isCreateForm?"Ny":"Rediger",this.mainNavConfig.title+=" oppdragsgiver",this.mainNavConfig.menuBtnEnabled=!1}onBack(){this.router.navigate(["oppdragsgivere"])}ngOnDestroy(){this.employerSub.unsubscribe()}}var sl=e("Y4+Y"),cl=e("s6ns"),ml=a.qb({encapsulation:2,styles:[],data:{}});function pl(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,3,"app-main-nav",[],null,[[null,"backEvent"],[null,"vertEvent"]],(function(l,n,e){var a=!0,r=l.component;return"backEvent"===n&&(a=!1!==r.onBack()&&a),"vertEvent"===n&&(a=!1!==r.handleVertEvent(e)&&a),a}),F.b,F.a)),a.rb(1,376832,null,0,S.a,[w.a,x.a,L.a,N.k,O.a],{config:[0,"config"]},{vertEvent:"vertEvent",backEvent:"backEvent"}),(l()(),a.sb(2,0,null,0,1,"app-employer-form-view",[],null,[[null,"formSubmitted"]],(function(l,n,e){var a=!0;return"formSubmitted"===n&&(a=!1!==l.component.onSubmit(e)&&a),a}),il,el)),a.rb(3,114688,null,0,nl,[Q.e],{employer:[0,"employer"]},{formSubmitted:"formSubmitted"})],(function(l,n){var e=n.component;l(n,1,0,e.mainNavConfig),l(n,3,0,e.employer)}),null)}function fl(l){return a.Ob(0,[(l()(),a.sb(0,0,null,null,1,"app-employer-form",[],null,null,null,pl,ml)),a.rb(1,245760,null,0,dl,[P.a,sl.a,N.a,N.k,cl.e],null,null)],(function(l,n){l(n,1,0)}),null)}var hl=a.ob("app-employer-form",dl,fl,{},{},[]),gl=e("fj1o"),El=e("POq0"),Cl=e("QQfA"),vl=e("JjoW"),yl=e("821u"),_l=e("Mz6y"),kl=e("cUpR"),Fl=e("OIZN"),Sl=e("gavF"),wl=e("/Co4"),xl=e("BzsH"),Ll=e("hOhj"),Nl=e("BV1i"),Ol=e("KPQW"),Il=e("FVPZ"),ql=e("zMNK"),Kl=e("elxJ"),Al=e("kNGD"),Ml=e("zQui"),Rl=e("8rEH"),Dl=e("igqZ"),Jl=e("5Bek"),Pl=e("c9fC"),Bl=e("rWV4"),Vl=e("dFDH"),jl=e("r0V8"),Tl=e("ssao"),zl=e("1v46"),Ul=e("ura0"),$l=e("Nhcz"),Hl=e("u9T3"),Gl=e("PCNd");e("ey9i");const Ql={allowedRoles:[D.f.Leder,D.f.Mellomleder]},Wl={allowedRoles:[D.f.Leder,D.f.Mellomleder]},Xl={allowedRoles:[D.f.Leder]};class Zl{}var Yl=e("dvZr"),ln=e("ecC8");e.d(n,"EmployerModuleNgFactory",(function(){return nn}));var nn=a.pb(r,[],(function(l){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[t.a,o.a,i.b,i.a,u.a,b.a,b.b,H,hl,gl.a]],[3,a.j],a.w]),a.Cb(4608,C.n,C.m,[a.t,[2,C.C]]),a.Cb(4608,Q.u,Q.u,[]),a.Cb(4608,El.c,El.c,[]),a.Cb(4608,X.b,X.b,[]),a.Cb(4608,Cl.c,Cl.c,[Cl.i,Cl.e,a.j,Cl.h,Cl.f,a.q,a.y,C.d,K.b,[2,C.h]]),a.Cb(5120,Cl.j,Cl.k,[Cl.c]),a.Cb(5120,vl.a,vl.b,[Cl.c]),a.Cb(5120,cl.c,cl.d,[Cl.c]),a.Cb(135680,cl.e,cl.e,[Cl.c,a.q,[2,C.h],[2,cl.b],cl.c,[3,cl.e],Cl.e]),a.Cb(4608,yl.h,yl.h,[]),a.Cb(5120,yl.a,yl.b,[Cl.c]),a.Cb(4608,X.a,X.x,[[2,X.f],E.a]),a.Cb(5120,_l.a,_l.b,[Cl.c]),a.Cb(4608,kl.e,X.c,[[2,X.g],[2,X.l]]),a.Cb(5120,Fl.b,Fl.a,[[3,Fl.b]]),a.Cb(5120,Sl.c,Sl.j,[Cl.c]),a.Cb(5120,wl.b,wl.c,[Cl.c]),a.Cb(4608,Q.e,Q.e,[]),a.Cb(5120,a.b,(function(l,n){return[q.j(l,n)]}),[C.d,a.A]),a.Cb(1073742336,C.c,C.c,[]),a.Cb(1073742336,Q.t,Q.t,[]),a.Cb(1073742336,Q.i,Q.i,[]),a.Cb(1073742336,N.o,N.o,[[2,N.t],[2,N.k]]),a.Cb(1073742336,w.c,w.c,[]),a.Cb(1073742336,K.a,K.a,[]),a.Cb(1073742336,X.l,X.l,[[2,X.d],[2,kl.f]]),a.Cb(1073742336,E.b,E.b,[]),a.Cb(1073742336,X.w,X.w,[]),a.Cb(1073742336,s.c,s.c,[]),a.Cb(1073742336,xl.b,xl.b,[]),a.Cb(1073742336,f.c,f.c,[]),a.Cb(1073742336,Ll.c,Ll.c,[]),a.Cb(1073742336,Nl.h,Nl.h,[]),a.Cb(1073742336,El.d,El.d,[]),a.Cb(1073742336,c.a,c.a,[]),a.Cb(1073742336,Ol.a,Ol.a,[]),a.Cb(1073742336,X.n,X.n,[]),a.Cb(1073742336,X.u,X.u,[]),a.Cb(1073742336,R.b,R.b,[]),a.Cb(1073742336,k.d,k.d,[]),a.Cb(1073742336,Il.a,Il.a,[]),a.Cb(1073742336,G.e,G.e,[]),a.Cb(1073742336,Y.c,Y.c,[]),a.Cb(1073742336,Z.b,Z.b,[]),a.Cb(1073742336,ql.g,ql.g,[]),a.Cb(1073742336,Cl.g,Cl.g,[]),a.Cb(1073742336,X.r,X.r,[]),a.Cb(1073742336,vl.d,vl.d,[]),a.Cb(1073742336,Kl.a,Kl.a,[]),a.Cb(1073742336,cl.k,cl.k,[]),a.Cb(1073742336,yl.i,yl.i,[]),a.Cb(1073742336,X.y,X.y,[]),a.Cb(1073742336,X.o,X.o,[]),a.Cb(1073742336,Al.b,Al.b,[]),a.Cb(1073742336,_l.c,_l.c,[]),a.Cb(1073742336,Ml.o,Ml.o,[]),a.Cb(1073742336,Rl.a,Rl.a,[]),a.Cb(1073742336,Fl.c,Fl.c,[]),a.Cb(1073742336,Dl.a,Dl.a,[]),a.Cb(1073742336,Jl.c,Jl.c,[]),a.Cb(1073742336,Pl.d,Pl.d,[]),a.Cb(1073742336,Bl.j,Bl.j,[]),a.Cb(1073742336,Sl.i,Sl.i,[]),a.Cb(1073742336,Sl.f,Sl.f,[]),a.Cb(1073742336,Vl.e,Vl.e,[]),a.Cb(1073742336,jl.d,jl.d,[]),a.Cb(1073742336,jl.c,jl.c,[]),a.Cb(1073742336,wl.e,wl.e,[]),a.Cb(1073742336,g.c,g.c,[]),a.Cb(1073742336,Tl.a,Tl.a,[]),a.Cb(1073742336,Q.q,Q.q,[]),a.Cb(1073742336,zl.a,zl.a,[]),a.Cb(1073742336,q.c,q.c,[]),a.Cb(1073742336,I.e,I.e,[]),a.Cb(1073742336,Ul.b,Ul.b,[]),a.Cb(1073742336,$l.a,$l.a,[]),a.Cb(1073742336,Hl.a,Hl.a,[[2,q.g],a.A]),a.Cb(1073742336,Gl.a,Gl.a,[]),a.Cb(1073742336,Zl,Zl,[]),a.Cb(1073742336,r,r,[]),a.Cb(256,X.e,X.i,[]),a.Cb(256,Al.a,{separatorKeyCodes:[Yl.f]},[]),a.Cb(1024,N.i,(function(){return[[{path:"",component:J,pathMatch:"full",canActivate:[ln.a],data:Ql},{path:"ny",component:dl,pathMatch:"full",canActivate:[ln.a],data:Wl},{path:":id/rediger",component:dl,pathMatch:"full",canActivate:[ln.a],data:Xl}]]}),[])])}))}}]);
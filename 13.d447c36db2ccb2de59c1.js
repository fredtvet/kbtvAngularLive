(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cRhG:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileModule",(function(){return V}));var n=r("DUip"),o=r("dJ3e"),a=r("Gi3i"),i=r("67Y/"),s=r("VnD/"),d=r("1ua0"),l=r("TYT/"),p=r("ea4N"),m=r("IzAD"),c=r("Valr"),u=r("QJY3"),f=r("17Os"),h=r("uLXW"),v=r("eHTH"),w=r("cSbt"),b=r("GsDI"),y=r("p+mS"),g=r("Up+3");function S(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1," Passord m\xe5 v\xe6re p\xe5 minst 7 tegn. "),l["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var r=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",r.error," ")}}function E(e,t){if(1&e){var r=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"form",3),l["\u0275\u0275elementStart"](1,"mat-form-field"),l["\u0275\u0275element"](2,"input",4),l["\u0275\u0275elementStart"](3,"mat-icon",5),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](r);var e=l["\u0275\u0275nextContext"]();return e.hidePasswords.curr=!e.hidePasswords.curr})),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-form-field"),l["\u0275\u0275element"](6,"input",6),l["\u0275\u0275elementStart"](7,"mat-icon",5),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](r);var e=l["\u0275\u0275nextContext"]();return e.hidePasswords.new=!e.hidePasswords.new})),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](9,S,2,0,"mat-error",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"mat-form-field"),l["\u0275\u0275element"](11,"input",8),l["\u0275\u0275elementStart"](12,"mat-icon",5),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](r);var e=l["\u0275\u0275nextContext"]();return e.hidePasswords.confirm=!e.hidePasswords.confirm})),l["\u0275\u0275text"](13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](14,x,2,1,"mat-error",7),l["\u0275\u0275element"](15,"br"),l["\u0275\u0275elementStart"](16,"button",9),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](r),l["\u0275\u0275nextContext"]().onSubmit()})),l["\u0275\u0275text"](17," Lagre "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("formGroup",n.passwordForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("type",n.hidePasswords.curr?"password":"text"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",n.hidePasswords.curr?"visibility_off":"visibility"," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("type",n.hidePasswords.new?"password":"text"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",n.hidePasswords.new?"visibility_off":"visibility"," "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",n.password.invalid),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("type",n.hidePasswords.confirm?"password":"text"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",n.hidePasswords.confirm?"visibility_off":"visibility"," "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",n.error),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("disabled",n.passwordForm.invalid||n.passwordForm.pristine)}}var P=function(){function e(e){this._formBuilder=e,this.passwordUpdated=new l.EventEmitter,this.hidePasswords={curr:!0,new:!0,confirm:!0}}return e.prototype.ngOnInit=function(){this.initalizeForm()},e.prototype.initalizeForm=function(){this.passwordForm=this._formBuilder.group({oldPassword:["",[u.s.required,u.s.minLength(7)]],password:["",[u.s.required,u.s.minLength(7)]],confirmPassword:["",u.s.required]})},e.prototype.onSubmit=function(){var e=this.passwordForm;e.valid&&this.password.value===this.confirmPassword.value?(this.passwordUpdated.emit(e.value),this.passwordForm.reset()):this.password.value!==this.confirmPassword.value&&(this.error="Passordene er ikke like")},Object.defineProperty(e.prototype,"oldPassword",{get:function(){return this.passwordForm.get("oldPassword")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this.passwordForm.get("password")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"confirmPassword",{get:function(){return this.passwordForm.get("confirmPassword")},enumerable:!0,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](u.c))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-password-form"]],inputs:{error:"error"},outputs:{passwordUpdated:"passwordUpdated"},decls:5,vars:1,consts:[[1,"app-card"],[1,"mb-2"],["fxLayout","column",3,"formGroup",4,"ngIf"],["fxLayout","column",3,"formGroup"],["matInput","","placeholder","N\xe5v\xe6rende passord","formControlName","oldPassword",3,"type"],["matSuffix","",3,"click"],["matInput","","placeholder","Nytt passord","formControlName","password",3,"type"],[4,"ngIf"],["matInput","","placeholder","Gjenta nytt passord","formControlName","confirmPassword",3,"type"],["appHttpCommandButton","","mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-card",0),l["\u0275\u0275elementStart"](1,"mat-card-header",1),l["\u0275\u0275text"](2,"Endre passord"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"mat-card-content"),l["\u0275\u0275template"](4,E,18,10,"form",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.passwordForm))},directives:[f.a,f.c,f.b,c.l,u.t,u.m,h.c,u.e,v.c,w.a,u.b,u.l,u.d,b.a,v.h,y.b,g.a,v.b],encapsulation:2}),e}(),N=r("XehU"),I=r("3Qdv");function C(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-error"),l["\u0275\u0275text"](1," Kontaktnummer m\xe5 v\xe6re mellom 4 og 12 siffer. "),l["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e){var r=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"form",3),l["\u0275\u0275elementStart"](1,"mat-form-field"),l["\u0275\u0275element"](2,"input",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"mat-form-field"),l["\u0275\u0275element"](4,"input",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-form-field"),l["\u0275\u0275element"](6,"input",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"mat-form-field"),l["\u0275\u0275element"](8,"input",7),l["\u0275\u0275template"](9,C,2,0,"mat-error",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"button",9),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](r),l["\u0275\u0275nextContext"]().onSubmit()})),l["\u0275\u0275text"](11," Lagre "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("formGroup",n.profileForm),l["\u0275\u0275advance"](9),l["\u0275\u0275property"]("ngIf",n.phoneNumber.invalid),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",n.profileForm.invalid||n.profileForm.pristine)}}var F=function(){function e(e){this._formBuilder=e,this.profileUpdated=new l.EventEmitter}return e.prototype.ngOnInit=function(){this.initalizeForm()},e.prototype.initalizeForm=function(){this.profileForm=this._formBuilder.group({userName:[{value:this.user.userName,disabled:!0},[u.s.required,u.s.minLength(4),u.s.maxLength(100)]],firstName:[{value:this.user.firstName,disabled:!0},[u.s.required,u.s.maxLength(100)]],lastName:[{value:this.user.lastName,disabled:!0},[u.s.required,u.s.maxLength(100)]],phoneNumber:[this.user.phoneNumber,[u.s.minLength(4),u.s.maxLength(12)]]})},e.prototype.onSubmit=function(){var e=this.profileForm;e.valid&&this.profileUpdated.emit(e.value)},Object.defineProperty(e.prototype,"userName",{get:function(){return this.profileForm.get("userName")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"firstName",{get:function(){return this.profileForm.get("firstName")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastName",{get:function(){return this.profileForm.get("lastName")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"phoneNumber",{get:function(){return this.profileForm.get("phoneNumber")},enumerable:!0,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](u.c))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-profile-form"]],inputs:{user:"user"},outputs:{profileUpdated:"profileUpdated"},decls:5,vars:1,consts:[[1,"app-card"],[1,"mb-2"],["fxLayout","column",3,"formGroup",4,"ngIf"],["fxLayout","column",3,"formGroup"],["matInput","","placeholder","Brukernavn","formControlName","userName"],["matInput","","placeholder","Fornavn","formControlName","firstName","required",""],["matInput","","placeholder","Etternavn","formControlName","lastName","required",""],["matInput","","placeholder","Kontaktnummer","formControlName","phoneNumber"],[4,"ngIf"],["appHttpCommandButton","","mat-raised-button","","color","primary",1,"w-100",3,"disabled","click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-card",0),l["\u0275\u0275elementStart"](1,"mat-card-header",1),l["\u0275\u0275text"](2,"Endre profil"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"mat-card-content"),l["\u0275\u0275template"](4,k,12,3,"form",2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.profileForm&&t.user))},directives:[f.a,f.c,f.b,c.l,u.t,u.m,h.c,u.e,v.c,w.a,u.b,u.l,u.d,u.r,y.b,g.a,v.b],encapsulation:2,changeDetection:0}),e}();function j(e,t){if(1&e){var r=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"app-profile-form",13),l["\u0275\u0275listener"]("profileUpdated",(function(e){return l["\u0275\u0275restoreView"](r),l["\u0275\u0275nextContext"]().updateProfile(e)})),l["\u0275\u0275elementEnd"]()}2&e&&l["\u0275\u0275property"]("user",t.$implicit)}var U=[{path:"",component:function(){function e(e,t,r,n,o,l){var p=this;this.dataSyncService=e,this.appConfigService=t,this.mainNavService=r,this.authService=n,this.notificationService=o,this._dialog=l,this.user$=this.authService.currentUser$,this.syncRefreshTime$=this.appConfigService.config$.pipe(Object(a.a)(1e3),Object(i.a)((function(e){return e.syncRefreshTime/60}))),this.updateProfile=function(e){return p.authService.updateCurrentUser$(e).subscribe((function(e){return p.notificationService.setNotification("Vellykket oppdatering!")}))},this.confirmPurge=function(){p._dialog.open(d.a,{data:"Bekreft at du \xf8nsker \xe5 slette lokal data. Alt vil bli lastet inn p\xe5 nytt og dette krever mye data."}).afterClosed().pipe(Object(s.a)((function(e){return e}))).subscribe((function(e){return p.reloadAllData()}))},this.refresh=function(){return p.dataSyncService.syncAll()},this.configureMainNav()}return e.prototype.updatePassword=function(e){var t=this;this.authService.changePassword$(e.oldPassword,e.password).subscribe((function(e){return t.notificationService.setNotification("Passord oppdatert!")}),(function(e){return t.passwordStatus="N\xe5v\xe6rende passord stemmer ikke"}),(function(){return t.passwordStatus=""}))},e.prototype.updateSyncRefreshTime=function(e){isNaN(e)&&(e=30),this.appConfigService.setSyncRefreshTime(60*e)},e.prototype.reloadAllData=function(){this.dataSyncService.purgeAll(),this.dataSyncService.syncAll()},e.prototype.configureMainNav=function(){this.mainNavService.addTopNavConfig({default:{title:"Profil",elevationDisabled:!1}})},e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.f),l["\u0275\u0275directiveInject"](o.b),l["\u0275\u0275directiveInject"](o.o),l["\u0275\u0275directiveInject"](o.e),l["\u0275\u0275directiveInject"](o.v),l["\u0275\u0275directiveInject"](p.b))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-profile"]],decls:20,vars:7,consts:[["mat-stretch-tabs","","color","accent"],["label","Profil"],[1,"p-2"],[3,"user","profileUpdated",4,"ngIf"],["label","Passord"],[3,"error","passwordUpdated"],["label","Annet"],["appAddToHomeScreen","","text","Legg til app","startIcon","get_app"],["text","Synkroniser manuelt","startIcon","update",3,"click"],["text","Slett lokal data","startIcon","delete_sweep",3,"click"],[1,"app-card","mt-1"],[1,"mb-2"],["matInput","","placeholder","Synkroniseringstid i minutter","type","tel",3,"ngModel","ngModelChange"],[3,"user","profileUpdated"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"mat-tab-group",0),l["\u0275\u0275elementStart"](1,"mat-tab",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275template"](3,j,1,1,"app-profile-form",3),l["\u0275\u0275pipe"](4,"async"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"mat-tab",4),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"app-password-form",5),l["\u0275\u0275listener"]("passwordUpdated",(function(e){return t.updatePassword(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"mat-tab",6),l["\u0275\u0275elementStart"](9,"div",2),l["\u0275\u0275element"](10,"app-list-card",7),l["\u0275\u0275elementStart"](11,"app-list-card",8),l["\u0275\u0275listener"]("click",(function(){return t.refresh()})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"app-list-card",9),l["\u0275\u0275listener"]("click",(function(){return t.confirmPurge()})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"mat-card",10),l["\u0275\u0275elementStart"](14,"mat-card-header",11),l["\u0275\u0275text"](15,"Konfigurasjon"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"mat-card-content"),l["\u0275\u0275elementStart"](17,"mat-form-field"),l["\u0275\u0275elementStart"](18,"input",12),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.updateSyncRefreshTime(e)})),l["\u0275\u0275pipe"](19,"async"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",l["\u0275\u0275pipeBind1"](4,3,t.user$)),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("error",t.passwordStatus),l["\u0275\u0275advance"](11),l["\u0275\u0275property"]("ngModel",l["\u0275\u0275pipeBind1"](19,5,t.syncRefreshTime$)))},directives:[m.b,m.a,c.l,P,N.a,I.a,f.a,f.c,f.b,v.c,w.a,u.b,u.l,u.o,F],pipes:[c.b],encapsulation:2,changeDetection:0}),e}(),canActivate:[o.d]}],L=function(){function e(){}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.f.forChild(U)],n.f]}),e}(),O=r("PCNd"),V=function(){function e(){}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[O.a,L]]}),e}()}}]);
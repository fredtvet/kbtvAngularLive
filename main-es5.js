(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div mat-dialog-content>\n        Bekreft at du ønsker å slette\n      </div>\n      <div mat-dialog-actions>\n        <button mat-button (click)=\"onNoClick()\">Avbryt</button>\n        <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Slett</button>\n      </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employee-form/employee-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employee-form/employee-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav\n      [icon]=\"this.isEditForm ? 'edit' : 'person_add'\"\n      [title]=\"this.title\"\n      [actions]=\"this.actions\"\n      (event)=\"handleEvent($event)\"\n></app-nested-nav>\n\n<form *ngIf=\"employeeForm\" class=\"form_container\" [formGroup]=\"employeeForm\">\n\n    <mat-form-field>\n        <input matInput placeholder=\"Brukernavn\"  formControlName=\"userName\" required>\n        <mat-error *ngIf=\"this.userName.invalid\">\n          Brukernavn er ett obligatorisk felt på minst 4 tegn.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field [ngClass]=\"{'hideInput': isEditForm}\">\n      <input matInput placeholder=\"Passord\"  formControlName=\"password\" required>\n      <mat-error *ngIf=\"this.password.invalid\">\n        Passord er ett obligatorisk felt på minst 7 tegn.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Fornavn\"  formControlName=\"firstName\" required>\n        <mat-error *ngIf=\"this.firstName.invalid\">\n            Fornavn er ett obligatorisk felt på maks 100 tegn.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Etternavn\"  formControlName=\"lastName\" required>\n        <mat-error *ngIf=\"this.lastName.invalid\">\n            Etternavn er ett obligatorisk felt på maks 100 tegn.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Rolle\" (change)=\"changeRole($event)\" formControlName=\"role\" required>\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role\">{{ role }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Kontaktnummer\"  formControlName=\"phoneNumber\">\n        <mat-error *ngIf=\"this.phoneNumber.invalid\">\n            Kontaktnummer må være mellom 4 og 12 siffer.\n        </mat-error>\n    </mat-form-field>\n\n\n\n    <button (click)=\"onSubmit()\" [disabled]=\"this.employeeForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/employer-form/employer-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/employer-form/employer-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav\n      [icon]=\"this.isEditForm ? 'edit' : 'add'\"\n      [title]=\"this.title\"\n      [actions]=\"this.actions\"\n      (event)=\"handleEvent($event)\"\n></app-nested-nav>\n\n<form *ngIf=\"employerForm\" class=\"form_container\" [formGroup]=\"employerForm\">\n\n    <mat-form-field>\n        <input matInput placeholder=\"Navn\"  formControlName=\"name\" required>\n        <mat-error *ngIf=\"this.name.invalid\">\n          Navn er ett obligatorisk felt på maks 200 tegn.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Kontaktnummer\"  formControlName=\"phoneNumber\">\n      <mat-error *ngIf=\"this.phoneNumber.invalid\">\n          Kontaktnummer må være mellom 4 og 12 siffer.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input ngx-google-places-autocomplete [options]='googleOptions' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"\n       matInput placeholder=\"Addresse\" formControlName=\"address\">\n       <mat-error *ngIf=\"this.address.invalid\">\n        Addresse kan maks ha 100 tegn.\n      </mat-error>\n    </mat-form-field>\n\n    <button (click)=\"onSubmit()\" [disabled]=\"this.employerForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/image-list/image-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/image-list/image-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-row\">\n    <div class=\"img-column\">\n        <img  *ngFor=\"let image of images | imagerow: '1':'4';let i = index;trackBy: trackById\"\n        (click)=\"openImageViewer(image.id)\"\n        src=\"{{ image.fileURL | thumbnail }}\"\n        (error)=\"unloadedThumbnail($event.path[0])\"\n        (load)=\"loadedThumbnail($event.path[0])\"\n        />\n    </div>\n    <div class=\"img-column\">\n        <img  *ngFor=\"let image of images | imagerow: '2':'4';let i = index;trackBy: trackById\"\n        (click)=\"openImageViewer(image.id)\"\n        src=\"{{ image.fileURL | thumbnail }}\"\n        (error)=\"unloadedThumbnail($event.path[0])\"\n        (load)=\"loadedThumbnail($event.path[0])\"\n        />\n    </div>\n    <div class=\"img-column\">\n        <img  *ngFor=\"let image of images | imagerow: '3':'4';let i = index;trackBy: trackById\"\n        (click)=\"openImageViewer(image.id)\"\n        src=\"{{ image.fileURL | thumbnail }}\"\n        (error)=\"unloadedThumbnail($event.path[0])\"\n        (load)=\"loadedThumbnail($event.path[0])\"\n        />\n    </div>\n    <div class=\"img-column\">\n        <img  *ngFor=\"let image of images | imagerow: '4':'4';let i = index;trackBy: trackById\"\n        (click)=\"openImageViewer(image.id)\"\n        src=\"{{ image.fileURL | thumbnail }}\"\n        (error)=\"unloadedThumbnail($event.path[0])\"\n        (load)=\"loadedThumbnail($event.path[0])\"\n        />\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/image-viewer-dialog/image-viewer-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/image-viewer-dialog/image-viewer-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<mat-toolbar #imageToolBar class=\"image_toolbar p-0\" [@showHideToolbar]=\"toolbarHidden ? 'hide' : 'show'\">\n    <button mat-icon-button aria-label=\"Lukk\" color=\"primary\" class=\"left_fab\" (click)=\"onNoClick()\">\n        <mat-icon class=\"icon_150\">chevron_left</mat-icon>\n    </button>\n    <app-vert-menu class=\"right_fab\" color=\"primary\" [actions]=\"actions\" (event)=\"handleEvent($event)\"></app-vert-menu>\n\n</mat-toolbar>\n\n<img *ngIf=\"currentImage\" (tap)=\"toggleToolBar()\" (swiperight)=\"previousImage()\" (swipeleft)=\"nextImage()\" [src]=\"currentImage.fileURL\" layout-fill/>\n\n<div class=\"page_counter\" [@showHideCounter]=\"toolbarHidden ? 'hide' : 'show'\">\n  <h5>{{ this.index + 1 }} / {{ this.images.length }}</h5>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mission-form/mission-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mission-form/mission-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav\n      icon=\"edit\"\n      [title]=\"this.title\"\n      (event)=\"onNoClick()\"\n    ></app-nested-nav>\n\n<form *ngIf=\"missionForm\" class=\"form_container\" [formGroup]=\"missionForm\">\n  <mat-form-field>\n      <input ngx-google-places-autocomplete [options]='googleOptions' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"\n       matInput placeholder=\"Addresse\" formControlName=\"address\" required>\n      <mat-error *ngIf=\"this.address.invalid\">\n          Addresse er ett obligatorisk felt på maks 100 tegn.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Kontaktnummer\"  formControlName=\"phoneNumber\">\n        <mat-error *ngIf=\"this.phoneNumber.invalid\">\n            Kontaktnummer må være mellom 4 og 12 siffer.\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea\n        matInput\n        cdkTextareaAutosize\n        #autosize=\"cdkTextareaAutosize\"\n        placeholder=\"Beskrivelse\"\n        formControlName=\"description\">\n      </textarea>\n      <mat-error *ngIf=\"this.description.invalid\">\n          Beskrivelse er på maks 400 tegn.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n            <mat-select placeholder=\"Oppdragsgiver\" (change)=\"changeEmployer($event)\" formControlName=\"employerId\">\n              <mat-option *ngFor=\"let employer of employers\" [value]=\"employer.id\">{{ employer.name }}</mat-option>\n            </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Oppdragstype\" (change)=\"changeType($event)\" formControlName=\"missionTypeId\">\n        <mat-option *ngFor=\"let type of missionTypes\" [value]=\"type.id\">{{ type.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n    <button (click)=\"onSubmit()\" [disabled]=\"this.missionForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mission-note-form/mission-note-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mission-note-form/mission-note-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav\nicon=\"edit\"\n[title]=\"this.headerTitle\"\n(event)=\"onNoClick()\"\n></app-nested-nav>\n\n<form *ngIf=\"noteForm\" class=\"form_container\" [formGroup]=\"noteForm\">\n\n      <mat-form-field>\n        <input matInput placeholder=\"Tittel\" formControlName=\"title\" >\n        <mat-error *ngIf=\"this.title.invalid\">\n            Tittel er på maks 40 tegn.\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <textarea\n          matInput\n          cdkTextareaAutosize\n          #autosize=\"cdkTextareaAutosize\"\n          placeholder=\"Innhold\"\n          formControlName=\"content\"\n          required>\n        </textarea>\n        <mat-error *ngIf=\"this.content.invalid\">\n            Innhold er ett obligatorisk felt på maks 400 tegn.\n        </mat-error>\n      </mat-form-field>\n\n\n    <mat-checkbox formControlName=\"pinned\">Viktig?</mat-checkbox>\n\n\n\n      <button (click)=\"onSubmit()\" [disabled]=\"this.noteForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mission-report-form/mission-report-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mission-report-form/mission-report-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h3 class=\"mb-3 text-center\">Legg til rapport</h3>\n  <form *ngIf=\"reportForm\" [formGroup]=\"reportForm\">\n    <mat-form-field class=\"mb-2\">\n      <mat-select formControlName=\"typeId\" (change)=\"changeType($event)\" placeholder=\"Velg type\">\n              <mat-option *ngFor=\"let type of reportTypes\" [value]=\"type.id\">{{ type.name }}</mat-option>\n      </mat-select >\n    </mat-form-field>\n    <input (change)=\"changeFile($event)\" type=\"file\" class=\"mb-4\">\n    <button (click)=\"onSubmit()\" [disabled]=\"this.reportForm.invalid || !this.files\" mat-raised-button class=\"form-control\" color=\"primary\">Last opp</button>\n  </form>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-list-item/nav-list-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-list-item/nav-list-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-icon matListIcon>{{ icon }}</mat-icon>\n    <a href=\"{{ href }}\"matLine>{{ name }}</a>\n</mat-list-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination/pagination.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"pagination_toolbar\">\n    \n    <button (click)=\"previousPage()\" mat-icon-button aria-label=\"Forrige side\">\n            <mat-icon class=\"pagination_icon\">chevron_left</mat-icon>\n    </button>\n\n    <span class=\"pagination_middle_text\">Side {{ paginationInfo.actualPage + 1 }} av {{ paginationInfo.totalPages }}</span>\n\n    <button (click)=\"nextPage()\" mat-icon-button aria-label=\"Neste side\">\n            <mat-icon class=\"pagination_icon\">chevron_right</mat-icon>\n    </button>\n\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/password-form/password-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/password-form/password-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"passwordForm\" class=\"form_container\" [formGroup]=\"passwordForm\">\n\n<mat-form-field>\n    <input matInput placeholder=\"Nåværende passord\"  type=\"password\" formControlName=\"oldPassword\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput placeholder=\"Nytt passord\"  type=\"password\" formControlName=\"password\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput placeholder=\"Gjenta nytt passord\"  type=\"password\" formControlName=\"confirmPassword\">\n</mat-form-field>\n<mat-error *ngIf=\"this.error\">\n  {{ this.error }}\n</mat-error>\n<br />\n<button (click)=\"onSubmit()\" [disabled]=\"this.passwordForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile-form/profile-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile-form/profile-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"profileForm && user\" class=\"form_container\" [formGroup]=\"profileForm\">\n\n    <mat-form-field>\n      <input matInput placeholder=\"Brukernavn\" formControlName=\"userName\" >\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Fornavn\"  formControlName=\"firstName\" required>\n    </mat-form-field>\n\n  <mat-form-field>\n      <input matInput placeholder=\"Etternavn\"  formControlName=\"lastName\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n      <input matInput placeholder=\"Kontaktnummer\"  formControlName=\"phoneNumber\">\n      <mat-error *ngIf=\"this.phoneNumber.invalid\">\n          Kontaktnummer må være mellom 4 og 12 siffer.\n      </mat-error>\n  </mat-form-field>\n\n  <button (click)=\"onSubmit()\" [disabled]=\"this.profileForm.invalid\" mat-raised-button color=\"primary\">Lagre</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-bar/search-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-bar/search-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggleSearchBar()\" class=\"nav_button\" mat-icon-button aria-label=\"Cancel search\" >\n    <mat-icon>search</mat-icon>\n</button>\n\n<mat-toolbar #searchToolBar class=\"search_toolbar p-0\" color=\"accent\" [@showHide]=\"isHidden ? 'hide' : 'show'\">\n\n    <button (click)=\"handleSearch()\" class=\"nav_button\" mat-icon-button aria-label=\"Search\">\n        <mat-icon>search</mat-icon>\n    </button>\n\n    <mat-form-field class=\"search_input\" floatLabel=never color=\"primary\">\n        <input [(ngModel)]=\"searchInput\" type=\"search\" matInput placeholder=\"Søk\" (keyup.enter)=\"handleSearch()\" (keyup.escape)=\"searchInput='';\">\n    </mat-form-field>\n    \n    <button (click)=\"toggleSearchBar()\" class=\"nav_button\" mat-icon-button aria-label=\"Cancel search\" >\n        <mat-icon>clear</mat-icon>\n    </button>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/auth/auth.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/auth/auth.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\" class=\"authForm\">\r\n          <img src=\"assets/android-chrome-144x144.png\" class=\"m-4\" style=\"width:120px;height:120px\" />\r\n\r\n          <fieldset [disabled]=\"isSubmitting\">\r\n            <mat-form-field>\r\n              <mat-icon matSuffix color=\"primary\">person</mat-icon>\r\n              <input matInput\r\n                formControlName=\"Username\"\r\n                placeholder=\"Brukernavn\"\r\n                type=\"text\" />\r\n            </mat-form-field><br />\r\n            <mat-form-field>\r\n              <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\r\n              <input matInput\r\n                formControlName=\"Password\"\r\n                placeholder=\"Passord\"\r\n                type=\"password\" />\r\n            </mat-form-field>\r\n          </fieldset>\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!authForm.valid\" type=\"submit\">\r\n            <mat-icon>lock_open</mat-icon>\r\n            Logg inn\r\n          </button>\r\n\r\n          <mat-error *ngIf=\"error\" class=\"mt-4\">\r\n            {{ error.message }}\r\n          </mat-error>\r\n\r\n        </form>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/employee-list/employee-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/employee-list/employee-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list *ngIf=\"employees\">\n  <ng-container *ngFor=\"let employee of employees\">\n    <mat-list-item *ngIf=\"employee.role == 'Leder'\">\n      <mat-icon mat-list-icon>person</mat-icon>\n      <h4 mat-line><b>{{employee.firstName}} {{employee.lastName}}</b></h4>\n      <p mat-line> {{employee.phoneNumber || 'Ingen kontaktnummer'}} </p>\n      <p mat-line> {{employee.role}} </p>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </ng-container>\n  <ng-container *ngFor=\"let employee of employees\">\n    <mat-list-item *ngIf=\"employee.role == 'Mellomleder'\">\n      <mat-icon mat-list-icon>person</mat-icon>\n      <h4 mat-line><b>{{employee.firstName}} {{employee.lastName}}</b></h4>\n      <p mat-line> {{employee.phoneNumber || 'Ingen kontaktnummer' }} </p>\n      <p mat-line> {{employee.role}} </p>\n      <button *ifRole=\"['Leder']\" (click)=\"openEditDialog(employee)\" mat-icon-button aria-label=\"Rediger\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </ng-container>\n  <ng-container *ngFor=\"let employee of employees\">\n    <mat-list-item *ngIf=\"employee.role == 'Ansatt'\" >\n      <mat-icon mat-list-icon>person</mat-icon>\n      <h4 mat-line><b>{{employee.firstName}} {{employee.lastName}}</b></h4>\n      <p mat-line> {{employee.phoneNumber || 'Ingen kontaktnummer'}} </p>\n      <p mat-line> {{employee.role}} </p>\n      <button *ifRole=\"['Leder']\" (click)=\"openEditDialog(employee)\" mat-icon-button aria-label=\"Rediger\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </ng-container>\n</mat-list>\n\n<button color=\"primary\"\n    mat-mini-fab aria-label=\"ny\"\n    class=\"action_fab\"\n    *ifRole=\"['Leder']\"\n    (click)=\"openCreateDialog()\">\n    <mat-icon color=\"accent\">person_add</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/employer-list/employer-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/employer-list/employer-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list *ngIf=\"employers\">\n    <mat-list-item *ngFor=\"let employer of employers\">\n      <mat-icon mat-list-icon>work</mat-icon>\n      <h4 mat-line><b>{{employer.name}}</b></h4>\n      <p mat-line> {{employer.phoneNumber || 'Ingen kontaktnummer' }} </p>\n      <p mat-line> {{employer.address || 'Ingen addresse' }} </p>\n      <button *ifRole=\"['Leder']\" (click)=\"openEditDialog(employer)\" mat-icon-button aria-label=\"Rediger\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </mat-list-item>\n</mat-list>\n\n<button color=\"primary\"\n    mat-mini-fab aria-label=\"ny\"\n    class=\"action_fab\"\n    *ifRole=\"['Leder','Mellomleder']\"\n    (click)=\"openCreateDialog()\">\n    <mat-icon color=\"accent\">add</mat-icon>\n</button>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list class=\"p-0\">\n  <app-nav-list-item\n      name=\"Oppdrag\" icon=\"view_list\" [routerLink]=\"['/oppdrag']\">\n  </app-nav-list-item>\n  <app-nav-list-item\n    name=\"Oppdragsgivere\" icon=\"account_box\" [routerLink]=\"['/oppdragsgivere']\">\n  </app-nav-list-item>\n  <app-nav-list-item\n  name=\"Ansatte\" icon=\"people\" [routerLink]=\"['/ansatte']\">\n</app-nav-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/mission-details/mission-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/mission-details/mission-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav\r\n    *ngIf=\"mission\"\r\n    [title]=\"this.mission.address\"\r\n    [actions]=\"this.navActions\"\r\n    (event)=\"handleEvent($event)\"\r\n></app-nested-nav>\r\n\r\n<input type=\"file\" style=\"display:none\" multiple (change)=\"uploadImages($event.target.files)\" #imageInput>\r\n\r\n<mat-tab-group mat-stretch-tabs color=\"primary\" backgroundColor=\"accent\" class=\"mission_tab\">\r\n\r\n  <mat-tab label=\"Generelt\">\r\n      <mat-nav-list class=\"p-0\" *ngIf=\"mission\">\r\n\r\n          <mat-list-item>\r\n            <mat-icon mat-list-icon>phone</mat-icon>\r\n            <a mat-line href=\"tel:{{ mission.phoneNumber }}\">{{ mission.phoneNumber || 'N/A' }}</a>\r\n            <p mat-line>Trykk for å ringe </p>\r\n            <mat-icon>open_in_new</mat-icon>\r\n            <mat-divider></mat-divider>\r\n          </mat-list-item>\r\n\r\n          <mat-list-item>\r\n            <mat-icon mat-list-icon>directions_car</mat-icon>\r\n            <a mat-line href=\"https://www.google.com/maps/dir/?api=1&destination={{ mission.address }}&travelmode=driving\" target=\"_blank\">Veibeskrivelse</a>\r\n            <p mat-line>Trykk for å åpne kart</p>\r\n            <mat-icon >open_in_new</mat-icon>\r\n            <mat-divider></mat-divider>\r\n          </mat-list-item>\r\n\r\n          <mat-list-item *ngFor=\"let report of mission.missionReports\">\r\n            <mat-icon mat-list-icon>description</mat-icon>\r\n          <a mat-line href=\"{{ report.fileURL }}\">{{ report.missionReportTypeName }}</a>\r\n            <p mat-line>{{ report.createdAt | date }}</p>\r\n            <mat-icon>cloud_download</mat-icon>\r\n            <mat-divider></mat-divider>\r\n          </mat-list-item>\r\n\r\n      </mat-nav-list>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Bilder\"  *ngIf=\"mission\">\r\n\r\n    <app-image-list [images]=\"mission.missionImages\" (imageDeleted)=\"deleteImage($event)\" ></app-image-list>\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Notater\">\r\n      <mat-nav-list class=\"p-0\" *ngIf=\"mission\">\r\n          <app-nav-list-item *ngFor=\"let note of pinnedNotes(true)\"\r\n            name=\"{{ note.title || (note.createdAt | date: 'short')}}\" icon=\"star\" [routerLink]=\"['/oppdrag', missionId, 'notater', note.id]\">\r\n          </app-nav-list-item>\r\n          <app-nav-list-item *ngFor=\"let note of pinnedNotes(false)\"\r\n          name=\"{{ note.title || (note.createdAt | date: 'short')}}\" icon=\"note\" [routerLink]=\"['/oppdrag', missionId, 'notater', note.id]\">\r\n        </app-nav-list-item>\r\n      </mat-nav-list>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n\r\n<button color=\"primary\"\r\n    mat-mini-fab aria-label=\"ny\"\r\n    class=\"action_fab\"\r\n    (click)=\"imageInput.click()\">\r\n    <mat-icon color=\"accent\">camera_enhance</mat-icon>\r\n</button>\r\n\r\n<app-bottom-nav></app-bottom-nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/mission-list/mission-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/mission-list/mission-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!missionList\"><em>Laster inn oppdrag...</em></p>\r\n\r\n<mat-nav-list class=\"p-0\" *ngIf=\"missionList.missions\">\r\n    <mat-list-item *ngIf=\"missionList.missions.length == 0\">Fant ingen oppdrag</mat-list-item>\r\n    <app-nav-list-item *ngFor=\"let mission of missionList.missions\"\r\n        name=\"{{ mission.address }}\" icon=\"home_work\" [routerLink]=\"['/oppdrag', mission.id, 'detaljer']\">\r\n    </app-nav-list-item>\r\n</mat-nav-list>\r\n\r\n<button (click)=\"createMission()\" color=\"primary\" *ifRole=\"['Leder', 'Mellomleder']\"\r\n        mat-mini-fab aria-label=\"ny\"\r\n        class=\"action_fab\"\r\n        style=\"bottom:111px!important\">\r\n        <mat-icon>add</mat-icon>\r\n</button>\r\n\r\n<app-pagination\r\n  *ngIf=\"missionList.paginationInfo\"\r\n  [paginationInfo]=\"missionList.paginationInfo\"\r\n  (pageChange)='changePage($event)'>\r\n</app-pagination>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/mission-note-details/mission-note-details.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/mission-note-details/mission-note-details.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nested-nav *ngIf=\"note\"\n    icon=\"edit\"\n    title=\"{{ this.note.title || (this.note.createdAt | date: 'short') }}\"\n    [actions]=\"this.navActions\"\n    (event)=\"handleEvent($event)\"\n></app-nested-nav>\n\n<div *ngIf=\"note\" class=\"container\">\n    <div class=\"row  p-3\">\n    {{ this.note.content }}\n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"row p-3\">\n        {{ this.note.createdAt | date: 'short' }} av {{ this.note.createdBy || \"Anonym\" }}\n    </div>\n</div>\n\n<app-bottom-nav></app-bottom-nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-tab-group mat-stretch-tabs color=\"primary\" backgroundColor=\"accent\" class=\"mission_tab\">\n\n  <mat-tab label=\"Generelt\">\n    <app-profile-form *ngIf=\"user\" [user]=\"user\" (profileUpdated)=\"updateProfile($event)\"></app-profile-form>\n  </mat-tab>\n\n  <mat-tab label=\"Passord\">\n    <app-password-form [error]=\"passwordStatus\" (passwordUpdated)=\"updatePassword($event)\"></app-password-form>\n  </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/bottom-nav/bottom-nav.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/bottom-nav/bottom-nav.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\" class=\"bottom_toolbar p-0\">\n\n        <button [routerLink]=\"['/oppdrag']\" [routerLinkActive]=\"['activeIcon']\"\n          class=\"bottom_toolbar_button\" mat-icon-button aria-label=\"Neste side\">\n\n          <mat-icon class=\"bottom_toolbar_icon\">view_list</mat-icon>\n\n        </button>\n\n        <button [routerLink]=\"['/oppdragsgivere']\" [routerLinkActive]=\"['activeIcon']\"\n            class=\"bottom_toolbar_button\" mat-icon-button aria-label=\"Neste side\">\n\n            <mat-icon class=\"bottom_toolbar_icon\">work</mat-icon>\n\n        </button>\n\n        <button [routerLink]=\"['/ansatte']\" [routerLinkActive]=\"['activeIcon']\"\n            class=\"bottom_toolbar_button\" mat-icon-button aria-label=\"Neste side\">\n\n            <mat-icon class=\"bottom_toolbar_icon\">people</mat-icon>\n\n        </button>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/main-nav/main-nav.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/main-nav/main-nav.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar color=\"primary\">Meny</mat-toolbar>\n    <mat-nav-list>\n        <a mat-list-item (click)=\"drawer.toggle()\" [routerLink]=\"['/hjem']\" [routerLinkActive]=\"['active']\">Hjem</a>\n        <a mat-list-item (click)=\"drawer.toggle()\" [routerLink]=\"['/oppdrag']\" [routerLinkActive]=\"['active']\">Oppdrag</a>\n        <a mat-list-item (click)=\"drawer.toggle()\" [routerLink]=\"['/oppdragsgivere']\" [routerLinkActive]=\"['active']\">Oppdragsgivere</a>\n        <a mat-list-item (click)=\"drawer.toggle()\" [routerLink]=\"['/ansatte']\" [routerLinkActive]=\"['active']\">Ansatte</a>\n        <span style=\"position:absolute;bottom:0;width:100%\">\n          <a mat-list-item (click)=\"drawer.toggle()\" [routerLink]=\"['/profil']\" [routerLinkActive]=\"['active']\">Profil</a>\n          <a mat-list-item (click)=\"handleLogout()\">Logg ut</a>\n        </span>\n\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <mat-toolbar color=\"primary\" class=\"p-0\" >\n      <button\n        class=\"nav_button\"\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n\n      <span style=\"margin-right:auto\" [ngClass]=\"(isHandset$ | async) ? '' : 'ml-3'\"[routerLink]=\"['/hjem']\">{{ this.title || 'Bj Bygg & Eiendom'}}</span>\n\n      <router-outlet name=\"mainNavSearchBar\"></router-outlet>\n\n    </mat-toolbar>\n\n    <router-outlet name=\"mainNavContent\"></router-outlet>\n\n    <router-outlet name=\"mainNavBotNav\"></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/nested-nav/nested-nav.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/nested-nav/nested-nav.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\" p-0\">\n\n        <mat-toolbar-row class=\"p-0\" style=\"height:auto!important\">\n\n            <button (click)=\"this.event.emit('back')\"\n            style=\"margin-right:auto;\" mat-icon-button aria-label=\"Tilbake\">\n                <mat-icon class=\"icon_150\">chevron_left</mat-icon>\n            </button>\n\n            <app-vert-menu [actions]=\"actions\" (event)=\"this.event.emit($event)\"></app-vert-menu>\n\n        </mat-toolbar-row>\n\n        <mat-toolbar-row style=\"height:auto!important;padding-left:40px\">\n            <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>  &nbsp;\n            <span class=\"nested_nav_title\" [innerHTML]=\"title\">\n            </span>\n        </mat-toolbar-row>\n\n      </mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/vert-menu/vert-menu.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/vert-menu/vert-menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ifRole=\"allActionRoles\">\n  <button [color]=\"color\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Mer\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let action of actions\">\n      <button *ifRole=\"action.roles\" mat-menu-item (click)=\"handleEvent(action.event)\">\n        <mat-icon>{{ action.icon }}</mat-icon>\n        <span>{{ action.text }}</span>\n      </button>\n    </ng-container>\n  </mat-menu>\n</ng-container>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mission-form/mission-form.component */ "./src/app/components/mission-form/mission-form.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _containers_mission_list_mission_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/mission-list/mission-list.component */ "./src/app/containers/mission-list/mission-list.component.ts");
/* harmony import */ var _containers_mission_details_mission_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/mission-details/mission-details.component */ "./src/app/containers/mission-details/mission-details.component.ts");
/* harmony import */ var src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/missions.service */ "./src/app/services/missions.service.ts");
/* harmony import */ var src_app_services_mission_types_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/mission-types.service */ "./src/app/services/mission-types.service.ts");
/* harmony import */ var src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/employers.service */ "./src/app/services/employers.service.ts");
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var src_app_services_mission_images_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/mission-images.service */ "./src/app/services/mission-images.service.ts");
/* harmony import */ var _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/main-nav/main-nav.component */ "./src/app/layout/main-nav/main-nav.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nav-list-item/nav-list-item.component */ "./src/app/components/nav-list-item/nav-list-item.component.ts");
/* harmony import */ var _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/bottom-nav/bottom-nav.component */ "./src/app/layout/bottom-nav/bottom-nav.component.ts");
/* harmony import */ var _layout_nested_nav_nested_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/nested-nav/nested-nav.component */ "./src/app/layout/nested-nav/nested-nav.component.ts");
/* harmony import */ var _containers_mission_note_details_mission_note_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./containers/mission-note-details/mission-note-details.component */ "./src/app/containers/mission-note-details/mission-note-details.component.ts");
/* harmony import */ var _components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/mission-note-form/mission-note-form.component */ "./src/app/components/mission-note-form/mission-note-form.component.ts");
/* harmony import */ var _pipes_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/thumbnail.pipe */ "./src/app/pipes/thumbnail.pipe.ts");
/* harmony import */ var _components_image_viewer_dialog_image_viewer_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/image-viewer-dialog/image-viewer-dialog.component */ "./src/app/components/image-viewer-dialog/image-viewer-dialog.component.ts");
/* harmony import */ var _components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var _components_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/image-list/image-list.component */ "./src/app/components/image-list/image-list.component.ts");
/* harmony import */ var _pipes_image_row_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/image-row.pipe */ "./src/app/pipes/image-row.pipe.ts");
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ "./src/app/interceptors/http.token.interceptor.ts");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _containers_auth_auth_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./containers/auth/auth.component */ "./src/app/containers/auth/auth.component.ts");
/* harmony import */ var _containers_auth_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./containers/auth/no-auth-guard.service */ "./src/app/containers/auth/no-auth-guard.service.ts");
/* harmony import */ var _directives_if_role_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./directives/if-role.directive */ "./src/app/directives/if-role.directive.ts");
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./containers/home/home.component */ "./src/app/containers/home/home.component.ts");
/* harmony import */ var _containers_employer_list_employer_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./containers/employer-list/employer-list.component */ "./src/app/containers/employer-list/employer-list.component.ts");
/* harmony import */ var _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./containers/employee-list/employee-list.component */ "./src/app/containers/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/employee-form/employee-form.component */ "./src/app/components/employee-form/employee-form.component.ts");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/employer-form/employer-form.component */ "./src/app/components/employer-form/employer-form.component.ts");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./containers/profile/profile.component */ "./src/app/containers/profile/profile.component.ts");
/* harmony import */ var _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/profile-form/profile-form.component */ "./src/app/components/profile-form/profile-form.component.ts");
/* harmony import */ var _components_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/password-form/password-form.component */ "./src/app/components/password-form/password-form.component.ts");
/* harmony import */ var _components_mission_report_form_mission_report_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/mission-report-form/mission-report-form.component */ "./src/app/components/mission-report-form/mission-report-form.component.ts");
/* harmony import */ var _services_mission_reports_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/mission-reports.service */ "./src/app/services/mission-reports.service.ts");
/* harmony import */ var _layout_vert_menu_vert_menu_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./layout/vert-menu/vert-menu.component */ "./src/app/layout/vert-menu/vert-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var routes = [
    {
        path: '',
        redirectTo: 'hjem',
        pathMatch: 'full'
    },
    {
        path: 'hjem',
        component: _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_40__["HomeComponent"],
                outlet: 'mainNavContent',
            },
            {
                path: '',
                component: _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                outlet: 'mainNavBotNav'
            }
        ]
    },
    {
        path: 'profil',
        component: _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_46__["ProfileComponent"],
                outlet: 'mainNavContent',
            },
            {
                path: '',
                component: _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                outlet: 'mainNavBotNav'
            }
        ]
    },
    {
        path: 'oppdragsgivere',
        component: _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _containers_employer_list_employer_list_component__WEBPACK_IMPORTED_MODULE_41__["EmployerListComponent"],
                outlet: 'mainNavContent',
            },
            {
                path: '',
                component: _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                outlet: 'mainNavBotNav'
            }
        ]
    },
    {
        path: 'ansatte',
        component: _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_42__["EmployeeListComponent"],
                outlet: 'mainNavContent',
            },
            {
                path: '',
                component: _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                outlet: 'mainNavBotNav'
            }
        ]
    },
    {
        path: 'oppdrag',
        component: _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _containers_mission_list_mission_list_component__WEBPACK_IMPORTED_MODULE_12__["MissionListComponent"],
                outlet: 'mainNavContent'
            },
            {
                path: '',
                component: _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                outlet: 'mainNavBotNav'
            },
            {
                path: '',
                component: _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__["SearchBarComponent"],
                outlet: 'mainNavSearchBar'
            },
        ]
    },
    {
        path: 'oppdrag/:id/detaljer',
        component: _containers_mission_details_mission_details_component__WEBPACK_IMPORTED_MODULE_13__["MissionDetailsComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
    },
    {
        path: 'oppdrag/:missionId/notater/:id',
        component: _containers_mission_note_details_mission_note_details_component__WEBPACK_IMPORTED_MODULE_25__["MissionNoteDetailsComponent"],
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
    },
    {
        path: 'login',
        component: _containers_auth_auth_component__WEBPACK_IMPORTED_MODULE_37__["AuthComponent"],
        pathMatch: 'full',
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _containers_mission_list_mission_list_component__WEBPACK_IMPORTED_MODULE_12__["MissionListComponent"],
                _layout_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"],
                _containers_mission_details_mission_details_component__WEBPACK_IMPORTED_MODULE_13__["MissionDetailsComponent"],
                _components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_6__["MissionFormComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_21__["SearchBarComponent"],
                _components_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_22__["NavListItemComponent"],
                _layout_bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_23__["BottomNavComponent"],
                _layout_nested_nav_nested_nav_component__WEBPACK_IMPORTED_MODULE_24__["NestedNavComponent"],
                _containers_mission_note_details_mission_note_details_component__WEBPACK_IMPORTED_MODULE_25__["MissionNoteDetailsComponent"],
                _components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_26__["MissionNoteFormComponent"],
                _pipes_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_27__["ThumbnailPipe"],
                _pipes_image_row_pipe__WEBPACK_IMPORTED_MODULE_31__["ImageRowPipe"],
                _components_image_viewer_dialog_image_viewer_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ImageViewerDialogComponent"],
                _components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDeleteDialogComponent"],
                _components_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_30__["ImageListComponent"],
                _containers_auth_auth_component__WEBPACK_IMPORTED_MODULE_37__["AuthComponent"],
                _directives_if_role_directive__WEBPACK_IMPORTED_MODULE_39__["IfRoleDirective"],
                _containers_home_home_component__WEBPACK_IMPORTED_MODULE_40__["HomeComponent"],
                _containers_employer_list_employer_list_component__WEBPACK_IMPORTED_MODULE_41__["EmployerListComponent"],
                _containers_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_42__["EmployeeListComponent"],
                _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_43__["EmployeeFormComponent"],
                _components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_45__["EmployerFormComponent"],
                _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_46__["ProfileComponent"],
                _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_47__["ProfileFormComponent"],
                _components_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_48__["PasswordFormComponent"],
                _components_mission_report_form_mission_report_form_component__WEBPACK_IMPORTED_MODULE_49__["MissionReportFormComponent"],
                _layout_vert_menu_vert_menu_component__WEBPACK_IMPORTED_MODULE_51__["VertMenuComponent"]
            ],
            entryComponents: [
                _components_image_viewer_dialog_image_viewer_dialog_component__WEBPACK_IMPORTED_MODULE_28__["ImageViewerDialogComponent"],
                _components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDeleteDialogComponent"],
                _components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_6__["MissionFormComponent"],
                _components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_26__["MissionNoteFormComponent"],
                _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_43__["EmployeeFormComponent"],
                _components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_45__["EmployerFormComponent"],
                _components_mission_report_form_mission_report_form_component__WEBPACK_IMPORTED_MODULE_49__["MissionReportFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_32__["HttpTokenInterceptor"], multi: true },
                src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_14__["MissionsService"],
                src_app_services_mission_types_service__WEBPACK_IMPORTED_MODULE_15__["MissionTypesService"],
                src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_16__["EmployersService"],
                src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_17__["EmployeesService"],
                src_app_services_mission_images_service__WEBPACK_IMPORTED_MODULE_18__["MissionImagesService"],
                _services_mission_reports_service__WEBPACK_IMPORTED_MODULE_50__["MissionReportsService"],
                _services_roles_service__WEBPACK_IMPORTED_MODULE_44__["RolesService"],
                _services_jwt_service__WEBPACK_IMPORTED_MODULE_33__["JwtService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"],
                _containers_auth_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_38__["NoAuthGuard"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_35__["ApiService"],
                ng_event_bus__WEBPACK_IMPORTED_MODULE_11__["NgEventBus"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1kZWxldGUtZGlhbG9nL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfirmDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteDialogComponent", function() { return ConfirmDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDeleteDialogComponent = /** @class */ (function () {
    function ConfirmDeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    ConfirmDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-delete-dialog',
            template: __webpack_require__(/*! raw-loader!./confirm-delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete-dialog.component.css */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmDeleteDialogComponent);
    return ConfirmDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-form/employee-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-form/employee-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hideInput{\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1mb3JtL2VtcGxveWVlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtZm9ybS9lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZUlucHV0e1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/employee-form/employee-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-form/employee-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function() { return EmployeeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/employee.model */ "./src/app/models/employee.model.ts");
/* harmony import */ var src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/nav-action.model */ "./src/app/models/nav-action.model.ts");
/* harmony import */ var _enums_roles_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/roles.enum */ "./src/app/enums/roles.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var EmployeeFormComponent = /** @class */ (function () {
    function EmployeeFormComponent(_rolesService, _formBuilder, dialogRef, dialog, employee) {
        this._rolesService = _rolesService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.employee = employee;
        this.actions = [];
        this.title = "Rediger bruker";
        this.isEditForm = true;
    }
    EmployeeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rolesService.getRoles()
            .subscribe(function (result) {
            _this.roles = result.filter(function (x) { return x !== 'Leder'; });
            if (!_this.isEditForm)
                _this.employeeForm.controls['role'].setValue(_this.roles.find(function (x) { return 'Ansatt'; }), { onlySelf: true });
        });
        if (this.employee == null) {
            this.isEditForm = false;
            this.title = 'Ny bruker',
                this.employee = new src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_3__["Employee"]();
        }
        else {
            this.actions.push(new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_6__["NavAction"]("delete", "Slett", "delete_forever", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_7__["Roles"].Leder]));
        }
        this.initalizeForm();
    };
    EmployeeFormComponent.prototype.initalizeForm = function () {
        this.employeeForm = this._formBuilder.group({
            userName: [{ value: this.employee.userName, disabled: this.isEditForm }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            password: [{ value: null, disabled: this.isEditForm }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            firstName: [this.employee.firstName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            lastName: [this.employee.lastName, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            phoneNumber: [this.employee.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
                ]],
            role: [this.employee.role, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    EmployeeFormComponent.prototype.onSubmit = function () {
        var _a = this.employeeForm, value = _a.value, valid = _a.valid;
        if (valid) {
            this.dialogRef.close(value);
        }
    };
    EmployeeFormComponent.prototype.handleEvent = function (e) {
        switch (e) {
            case "delete": {
                this.deleteEmployee();
                break;
            }
            case "back": {
                this.onNoClick();
                break;
            }
        }
    };
    EmployeeFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EmployeeFormComponent.prototype.changeRole = function (e) {
        this.role.setValue(e.target.value, { onlySelf: true });
    };
    EmployeeFormComponent.prototype.deleteEmployee = function () {
        var _this = this;
        var deleteDialogRef = this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteDialogComponent"]);
        deleteDialogRef.afterClosed().subscribe(function (res) {
            if (res)
                _this.dialogRef.close('deleted');
        });
    };
    Object.defineProperty(EmployeeFormComponent.prototype, "userName", {
        get: function () {
            return this.employeeForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "password", {
        get: function () {
            return this.employeeForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "firstName", {
        get: function () {
            return this.employeeForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "lastName", {
        get: function () {
            return this.employeeForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.employeeForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "role", {
        get: function () {
            return this.employeeForm.get('role');
        },
        enumerable: true,
        configurable: true
    });
    EmployeeFormComponent.ctorParameters = function () { return [
        { type: src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_3__["Employee"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    EmployeeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-form',
            template: __webpack_require__(/*! raw-loader!./employee-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employee-form/employee-form.component.html"),
            styles: [__webpack_require__(/*! ./employee-form.component.css */ "./src/app/components/employee-form/employee-form.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_3__["Employee"]])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
}());



/***/ }),

/***/ "./src/app/components/employer-form/employer-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employer-form/employer-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZXItZm9ybS9lbXBsb3llci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employer-form/employer-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employer-form/employer-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFormComponent", function() { return EmployerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_employer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/employer.model */ "./src/app/models/employer.model.ts");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/nav-action.model */ "./src/app/models/nav-action.model.ts");
/* harmony import */ var _enums_roles_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/roles.enum */ "./src/app/enums/roles.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EmployerFormComponent = /** @class */ (function () {
    function EmployerFormComponent(_formBuilder, dialogRef, employer, dialog) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.employer = employer;
        this.dialog = dialog;
        this.googleOptions = {
            types: ['geocode'],
            componentRestrictions: { country: "no" }
        };
        this.isStreetAddress = false;
        this.title = "Rediger arbeidsgiver";
        this.isEditForm = true;
        this.actions = [];
    }
    EmployerFormComponent.prototype.ngOnInit = function () {
        if (this.employer == null) {
            this.isEditForm = false;
            this.title = 'Ny arbeidsgiver',
                this.employer = new src_app_models_employer_model__WEBPACK_IMPORTED_MODULE_3__["Employer"]();
        }
        else
            this.actions.push(new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_5__["NavAction"]("delete", "Slett", "delete_forever", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].Leder]));
        this.initalizeForm();
    };
    EmployerFormComponent.prototype.initalizeForm = function () {
        this.employerForm = this._formBuilder.group({
            name: [this.employer.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)
                ]],
            phoneNumber: [this.employer.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
                ]],
            address: [this.employer.address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]]
        });
    };
    EmployerFormComponent.prototype.onSubmit = function () {
        var _a = this.employerForm, value = _a.value, valid = _a.valid;
        if (valid) {
            this.dialogRef.close(value);
        }
    };
    EmployerFormComponent.prototype.handleEvent = function (e) {
        switch (e) {
            case "delete": {
                this.deleteEmployer();
                break;
            }
            case "back": {
                this.onNoClick();
                break;
            }
        }
    };
    EmployerFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EmployerFormComponent.prototype.deleteEmployer = function () {
        var _this = this;
        var deleteDialogRef = this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDeleteDialogComponent"]);
        deleteDialogRef.afterClosed().subscribe(function (res) {
            if (res)
                _this.dialogRef.close('deleted');
        });
    };
    EmployerFormComponent.prototype.handleAddressChange = function (googleAddress) {
        this.employerForm.controls['address']
            .setValue(googleAddress.formatted_address);
    };
    Object.defineProperty(EmployerFormComponent.prototype, "name", {
        get: function () {
            return this.employerForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployerFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.employerForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployerFormComponent.prototype, "address", {
        get: function () {
            return this.employerForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    EmployerFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: src_app_models_employer_model__WEBPACK_IMPORTED_MODULE_3__["Employer"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    EmployerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-form',
            template: __webpack_require__(/*! raw-loader!./employer-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/employer-form/employer-form.component.html"),
            styles: [__webpack_require__(/*! ./employer-form.component.css */ "./src/app/components/employer-form/employer-form.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_models_employer_model__WEBPACK_IMPORTED_MODULE_3__["Employer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EmployerFormComponent);
    return EmployerFormComponent;
}());



/***/ }),

/***/ "./src/app/components/image-list/image-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/image-list/image-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .img-row { /* IE10 */\r\n    display: flex; /* IE10 */\r\n    flex-wrap: wrap;\r\n    padding: 0 4px;\r\n  }\r\n\r\n  /* Create four equal columns that sits next to each other */\r\n\r\n  .img-column { /* IE10 */\r\n    flex: 25%;\r\n    max-width: 25%;\r\n    padding: 0 4px;\r\n  }\r\n\r\n  .img-column img {\r\n    margin-top: 8px;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n  }\r\n\r\n  /* Responsive layout - makes a two column-layout instead of four columns */\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .img-column {\r\n      flex: 50%;\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n  @media screen and (max-width: 300px) {\r\n    .img-column {\r\n      flex: 100%;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1saXN0L2ltYWdlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyxXQUN5QixTQUFTO0lBQy9CLGFBQWEsRUFDUSxTQUFTO0lBQzlCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBLDJEQUEyRDs7RUFDM0QsY0FDaUIsU0FBUztJQUN4QixTQUFTO0lBQ1QsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7RUFHQSwwRUFBMEU7O0VBQzFFO0lBQ0U7TUFFRSxTQUFTO01BQ1QsY0FBYztJQUNoQjtFQUNGOztFQUVBLHVHQUF1Rzs7RUFDdkc7SUFDRTtNQUVFLFVBQVU7TUFDVixlQUFlO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWxpc3QvaW1hZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5pbWctcm93IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDsgLyogSUUxMCAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgfVxyXG5cclxuICAvKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuaW1nLWNvbHVtbiB7XHJcbiAgICAtbXMtZmxleDogMjUlOyAvKiBJRTEwICovXHJcbiAgICBmbGV4OiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb2x1bW4gaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIGEgdHdvIGNvbHVtbi1sYXlvdXQgaW5zdGVhZCBvZiBmb3VyIGNvbHVtbnMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltZy1jb2x1bW4ge1xyXG4gICAgICAtbXMtZmxleDogNTAlO1xyXG4gICAgICBmbGV4OiA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLmltZy1jb2x1bW4ge1xyXG4gICAgICAtbXMtZmxleDogMTAwJTtcclxuICAgICAgZmxleDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/image-list/image-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/image-list/image-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_viewer_dialog_image_viewer_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-viewer-dialog/image-viewer-dialog.component */ "./src/app/components/image-viewer-dialog/image-viewer-dialog.component.ts");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageListComponent = /** @class */ (function () {
    function ImageListComponent(dialog) {
        this.dialog = dialog;
        this.imageDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unloadedThumbnails = [];
        this.reloadThumbnailsState = false;
    }
    ImageListComponent.prototype.ngOnInit = function () {
    };
    //Reloads thumbnail (thumbnails made with async event)
    ImageListComponent.prototype.unloadedThumbnail = function (img) {
        var _this = this;
        if (this.unloadedThumbnails.filter(function (val) { return val == img; }).length == 0) {
            this.unloadedThumbnails.push(img);
        }
        if (!this.reloadThumbnailsState) {
            this.reloadThumbnailsState = true;
            this.reloadInterval = setInterval(function () { return _this.reloadThumbnails(); }, 1000);
        }
    };
    ImageListComponent.prototype.reloadThumbnails = function () {
        this.unloadedThumbnails.forEach(function (thumbnail) {
            thumbnail.src = thumbnail.src;
        });
        if (this.unloadedThumbnails.length == 0) {
            clearInterval(this.reloadInterval);
            this.reloadThumbnailsState = false;
        }
    };
    ImageListComponent.prototype.loadedThumbnail = function (img) {
        this.unloadedThumbnails = this.unloadedThumbnails.filter(function (val) { return val != img; });
    };
    ImageListComponent.prototype.openImageViewer = function (imageId) {
        var _this = this;
        var dialogRef = this.dialog.open(_image_viewer_dialog_image_viewer_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewerDialogComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'image_viewer_dialog',
            data: { imageId: imageId, images: this.images }
        });
        dialogRef.afterClosed().subscribe(function (id) {
            if (id > 0) {
                var deleteDialogRef = _this.dialog.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDeleteDialogComponent"]);
                deleteDialogRef.afterClosed().subscribe(function (res) {
                    if (res)
                        _this.imageDeleted.emit(id);
                });
            }
        });
    };
    ImageListComponent.prototype.trackById = function (index, image) {
        return image.id;
    };
    ImageListComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImageListComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageListComponent.prototype, "imageDeleted", void 0);
    ImageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-list',
            template: __webpack_require__(/*! raw-loader!./image-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.css */ "./src/app/components/image-list/image-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/components/image-viewer-dialog/image-viewer-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/image-viewer-dialog/image-viewer-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    display: block;\r\n    max-width:100vw;\r\n    max-height:100vh;\r\n    -webkit-transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%));\r\n            transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%));\r\n}\r\n\r\n.left_fab{\r\n    position:absolute;\r\n    left:10px;\r\n}\r\n\r\n.right_fab{\r\n    position:absolute;\r\n    right:10px;\r\n}\r\n\r\n.image_toolbar{\r\n    height:56px!important;\r\n    position: absolute;\r\n    left:0px;\r\n    z-index:1;\r\n    overflow:hidden;\r\n    background:transparent!important;\r\n}\r\n\r\n.page_counter{\r\n  width:100%;\r\n  position:absolute;\r\n  bottom:0px;\r\n  text-align:center;\r\n  color:white;\r\n  opacity:.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS12aWV3ZXItZGlhbG9nL2ltYWdlLXZpZXdlci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRFQUFvRTtZQUFwRSxvRUFBb0U7QUFDeEU7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXZpZXdlci1kaWFsb2cvaW1hZ2Utdmlld2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6MTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMHZoO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KGNhbGMoNTB2dyAtIDUwJSkpIHRyYW5zbGF0ZXkoY2FsYyg1MHZoIC0gNTAlKSk7XHJcbn1cclxuXHJcbi5sZWZ0X2ZhYntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDoxMHB4O1xyXG59XHJcblxyXG4ucmlnaHRfZmFie1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDoxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2VfdG9vbGJhcntcclxuICAgIGhlaWdodDo1NnB4IWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdlX2NvdW50ZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3R0b206MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG9wYWNpdHk6LjU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/image-viewer-dialog/image-viewer-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/image-viewer-dialog/image-viewer-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ImageViewerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerDialogComponent", function() { return ImageViewerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/nav-action.model */ "./src/app/models/nav-action.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ImageViewerDialogComponent = /** @class */ (function () {
    function ImageViewerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toolbarHidden = false;
        this.actions = [
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_3__["NavAction"]("downloadImage", "Last ned bilde", "cloud_download"),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_3__["NavAction"]("downloadImages", "Last ned alle", "cloud_download"),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_3__["NavAction"]("delete", "Slett bilde", "delete_forever", ["Leder"]),
        ];
    }
    ImageViewerDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.data.images;
        this.index = this.images.findIndex(function (x) { return x.id == _this.data.imageId; });
        this.currentImage = this.images[this.index];
    };
    ImageViewerDialogComponent.prototype.handleEvent = function (e) {
        switch (e) {
            case "delete": {
                this.dialogRef.close(this.currentImage.id);
                break;
            }
            case "downloadImage": {
                e.preventDefault();
                window.open(this.currentImage.fileURL);
                break;
            }
            case "downloadImages": {
                this.images.forEach(function (x) {
                    window.open(x.fileURL);
                });
                break;
            }
        }
    };
    ImageViewerDialogComponent.prototype.nextImage = function () {
        if (this.index >= this.images.length - 1)
            return null;
        this.index++;
        this.currentImage = this.images[this.index];
    };
    ImageViewerDialogComponent.prototype.previousImage = function () {
        if (this.index <= 0)
            return null;
        this.index--;
        this.currentImage = this.images[this.index];
    };
    ImageViewerDialogComponent.prototype.toggleToolBar = function () {
        this.toolbarHidden = !this.toolbarHidden;
    };
    ImageViewerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ImageViewerDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ImageViewerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-viewer-dialog',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showHideToolbar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        top: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        top: '-56px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s ease-in')
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showHideCounter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        bottom: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        bottom: '-56px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s ease-in')
                    ]),
                ])
            ],
            template: __webpack_require__(/*! raw-loader!./image-viewer-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/image-viewer-dialog/image-viewer-dialog.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer-dialog.component.css */ "./src/app/components/image-viewer-dialog/image-viewer-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImageViewerDialogComponent);
    return ImageViewerDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/mission-form/mission-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/mission-form/mission-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWlzc2lvbi1mb3JtL21pc3Npb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/mission-form/mission-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/mission-form/mission-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: MissionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionFormComponent", function() { return MissionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mission_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mission-types.service */ "./src/app/services/mission-types.service.ts");
/* harmony import */ var src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employers.service */ "./src/app/services/employers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_mission_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/mission.model */ "./src/app/models/mission.model.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MissionFormComponent = /** @class */ (function () {
    function MissionFormComponent(_missionTypesService, _employersService, _formBuilder, dialogRef, mission) {
        this._missionTypesService = _missionTypesService;
        this._employersService = _employersService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.mission = mission;
        this.googleOptions = {
            types: ['geocode'],
            componentRestrictions: { country: "no" }
        };
        this.isStreetAddress = false;
        this.title = "Rediger oppdrag";
    }
    MissionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._missionTypesService.getMissionTypes().subscribe(function (result) { return _this.missionTypes = result; });
        this._employersService.getEmployers().subscribe(function (result) { return _this.employers = result; });
        if (this.mission == null) {
            this.title = 'Nytt oppdrag',
                this.mission = new src_app_models_mission_model__WEBPACK_IMPORTED_MODULE_4__["Mission"]();
        }
        this.initalizeForm();
    };
    MissionFormComponent.prototype.initalizeForm = function () {
        this.missionForm = this._formBuilder.group({
            id: this.mission.id,
            address: [this.mission.address, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
                ]],
            phoneNumber: [this.mission.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)
                ]],
            description: [this.mission.description, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(400)
                ]],
            employerId: [this.mission.employerId],
            missionTypeId: [this.mission.missionTypeId]
        });
    };
    MissionFormComponent.prototype.onSubmit = function () {
        var _a = this.missionForm, value = _a.value, valid = _a.valid;
        if (valid) {
            this.dialogRef.close(value);
        }
    };
    MissionFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MissionFormComponent.prototype.handleAddressChange = function (googleAddress) {
        this.missionForm.controls['address']
            .setValue(googleAddress.formatted_address);
    };
    MissionFormComponent.prototype.changeType = function (e) {
        this.missionTypeId.setValue(e.target.value, { onlySelf: true });
    };
    MissionFormComponent.prototype.changeEmployer = function (e) {
        this.employerId.setValue(e.target.value, { onlySelf: true });
    };
    Object.defineProperty(MissionFormComponent.prototype, "address", {
        get: function () {
            return this.missionForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.missionForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionFormComponent.prototype, "description", {
        get: function () {
            return this.missionForm.get('description');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionFormComponent.prototype, "employerId", {
        get: function () {
            return this.missionForm.get('employerId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionFormComponent.prototype, "missionTypeId", {
        get: function () {
            return this.missionForm.get('missionTypeId');
        },
        enumerable: true,
        configurable: true
    });
    MissionFormComponent.ctorParameters = function () { return [
        { type: src_app_services_mission_types_service__WEBPACK_IMPORTED_MODULE_1__["MissionTypesService"] },
        { type: src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_2__["EmployersService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: src_app_models_mission_model__WEBPACK_IMPORTED_MODULE_4__["Mission"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    MissionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-form',
            template: __webpack_require__(/*! raw-loader!./mission-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mission-form/mission-form.component.html"),
            styles: [__webpack_require__(/*! ./mission-form.component.css */ "./src/app/components/mission-form/mission-form.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_services_mission_types_service__WEBPACK_IMPORTED_MODULE_1__["MissionTypesService"],
            src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_2__["EmployersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            src_app_models_mission_model__WEBPACK_IMPORTED_MODULE_4__["Mission"]])
    ], MissionFormComponent);
    return MissionFormComponent;
}());



/***/ }),

/***/ "./src/app/components/mission-note-form/mission-note-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/mission-note-form/mission-note-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWlzc2lvbi1ub3RlLWZvcm0vbWlzc2lvbi1ub3RlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/mission-note-form/mission-note-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mission-note-form/mission-note-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MissionNoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionNoteFormComponent", function() { return MissionNoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_models_mission_note_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/mission-note.model */ "./src/app/models/mission-note.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MissionNoteFormComponent = /** @class */ (function () {
    function MissionNoteFormComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.headerTitle = 'Rediger notat';
    }
    MissionNoteFormComponent.prototype.ngOnInit = function () {
        if (!this.data.note) {
            this.headerTitle = "Nytt notat";
            this.data.note = new src_app_models_mission_note_model__WEBPACK_IMPORTED_MODULE_3__["MissionNote"]();
        }
        this.missionId = this.data.missionId;
        this.initalizeForm();
    };
    MissionNoteFormComponent.prototype.initalizeForm = function () {
        this.noteForm = this._formBuilder.group({
            id: +this.data.note.id,
            title: [this.data.note.title, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)
                ]],
            content: [this.data.note.content, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400)
                ]],
            pinned: this.data.note.pinned,
            missionId: +this.missionId
        });
    };
    MissionNoteFormComponent.prototype.onSubmit = function () {
        var _a = this.noteForm, value = _a.value, valid = _a.valid;
        if (valid) {
            this.dialogRef.close(value);
        }
    };
    MissionNoteFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Object.defineProperty(MissionNoteFormComponent.prototype, "title", {
        get: function () {
            return this.noteForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionNoteFormComponent.prototype, "content", {
        get: function () {
            return this.noteForm.get('content');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissionNoteFormComponent.prototype, "pinned", {
        get: function () {
            return this.noteForm.get('pinned');
        },
        enumerable: true,
        configurable: true
    });
    MissionNoteFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    MissionNoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-note-form',
            template: __webpack_require__(/*! raw-loader!./mission-note-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mission-note-form/mission-note-form.component.html"),
            styles: [__webpack_require__(/*! ./mission-note-form.component.css */ "./src/app/components/mission-note-form/mission-note-form.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MissionNoteFormComponent);
    return MissionNoteFormComponent;
}());



/***/ }),

/***/ "./src/app/components/mission-report-form/mission-report-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/mission-report-form/mission-report-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWlzc2lvbi1yZXBvcnQtZm9ybS9taXNzaW9uLXJlcG9ydC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/mission-report-form/mission-report-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mission-report-form/mission-report-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MissionReportFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionReportFormComponent", function() { return MissionReportFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mission-reports.service */ "./src/app/services/mission-reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MissionReportFormComponent = /** @class */ (function () {
    function MissionReportFormComponent(dialogRef, _formBuilder, _missionReportsService) {
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        this._missionReportsService = _missionReportsService;
    }
    MissionReportFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._missionReportsService.getTypes().subscribe(function (result) {
            _this.reportTypes = result;
        });
        this.reportForm = this._formBuilder.group({
            typeId: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    };
    MissionReportFormComponent.prototype.onSubmit = function () {
        var value = { files: this.files, typeId: this.typeId.value };
        this.dialogRef.close(value);
    };
    MissionReportFormComponent.prototype.changeType = function (e) {
        this.typeId.setValue(e.target.value, { onlySelf: true });
    };
    MissionReportFormComponent.prototype.changeFile = function (e) {
        this.files = e.target.files;
    };
    Object.defineProperty(MissionReportFormComponent.prototype, "typeId", {
        get: function () {
            return this.reportForm.get('typeId');
        },
        enumerable: true,
        configurable: true
    });
    MissionReportFormComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_3__["MissionReportsService"] }
    ]; };
    MissionReportFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-report-form',
            template: __webpack_require__(/*! raw-loader!./mission-report-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mission-report-form/mission-report-form.component.html"),
            styles: [__webpack_require__(/*! ./mission-report-form.component.css */ "./src/app/components/mission-report-form/mission-report-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_3__["MissionReportsService"]])
    ], MissionReportFormComponent);
    return MissionReportFormComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-list-item/nav-list-item.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/nav-list-item/nav-list-item.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWxpc3QtaXRlbS9uYXYtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-list-item/nav-list-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nav-list-item/nav-list-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItemComponent", function() { return NavListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavListItemComponent = /** @class */ (function () {
    function NavListItemComponent() {
        this.href = 'javascript:void(0)'; //Prevents href from working if null value
    }
    NavListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavListItemComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavListItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavListItemComponent.prototype, "href", void 0);
    NavListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-list-item',
            template: __webpack_require__(/*! raw-loader!./nav-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-list-item/nav-list-item.component.html"),
            styles: [__webpack_require__(/*! ./nav-list-item.component.css */ "./src/app/components/nav-list-item/nav-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavListItemComponent);
    return NavListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .pagination_toolbar{\r\n    height:45px!important; \r\n    font-size:1rem;\r\n    position: fixed;\r\n    bottom:56px;\r\n  }\r\n\r\n  .pagination_icon{\r\n    -webkit-transform:scale(1.5);\r\n            transform:scale(1.5);\r\n  }\r\n\r\n  .pagination_middle_text{\r\n    height:100%;\r\n    flex-grow:1;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    font-size:1rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAucGFnaW5hdGlvbl90b29sYmFye1xyXG4gICAgaGVpZ2h0OjQ1cHghaW1wb3J0YW50OyBcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOjU2cHg7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbl9pY29ue1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuNSk7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbl9taWRkbGVfdGV4dHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/pagination.model */ "./src/app/models/pagination.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.nextPage = function () {
        var pageId = this.paginationInfo.actualPage + 1;
        if (pageId >= this.paginationInfo.totalPages)
            return false;
        this.pageChange.emit(pageId.toString());
    };
    PaginationComponent.prototype.previousPage = function () {
        var pageId = this.paginationInfo.actualPage - 1;
        if (pageId < 0)
            return false;
        this.pageChange.emit(pageId.toString());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__["Pagination"])
    ], PaginationComponent.prototype, "paginationInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/password-form/password-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/password-form/password-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQtZm9ybS9wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/password-form/password-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/password-form/password-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordFormComponent", function() { return PasswordFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordFormComponent = /** @class */ (function () {
    function PasswordFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.passwordUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PasswordFormComponent.prototype.ngOnInit = function () {
        this.initalizeForm();
    };
    PasswordFormComponent.prototype.initalizeForm = function () {
        this.passwordForm = this._formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PasswordFormComponent.prototype.onSubmit = function () {
        var _a = this.passwordForm, value = _a.value, valid = _a.valid;
        if (valid && this.password.value == this.confirmPassword.value) {
            this.passwordUpdated.emit(value);
        }
        else if (this.password.value !== this.confirmPassword.value)
            this.error = "Passordene er ikke like";
    };
    PasswordFormComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(PasswordFormComponent.prototype, "oldPassword", {
        get: function () {
            return this.passwordForm.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordFormComponent.prototype, "password", {
        get: function () {
            return this.passwordForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordFormComponent.prototype, "confirmPassword", {
        get: function () {
            return this.passwordForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    PasswordFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PasswordFormComponent.prototype, "error", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PasswordFormComponent.prototype, "passwordUpdated", void 0);
    PasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-form',
            template: __webpack_require__(/*! raw-loader!./password-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/password-form/password-form.component.html"),
            styles: [__webpack_require__(/*! ./password-form.component.css */ "./src/app/components/password-form/password-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PasswordFormComponent);
    return PasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-form/profile-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/profile-form/profile-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1mb3JtL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile-form/profile-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-form/profile-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/employee.model */ "./src/app/models/employee.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.profileUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
        this.initalizeForm();
    };
    ProfileFormComponent.prototype.initalizeForm = function () {
        this.profileForm = this._formBuilder.group({
            userName: [{ value: this.user.userName, disabled: true }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            firstName: [{ value: this.user.firstName, disabled: true }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            lastName: [{ value: this.user.lastName, disabled: true }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)
                ]],
            phoneNumber: [this.user.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
                ]]
        });
    };
    ProfileFormComponent.prototype.onSubmit = function () {
        var _a = this.profileForm, value = _a.value, valid = _a.valid;
        if (valid) {
            this.profileUpdated.emit(value);
        }
    };
    ProfileFormComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(ProfileFormComponent.prototype, "userName", {
        get: function () {
            return this.profileForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileFormComponent.prototype, "firstName", {
        get: function () {
            return this.profileForm.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileFormComponent.prototype, "lastName", {
        get: function () {
            return this.profileForm.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.profileForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    ProfileFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_2__["Employee"])
    ], ProfileFormComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileFormComponent.prototype, "profileUpdated", void 0);
    ProfileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-form',
            template: __webpack_require__(/*! raw-loader!./profile-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile-form/profile-form.component.html"),
            styles: [__webpack_require__(/*! ./profile-form.component.css */ "./src/app/components/profile-form/profile-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search_button{\r\n    background-color:#CCC;\r\n    \r\n  }\r\n  \r\n  .search_input{\r\n    width:100%;\r\n  }\r\n  \r\n  .search_toolbar{\r\n    font-size:1rem !important;\r\n    height:72px!important;\r\n    position: absolute;\r\n    left:0px;\r\n    z-index:1;\r\n    overflow:hidden;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjs7RUFFdkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaF9idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0M7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaF9pbnB1dHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2hfdG9vbGJhcntcclxuICAgIGZvbnQtc2l6ZToxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6NzJweCFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHotaW5kZXg6MTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(_eventBus) {
        this._eventBus = _eventBus;
        this.inputPlaceholder = "Søk";
        this.lastSearch = "";
        this.isHidden = true;
        this.searchInput = "";
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.handleSearch = function () {
        if (this.lastSearch == this.searchInput)
            return false;
        this.lastSearch = this.searchInput;
        this._eventBus.cast('searched', this.searchInput);
    };
    SearchBarComponent.prototype.toggleSearchBar = function () {
        this.isHidden = !this.isHidden;
    };
    SearchBarComponent.ctorParameters = function () { return [
        { type: ng_event_bus__WEBPACK_IMPORTED_MODULE_2__["NgEventBus"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchBarComponent.prototype, "inputPlaceholder", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showHide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        top: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        top: '-72px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.1s ease-out')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.1s ease-in')
                    ]),
                ])
            ],
            template: __webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [ng_event_bus__WEBPACK_IMPORTED_MODULE_2__["NgEventBus"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/containers/auth/auth.component.css":
/*!****************************************************!*\
  !*** ./src/app/containers/auth/auth.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authForm{\r\n  padding:0;\r\n  margin:0;\r\n  text-align:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoRm9ybXtcclxuICBwYWRkaW5nOjA7XHJcbiAgbWFyZ2luOjA7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/containers/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.isSubmitting = false;
        this.authForm = this.fb.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.error = null;
        this.userService
            .attemptAuth('login', this.authForm.value)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.error = err;
            _this.isSubmitting = false;
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-page',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/containers/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/containers/auth/no-auth-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/containers/auth/no-auth-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuth) { return !isAuth; }));
    };
    NoAuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    NoAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/containers/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/containers/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/employee-form/employee-form.component */ "./src/app/components/employee-form/employee-form.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeesService, dialog, _snackBar) {
        this.employeesService = employeesService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getEmployees().subscribe(function (response) {
            _this.employees = response['result'];
        });
    };
    EmployeeListComponent.prototype.openEditDialog = function (employee) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog',
            data: employee,
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data == 'deleted')
                _this.deleteEmployee(employee.userName);
            else if (data) {
                data.userName = employee.userName;
                _this.updateEmployee(data);
            }
        });
    };
    EmployeeListComponent.prototype.updateEmployee = function (employee) {
        var _this = this;
        this.employeesService.updateEmployee(employee)
            .subscribe(function (success) {
            _this.employees = _this.employees.map(function (e) {
                if (e.userName == employee.userName)
                    return employee;
                else
                    return e;
            });
            _this.openSnackBar('Vellykket oppdatering!');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployeeListComponent.prototype.deleteEmployee = function (username) {
        var _this = this;
        this.employeesService.deleteEmployee(username).subscribe(function (res) {
            _this.employees = _this.employees.filter(function (x) { return x.userName !== username; });
            _this.openSnackBar('Vellykket! Bruker slettet.');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployeeListComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog'
        });
        dialogRef.afterClosed().subscribe(function (employee) {
            if (employee)
                _this.createEmployee(employee);
        });
    };
    EmployeeListComponent.prototype.createEmployee = function (employee) {
        var _this = this;
        this.employeesService.addEmployee(employee)
            .subscribe(function (success) {
            _this.employees.push(employee);
            _this.openSnackBar('Vellykket! Ny bruker registrert.');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployeeListComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 2000,
            panelClass: 'toolbar_margin'
        });
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/containers/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/containers/employer-list/employer-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/containers/employer-list/employer-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvZW1wbG95ZXItbGlzdC9lbXBsb3llci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/employer-list/employer-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/employer-list/employer-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerListComponent", function() { return EmployerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/employers.service */ "./src/app/services/employers.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/employer-form/employer-form.component */ "./src/app/components/employer-form/employer-form.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployerListComponent = /** @class */ (function () {
    function EmployerListComponent(employersService, dialog, _snackBar) {
        this.employersService = employersService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    EmployerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employersService.getEmployers().subscribe(function (response) {
            _this.employers = response;
        });
    };
    EmployerListComponent.prototype.openEditDialog = function (employer) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployerFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog',
            data: employer,
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data == 'deleted')
                _this.deleteEmployer(employer.id);
            else if (data) {
                data.id = employer.id;
                _this.updateEmployer(data);
            }
        });
    };
    EmployerListComponent.prototype.updateEmployer = function (employer) {
        var _this = this;
        this.employersService.updateEmployer(employer)
            .subscribe(function (success) {
            _this.employers = _this.employers.map(function (e) {
                if (e.id == employer.id)
                    return employer;
                else
                    return e;
            });
            _this.openSnackBar('Vellykket oppdatering!');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployerListComponent.prototype.deleteEmployer = function (id) {
        var _this = this;
        this.employersService.deleteEmployer(id).subscribe(function (res) {
            _this.employers = _this.employers.filter(function (x) { return x.id !== id; });
            _this.openSnackBar('Vellykket! Arbeidsgiver slettet.');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployerListComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_employer_form_employer_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployerFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog'
        });
        dialogRef.afterClosed().subscribe(function (employer) {
            if (employer) {
                _this.createEmployer(employer);
            }
        });
    };
    EmployerListComponent.prototype.createEmployer = function (employer) {
        var _this = this;
        this.employersService.addEmployer(employer)
            .subscribe(function (id) {
            employer.id = id;
            _this.employers.push(employer);
            _this.openSnackBar('Vellykket! Ny arbeidsgiver registrert.');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    EmployerListComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 2000,
            panelClass: 'toolbar_margin'
        });
    };
    EmployerListComponent.ctorParameters = function () { return [
        { type: src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_1__["EmployersService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    EmployerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-list',
            template: __webpack_require__(/*! raw-loader!./employer-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/employer-list/employer-list.component.html"),
            styles: [__webpack_require__(/*! ./employer-list.component.css */ "./src/app/containers/employer-list/employer-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_employers_service__WEBPACK_IMPORTED_MODULE_1__["EmployersService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], EmployerListComponent);
    return EmployerListComponent;
}());



/***/ }),

/***/ "./src/app/containers/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/containers/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/containers/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/containers/mission-details/mission-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/containers/mission-details/mission-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nested_nav_toolbar{\r\n  height:72px!important;\r\n}\r\n\r\n.mission_tab{\r\n  margin-bottom:56px!important;\r\n}\r\n\r\n.show-img{\r\n  display:block;\r\n}\r\n\r\n.hide-img{\r\n  display:none;\r\n}\r\n\r\n.img-row { /* IE10 */\r\n  display: flex; /* IE10 */\r\n  flex-wrap: wrap;\r\n  padding: 0 4px;\r\n}\r\n\r\n/* Create four equal columns that sits next to each other */\r\n\r\n.img-column { /* IE10 */\r\n  flex: 25%;\r\n  max-width: 25%;\r\n  padding: 0 4px;\r\n}\r\n\r\n.img-column img {\r\n  margin-top: 8px;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n\r\n/* Responsive layout - makes a two column-layout instead of four columns */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .img-column {\r\n    flex: 50%;\r\n    max-width: 50%;\r\n  }\r\n}\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 300px) {\r\n  .img-column {\r\n    flex: 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9taXNzaW9uLWRldGFpbHMvbWlzc2lvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsV0FDd0IsU0FBUztFQUMvQixhQUFhLEVBQ1EsU0FBUztFQUM5QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSwyREFBMkQ7O0FBQzNELGNBQ2lCLFNBQVM7RUFDeEIsU0FBUztFQUNULGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUEsMEVBQTBFOztBQUMxRTtFQUNFO0lBRUUsU0FBUztJQUNULGNBQWM7RUFDaEI7QUFDRjs7QUFFQSx1R0FBdUc7O0FBQ3ZHO0VBQ0U7SUFFRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9taXNzaW9uLWRldGFpbHMvbWlzc2lvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmVzdGVkX25hdl90b29sYmFye1xyXG4gIGhlaWdodDo3MnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLm1pc3Npb25fdGFie1xyXG4gIG1hcmdpbi1ib3R0b206NTZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG93LWltZ3tcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uaGlkZS1pbWd7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uaW1nLXJvdyB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7IC8qIElFMTAgKi9cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBmb3VyIGVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4uaW1nLWNvbHVtbiB7XHJcbiAgLW1zLWZsZXg6IDI1JTsgLyogSUUxMCAqL1xyXG4gIGZsZXg6IDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nOiAwIDRweDtcclxufVxyXG5cclxuLmltZy1jb2x1bW4gaW1nIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIHR3byBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgZm91ciBjb2x1bW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmltZy1jb2x1bW4ge1xyXG4gICAgLW1zLWZsZXg6IDUwJTtcclxuICAgIGZsZXg6IDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuaW1nLWNvbHVtbiB7XHJcbiAgICAtbXMtZmxleDogMTAwJTtcclxuICAgIGZsZXg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/containers/mission-details/mission-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/mission-details/mission-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: MissionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionDetailsComponent", function() { return MissionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/missions.service */ "./src/app/services/missions.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_mission_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mission-images.service */ "./src/app/services/mission-images.service.ts");
/* harmony import */ var src_app_components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var src_app_components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/mission-form/mission-form.component */ "./src/app/components/mission-form/mission-form.component.ts");
/* harmony import */ var src_app_components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/mission-note-form/mission-note-form.component */ "./src/app/components/mission-note-form/mission-note-form.component.ts");
/* harmony import */ var src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mission-notes.service */ "./src/app/services/mission-notes.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/nav-action.model */ "./src/app/models/nav-action.model.ts");
/* harmony import */ var src_app_components_mission_report_form_mission_report_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/mission-report-form/mission-report-form.component */ "./src/app/components/mission-report-form/mission-report-form.component.ts");
/* harmony import */ var src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/mission-reports.service */ "./src/app/services/mission-reports.service.ts");
/* harmony import */ var _enums_roles_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../enums/roles.enum */ "./src/app/enums/roles.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MissionDetailsComponent = /** @class */ (function () {
    function MissionDetailsComponent(_missionsService, _imagesService, _missionNotesService, _missionReportsService, route, router, dialog, _snackBar) {
        this._missionsService = _missionsService;
        this._imagesService = _imagesService;
        this._missionNotesService = _missionNotesService;
        this._missionReportsService = _missionReportsService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.unloadedThumbnails = [];
        this.reloadThumbnailsState = false;
        this.navActions = [
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_10__["NavAction"]("createReport", "Legg til rapport", "note_add", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_13__["Roles"].Leder]),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_10__["NavAction"]("createNote", "Legg til notat", "add_comment"),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_10__["NavAction"]("edit", "Rediger", "edit", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_13__["Roles"].Leder]),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_10__["NavAction"]("delete", "Slett", "delete_forever", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_13__["Roles"].Leder])
        ];
    }
    MissionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) { return _this.missionId = params['id']; });
        this._missionsService.getMissionDetails(this.missionId).subscribe(function (result) {
            _this.mission = result;
            _this.mission.address = _this.mission.address.replace(", Norge", "").replace(/,/g, ";");
        }, function (error) { return console.log(error); });
    };
    MissionDetailsComponent.prototype.uploadImages = function (files) {
        var _this = this;
        this.imagesToUpload = files;
        this._imagesService.uploadImages(this.missionId, files).subscribe(function (result) {
            _this.mission.missionImages = _this.mission.missionImages.concat(result);
            _this.openSnackBar("Vellykket! " + result.length + " " + (result.length > 1 ? 'bilder' : 'bilde') + " lastet opp.");
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    MissionDetailsComponent.prototype.deleteImage = function (id) {
        var _this = this;
        this._imagesService.deleteImage(this.missionId, id).subscribe(function (res) {
            _this.mission.missionImages = _this.mission.missionImages.filter(function (val) { return val.id != id; });
            _this.openSnackBar('Vellykket! Bilde slettet');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    MissionDetailsComponent.prototype.handleEvent = function (e) {
        switch (e) {
            case "delete": {
                this.openDeleteDialog();
                break;
            }
            case "edit": {
                this.openEditDialog();
                break;
            }
            case "back": {
                this.onBack();
                break;
            }
            case "createReport": {
                this.openCreateMissionReportDialog();
                break;
            }
            case "createNote": {
                this.createMissionNote();
                break;
            }
        }
    };
    MissionDetailsComponent.prototype.openDeleteDialog = function () {
        var _this = this;
        var deleteDialogRef = this.dialog.open(src_app_components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteDialogComponent"]);
        deleteDialogRef.afterClosed().subscribe(function () { return _this.deleteMission(); });
    };
    MissionDetailsComponent.prototype.openEditDialog = function () {
        var _this = this;
        this._missionsService.getMission(this.missionId)
            .subscribe(function (data) {
            var dialogRef = _this.dialog.open(src_app_components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_6__["MissionFormComponent"], {
                width: '100vw',
                height: '100vh',
                panelClass: 'form_dialog',
                data: data,
            });
            dialogRef.afterClosed().subscribe(function (res) { return _this.editMission(res); });
        });
    };
    MissionDetailsComponent.prototype.createMissionNote = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_7__["MissionNoteFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog',
            data: { missionId: this.missionId }
        });
        dialogRef.afterClosed().subscribe(function (note) {
            if (note) {
                _this._missionNotesService.addNote(_this.missionId, note)
                    .subscribe(function (id) { return _this.router.navigate(['oppdrag', _this.missionId, 'notater', id]); });
            }
        });
    };
    MissionDetailsComponent.prototype.openCreateMissionReportDialog = function () {
        var _this = this;
        var deleteDialogRef = this.dialog.open(src_app_components_mission_report_form_mission_report_form_component__WEBPACK_IMPORTED_MODULE_11__["MissionReportFormComponent"]);
        deleteDialogRef.afterClosed().subscribe(function (data) { return _this.createMissionReport(data); });
    };
    MissionDetailsComponent.prototype.createMissionReport = function (data) {
        var _this = this;
        if (!data)
            return null;
        this._missionReportsService.uploadReport(this.missionId, data.files, data.typeId).subscribe(function (res) {
            _this.mission.missionReports = _this.mission.missionReports.concat(res);
        });
    };
    MissionDetailsComponent.prototype.pinnedNotes = function (pinned) {
        return this.mission.missionNotes.filter(function (x) { return x.pinned == pinned; });
    };
    MissionDetailsComponent.prototype.deleteMission = function () {
        var _this = this;
        this._missionsService.deleteMission(this.missionId).subscribe(function (res) {
            _this.onBack();
            _this.openSnackBar('Vellykket! Oppdrag slettet.');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    MissionDetailsComponent.prototype.editMission = function (data) {
        var _this = this;
        if (!data)
            return null;
        this._missionsService.updateMission(data)
            .subscribe(function (success) {
            _this.mission.address = data.address.replace(", Norge", "").replace(/,/g, ";");
            _this.mission.phoneNumber = data.phoneNumber;
            _this.mission.description = data.description;
            _this.openSnackBar('Vellykket oppdatering!');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    MissionDetailsComponent.prototype.onBack = function () {
        this.router.navigate(['/oppdrag']);
    };
    MissionDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    MissionDetailsComponent.prototype.trackByFn = function (index, missionImage) {
        return missionImage.id;
    };
    MissionDetailsComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 2000,
            panelClass: 'toolbar_margin'
        });
    };
    MissionDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_2__["MissionsService"] },
        { type: src_app_services_mission_images_service__WEBPACK_IMPORTED_MODULE_4__["MissionImagesService"] },
        { type: src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_8__["MissionNotesService"] },
        { type: src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_12__["MissionReportsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
    ]; };
    MissionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-details',
            template: __webpack_require__(/*! raw-loader!./mission-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/mission-details/mission-details.component.html"),
            styles: [__webpack_require__(/*! ./mission-details.component.css */ "./src/app/containers/mission-details/mission-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_2__["MissionsService"],
            src_app_services_mission_images_service__WEBPACK_IMPORTED_MODULE_4__["MissionImagesService"],
            src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_8__["MissionNotesService"],
            src_app_services_mission_reports_service__WEBPACK_IMPORTED_MODULE_12__["MissionReportsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], MissionDetailsComponent);
    return MissionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/containers/mission-list/mission-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/containers/mission-list/mission-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-nav-list {\r\n    padding-bottom:45px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9taXNzaW9uLWxpc3QvbWlzc2lvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL21pc3Npb24tbGlzdC9taXNzaW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbmF2LWxpc3Qge1xyXG4gICAgcGFkZGluZy1ib3R0b206NDVweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/containers/mission-list/mission-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/mission-list/mission-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MissionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionListComponent", function() { return MissionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/missions.service */ "./src/app/services/missions.service.ts");
/* harmony import */ var src_app_models_mission_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/mission-list.model */ "./src/app/models/mission-list.model.ts");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-event-bus */ "./node_modules/ng-event-bus/dist/ng_event_bus.js");
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_event_bus__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/mission-form/mission-form.component */ "./src/app/components/mission-form/mission-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MissionListComponent = /** @class */ (function () {
    function MissionListComponent(_missionsService, _eventBus, dialog, _router, _snackBar) {
        this._missionsService = _missionsService;
        this._eventBus = _eventBus;
        this.dialog = dialog;
        this._router = _router;
        this._snackBar = _snackBar;
        this.missionList = new src_app_models_mission_list_model__WEBPACK_IMPORTED_MODULE_2__["MissionList"]();
        this.searchString = "";
    }
    MissionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._missionsService.getMissionsPaginated().subscribe(function (result) { return _this.missionList = result['result']; }, function (error) { return console.log(error); });
        this._eventBus.on('searched').subscribe(function (searchInput) { return _this.searchMissionList(searchInput); });
    };
    MissionListComponent.prototype.searchMissionList = function (searchString) {
        var _this = this;
        this.searchString = searchString;
        this._missionsService.getMissionsPaginated(this.missionList.paginationInfo.actualPage, this.searchString)
            .subscribe(function (result) { return _this.missionList = result['result']; });
    };
    MissionListComponent.prototype.changePage = function (pageId) {
        var _this = this;
        this._missionsService.getMissionsPaginated(pageId, this.searchString)
            .subscribe(function (result) { return _this.missionList = result['result']; });
    };
    MissionListComponent.prototype.createMission = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_components_mission_form_mission_form_component__WEBPACK_IMPORTED_MODULE_5__["MissionFormComponent"], {
            width: '100vw',
            height: '100vh',
            panelClass: 'form_dialog'
        });
        dialogRef.afterClosed().subscribe(function (mission) {
            if (mission) {
                _this._missionsService.addMission(mission)
                    .subscribe(function (id) { return _this._router.navigate(['oppdrag', id, 'detaljer']); }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
            }
        });
    };
    MissionListComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 3000,
            panelClass: 'toolbar_margin'
        });
    };
    MissionListComponent.ctorParameters = function () { return [
        { type: src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_1__["MissionsService"] },
        { type: ng_event_bus__WEBPACK_IMPORTED_MODULE_3__["NgEventBus"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    MissionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-list',
            template: __webpack_require__(/*! raw-loader!./mission-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/mission-list/mission-list.component.html"),
            styles: [__webpack_require__(/*! ./mission-list.component.css */ "./src/app/containers/mission-list/mission-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_missions_service__WEBPACK_IMPORTED_MODULE_1__["MissionsService"],
            ng_event_bus__WEBPACK_IMPORTED_MODULE_3__["NgEventBus"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], MissionListComponent);
    return MissionListComponent;
}());



/***/ }),

/***/ "./src/app/containers/mission-note-details/mission-note-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/containers/mission-note-details/mission-note-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    white-space:pre-wrap!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9taXNzaW9uLW5vdGUtZGV0YWlscy9taXNzaW9uLW5vdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9taXNzaW9uLW5vdGUtZGV0YWlscy9taXNzaW9uLW5vdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdoaXRlLXNwYWNlOnByZS13cmFwIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/mission-note-details/mission-note-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/mission-note-details/mission-note-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MissionNoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionNoteDetailsComponent", function() { return MissionNoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mission-notes.service */ "./src/app/services/mission-notes.service.ts");
/* harmony import */ var src_app_components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/mission-note-form/mission-note-form.component */ "./src/app/components/mission-note-form/mission-note-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var src_app_components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/confirm-delete-dialog/confirm-delete-dialog.component */ "./src/app/components/confirm-delete-dialog/confirm-delete-dialog.component.ts");
/* harmony import */ var src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/nav-action.model */ "./src/app/models/nav-action.model.ts");
/* harmony import */ var _enums_roles_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums/roles.enum */ "./src/app/enums/roles.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MissionNoteDetailsComponent = /** @class */ (function () {
    function MissionNoteDetailsComponent(_notesService, route, router, dialog, _snackBar) {
        this._notesService = _notesService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.navActions = [
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_7__["NavAction"]("edit", "Rediger", "edit", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_8__["Roles"].Leder]),
            new src_app_models_nav_action_model__WEBPACK_IMPORTED_MODULE_7__["NavAction"]("delete", "Slett", "delete_forever", [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_8__["Roles"].Leder])
        ];
    }
    MissionNoteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.missionId = params['missionId'];
            _this.noteId = params['id'];
        });
        this._notesService.getNote(this.missionId, this.noteId).subscribe(function (result) {
            _this.note = result;
        }, function (error) { return console.log(error); });
    };
    MissionNoteDetailsComponent.prototype.handleEvent = function (e) {
        switch (e) {
            case "delete": {
                this.openDeleteDialog();
                break;
            }
            case "edit": {
                this.openEditDialog();
                break;
            }
            case "back": {
                this.onBack();
                break;
            }
        }
    };
    MissionNoteDetailsComponent.prototype.openDeleteDialog = function () {
        var _this = this;
        var deleteDialogRef = this.dialog.open(src_app_components_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDeleteDialogComponent"]);
        deleteDialogRef.afterClosed().subscribe(function () { return _this.deleteMissionNote(); });
    };
    MissionNoteDetailsComponent.prototype.openEditDialog = function () {
        var _this = this;
        this._notesService.getNote(this.missionId, this.noteId)
            .subscribe(function (res) {
            var dialogRef = _this.dialog.open(src_app_components_mission_note_form_mission_note_form_component__WEBPACK_IMPORTED_MODULE_3__["MissionNoteFormComponent"], {
                width: '100vw',
                height: '100vh',
                panelClass: 'form_dialog',
                data: { note: res, missionId: _this.missionId },
            });
            dialogRef.afterClosed().subscribe(function (res) { return _this.editMissionNote(res); });
        });
    };
    MissionNoteDetailsComponent.prototype.deleteMissionNote = function () {
        var _this = this;
        this._notesService.deleteNote(this.missionId, this.noteId).subscribe(function (res) {
            _this.onBack();
            _this.openSnackBar('Vellykket! Notat slettet.');
        });
    };
    MissionNoteDetailsComponent.prototype.editMissionNote = function (data) {
        var _this = this;
        if (!data)
            return null;
        this._notesService.updateNote(this.missionId, data)
            .subscribe(function (success) {
            _this.note = data;
            _this.openSnackBar('Vellykket oppdatering!');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    MissionNoteDetailsComponent.prototype.onBack = function () {
        this.router.navigate(['/oppdrag', this.missionId, 'detaljer']);
    };
    MissionNoteDetailsComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 2000,
            panelClass: 'toolbar_margin'
        });
    };
    MissionNoteDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    MissionNoteDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_2__["MissionNotesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    MissionNoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mission-note-details',
            template: __webpack_require__(/*! raw-loader!./mission-note-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/mission-note-details/mission-note-details.component.html"),
            styles: [__webpack_require__(/*! ./mission-note-details.component.css */ "./src/app/containers/mission-note-details/mission-note-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_mission_notes_service__WEBPACK_IMPORTED_MODULE_2__["MissionNotesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MissionNoteDetailsComponent);
    return MissionNoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/containers/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/containers/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(employeeService, userService, _snackBar) {
        this.employeeService = employeeService;
        this.userService = userService;
        this._snackBar = _snackBar;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser()
            .subscribe(function (data) { return _this.user = data.user; });
    };
    ProfileComponent.prototype.updateProfile = function (updatedUser) {
        var _this = this;
        updatedUser.userName = this.user.userName;
        this.userService.updateCurrentUser(updatedUser).subscribe(function (result) {
            _this.user = updatedUser;
            _this.openSnackBar('Vellykket oppdatering!');
        }, function (error) { return _this.openSnackBar('Mislykket! Noe gikk feil.'); });
    };
    ProfileComponent.prototype.updatePassword = function (data) {
        var _this = this;
        this.userService.changePassword(data.oldPassword, data.password).subscribe(function (result) { return _this.openSnackBar('Passord oppdatert!'); }, function (error) { return _this.passwordStatus = "Feil passord!"; }, function () { return _this.passwordStatus = ""; });
    };
    ProfileComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'lukk', {
            duration: 2000,
            panelClass: 'toolbar_margin'
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/containers/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/directives/if-role.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/if-role.directive.ts ***!
  \*************************************************/
/*! exports provided: IfRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfRoleDirective", function() { return IfRoleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfRoleDirective = /** @class */ (function () {
    function IfRoleDirective(element, templateRef, viewContainer, userService) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userService = userService;
    }
    Object.defineProperty(IfRoleDirective.prototype, "ifRole", {
        set: function (roles) {
            if (roles.includes(this.userService.getUserRole())) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    IfRoleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], IfRoleDirective.prototype, "ifRole", null);
    IfRoleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ifRole]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], IfRoleDirective);
    return IfRoleDirective;
}());



/***/ }),

/***/ "./src/app/enums/roles.enum.ts":
/*!*************************************!*\
  !*** ./src/app/enums/roles.enum.ts ***!
  \*************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["Ansatt"] = "Ansatt";
    Roles["Mellomleder"] = "Mellomleder";
    Roles["Leder"] = "Leder";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/interceptors/http.token.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http.token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/jwt.service */ "./src/app/services/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Bearer " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor.ctorParameters = function () { return [
        { type: _services_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] }
    ]; };
    HttpTokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/layout/bottom-nav/bottom-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/bottom-nav/bottom-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom_toolbar{\r\n    position:fixed;\r\n    bottom:0px;\r\n    height:56px !important;\r\n    z-index:1;\r\n}\r\n.bottom_toolbar_button{\r\n    height:100%;\r\n    flex-grow:1;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    color:#fff;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JvdHRvbS1uYXYvYm90dG9tLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3R0b20tbmF2L2JvdHRvbS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21fdG9vbGJhcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGhlaWdodDo1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OjE7XHJcbn1cclxuLmJvdHRvbV90b29sYmFyX2J1dHRvbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/layout/bottom-nav/bottom-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/bottom-nav/bottom-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: BottomNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavComponent", function() { return BottomNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomNavComponent = /** @class */ (function () {
    function BottomNavComponent() {
    }
    BottomNavComponent.prototype.ngOnInit = function () {
    };
    BottomNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-nav',
            template: __webpack_require__(/*! raw-loader!./bottom-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/bottom-nav/bottom-nav.component.html"),
            styles: [__webpack_require__(/*! ./bottom-nav.component.css */ "./src/app/layout/bottom-nav/bottom-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomNavComponent);
    return BottomNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/main-nav/main-nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/main-nav/main-nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  height:72px!important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgaGVpZ2h0OjcycHghaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/main-nav/main-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/main-nav/main-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, _userService, router, route) {
        this.breakpointObserver = breakpointObserver;
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.inputPlaceholder = "Søk";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    MainNavComponent.prototype.ngOnInit = function () {
        //Remove '/' and make first letter uppercase for title
        this.title = this.router.url.replace("/", "").replace(/^\w/, function (c) { return c.toUpperCase(); });
        if (this.title == "Hjem")
            this.title = "Bj Bygg & Eiendom";
    };
    MainNavComponent.prototype.handleLogout = function () {
        this._userService.purgeAuth();
        this.router.navigate(['/login']);
    };
    MainNavComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainNavComponent.prototype, "inputPlaceholder", void 0);
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/layout/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/nested-nav/nested-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/nested-nav/nested-nav.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uZXN0ZWQtbmF2L25lc3RlZC1uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/nested-nav/nested-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/nested-nav/nested-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: NestedNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedNavComponent", function() { return NestedNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NestedNavComponent = /** @class */ (function () {
    function NestedNavComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allActionRoles = [];
    }
    NestedNavComponent.prototype.ngOnChanges = function () {
        this.title = this.title.replace(/;/g, "<br />");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NestedNavComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NestedNavComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NestedNavComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NestedNavComponent.prototype, "event", void 0);
    NestedNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested-nav',
            template: __webpack_require__(/*! raw-loader!./nested-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/nested-nav/nested-nav.component.html"),
            styles: [__webpack_require__(/*! ./nested-nav.component.css */ "./src/app/layout/nested-nav/nested-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NestedNavComponent);
    return NestedNavComponent;
}());



/***/ }),

/***/ "./src/app/layout/vert-menu/vert-menu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/vert-menu/vert-menu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC92ZXJ0LW1lbnUvdmVydC1tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/vert-menu/vert-menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/vert-menu/vert-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: VertMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertMenuComponent", function() { return VertMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VertMenuComponent = /** @class */ (function () {
    function VertMenuComponent() {
        this.color = "secondary";
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allActionRoles = [];
    }
    VertMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.actions)
            this.actions.map(function (x) {
                var _a;
                return _this.allActionRoles = (_a = _this.allActionRoles).concat.apply(_a, x.roles);
            });
    };
    VertMenuComponent.prototype.handleEvent = function (e) {
        this.event.emit(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VertMenuComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VertMenuComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VertMenuComponent.prototype, "event", void 0);
    VertMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vert-menu',
            template: __webpack_require__(/*! raw-loader!./vert-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/vert-menu/vert-menu.component.html"),
            styles: [__webpack_require__(/*! ./vert-menu.component.css */ "./src/app/layout/vert-menu/vert-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VertMenuComponent);
    return VertMenuComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(userName, firstName, lastName, phoneNumber, email, role) {
        if (userName === void 0) { userName = null; }
        if (firstName === void 0) { firstName = null; }
        if (lastName === void 0) { lastName = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        if (email === void 0) { email = null; }
        if (role === void 0) { role = null; }
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.role = role;
    }
    Employee.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Employee;
}());

;


/***/ }),

/***/ "./src/app/models/employer.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employer.model.ts ***!
  \******************************************/
/*! exports provided: Employer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employer", function() { return Employer; });
var Employer = /** @class */ (function () {
    function Employer(id, name, phoneNumber, address) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        if (address === void 0) { address = null; }
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    Employer.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Employer;
}());

;


/***/ }),

/***/ "./src/app/models/mission-list.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/mission-list.model.ts ***!
  \**********************************************/
/*! exports provided: MissionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionList", function() { return MissionList; });
var MissionList = /** @class */ (function () {
    function MissionList() {
    }
    return MissionList;
}());

var MissionListItem = /** @class */ (function () {
    function MissionListItem() {
    }
    return MissionListItem;
}());


/***/ }),

/***/ "./src/app/models/mission-note.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/mission-note.model.ts ***!
  \**********************************************/
/*! exports provided: MissionNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionNote", function() { return MissionNote; });
var MissionNote = /** @class */ (function () {
    function MissionNote(id, title, content, createdAt, createdBy, pinned) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = null; }
        if (content === void 0) { content = null; }
        if (createdAt === void 0) { createdAt = null; }
        if (createdBy === void 0) { createdBy = null; }
        if (pinned === void 0) { pinned = false; }
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.pinned = pinned;
    }
    ;
    MissionNote.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return MissionNote;
}());

;


/***/ }),

/***/ "./src/app/models/mission.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/mission.model.ts ***!
  \*****************************************/
/*! exports provided: Mission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mission", function() { return Mission; });
var Mission = /** @class */ (function () {
    function Mission(id, phoneNumber, description, address, employerId, missionTypeId) {
        if (id === void 0) { id = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        if (description === void 0) { description = null; }
        if (address === void 0) { address = null; }
        if (employerId === void 0) { employerId = 0; }
        if (missionTypeId === void 0) { missionTypeId = 0; }
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.description = description;
        this.address = address;
        this.employerId = employerId;
        this.missionTypeId = missionTypeId;
    }
    ;
    Mission.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number }
    ]; };
    return Mission;
}());

;


/***/ }),

/***/ "./src/app/models/nav-action.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/nav-action.model.ts ***!
  \********************************************/
/*! exports provided: NavAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAction", function() { return NavAction; });
/* harmony import */ var _enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/roles.enum */ "./src/app/enums/roles.enum.ts");

var NavAction = /** @class */ (function () {
    function NavAction(event, text, icon, roles) {
        if (roles === void 0) { roles = [_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["Roles"].Ansatt, _enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["Roles"].Leder, _enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["Roles"].Mellomleder]; }
        this.event = event;
        this.text = text;
        this.icon = icon;
        this.roles = roles;
    }
    ;
    NavAction.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return NavAction;
}());



/***/ }),

/***/ "./src/app/models/pagination.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/pagination.model.ts ***!
  \********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    return Pagination;
}());



/***/ }),

/***/ "./src/app/pipes/image-row.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/image-row.pipe.ts ***!
  \*****************************************/
/*! exports provided: ImageRowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRowPipe", function() { return ImageRowPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageRowPipe = /** @class */ (function () {
    function ImageRowPipe() {
    }
    ImageRowPipe.prototype.transform = function (items, rowNr, totalRows) {
        var iterations = Math.ceil(items.length / totalRows);
        var rowItems = [];
        for (var i = 0; i < iterations; i++) {
            var sliced = items.slice(i * totalRows, (i + 1) * totalRows);
            if (sliced.length >= rowNr) {
                rowItems.push(sliced[rowNr - 1]);
            }
        }
        return rowItems;
    };
    ImageRowPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'imagerow' })
    ], ImageRowPipe);
    return ImageRowPipe;
}());



/***/ }),

/***/ "./src/app/pipes/thumbnail.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/thumbnail.pipe.ts ***!
  \*****************************************/
/*! exports provided: ThumbnailPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailPipe", function() { return ThumbnailPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThumbnailPipe = /** @class */ (function () {
    function ThumbnailPipe() {
    }
    ThumbnailPipe.prototype.transform = function (value) {
        return value.replace(/images/gi, "thumbnails");
    };
    ThumbnailPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'thumbnail' })
    ], ThumbnailPipe);
    return ThumbnailPipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + path, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.formatErrors));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] }
    ]; };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/services/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService, jwtService) {
        this.router = router;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.hasValidToken()) {
            return this.router.navigate(['/login']);
        }
        if (route.data['allowedRoles']) {
            if (!route.data['allowedRoles'].includes(this.userService.getUserRole())) {
                return this.router.navigate(['/login']); //Should navigate to a forbidden component
            }
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/employees.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/employees.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesService = /** @class */ (function () {
    function EmployeesService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/Users';
    }
    EmployeesService.prototype.addEmployee = function (employee) {
        return this
            .http
            .post("" + this.uri, employee);
    };
    EmployeesService.prototype.getEmployees = function () {
        return this
            .http
            .get("" + this.uri);
    };
    EmployeesService.prototype.getEmployee = function (username) {
        return this
            .http
            .get(this.uri + "/" + username);
    };
    EmployeesService.prototype.updateEmployee = function (employee) {
        return this
            .http
            .put(this.uri + "/" + employee.userName, employee);
    };
    EmployeesService.prototype.deleteEmployee = function (userName) {
        return this
            .http
            .delete(this.uri + "/" + userName);
    };
    EmployeesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmployeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/services/employers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/employers.service.ts ***!
  \***********************************************/
/*! exports provided: EmployersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersService", function() { return EmployersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployersService = /** @class */ (function () {
    function EmployersService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/Employers';
    }
    EmployersService.prototype.addEmployer = function (employer) {
        return this
            .http
            .post("" + this.uri, employer);
    };
    EmployersService.prototype.getEmployers = function () {
        return this
            .http
            .get("" + this.uri);
    };
    EmployersService.prototype.updateEmployer = function (employer) {
        return this
            .http
            .put(this.uri + "/" + employer.id, employer);
    };
    EmployersService.prototype.deleteEmployer = function (id) {
        return this
            .http
            .delete(this.uri + "/" + id);
    };
    EmployersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmployersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployersService);
    return EmployersService;
}());



/***/ }),

/***/ "./src/app/services/jwt.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService.prototype.getDecodedToken = function () {
        var token = this.getToken();
        if (token) {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_1__(this.getToken());
        }
        return null;
    };
    JwtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/services/mission-images.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/mission-images.service.ts ***!
  \****************************************************/
/*! exports provided: MissionImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionImagesService", function() { return MissionImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MissionImagesService = /** @class */ (function () {
    function MissionImagesService(http, baseUrl) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/Missions';
    }
    MissionImagesService.prototype.uploadImages = function (missionId, files) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i], files[i].name);
        }
        return this.http
            .post(this.uri + "/" + missionId + "/MissionImages", formData);
    };
    MissionImagesService.prototype.deleteImage = function (missionId, id) {
        return this.http
            .delete(this.uri + "/" + missionId + "/MissionImages/" + id);
    };
    MissionImagesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
    ]; };
    MissionImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MissionImagesService);
    return MissionImagesService;
}());



/***/ }),

/***/ "./src/app/services/mission-notes.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mission-notes.service.ts ***!
  \***************************************************/
/*! exports provided: MissionNotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionNotesService", function() { return MissionNotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MissionNotesService = /** @class */ (function () {
    function MissionNotesService(http, baseUrl) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/missions';
    }
    MissionNotesService.prototype.addNote = function (missionId, note) {
        return this.http
            .post(this.uri + "/" + missionId + "/MissionNotes", note, { headers: { 'Content-Type': 'application/json' } });
    };
    MissionNotesService.prototype.getNote = function (missionId, id) {
        return this
            .http
            .get(this.uri + "/" + missionId + "/MissionNotes/" + id);
    };
    MissionNotesService.prototype.updateNote = function (missionId, note) {
        return this
            .http
            .put(this.uri + "/" + missionId + "/MissionNotes/" + note.id, note, { headers: { 'Content-Type': 'application/json' } });
    };
    MissionNotesService.prototype.deleteNote = function (missionId, id) {
        return this
            .http
            .delete(this.uri + "/" + missionId + "/MissionNotes/" + id);
    };
    MissionNotesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
    ]; };
    MissionNotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MissionNotesService);
    return MissionNotesService;
}());



/***/ }),

/***/ "./src/app/services/mission-reports.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/mission-reports.service.ts ***!
  \*****************************************************/
/*! exports provided: MissionReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionReportsService", function() { return MissionReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MissionReportsService = /** @class */ (function () {
    function MissionReportsService(http, baseUrl) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/Missions';
    }
    MissionReportsService.prototype.uploadReport = function (missionId, files, typeId) {
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        return this.http
            .post(this.uri + "/" + missionId + "/MissionReports?typeId=" + typeId, formData);
    };
    MissionReportsService.prototype.deleteReport = function (missionId, id) {
        return this.http
            .delete(this.uri + "/" + missionId + "/MissionReports/" + id);
    };
    MissionReportsService.prototype.getTypes = function () {
        return this
            .http
            .get(this.uri + "/MissionReports/Types");
    };
    MissionReportsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
    ]; };
    MissionReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MissionReportsService);
    return MissionReportsService;
}());



/***/ }),

/***/ "./src/app/services/mission-types.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mission-types.service.ts ***!
  \***************************************************/
/*! exports provided: MissionTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionTypesService", function() { return MissionTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MissionTypesService = /** @class */ (function () {
    function MissionTypesService(http, baseUrl) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/MissionTypes';
    }
    MissionTypesService.prototype.addMissionType = function (Name) {
        var obj = {
            Name: Name
        };
        return this
            .http
            .post("" + this.uri, obj);
    };
    MissionTypesService.prototype.getMissionTypes = function () {
        return this
            .http
            .get("" + this.uri);
    };
    MissionTypesService.prototype.updateMissionType = function (Name, id) {
        var obj = {
            Name: Name
        };
        return this
            .http
            .put(this.uri + "/" + id, obj);
    };
    MissionTypesService.prototype.deleteMissionType = function (id) {
        return this
            .http
            .delete(this.uri + "/" + id);
    };
    MissionTypesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
    ]; };
    MissionTypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MissionTypesService);
    return MissionTypesService;
}());



/***/ }),

/***/ "./src/app/services/missions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/missions.service.ts ***!
  \**********************************************/
/*! exports provided: MissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionsService", function() { return MissionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MissionsService = /** @class */ (function () {
    function MissionsService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/missions';
    }
    MissionsService.prototype.addMission = function (mission) {
        return this.http
            .post("" + this.uri, mission);
    };
    MissionsService.prototype.getMissionsPaginated = function (pageId, searchString) {
        if (pageId === void 0) { pageId = 0; }
        if (searchString == null || searchString.length == 0) {
            return this
                .http
                .get(this.uri + "?pageId=" + pageId);
        }
        else {
            return this
                .http
                .get(this.uri + "?searchString=" + searchString + "&pageId=" + pageId);
        }
    };
    MissionsService.prototype.getMission = function (id) {
        return this
            .http
            .get(this.uri + "/" + id);
    };
    MissionsService.prototype.getMissionDetails = function (id) {
        return this
            .http
            .get(this.uri + "/" + id + "/Details");
    };
    MissionsService.prototype.updateMission = function (mission) {
        return this
            .http
            .put(this.uri + "/" + mission.id, mission);
    };
    MissionsService.prototype.deleteMission = function (id) {
        return this
            .http
            .delete(this.uri + "/" + id);
    };
    MissionsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MissionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MissionsService);
    return MissionsService;
}());



/***/ }),

/***/ "./src/app/services/roles.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesService = /** @class */ (function () {
    function RolesService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/Roles';
    }
    RolesService.prototype.getRoles = function () {
        return this
            .http
            .get("" + this.uri);
    };
    RolesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        this.isAuth = false;
    }
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token.replace("Bearer ", ""));
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        this.isAuth = true;
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
        this.isAuth = false;
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/auth' + route, credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            _this.setAuth(user);
            return user;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.apiService.get('/auth');
    };
    UserService.prototype.getUserRole = function () {
        return this.jwtService.getDecodedToken()['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    };
    UserService.prototype.hasValidToken = function () {
        var token = this.jwtService.getDecodedToken();
        if (!token) {
            return false;
        }
        ;
        var exp = token['exp'];
        if (Date.now() >= exp * 1000) {
            return false;
        }
        return true;
    };
    UserService.prototype.updateCurrentUser = function (user) {
        return this.apiService
            .put('/auth', user);
    };
    UserService.prototype.changePassword = function (oldPw, newPw) {
        var obj = {
            OldPassword: oldPw,
            NewPassword: newPw
        };
        return this.apiService
            .put('/auth/changePassword', obj);
    };
    UserService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://bjbyggwebapiv1.azurewebsites.net/api'
    //apiUrl: 'https://localhost:44379/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brett\source\repos\BjByggV2\AngularClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
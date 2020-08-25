(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/support/support.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/support/support.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>support</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div class=\"quick_action\">\nBlock Card \n</div>\n<div class=\"quick_action\">\nBlock Card \n\n</div>\n<div class=\"quick_action\">\nBlock Card \n\n</div>\n<div class=\"quick_action\">\nBlock Card \n\n</div>\n<div class=\"quick_action\">\nBlock Card \n\n</div>\n<div class=\"quick_action\">\nBlock Card \n\n</div>\n<div class=\"quick_action\">\n  Block Card \n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/menu/support/support-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/menu/support/support-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/menu/support/support.page.ts");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/support/support.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/menu/support/support.module.ts ***!
  \******************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/menu/support/support-routing.module.ts");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/menu/support/support.page.ts");







let SupportPageModule = class SupportPageModule {
};
SupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportPageRoutingModule"]
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/pages/menu/support/support.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/menu/support/support.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/menu/support/support.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/menu/support/support.page.ts ***!
  \****************************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SupportPage = class SupportPage {
    constructor() { }
    ngOnInit() {
    }
};
SupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/support/support.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./support.page.scss */ "./src/app/pages/menu/support/support.page.scss")).default]
    })
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=menu-support-support-module-es2015.js.map
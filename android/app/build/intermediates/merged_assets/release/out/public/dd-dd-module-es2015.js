(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dd-dd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dd/dd.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dd/dd.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"dashboard/home\"></ion-back-button>\n</ion-buttons>\n</ion-toolbar>\n<div class=\"acoounts-header\">\n  <h1>DD Accounts</h1>\n\n  <p class=\"faded-text\">\n    Maturity Amount \n  </p>\n  <h2> ₹3,00,300.00/-</h2>\n</div>\n<a routerLink=\"/dashboard/dd/ddview\">\n<ion-row class=\"amount-details md hydrated\">\n  <ion-col size=\"8\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%);\">\n    <p class=\"fade-text-one\">\n      First Account \n    </p>\n    <p class=\"fade-text-one\">\n      DD Amount<span> ₹500</span>\n    </p>\n    <h2 class=\"amount-blue\">₹2,80,5000.00/-</h2>\n    <p class=\"fade-text-two\">\n      Interest Rate(%)<span>:9.50%</span>\n    </p>\n      </ion-col>\n  <ion-col size=\"4\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);\">\n    <p class=\"fade-text-one\">\n      DD55545\n    </p>\n    <p class=\"fade-text-two\">\n      Open Date\n    </p>\n    <p class=\"blue-text-nm\">\n      14/05/2019\n    </p>\n    <p class=\"fade-text-two\">\n      Maturity Date\n    </p>\n    <p class=\"blue-text-nm\">\n      14/02/2022\n    </p>\n  </ion-col>\n</ion-row>\n</a>\n<a routerLink=\"/dashboard/dd/ddview\">\n  <ion-row class=\"amount-details md hydrated\">\n    <ion-col size=\"8\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%);\">\n      <p class=\"fade-text-one\">\n        First Account \n      </p>\n      <p class=\"fade-text-one\">\n        DD Amount<span> ₹500</span>\n      </p>\n      <h2 class=\"amount-blue\">₹2,80,5000.00/-</h2>\n      <p class=\"fade-text-two\">\n        Interest Rate(%)<span>:9.50%</span>\n      </p>\n        </ion-col>\n    <ion-col size=\"4\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);\">\n      <p class=\"fade-text-one\">\n        DD55545\n      </p>\n      <p class=\"fade-text-two\">\n        Open Date\n      </p>\n      <p class=\"blue-text-nm\">\n        14/05/2019\n      </p>\n      <p class=\"fade-text-two\">\n        Maturity Date\n      </p>\n      <p class=\"blue-text-nm\">\n        14/02/2022\n      </p>\n    </ion-col>\n  </ion-row>\n  </a>\n  <a routerLink=\"/dashboard/dd/ddview\">\n    <ion-row class=\"amount-details md hydrated\">\n      <ion-col size=\"8\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(8 / var(--ion-grid-columns, 12)) * 100%);\">\n        <p class=\"fade-text-one\">\n          First Account \n        </p>\n        <p class=\"fade-text-one\">\n          DD Amount<span> ₹500</span>\n        </p>\n        <h2 class=\"amount-blue\">₹2,80,5000.00/-</h2>\n        <p class=\"fade-text-two\">\n          Interest Rate(%)<span>:9.50%</span>\n        </p>\n          </ion-col>\n      <ion-col size=\"4\" class=\"md hydrated\" style=\"flex: 0 0 calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);\">\n        <p class=\"fade-text-one\">\n          DD55545\n        </p>\n        <p class=\"fade-text-two\">\n          Open Date\n        </p>\n        <p class=\"blue-text-nm\">\n          14/05/2019\n        </p>\n        <p class=\"fade-text-two\">\n          Maturity Date\n        </p>\n        <p class=\"blue-text-nm\">\n          14/02/2022\n        </p>\n      </ion-col>\n    </ion-row>\n    </a>");

/***/ }),

/***/ "./src/app/pages/home/dd/dd-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/dd/dd-routing.module.ts ***!
  \****************************************************/
/*! exports provided: DdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdPageRoutingModule", function() { return DdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dd.page */ "./src/app/pages/home/dd/dd.page.ts");




const routes = [
    {
        path: '',
        component: _dd_page__WEBPACK_IMPORTED_MODULE_3__["DdPage"]
    },
    {
        path: 'ddview',
        loadChildren: () => __webpack_require__.e(/*! import() | ddview-ddview-module */ "ddview-ddview-module").then(__webpack_require__.bind(null, /*! ./ddview/ddview.module */ "./src/app/pages/home/dd/ddview/ddview.module.ts")).then(m => m.DdviewPageModule)
    }
];
let DdPageRoutingModule = class DdPageRoutingModule {
};
DdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DdPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/dd/dd.module.ts":
/*!********************************************!*\
  !*** ./src/app/pages/home/dd/dd.module.ts ***!
  \********************************************/
/*! exports provided: DdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdPageModule", function() { return DdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dd-routing.module */ "./src/app/pages/home/dd/dd-routing.module.ts");
/* harmony import */ var _dd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dd.page */ "./src/app/pages/home/dd/dd.page.ts");







let DdPageModule = class DdPageModule {
};
DdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dd_routing_module__WEBPACK_IMPORTED_MODULE_5__["DdPageRoutingModule"]
        ],
        declarations: [_dd_page__WEBPACK_IMPORTED_MODULE_6__["DdPage"]]
    })
], DdPageModule);



/***/ }),

/***/ "./src/app/pages/home/dd/dd.page.scss":
/*!********************************************!*\
  !*** ./src/app/pages/home/dd/dd.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZGQvZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/dd/dd.page.ts":
/*!******************************************!*\
  !*** ./src/app/pages/home/dd/dd.page.ts ***!
  \******************************************/
/*! exports provided: DdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdPage", function() { return DdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DdPage = class DdPage {
    constructor() { }
    ngOnInit() {
    }
};
DdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dd',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/dd/dd.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dd.page.scss */ "./src/app/pages/home/dd/dd.page.scss")).default]
    })
], DdPage);



/***/ })

}]);
//# sourceMappingURL=dd-dd-module-es2015.js.map
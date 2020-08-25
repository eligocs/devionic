(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-cards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cards</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/cards/cards-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cards/cards-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageRoutingModule", function() { return CardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.page */ "./src/app/pages/cards/cards.page.ts");




const routes = [
    {
        path: '',
        component: _cards_page__WEBPACK_IMPORTED_MODULE_3__["CardsPage"]
    }
];
let CardsPageRoutingModule = class CardsPageRoutingModule {
};
CardsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cards/cards.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cards/cards.module.ts ***!
  \*********************************************/
/*! exports provided: CardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards-routing.module */ "./src/app/pages/cards/cards-routing.module.ts");
/* harmony import */ var _cards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards.page */ "./src/app/pages/cards/cards.page.ts");







let CardsPageModule = class CardsPageModule {
};
CardsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cards_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardsPageRoutingModule"]
        ],
        declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_6__["CardsPage"]]
    })
], CardsPageModule);



/***/ }),

/***/ "./src/app/pages/cards/cards.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/cards/cards.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/cards/cards.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cards/cards.page.ts ***!
  \*******************************************/
/*! exports provided: CardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPage", function() { return CardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CardsPage = class CardsPage {
    constructor() { }
    ngOnInit() {
    }
};
CardsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cards.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards/cards.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cards.page.scss */ "./src/app/pages/cards/cards.page.scss")).default]
    })
], CardsPage);



/***/ })

}]);
//# sourceMappingURL=cards-cards-module-es2015.js.map
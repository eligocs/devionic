(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-security-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/security/security.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/security/security.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>security</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"tabs\">\n    <div class=\"tab\">\n      <input type=\"checkbox\" id=\"chck1\">\n      <label class=\"tab-label\" for=\"chck1\">Item 1</label>\n      <div class=\"tab-content\">\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!\n      </div>\n    </div>\n    <div class=\"tab\">\n      <input type=\"checkbox\" id=\"chck2\">\n      <label class=\"tab-label\" for=\"chck2\">Item 2</label>\n      <div class=\"tab-content\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/menu/security/security-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/menu/security/security-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SecurityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageRoutingModule", function() { return SecurityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security.page */ "./src/app/pages/menu/security/security.page.ts");




const routes = [
    {
        path: '',
        component: _security_page__WEBPACK_IMPORTED_MODULE_3__["SecurityPage"]
    }
];
let SecurityPageRoutingModule = class SecurityPageRoutingModule {
};
SecurityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecurityPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/security/security.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/menu/security/security.module.ts ***!
  \********************************************************/
/*! exports provided: SecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/pages/menu/security/security-routing.module.ts");
/* harmony import */ var _security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.page */ "./src/app/pages/menu/security/security.page.ts");







let SecurityPageModule = class SecurityPageModule {
};
SecurityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _security_routing_module__WEBPACK_IMPORTED_MODULE_5__["SecurityPageRoutingModule"]
        ],
        declarations: [_security_page__WEBPACK_IMPORTED_MODULE_6__["SecurityPage"]]
    })
], SecurityPageModule);



/***/ }),

/***/ "./src/app/pages/menu/security/security.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/menu/security/security.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list .item.item-accordion {\n  line-height: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear;\n}\n\n.list .item.item-accordion.ng-hide {\n  line-height: 0px;\n}\n\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9zZWN1cml0eS9EOlxcZGV2cmlzaW5nL3NyY1xcYXBwXFxwYWdlc1xcbWVudVxcc2VjdXJpdHlcXHNlY3VyaXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9zZWN1cml0eS9zZWN1cml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBRENFOztFQUVFLHlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L3NlY3VyaXR5L3NlY3VyaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjA5cyBhbGwgbGluZWFyO1xyXG4gIH1cclxuICAubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtYWRkLFxyXG4gIC5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtcmVtb3ZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfSIsIi5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uIHtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogMC4wOXMgYWxsIGxpbmVhcjtcbn1cblxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZSB7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtYWRkLFxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZS1yZW1vdmUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/security/security.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/menu/security/security.page.ts ***!
  \******************************************************/
/*! exports provided: SecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPage", function() { return SecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import * as $ from “jquery”;
let SecurityPage = class SecurityPage {
    constructor() { }
    ngOnInit() {
    }
};
SecurityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./security.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/security/security.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./security.page.scss */ "./src/app/pages/menu/security/security.page.scss")).default]
    })
], SecurityPage);



/***/ })

}]);
//# sourceMappingURL=menu-security-security-module-es2015.js.map
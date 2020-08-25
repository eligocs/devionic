function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-cpassword-cpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/cpassword/cpassword.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/cpassword/cpassword.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuCpasswordCpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"p_header\">\n  <ion-avatar class=\"avatar\">\n    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n  </ion-avatar>\n</ion-header>\n\n<ion-content>\n<ion-title class=\"ion-text-center ion-padding\">Change Password</ion-title>\n<ion-grid>\n<ion-item>\n  <ion-label>Current Password</ion-label>\n  <ion-input type=\"text\" ></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>New Password</ion-label>\n  <ion-textarea type=\"text\"></ion-textarea>\n</ion-item>\n<ion-item>\n  <ion-label>Confirm New Password</ion-label>\n  <ion-input type=\"text\" ></ion-input>\n</ion-item>\n<div class=\"btn_cover ion-text-center\">\n  <button  class=\"ion-margin ion-align-center btn login_btn\" >Change Password</button>\n  \n </div>\n\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/menu/cpassword/cpassword-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/menu/cpassword/cpassword-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: CpasswordPageRoutingModule */

  /***/
  function srcAppPagesMenuCpasswordCpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CpasswordPageRoutingModule", function () {
      return CpasswordPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cpassword.page */
    "./src/app/pages/menu/cpassword/cpassword.page.ts");

    var routes = [{
      path: '',
      component: _cpassword_page__WEBPACK_IMPORTED_MODULE_3__["CpasswordPage"]
    }];

    var CpasswordPageRoutingModule = function CpasswordPageRoutingModule() {
      _classCallCheck(this, CpasswordPageRoutingModule);
    };

    CpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/cpassword/cpassword.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/menu/cpassword/cpassword.module.ts ***!
    \**********************************************************/

  /*! exports provided: CpasswordPageModule */

  /***/
  function srcAppPagesMenuCpasswordCpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CpasswordPageModule", function () {
      return CpasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cpassword-routing.module */
    "./src/app/pages/menu/cpassword/cpassword-routing.module.ts");
    /* harmony import */


    var _cpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cpassword.page */
    "./src/app/pages/menu/cpassword/cpassword.page.ts");

    var CpasswordPageModule = function CpasswordPageModule() {
      _classCallCheck(this, CpasswordPageModule);
    };

    CpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["CpasswordPageRoutingModule"]],
      declarations: [_cpassword_page__WEBPACK_IMPORTED_MODULE_6__["CpasswordPage"]]
    })], CpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/cpassword/cpassword.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/menu/cpassword/cpassword.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuCpasswordCpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  margin: auto;\n}\n\n.p_header {\n  padding: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9jcGFzc3dvcmQvRDpcXGRldnJpc2luZy9zcmNcXGFwcFxccGFnZXNcXG1lbnVcXGNwYXNzd29yZFxcY3Bhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9jcGFzc3dvcmQvY3Bhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvY3Bhc3N3b3JkL2NwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wX2hlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA1NXB4O1xyXG59IiwiLmF2YXRhciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnBfaGVhZGVyIHtcbiAgcGFkZGluZzogNTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/menu/cpassword/cpassword.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/menu/cpassword/cpassword.page.ts ***!
    \********************************************************/

  /*! exports provided: CpasswordPage */

  /***/
  function srcAppPagesMenuCpasswordCpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CpasswordPage", function () {
      return CpasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CpasswordPage = /*#__PURE__*/function () {
      function CpasswordPage() {
        _classCallCheck(this, CpasswordPage);
      }

      _createClass(CpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CpasswordPage;
    }();

    CpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/cpassword/cpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cpassword.page.scss */
      "./src/app/pages/menu/cpassword/cpassword.page.scss"))["default"]]
    })], CpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-cpassword-cpassword-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-account-create-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCreateAccountCreateAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>create_account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/create-account/create-account-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/create-account/create-account-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateAccountPageRoutingModule */

  /***/
  function srcAppPagesCreateAccountCreateAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountPageRoutingModule", function () {
      return CreateAccountPageRoutingModule;
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


    var _create_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-account.page */
    "./src/app/pages/create-account/create-account.page.ts");

    var routes = [{
      path: '',
      component: _create_account_page__WEBPACK_IMPORTED_MODULE_3__["CreateAccountPage"]
    }];

    var CreateAccountPageRoutingModule = function CreateAccountPageRoutingModule() {
      _classCallCheck(this, CreateAccountPageRoutingModule);
    };

    CreateAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CreateAccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/create-account/create-account.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/create-account/create-account.module.ts ***!
    \***************************************************************/

  /*! exports provided: CreateAccountPageModule */

  /***/
  function srcAppPagesCreateAccountCreateAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function () {
      return CreateAccountPageModule;
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


    var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-account-routing.module */
    "./src/app/pages/create-account/create-account-routing.module.ts");
    /* harmony import */


    var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-account.page */
    "./src/app/pages/create-account/create-account.page.ts");

    var CreateAccountPageModule = function CreateAccountPageModule() {
      _classCallCheck(this, CreateAccountPageModule);
    };

    CreateAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateAccountPageRoutingModule"]],
      declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_6__["CreateAccountPage"]]
    })], CreateAccountPageModule);
    /***/
  },

  /***/
  "./src/app/pages/create-account/create-account.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/create-account/create-account.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCreateAccountCreateAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/create-account/create-account.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/create-account/create-account.page.ts ***!
    \*************************************************************/

  /*! exports provided: CreateAccountPage */

  /***/
  function srcAppPagesCreateAccountCreateAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountPage", function () {
      return CreateAccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CreateAccountPage = /*#__PURE__*/function () {
      function CreateAccountPage() {
        _classCallCheck(this, CreateAccountPage);
      }

      _createClass(CreateAccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreateAccountPage;
    }();

    CreateAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-account/create-account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-account.page.scss */
      "./src/app/pages/create-account/create-account.page.scss"))["default"]]
    })], CreateAccountPage);
    /***/
  }
}]);
//# sourceMappingURL=create-account-create-account-module-es5.js.map
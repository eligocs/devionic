function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-tandc-tandc-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/tandc/tandc.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/tandc/tandc.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuTandcTandcPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tandc</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/menu/tandc/tandc-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/menu/tandc/tandc-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: TandcPageRoutingModule */

  /***/
  function srcAppPagesMenuTandcTandcRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TandcPageRoutingModule", function () {
      return TandcPageRoutingModule;
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


    var _tandc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tandc.page */
    "./src/app/pages/menu/tandc/tandc.page.ts");

    var routes = [{
      path: '',
      component: _tandc_page__WEBPACK_IMPORTED_MODULE_3__["TandcPage"]
    }];

    var TandcPageRoutingModule = function TandcPageRoutingModule() {
      _classCallCheck(this, TandcPageRoutingModule);
    };

    TandcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TandcPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/tandc/tandc.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/menu/tandc/tandc.module.ts ***!
    \**************************************************/

  /*! exports provided: TandcPageModule */

  /***/
  function srcAppPagesMenuTandcTandcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TandcPageModule", function () {
      return TandcPageModule;
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


    var _tandc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tandc-routing.module */
    "./src/app/pages/menu/tandc/tandc-routing.module.ts");
    /* harmony import */


    var _tandc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tandc.page */
    "./src/app/pages/menu/tandc/tandc.page.ts");

    var TandcPageModule = function TandcPageModule() {
      _classCallCheck(this, TandcPageModule);
    };

    TandcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tandc_routing_module__WEBPACK_IMPORTED_MODULE_5__["TandcPageRoutingModule"]],
      declarations: [_tandc_page__WEBPACK_IMPORTED_MODULE_6__["TandcPage"]]
    })], TandcPageModule);
    /***/
  },

  /***/
  "./src/app/pages/menu/tandc/tandc.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/menu/tandc/tandc.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuTandcTandcPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvdGFuZGMvdGFuZGMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/menu/tandc/tandc.page.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/menu/tandc/tandc.page.ts ***!
    \************************************************/

  /*! exports provided: TandcPage */

  /***/
  function srcAppPagesMenuTandcTandcPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TandcPage", function () {
      return TandcPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TandcPage = /*#__PURE__*/function () {
      function TandcPage() {
        _classCallCheck(this, TandcPage);
      }

      _createClass(TandcPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TandcPage;
    }();

    TandcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tandc',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tandc.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/tandc/tandc.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tandc.page.scss */
      "./src/app/pages/menu/tandc/tandc.page.scss"))["default"]]
    })], TandcPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-tandc-tandc-module-es5.js.map
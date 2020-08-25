function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bottom-nav-bottom-nav-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bottom-nav/bottom-nav.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bottom-nav/bottom-nav.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBottomNavBottomNavPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\" ion-justify-content-center ion-align-items-center\"   >\n  <div>\n    <ion-tabs>\n\n      <ion-tab-bar slot=\"bottom\">\n     \n    <ul class=\"nav-mobile\">\n      <span class=\"menu-toggle\">\n      <ion-tab-button tab=\"home\">\n        <li><img src=\"../../assets/icon/home2.svg\">\n        <p>Home</p></li> \n      </ion-tab-button>\n      <ion-tab-button tab=\"create-account\">\n        <li><img src=\"../../assets/icon/account.svg\">\n          <p>New Account</p></li>\n      </ion-tab-button>\n        <ion-tab-button>\n        <li class=\"dashboard-logo\"><img src=\"../../assets/icon/logo.png\"></li> \n      </ion-tab-button> \n      <ion-tab-button tab=\"cards\">\n        <li><img src=\"../../assets/icon/card.png\">\n          <p>Card</p>\n        </li>  \n      </ion-tab-button>\n      </span>        \n      <ion-tab-button>\n        <li class=\"menu-container\">\n        <ion-menu-button></ion-menu-button>\n        </li>\n    </ion-tab-button>\n    </ul>\n  </ion-tab-bar>\n    \n</ion-tabs>\n  </div>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-col-md ion-align-items-left\">\n        <h1>Left</h1>\n      </ion-col>\n      <ion-col class=\"ion-col-md ion-align-items-right\">\n        <h2>Hello</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/bottom-nav/bottom-nav-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/bottom-nav/bottom-nav-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: BottomNavPageRoutingModule */

  /***/
  function srcAppPagesBottomNavBottomNavRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomNavPageRoutingModule", function () {
      return BottomNavPageRoutingModule;
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


    var _bottom_nav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bottom-nav.page */
    "./src/app/pages/bottom-nav/bottom-nav.page.ts");

    var routes = [{
      path: '',
      component: _bottom_nav_page__WEBPACK_IMPORTED_MODULE_3__["BottomNavPage"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'create-account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | create-account-create-account-module */
          "create-account-create-account-module").then(__webpack_require__.bind(null,
          /*! ../create-account/create-account.module */
          "./src/app/pages/create-account/create-account.module.ts")).then(function (m) {
            return m.CreateAccountPageModule;
          });
        }
      }, {
        path: 'cards',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cards-cards-module */
          "cards-cards-module").then(__webpack_require__.bind(null,
          /*! ../cards/cards.module */
          "./src/app/pages/cards/cards.module.ts")).then(function (m) {
            return m.CardsPageModule;
          });
        }
      }, // Routes For Menu Bar
      {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-profile-profile-module */
          "menu-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../menu/profile/profile.module */
          "./src/app/pages/menu/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'cpassword',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-cpassword-cpassword-module */
          "menu-cpassword-cpassword-module").then(__webpack_require__.bind(null,
          /*! ../menu/cpassword/cpassword.module */
          "./src/app/pages/menu/cpassword/cpassword.module.ts")).then(function (m) {
            return m.CpasswordPageModule;
          });
        }
      }, {
        path: 'loan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-loan-loan-module */
          "menu-loan-loan-module").then(__webpack_require__.bind(null,
          /*! ../menu/loan/loan.module */
          "./src/app/pages/menu/loan/loan.module.ts")).then(function (m) {
            return m.LoanPageModule;
          });
        }
      }, {
        path: 'passbook',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-passbook-passbook-module */
          "menu-passbook-passbook-module").then(__webpack_require__.bind(null,
          /*! ../menu/passbook/passbook.module */
          "./src/app/pages/menu/passbook/passbook.module.ts")).then(function (m) {
            return m.PassbookPageModule;
          });
        }
      }, {
        path: 'security',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-security-security-module */
          "menu-security-security-module").then(__webpack_require__.bind(null,
          /*! ../menu/security/security.module */
          "./src/app/pages/menu/security/security.module.ts")).then(function (m) {
            return m.SecurityPageModule;
          });
        }
      }, {
        path: 'support',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-support-support-module */
          "menu-support-support-module").then(__webpack_require__.bind(null,
          /*! ../menu/support/support.module */
          "./src/app/pages/menu/support/support.module.ts")).then(function (m) {
            return m.SupportPageModule;
          });
        }
      }, {
        path: 'tandc',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | menu-tandc-tandc-module */
          "menu-tandc-tandc-module").then(__webpack_require__.bind(null,
          /*! ../menu/tandc/tandc.module */
          "./src/app/pages/menu/tandc/tandc.module.ts")).then(function (m) {
            return m.TandcPageModule;
          });
        }
      }, // End Routes For Menu Bar
      {
        path: 'saving',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-saving-saving-module */
          "saving-saving-module").then(__webpack_require__.bind(null,
          /*! ../home/saving/saving.module */
          "./src/app/pages/home/saving/saving.module.ts")).then(function (m) {
            return m.SavingPageModule;
          });
        }
      }, {
        path: 'dd',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-dd-dd-module */
          "dd-dd-module").then(__webpack_require__.bind(null,
          /*! ../home/dd/dd.module */
          "./src/app/pages/home/dd/dd.module.ts")).then(function (m) {
            return m.DdPageModule;
          });
        }
      }, {
        path: 'rd',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-rd-rd-module */
          "rd-rd-module").then(__webpack_require__.bind(null,
          /*! ../home/rd/rd.module */
          "./src/app/pages/home/rd/rd.module.ts")).then(function (m) {
            return m.RdPageModule;
          });
        }
      }, {
        path: 'fd',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-fd-fd-module */
          "fd-fd-module").then(__webpack_require__.bind(null,
          /*! ../home/fd/fd.module */
          "./src/app/pages/home/fd/fd.module.ts")).then(function (m) {
            return m.FdPageModule;
          });
        }
      }, {
        path: 'ol',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-ol-ol-module */
          "ol-ol-module").then(__webpack_require__.bind(null,
          /*! ../home/ol/ol.module */
          "./src/app/pages/home/ol/ol.module.ts")).then(function (m) {
            return m.OlPageModule;
          });
        }
      }, {
        path: 'dd/ddview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-dd-ddview-ddview-module */
          "ddview-ddview-module").then(__webpack_require__.bind(null,
          /*! ../home/dd/ddview/ddview.module */
          "./src/app/pages/home/dd/ddview/ddview.module.ts")).then(function (m) {
            return m.DdviewPageModule;
          });
        }
      }, {
        path: 'fd/fdview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-fd-fdview-fdview-module */
          "fdview-fdview-module").then(__webpack_require__.bind(null,
          /*! ../home/fd/fdview/fdview.module */
          "./src/app/pages/home/fd/fdview/fdview.module.ts")).then(function (m) {
            return m.FdviewPageModule;
          });
        }
      }, {
        path: 'rd/rdview',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-rd-rdview-rdview-module */
          "rdview-rdview-module").then(__webpack_require__.bind(null,
          /*! ../home/rd/rdview/rdview.module */
          "./src/app/pages/home/rd/rdview/rdview.module.ts")).then(function (m) {
            return m.RdviewPageModule;
          });
        }
      }, {
        path: '/',
        redirectTo: 'home'
      }]
    }, {
      path: '/',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var BottomNavPageRoutingModule = function BottomNavPageRoutingModule() {
      _classCallCheck(this, BottomNavPageRoutingModule);
    };

    BottomNavPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BottomNavPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bottom-nav/bottom-nav.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/bottom-nav/bottom-nav.module.ts ***!
    \*******************************************************/

  /*! exports provided: BottomNavPageModule */

  /***/
  function srcAppPagesBottomNavBottomNavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomNavPageModule", function () {
      return BottomNavPageModule;
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


    var _bottom_nav_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bottom-nav-routing.module */
    "./src/app/pages/bottom-nav/bottom-nav-routing.module.ts");
    /* harmony import */


    var _bottom_nav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bottom-nav.page */
    "./src/app/pages/bottom-nav/bottom-nav.page.ts");

    var BottomNavPageModule = function BottomNavPageModule() {
      _classCallCheck(this, BottomNavPageModule);
    };

    BottomNavPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bottom_nav_routing_module__WEBPACK_IMPORTED_MODULE_5__["BottomNavPageRoutingModule"]],
      declarations: [_bottom_nav_page__WEBPACK_IMPORTED_MODULE_6__["BottomNavPage"]]
    })], BottomNavPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bottom-nav/bottom-nav.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/bottom-nav/bottom-nav.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBottomNavBottomNavPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdHRvbS1uYXYvYm90dG9tLW5hdi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/bottom-nav/bottom-nav.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/bottom-nav/bottom-nav.page.ts ***!
    \*****************************************************/

  /*! exports provided: BottomNavPage */

  /***/
  function srcAppPagesBottomNavBottomNavPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomNavPage", function () {
      return BottomNavPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BottomNavPage = /*#__PURE__*/function () {
      function BottomNavPage() {
        _classCallCheck(this, BottomNavPage);
      }

      _createClass(BottomNavPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BottomNavPage;
    }();

    BottomNavPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bottom-nav',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bottom-nav.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bottom-nav/bottom-nav.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bottom-nav.page.scss */
      "./src/app/pages/bottom-nav/bottom-nav.page.scss"))["default"]]
    })], BottomNavPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bottom-nav-bottom-nav-module-es5.js.map
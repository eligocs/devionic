function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header class=\"avatar\">\n            <ion-avatar>\n            <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n          </ion-avatar>\n          Rakhi Sharma</ion-list-header>\n\n          <!-- <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" class=\"ion-text-right\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\" class=\"md hydrated\">\n            <ion-item  (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\" class=\"item md item-lines-none in-list ion-activatable ion-focusable hydrated item-label\">\n                       <img class=\"sidebar-icons\"[src]=\"p.iconsrc\"/>\n               <ion-label ngcontent-mcb-c133=\"\" class=\"sc-ion-label-md-h sc-ion-label-md-s md hydrated last-child-border-none\">{{ p.title }}</ion-label>\n            </ion-item>\n         </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-bottom-nav-bottom-nav-module */
        "pages-bottom-nav-bottom-nav-module").then(__webpack_require__.bind(null,
        /*! ./pages/bottom-nav/bottom-nav.module */
        "./src/app/pages/bottom-nav/bottom-nav.module.ts")).then(function (m) {
          return m.BottomNavPageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'bottom-nav',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-bottom-nav-bottom-nav-module */
        "pages-bottom-nav-bottom-nav-module").then(__webpack_require__.bind(null,
        /*! ./pages/bottom-nav/bottom-nav.module */
        "./src/app/pages/bottom-nav/bottom-nav.module.ts")).then(function (m) {
          return m.BottomNavPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-menu-menu-module */
        "pages-menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./pages/menu/menu.module */
        "./src/app/pages/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.main_container {\n  background: url(/assets/imgs/login_back.jpg);\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n}\n.avatar, .p_header {\n  height: 122px;\n  background: url(/assets/imgs/login_back.jpg);\n  background-size: cover;\n}\n.boxes-two {\n  background-color: red;\n  height: 50vh;\n}\n.progress {\n  display: block;\n  margin: 0 auto;\n  overflow: hidden;\n  transform: rotate(-90deg) rotateX(180deg);\n}\n.progress circle {\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 1s ease;\n  stroke: #a02e2e;\n  stroke-width: 9px;\n}\n.progress .bar {\n  stroke: #385ca2;\n}\n.progressdiv {\n  position: relative;\n  right: -29px;\n  top: 27px;\n  width: 100px;\n}\n.progressdiv:after {\n  position: absolute;\n  top: 50%;\n  left: 6%;\n  font-size: 14px;\n  transform: translate(-50%, -50%);\n  content: attr(data-percent) \" %\";\n}\n.progressdiv svg.progress {\n  overflow: visible;\n  background: transparent;\n}\n.progress circle {\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 1s ease;\n  stroke: #5f7cb4;\n  stroke-width: 9px;\n  r: 29px;\n}\n.tabs {\n  width: 95%;\n  color: black;\n  overflow: hidden;\n  background: white !important;\n  margin-bottom: 23px;\n  margin: 10px;\n  border-radius: 5px;\n  margin-bottom: 33px;\n  border-radius: 5px;\n}\n.tab {\n  width: 95%;\n  color: #1D4695;\n  overflow: hidden;\n  margin-bottom: 24px !important;\n  margin: 10px;\n  margin-top: 10px;\n  box-shadow: 0px 0px 10px -6px #787878;\n}\n.tab-label {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n  font-weight: bold;\n  cursor: pointer;\n  /* Icon */\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  transition: all 0.35s;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: black;\n  background: white;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  font-size: 0.75em;\n  background: black;\n  cursor: pointer;\n}\n.tab-close:hover {\n  background: #e6e6e6;\n}\ninput:checked + .tab-label {\n  background: white;\n}\ninput:checked + .tab-label::after {\n  transform: rotate(90deg);\n}\ninput:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n}\n.tabs input {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\np {\n  margin: 0px;\n  padding-bottom: 5px;\n}\nh2 {\n  margin-top: 5px;\n}\n.boxes-two {\n  color: green;\n  width: 300px;\n  height: 100vh;\n  background: green;\n  background: red;\n}\nh1 {\n  color: White;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 26px;\n  font-weight: 400;\n  text-align: center;\n}\n.header-sub {\n  background: #1D4695;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: color-burn;\n  background-image: url(/assets/imgs/background.png);\n  border-radius: 0 0 240px 50%/40px;\n  height: 357px;\n  margin-bottom: -84px;\n}\n.header-sub-inner {\n  background: #1D4695;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: color-burn;\n  background-image: url(/assets/imgs/background.png);\n  border-radius: 0 0 240px 50%/40px;\n  height: 357px;\n  height: 250px;\n  margin-bottom: -70px;\n}\n.header-text {\n  margin-top: 35px;\n}\n.login_card {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  margin-top: -70px;\n  padding-top: 10px;\n  height: 273px;\n  overflow: visible;\n}\n.login_title {\n  color: White;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 26px;\n  font-weight: 400;\n  text-align: center;\n  color: #801517;\n  font-weight: 600;\n  font-family: inherit;\n  margin-bottom: 10px;\n}\n.item-input {\n  box-shadow: 0px 0px 9px 0px #00000012;\n  margin-bottom: 13px;\n  width: 90%;\n  margin: 0 auto;\n  margin-bottom: 23px;\n  border-radius: 3px;\n  border: none;\n  color: #1D4695;\n}\n.login_btn {\n  background-image: linear-gradient(to right, #71aadc, #1c408f);\n  border-radius: 33px;\n  width: 208px;\n  height: 50px;\n  color: white;\n}\n.login_btn_mpin {\n  border-radius: 33px;\n  width: 208px;\n  height: 50px;\n  color: #1D418C;\n  font-weight: 600;\n  border: 1px solid #1D418C;\n}\n.bottom_part {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  margin-top: 40px !important;\n  margin: 0 auto;\n}\n.form-group.remember {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  width: 144px;\n}\ninput.form-control {\n  width: 20px;\n}\n.bottom_right {\n  text-align: right;\n}\n.deposit-section {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 10px;\n  background: #fff;\n}\np.brown-text {\n  color: #801517;\n  font-size: 12px;\n  font-weight: 600;\n}\np.blue-text {\n  color: #1D4695;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 10px;\n}\np.in2-blue-text {\n  color: #1D4695;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: center;\n}\nh2.in2-blue-text {\n  color: #1D4695;\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: -10px;\n  text-align: center;\n}\n.deposit-section ion-col {\n  padding: 0px;\n  margin: 0px;\n}\n.deposit-section ion-row.ios.hydrated {\n  margin-bottom: 10px;\n}\n.deposit-section ion-row.md.hydrated {\n  margin-bottom: 10px;\n}\n.bells a {\n  background: url(/assets/icons//bell.svg);\n  width: 30px;\n  height: 30px;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n  float: left;\n}\n.wallet a {\n  background: url(/assets/icons//wallet.svg);\n  width: 40px;\n  height: 40px;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n  float: left;\n}\n.price-s2 span {\n  color: #fff;\n  font-size: 8px;\n}\n.price-s2 span p {\n  padding: 0px;\n}\nspan.price {\n  font-size: 30px;\n  font-weight: 600;\n}\n.price-s2 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  min-width: 120px;\n}\n.home-box {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n  text-align: center;\n}\n.house {\n  background: url(/assets/icons/house.svg);\n  width: 100%;\n  background-repeat: no-repeat;\n  height: 34px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  position: relative;\n}\n/* css menu */\n.my-custom-menu {\n  --width: 500px;\n}\n.white-text {\n  color: #fff;\n}\n.flex-center {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n}\n.ddamount h1 {\n  color: #801517;\n  font-size: 20px;\n  font-weight: 800;\n}\n.ddamount p {\n  color: #A7B4C8;\n}\n.interest-rate h1 {\n  color: #49C10E;\n  font-size: 20px;\n  font-weight: 800;\n}\n.interest-rate p {\n  color: #A7B4C8;\n}\n.installmentamount h1 {\n  color: #1D4695;\n  font-size: 20px;\n  font-weight: 800;\n}\n.home-box h1 {\n  font-family: \"Roboto\", sans-serif;\n}\n.home-box p {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n  font-size: 13px;\n}\n.installmentamount p {\n  color: #A7B4C8;\n}\n.pending-installment h1 {\n  color: #FF0000;\n  font-size: 20px;\n  font-weight: 800;\n}\n.pending-installment p {\n  color: #A7B4C8;\n}\n.house:before {\n  content: \"\";\n  height: 2px;\n  background: #a7b4c8;\n  width: 36%;\n  z-index: 0;\n  left: 14px;\n  position: absolute;\n}\n.house:after {\n  content: \"\";\n  height: 2px;\n  background: #a7b4c8;\n  width: 36%;\n  z-index: 0;\n  right: 14px;\n  position: absolute;\n}\n.interest-rate {\n  position: relative;\n}\n.interest-rate:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background: #a7b4c8;\n  height: 71%;\n  left: 0;\n  top: 10px;\n}\n.pending-installment:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  background: #a7b4c8;\n  height: 71%;\n  left: 0;\n  top: 16px;\n}\n.transaction-list {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.transaction-list h3.blue-text {\n  color: #1D4695;\n  font-size: 12px;\n  margin: 0px;\n}\n.transaction-list p.faded-text {\n  color: #A7B4C8;\n  font-size: 10px;\n}\n.transaction-list p.details-green-text {\n  color: #49C10E;\n  font-size: 10px;\n  text-align: right;\n}\np.fade-text-two span {\n  color: #1D4695;\n}\n.amount-details {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  border-left: 20px solid;\n  border-color: #71aadc;\n  background: -moz-linear-gradient(top, #71aadc 0%, #b7deed 0%, #1c408f 75%, #1c408f 100%);\n}\n.amount-details p {\n  padding: 0px;\n}\np.fade-text-one {\n  color: #A7B4C8;\n  font-size: 12px;\n  padding: 0px;\n}\np.fade-text-two {\n  color: #A7B4C8;\n  font-size: 11px;\n}\n.amount-blue {\n  color: #1D4695;\n  font-size: 25px;\n  font-weight: 700;\n}\np.blue-text-nm {\n  color: #1D4695;\n  font-size: 12px;\n}\n.acoounts-header {\n  background: #1D4695;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: color-burn;\n  background-image: url(/assets/imgs/background.png);\n  border-radius: 0 0 240px 50%/40px;\n  height: 357px;\n  border-radius: 0px;\n  padding: 10px;\n  height: 200px;\n}\n.acoounts-header h1 {\n  color: white;\n  font-size: 22px;\n  text-align: left;\n  padding-bottom: 12px;\n}\n.acoounts-header p {\n  color: #A7B4C8;\n  font-size: 14px;\n}\n.acoounts-header h2 {\n  color: white;\n  font-size: 20px;\n}\n.quick_action {\n  box-shadow: 0px 0px 9px -3px lightgrey;\n  border-radius: 17px;\n  width: 95%;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n  margin-bottom: 10px;\n}\n.quick_action:before {\n  content: \"\";\n  -webkit-clip-path: polygon(0 0, 38% 9%, 39% 90%, 0% 100%);\n  clip-path: polygon(0 0, 38% 9%, 39% 90%, 0% 100%);\n  width: 24px;\n  height: 100%;\n  position: absolute;\n  background: #1a3b95;\n  top: 0;\n  left: 0;\n}\n.range-bar {\n  text-align: center;\n}\n.range-bar p {\n  font-size: 12px;\n  margin: 0;\n  padding: 0px;\n}\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcZGV2cmlzaW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QURFSjtBQ0FBO0VBQ0ksYUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QURHSjtBQ0RBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FESUo7QUNERTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFFUSx5Q0FBQTtBRElaO0FDREU7RUFDRSxvQkFBQTtFQUVBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FESUo7QUNERTtFQUNFLGVBQUE7QURJSjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QURJSjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFFQSxnQ0FBQTtFQUNBLGdDQUFBO0FESUo7QUNERTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QURJSjtBQ0RFO0VBQ0Usb0JBQUE7RUFFQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QURJSjtBQ0RFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FESUo7QUNERTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHFDQUFBO0FESUo7QUNERTtFQUdFLGFBQUE7RUFHUSw4QkFBQTtFQUNSLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FESUo7QUNERTtFQUNFLFlBQUE7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QUNBLGVBQUE7QURJSjtBQ0RFO0VBRVUsc0NBQUE7RUFDUixtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRElKO0FDREU7RUFDRSxXQUFBO0VBQ0EseURBQUE7RUFDUSxpREFBQTtFQUNSLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FESUo7QUNERTtFQUNFLGtCQUFBO0FESUo7QUNERTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRElKO0FDRkUsb0NBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFpbl9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWdzL2xvZ2luX2JhY2suanBnKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYXZhdGFyLCAucF9oZWFkZXIge1xuICBoZWlnaHQ6IDEyMnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWdzL2xvZ2luX2JhY2suanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJveGVzLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSByb3RhdGVYKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgcm90YXRlWCgxODBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MgY2lyY2xlIHtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMXMgZWFzZTtcbiAgc3Ryb2tlOiAjYTAyZTJlO1xuICBzdHJva2Utd2lkdGg6IDlweDtcbn1cblxuLnByb2dyZXNzIC5iYXIge1xuICBzdHJva2U6ICMzODVjYTI7XG59XG5cbi5wcm9ncmVzc2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0yOXB4O1xuICB0b3A6IDI3cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnByb2dyZXNzZGl2OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNiU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wZXJjZW50KSBcIiAlXCI7XG59XG5cbi5wcm9ncmVzc2RpdiBzdmcucHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wcm9ncmVzcyBjaXJjbGUge1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlO1xuICBzdHJva2U6ICM1ZjdjYjQ7XG4gIHN0cm9rZS13aWR0aDogOXB4O1xuICByOiAyOXB4O1xufVxuXG4udGFicyB7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiAjMUQ0Njk1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggLTlweCAjNzg3ODc4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTZweCAjNzg3ODc4O1xufVxuXG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogSWNvbiAqL1xufVxuXG4udGFiLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG59XG5cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xufVxuXG4udGFiLWNsb3NlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYi1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAudGFiLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAudGFiLWxhYmVsOjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbmlucHV0OmNoZWNrZWQgfiAudGFiLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4udGFicyBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5ib3hlcy10d28ge1xuICBjb2xvcjogZ3JlZW47XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuaDEge1xuICBjb2xvcjogV2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItc3ViIHtcbiAgYmFja2dyb3VuZDogIzFENDY5NTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI0MHB4IDUwJS80MHB4O1xuICBoZWlnaHQ6IDM1N3B4O1xuICBtYXJnaW4tYm90dG9tOiAtODRweDtcbn1cblxuLmhlYWRlci1zdWItaW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjMUQ0Njk1O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjQwcHggNTAlLzQwcHg7XG4gIGhlaWdodDogMzU3cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1ib3R0b206IC03MHB4O1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4ubG9naW5fY2FyZCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDI3M3B4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmxvZ2luX3RpdGxlIHtcbiAgY29sb3I6IFdoaXRlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgwMTUxNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLWlucHV0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggIzAwMDAwMDEyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggIzAwMDAwMDEyO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMUQ0Njk1O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzcxYWFkYyksIHRvKCMxYzQwOGYpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzFhYWRjLCAjMWM0MDhmKTtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgd2lkdGg6IDIwOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luX2J0bl9tcGluIHtcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcbiAgd2lkdGg6IDIwOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjMUQ0MThDO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMUQ0MThDO1xufVxuXG4uYm90dG9tX3BhcnQge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm0tZ3JvdXAucmVtZW1iZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDkwJTtcbiAgd2lkdGg6IDE0NHB4O1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmJvdHRvbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGVwb3NpdC1zZWN0aW9uIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtM3B4IGxpZ2h0Z3JleTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5wLmJyb3duLXRleHQge1xuICBjb2xvcjogIzgwMTUxNztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wLmJsdWUtdGV4dCB7XG4gIGNvbG9yOiAjMUQ0Njk1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnAuaW4yLWJsdWUtdGV4dCB7XG4gIGNvbG9yOiAjMUQ0Njk1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDIuaW4yLWJsdWUtdGV4dCB7XG4gIGNvbG9yOiAjMUQ0Njk1O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXBvc2l0LXNlY3Rpb24gaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5kZXBvc2l0LXNlY3Rpb24gaW9uLXJvdy5pb3MuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZGVwb3NpdC1zZWN0aW9uIGlvbi1yb3cubWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYmVsbHMgYSB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zLy9iZWxsLnN2Zyk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLndhbGxldCBhIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvL3dhbGxldC5zdmcpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcmljZS1zMiBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4ucHJpY2UtczIgc3BhbiBwIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5zcGFuLnByaWNlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJpY2UtczIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLmhvbWUtYm94IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtM3B4IGxpZ2h0Z3JleTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob3VzZSB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL2hvdXNlLnN2Zyk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogY3NzIG1lbnUgKi9cbi5teS1jdXN0b20tbWVudSB7XG4gIC0td2lkdGg6IDUwMHB4O1xufVxuXG4ud2hpdGUtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4uZGRhbW91bnQgaDEge1xuICBjb2xvcjogIzgwMTUxNztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZGRhbW91bnQgcCB7XG4gIGNvbG9yOiAjQTdCNEM4O1xufVxuXG4uaW50ZXJlc3QtcmF0ZSBoMSB7XG4gIGNvbG9yOiAjNDlDMTBFO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5pbnRlcmVzdC1yYXRlIHAge1xuICBjb2xvcjogI0E3QjRDODtcbn1cblxuLmluc3RhbGxtZW50YW1vdW50IGgxIHtcbiAgY29sb3I6ICMxRDQ2OTU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmhvbWUtYm94IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ob21lLWJveCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmluc3RhbGxtZW50YW1vdW50IHAge1xuICBjb2xvcjogI0E3QjRDODtcbn1cblxuLnBlbmRpbmctaW5zdGFsbG1lbnQgaDEge1xuICBjb2xvcjogI0ZGMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucGVuZGluZy1pbnN0YWxsbWVudCBwIHtcbiAgY29sb3I6ICNBN0I0Qzg7XG59XG5cbi5ob3VzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2E3YjRjODtcbiAgd2lkdGg6IDM2JTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaG91c2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2E3YjRjODtcbiAgd2lkdGg6IDM2JTtcbiAgei1pbmRleDogMDtcbiAgcmlnaHQ6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmludGVyZXN0LXJhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnRlcmVzdC1yYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogI2E3YjRjODtcbiAgaGVpZ2h0OiA3MSU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbn1cblxuLnBlbmRpbmctaW5zdGFsbG1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjYTdiNGM4O1xuICBoZWlnaHQ6IDcxJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxNnB4O1xufVxuXG4udHJhbnNhY3Rpb24tbGlzdCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRyYW5zYWN0aW9uLWxpc3QgaDMuYmx1ZS10ZXh0IHtcbiAgY29sb3I6ICMxRDQ2OTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1saXN0IHAuZmFkZWQtdGV4dCB7XG4gIGNvbG9yOiAjQTdCNEM4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50cmFuc2FjdGlvbi1saXN0IHAuZGV0YWlscy1ncmVlbi10ZXh0IHtcbiAgY29sb3I6ICM0OUMxMEU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnAuZmFkZS10ZXh0LXR3byBzcGFuIHtcbiAgY29sb3I6ICMxRDQ2OTU7XG59XG5cbi5hbW91bnQtZGV0YWlscyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzcxYWFkYztcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNzFhYWRjIDAlLCAjYjdkZWVkIDAlLCAjMWM0MDhmIDc1JSwgIzFjNDA4ZiAxMDAlKTtcbn1cblxuLmFtb3VudC1kZXRhaWxzIHAge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAuZmFkZS10ZXh0LW9uZSB7XG4gIGNvbG9yOiAjQTdCNEM4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxucC5mYWRlLXRleHQtdHdvIHtcbiAgY29sb3I6ICNBN0I0Qzg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmFtb3VudC1ibHVlIHtcbiAgY29sb3I6ICMxRDQ2OTU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxucC5ibHVlLXRleHQtbm0ge1xuICBjb2xvcjogIzFENDY5NTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWNvb3VudHMtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzFENDY5NTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2JhY2tncm91bmQucG5nKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI0MHB4IDUwJS80MHB4O1xuICBoZWlnaHQ6IDM1N3B4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5hY29vdW50cy1oZWFkZXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5hY29vdW50cy1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjQTdCNEM4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hY29vdW50cy1oZWFkZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnF1aWNrX2FjdGlvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5xdWlja19hY3Rpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAzOCUgOSUsIDM5JSA5MCUsIDAlIDEwMCUpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAzOCUgOSUsIDM5JSA5MCUsIDAlIDEwMCUpO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMxYTNiOTU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnJhbmdlLWJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJhbmdlLWJhciBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyIsIi5tYWluX2NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZ3MvbG9naW5fYmFjay5qcGcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5hdmF0YXIsIC5wX2hlYWRlcntcclxuICAgIGhlaWdodDogMTIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWdzL2xvZ2luX2JhY2suanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJveGVzLXR3byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSByb3RhdGVYKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgcm90YXRlWCgxODBkZWcpO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3MgY2lyY2xlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMXMgZWFzZTtcclxuICAgIHN0cm9rZTogI2EwMmUyZTtcclxuICAgIHN0cm9rZS13aWR0aDogOXB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3MgLmJhciB7XHJcbiAgICBzdHJva2U6ICMzODVjYTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc2RpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogLTI5cHg7XHJcbiAgICB0b3A6IDI3cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzc2RpdjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDYlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXBlcmNlbnQpIFwiICVcIjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzZGl2IHN2Zy5wcm9ncmVzcyB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3MgY2lyY2xlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMXMgZWFzZTtcclxuICAgIHN0cm9rZTogIzVmN2NiNDtcclxuICAgIHN0cm9rZS13aWR0aDogOXB4O1xyXG4gICAgcjogMjlweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYnMge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGNvbG9yOiAjMUQ0Njk1O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCAtOXB4ICM3ODc4Nzg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTZweCAjNzg3ODc4O1xyXG4gIH1cclxuICBcclxuICAudGFiLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIEljb24gKi9cclxuICB9XHJcbiAgXHJcbiAgLnRhYi1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDI3NkZcIjtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG4gIH1cclxuICBcclxuICAudGFiLWNsb3NlIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItY2xvc2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC50YWItbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAudGFiLWxhYmVsOjphZnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkIH4gLnRhYi1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuICBcclxuICAudGFicyBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3hlcy10d28ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1zdWIge1xyXG4gICAgYmFja2dyb3VuZDogIzFENDY5NTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9iYWNrZ3JvdW5kLnBuZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjQwcHggNTAlLzQwcHg7XHJcbiAgICBoZWlnaHQ6IDM1N3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTg0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItc3ViLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxRDQ2OTU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDI0MHB4IDUwJS80MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTdweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbl9jYXJkIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDI3M3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbl90aXRsZSB7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODAxNTE3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0taW5wdXQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggIzAwMDAwMDEyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggIzAwMDAwMDEyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzFENDY5NTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luX2J0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjNzFhYWRjKSwgdG8oIzFjNDA4ZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzFhYWRjLCAjMWM0MDhmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgICB3aWR0aDogMjA4cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbl9idG5fbXBpbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6ICMxRDQxOEM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFENDE4QztcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbV9wYXJ0IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwLnJlbWVtYmVyIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgd2lkdGg6IDE0NHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3R0b21fcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXBvc2l0LXNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtM3B4IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBwLmJyb3duLXRleHQge1xyXG4gICAgY29sb3I6ICM4MDE1MTc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICBwLmJsdWUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzFENDY5NTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBwLmluMi1ibHVlLXRleHQge1xyXG4gICAgY29sb3I6ICMxRDQ2OTU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBoMi5pbjItYmx1ZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMUQ0Njk1O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZGVwb3NpdC1zZWN0aW9uIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXBvc2l0LXNlY3Rpb24gaW9uLXJvdy5pb3MuaHlkcmF0ZWQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlcG9zaXQtc2VjdGlvbiBpb24tcm93Lm1kLmh5ZHJhdGVkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZWxscyBhIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zLy9iZWxsLnN2Zyk7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAud2FsbGV0IGEge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvL3dhbGxldC5zdmcpO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXMyIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXMyIHNwYW4gcCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlLXMyIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtYm94IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3VzZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy9ob3VzZS5zdmcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogY3NzIG1lbnUgKi9cclxuICAubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53aGl0ZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRkYW1vdW50IGgxIHtcclxuICAgIGNvbG9yOiAjODAxNTE3O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLmRkYW1vdW50IHAge1xyXG4gICAgY29sb3I6ICNBN0I0Qzg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRlcmVzdC1yYXRlIGgxIHtcclxuICAgIGNvbG9yOiAjNDlDMTBFO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLmludGVyZXN0LXJhdGUgcCB7XHJcbiAgICBjb2xvcjogI0E3QjRDODtcclxuICB9XHJcbiAgXHJcbiAgLmluc3RhbGxtZW50YW1vdW50IGgxIHtcclxuICAgIGNvbG9yOiAjMUQ0Njk1O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtYm94IGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWUtYm94IHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmluc3RhbGxtZW50YW1vdW50IHAge1xyXG4gICAgY29sb3I6ICNBN0I0Qzg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZW5kaW5nLWluc3RhbGxtZW50IGgxIHtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBlbmRpbmctaW5zdGFsbG1lbnQgcCB7XHJcbiAgICBjb2xvcjogI0E3QjRDODtcclxuICB9XHJcbiAgXHJcbiAgLmhvdXNlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdiNGM4O1xyXG4gICAgd2lkdGg6IDM2JTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAuaG91c2U6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2E3YjRjODtcclxuICAgIHdpZHRoOiAzNiU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRlcmVzdC1yYXRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmludGVyZXN0LXJhdGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2E3YjRjODtcclxuICAgIGhlaWdodDogNzElO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBlbmRpbmctaW5zdGFsbG1lbnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2E3YjRjODtcclxuICAgIGhlaWdodDogNzElO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zYWN0aW9uLWxpc3Qge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDlweCAtM3B4IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudHJhbnNhY3Rpb24tbGlzdCBoMy5ibHVlLXRleHQge1xyXG4gICAgY29sb3I6ICMxRDQ2OTU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zYWN0aW9uLWxpc3QgcC5mYWRlZC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQTdCNEM4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudHJhbnNhY3Rpb24tbGlzdCBwLmRldGFpbHMtZ3JlZW4tdGV4dCB7XHJcbiAgICBjb2xvcjogIzQ5QzEwRTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBwLmZhZGUtdGV4dC10d28gc3BhbiB7XHJcbiAgICBjb2xvcjogIzFENDY5NTtcclxuICB9XHJcbiAgXHJcbiAgLmFtb3VudC1kZXRhaWxzIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA5cHggLTNweCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzcxYWFkYztcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzcxYWFkYyAwJSwgI2I3ZGVlZCAwJSwgIzFjNDA4ZiA3NSUsICMxYzQwOGYgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbW91bnQtZGV0YWlscyBwIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgcC5mYWRlLXRleHQtb25lIHtcclxuICAgIGNvbG9yOiAjQTdCNEM4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuICBwLmZhZGUtdGV4dC10d28ge1xyXG4gICAgY29sb3I6ICNBN0I0Qzg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbW91bnQtYmx1ZSB7XHJcbiAgICBjb2xvcjogIzFENDY5NTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIHAuYmx1ZS10ZXh0LW5tIHtcclxuICAgIGNvbG9yOiAjMUQ0Njk1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuYWNvb3VudHMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxRDQ2OTU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5wbmcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDI0MHB4IDUwJS80MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWNvb3VudHMtaGVhZGVyIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjb291bnRzLWhlYWRlciBwIHtcclxuICAgIGNvbG9yOiAjQTdCNEM4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuYWNvb3VudHMtaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnF1aWNrX2FjdGlvbiB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOXB4IC0zcHggbGlnaHRncmV5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAtM3B4IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnF1aWNrX2FjdGlvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMzglIDklLCAzOSUgOTAlLCAwJSAxMDAlKTtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMzglIDklLCAzOSUgOTAlLCAwJSAxMDAlKTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzFhM2I5NTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYW5nZS1iYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmFuZ2UtYmFyIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAvKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/apihelper/apihelper */
    "./src/providers/apihelper/apihelper.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, storage, navCtrl, provider, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.router = router;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'My Profile',
          url: '/dashboard/profile',
          iconsrc: './assets/icon/profile.svg',
          icon: 'mail'
        }, {
          title: 'Change Password',
          url: '/dashboard/cpassword',
          iconsrc: './assets/icon/password.svg',
          icon: 'paper-plane'
        }, {
          title: 'Update Bank Details',
          url: '/dashboard/bank',
          iconsrc: './assets/icon/bank-details.svg',
          icon: 'heart'
        }, {
          title: 'Passbook',
          url: '/dashboard/passbook',
          iconsrc: './assets/icon/Passbook.svg',
          icon: 'archive'
        }, {
          title: 'My Loan',
          url: '/dashboard/loan',
          iconsrc: './assets/icon/loan.svg',
          icon: 'trash'
        }, {
          title: 'Terms & Conditions',
          url: '/dashboard/tandc',
          iconsrc: './assets/icon/TermsandCondition.svg',
          icon: 'warning'
        }, {
          title: 'Security Tips',
          url: '/dashboard/security',
          iconsrc: './assets/icon/security.svg',
          icon: 'warning'
        }, {
          title: 'Help & Support',
          url: '/dashboard/support',
          iconsrc: './assets/icon/support.svg',
          icon: 'warning'
        }];
        this.href = "";
        this.username = "";
        this.password = "";
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            // this.storage.remove('offline-user');
            _this.storage.get('offline-user').then(function (val) {
              console.log('USer Details is', val);

              if (val) {
                _this.provider.presentLoading();

                _this.provider.UserLogin(val.username, val.password).subscribe(function (data) {
                  _this.LoginReponse = data; // console.log(this.LoginReponse);
                  // set header values

                  console.log(_this.LoginReponse.token);

                  _this.provider.SetHeader(_this.LoginReponse.token, _this.LoginReponse.user_id);

                  _this.statusBar.styleDefault();

                  _this.splashScreen.hide();
                }, function (err) {
                  _this.provider.presentToastWithOptions('There are some technical issue please try again!');
                }); // this.navCtrl.navigateRoot('/login');

              } else {
                _this.navCtrl.navigateRoot('/login');
              }
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split('dashboard/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_6__["ApihelperProvider"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/apihelper/apihelper */
    "./src/providers/apihelper/apihelper.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
        useClass: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
      }, src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_6__["ApihelperProvider"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeStorage"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__["FileOpener"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/providers/apihelper/apihelper.ts":
  /*!**********************************************!*\
    !*** ./src/providers/apihelper/apihelper.ts ***!
    \**********************************************/

  /*! exports provided: ApihelperProvider */

  /***/
  function srcProvidersApihelperApihelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApihelperProvider", function () {
      return ApihelperProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /*
      Generated class for the ApihelperProvider provider.
    
      See https://angular.io/guide/dependency-injection for more info on providers
      and Angular DI.
    */


    var ApihelperProvider = /*#__PURE__*/function () {
      function ApihelperProvider(http, toastCtrl, loadingCtrl, storage) {
        _classCallCheck(this, ApihelperProvider);

        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.RootURL = "http://app.devrising.in/api/";
      } // toast message


      _createClass(ApihelperProvider, [{
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(Message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      // header: 'Toast header',
                      message: Message,
                      position: 'top',
                      buttons: [{
                        text: 'Done',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      // cssClass: 'my-custom-class',
                      message: 'Please wait...',
                      duration: 1300
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // user login 

      }, {
        key: "UserLogin",
        value: function UserLogin(username, password) {
          console.log(username);
          var postData = new FormData();
          postData.append('username', username);
          postData.append('password', password); // call Api

          console.log(this.RootURL + 'sign-in');
          return this.http.post(this.RootURL + 'sign-in', postData);
        }
      }, {
        key: "UserPanel",
        value: function UserPanel() {
          // postData.append('user_id' , userid);
          // postData.append('token' , token);
          // call Api
          var postData = new FormData();
          console.log(this.RootURL + 'userdetails', postData, this.HeaderConfig);
          return this.http.post(this.RootURL + 'userdetails', postData, this.HeaderConfig);
        } // set header values

      }, {
        key: "SetHeader",
        value: function SetHeader(token, userid) {
          var header = {
            'Authorization': token,
            'user-id': userid
          };
          this.HeaderConfig = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](header)
          };
          console.log(this.HeaderConfig);
        } //change Password

      }, {
        key: "ChangePwd",
        value: function ChangePwd(current, newpwd) {
          var postData = new FormData();
          postData.append('current_password', current);
          postData.append('password', newpwd);
          postData.append('password_confirmation', newpwd); // call Api

          return this.http.post(this.RootURL + 'password/reset', postData, this.HeaderConfig);
        } // Mapped agent to class

      }, {
        key: "mappedAgentTOList",
        value: function mappedAgentTOList(data) {
          var response;
          response = {
            pending_payments: data.pending_payments,
            today_collection: data.today_collection,
            today_withdrawal: data.today_withdrawal,
            limit_available: data.limit_available,
            modules: data.modules
          };
          return response;
        } // Rd Account Page

      }, {
        key: "AccountsList",
        value: function AccountsList(type) {
          var postData = new FormData();
          postData.append('type', type); // call Api

          return this.http.post(this.RootURL + 'get-account', postData, this.HeaderConfig);
        } // Mapped accountlist to class

      }, {
        key: "mappedAccountListTOList",
        value: function mappedAccountListTOList(data) {
          var response = [];
          data.accounts.forEach(function (element) {
            var l = {
              holdernam: element[0],
              holderid: element[1],
              accountno: element[2]
            };
            response.push(l);
          });
          return response;
        } //  Account details

      }, {
        key: "AccountsDetails",
        value: function AccountsDetails(accountid, accounttype) {
          var postData = new FormData();
          postData.append('account_id', accountid);
          postData.append('account_type', accounttype);
          console.log(accountid);
          console.log(accounttype); // call Api

          return this.http.post(this.RootURL + 'get-account-data', postData, this.HeaderConfig);
        } // Mapped RD/DD Account Response

      }, {
        key: "mappedRDAccountTOModel",
        value: function mappedRDAccountTOModel(data) {
          var response;
          response = {
            member_name: data.member_name,
            open_date: data.open_date,
            center_no: data.center_no,
            group_no: data.group_no,
            amount_due: data.amount_due,
            inst_no: data.inst_no
          };
          return response;
        } // Save Payment informations

      }, {
        key: "SavePaymentINformation",
        value: function SavePaymentINformation(accountid, accounttype, transaction_type, data) {
          var postData = new FormData();
          postData.append('account_id', accountid);
          postData.append('account_type', accounttype);
          postData.append('transaction_type', transaction_type); // postData.append('daily_transaction_transaction_date' , data.transectiondate);

          postData.append('amount', data.amount);
          postData.append('message', data.remarks); // postData.append('daily_transaction[payment_mode]' , data.payMode);
          // call Api

          return this.http.post(this.RootURL + 'single-collection-transaction', postData, this.HeaderConfig);
        } // collection list by date

      }, {
        key: "CollectionListByDate",
        value: function CollectionListByDate(fdate) {
          var postData = new FormData();
          postData.append('transaction_date_eq', fdate); // call Api

          return this.http.post(this.RootURL + 'daily-collection-transaction', postData, this.HeaderConfig);
        } // Mappe Collection into model

      }, {
        key: "CollectionResponseMappe",
        value: function CollectionResponseMappe(data) {
          var response = [];

          if (data != undefined) {
            data.data.forEach(function (element) {
              var l = {
                transaction_date: element.transaction_date,
                payment_mode: element.payment_mode,
                amount: element.amount,
                transaction_type: element.transaction_type,
                message: element.message,
                transaction_status: element.transaction_status,
                account_type: element.account_type,
                tranx_id: element.tranx_id,
                account_number: element.account_number,
                name: element.name,
                fname: element.fname,
                mobile: element.mobile,
                total_balance: element.total_balance,
                collectedBy: element.collectedBy
              };
              response.push(l);
            });
          }

          return response;
        }
      }]);

      return ApihelperProvider;
    }();

    ApihelperProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    ApihelperProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ApihelperProvider);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\devrising\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
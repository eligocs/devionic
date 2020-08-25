(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"../../../assets/css/bootstrap.min.css\">\n<link href=\"https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap\" rel=\"stylesheet\">\n <link href=\"https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap\" rel=\"stylesheet\">\n<ion-content class=\" ion-justify-content-center ion-align-items-center\"   >\n  <div class=\"main_container\">\n    <ion-grid class=\"header-sub\">\n      <ion-row>\n        <ion-col>\n           <div class=\"logo-area\">\n            <div class=\"logo_img ion-margin ion-text-center\">\n              <img width=\"100\" src=\"../../assets/imgs/logo.png\" alt=\"\">\n            </div>\n                <div class=\"header-text\">\n             <h1>Welcome to <br> Dev Rising Nidhi Ltd.</h1>\n            </div>\n              </div>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n\n\n\n      <ion-card class=\"login_card\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center login_title\">Login</ion-card-title>\n        </ion-card-header>\n        <form #form=\"ngForm\" >\n        <ion-item>\n          <ion-input [(ngModel)]=\"username\" name=\"name\" type=\"text\" placeholder=\"Username\" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input  [(ngModel)]=\"password\" name=\"password\" type=\"text\" placeholder=\"Password\" ngModel required></ion-input>\n        </ion-item>\n        <div class=\"btn_cover ion-text-center\">\n         <button (click) = \"doLogin()\" class=\"ion-margin ion-align-center btn login_btn\" >Login</button>\n         \n        </div>\n      </form>\n       </ion-card>\n  \n       <ion-grid>\n        <ion-row class=\"bottom_part\">\n          <ion-col class=\"bottom_left\">\n          <div class=\"form-group remember\">\n              <input type=\"radio\" class=\"form-control\"><span>Remember Me</span>\n          </div>\n          </ion-col>\n          <ion-col class=\"bottom_right\">\n            <div class=\" forgot\">\n                <p class=\"forget-password\"><a href=\"\">Forgot Password</a></p>\n            </div>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n\n  </div>\n\n</ion-content>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login_btn {\n  color: white;\n  border-radius: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXGRldnJpc2luZy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbn0iLCIubG9naW5fYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/apihelper/apihelper */ "./src/providers/apihelper/apihelper.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let LoginPage = class LoginPage {
    constructor(
    // private androidPermissions: AndroidPermissions,
    navCtrl, modalController, storage, provider) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.storage = storage;
        this.provider = provider;
        this.username = "";
        this.password = "";
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }
    ngOnInit() {
        // Permission Code
        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        //   result => console.log('Has permission?',result.hasPermission),
        //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        // );
        // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        // End of Permission Code
        this.storage.get('offline-user').then((val) => {
            console.log('USer Details are', val);
            if (val) {
                this.provider.presentLoading();
                this.provider.UserLogin(val.username, val.password).subscribe(data => {
                    this.LoginReponse = data;
                    // console.log(this.LoginReponse);
                    // set header values
                    this.provider.SetHeader(this.LoginReponse.token, this.LoginReponse.user_id);
                    this.provider.presentToastWithOptions('You have already signed in!');
                    this.navCtrl.navigateRoot('/dashboard/home');
                }, (err) => {
                    this.provider.presentToastWithOptions('Your Password might be changed!');
                });
            }
            else {
                this.navCtrl.navigateRoot('/login');
            }
        });
    }
    doLogin() {
        if (this.validate()) {
            //this.navCtrl.setRoot('PrinterPage');
            // show processing
            this.provider.presentLoading();
            this.provider.UserLogin(this.username, this.password).subscribe(data => {
                this.LoginReponse = data;
                // set header values
                this.provider.SetHeader(this.LoginReponse.token, this.LoginReponse.user_id);
                // call next APi
                let offline_user = { "username": this.username, "password": this.password };
                // console.log(offline_user);
                // set a key/value
                this.storage.set('offline-user', offline_user);
                // to get a key/value pair
                this.storage.get('offline-user').then((val) => {
                    console.log('User Details', val);
                });
                this.navCtrl.navigateRoot('/dashboard/home');
            }, (err) => {
                this.provider.presentToastWithOptions('Incorrect details, Please try again!');
            });
        }
    }
    validate() {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
            this.provider.presentToastWithOptions("Username is blank");
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
            this.provider.presentToastWithOptions("Password is blank");
        }
        return this.isPasswordValid && this.isUsernameValid;
    }
    showFingerprintAuthDlg() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_providers_apihelper_apihelper__WEBPACK_IMPORTED_MODULE_3__["ApihelperProvider"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map
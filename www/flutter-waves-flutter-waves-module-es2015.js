(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flutter-waves-flutter-waves-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flutter-waves/flutter-waves.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flutter-waves/flutter-waves.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\" />\r\n    </ion-buttons>\r\n    <ion-title>Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"background: #f9f9f9; padding-bottom: 20px\">\r\n    <ion-row>\r\n      <h6 class=\"method\">Method</h6>\r\n    </ion-row>\r\n\r\n    <ng-container *ngFor=\"let options of paymentGateways;\">\r\n      <ion-row *ngIf=\"options.payment_methods_id != '3' \">\r\n        <ion-col (click)=\"checkActive(options)\" size=\"1\">\r\n          <h4>\r\n            <div\r\n              class=\"div-button-outer\"\r\n              [class.activeRadio]=\"options.payment_methods_id == radioActive  \"\r\n            ></div>\r\n          </h4>\r\n        </ion-col>\r\n        <ion-col size=\"11\">\r\n          <h4 (click)=\"checkActive(options)\" class=\"classh6\">\r\n            {{options.name}}\r\n          </h4>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ng-container>\r\n\r\n    <!-- \r\n\r\n     <ion-row>\r\n       <ion-col (click)=\"checkActive('1')\" size=\"1\">\r\n         <h4><div class=\"div-button-outer\" [class.activeRadio]=\"radioActive == 1 \"></div></h4>\r\n        </ion-col>\r\n       <ion-col  size=\"11\"><h4 (click)=\"checkActive('1')\" class=\"classh6\">Google Pay/Apple Pay</h4></ion-col>\r\n     </ion-row>\r\n\r\n     <ion-row>\r\n      <ion-col (click)=\"checkActive('2')\" size=\"1\">\r\n        <h4><div class=\"div-button-outer\" [class.activeRadio]=\"radioActive == 2 \"></div></h4>\r\n       </ion-col>\r\n      <ion-col  size=\"11\"><h4 (click)=\"checkActive('2')\" class=\"classh6\">Mobile Payment</h4></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col (click)=\"checkActive('3')\" size=\"1\">\r\n        <h4><div class=\"div-button-outer\" [class.activeRadio]=\"radioActive == 3\"></div></h4>\r\n       </ion-col>\r\n      <ion-col size=\"11\"><h4 (click)=\"checkActive('3')\"  class=\"classh6\">Bank Transfer</h4></ion-col>\r\n    </ion-row>\r\n\r\n\r\n     -->\r\n  </div>\r\n\r\n  <ng-container\r\n    *ngIf=\"radioActive != '0' && radioActive != '3' && radioActive != '8'\"\r\n  >\r\n    <ion-row>\r\n      <h6 class=\"method\">{{paymentOption}}</h6>\r\n      <h6 class=\"methodAmount\">( {{currency_symbol}} {{amountToShow}})</h6>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <div class=\"divClass\">{{transferText}}</div>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <!-- <ion-row>\r\n    <ion-col>\r\n      <google-pay-button\r\n        environment=\"TEST\"\r\n        buttonType=\"buy\"\r\n        buttonColor=\"black\"\r\n        [paymentRequest]=\"paymentGooglePay\"\r\n        (loadpaymentdata)=\"onLoadPaymentData($event)\">\r\n      </google-pay-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <!-- ///////////////////////////// start card  -->\r\n  <!-- <ion-card\r\n    *ngIf=\"radioActive == '7'\"\r\n    (click)=\"active_card()\"\r\n    class=\"main-form\"\r\n    [class.active_card]=\"card_active == 'show'\"\r\n  > -->\r\n  <div\r\n    *ngIf=\"radioActive == '8'\"\r\n    (click)=\"active_card()\"\r\n    class=\"main-form\"\r\n    [class.active_card]=\"card_active == 'show'\"\r\n  >\r\n     <!-- <div class=\"mini_main_form\">\r\n      <div class=\"input_con_form\">\r\n        <label>CARD NUMBER</label>\r\n        <ion-input\r\n          class=\"form_input\"\r\n          (click)=\"active_card()\"\r\n          maxlength=\"19\"\r\n          [class.error_form]=\"card_error == 'error'\"\r\n          (ionBlur)=\"card_test()\"\r\n          (ionChange)=\"check_card()\"\r\n          [(ngModel)]=\"card_number\"\r\n          type=\"text\"\r\n          placeholder=\"XXXX-XXXX-XXXX-XXXX\"\r\n        ></ion-input>\r\n      </div>\r\n      <div class=\"d_form\">\r\n        <div class=\"input_con_form\">\r\n          <label>EXPIRATION DATE</label>\r\n          <ion-input\r\n            placeholder=\"MM/YY\"\r\n            (click)=\"active_card()\"\r\n            maxlength=\"5\"\r\n            [class.error_form]=\"expiry_error == 'error'\"\r\n            (ionChange)=\"check_expiry()\"\r\n            (ionBlur)=\"expiry_test()\"\r\n            [(ngModel)]=\"expri_date\"\r\n            class=\"form_input\"\r\n            type=\"text\"\r\n          ></ion-input>\r\n        </div>\r\n        <div class=\"input_con_form\">\r\n          <label>CV CODE</label>\r\n          <ion-input\r\n            placeholder=\"XXX\"\r\n            (click)=\"active_card()\"\r\n            maxlength=\"4\"\r\n            [(ngModel)]=\"cvv\"\r\n            class=\"form_input\"\r\n            type=\"text\"\r\n          ></ion-input>\r\n        </div>\r\n      </div>\r\n    </div>   -->\r\n    <buttton  angular4-paystack id=\"angularpaystack\" class=\"paystack\" [key]=\"'pk_live_e1fe04533542cf4313ce66133eb31296411c1a02'\"\r\n      [email]=\"email\" [amount]=\"amount\" [ref]=\"reference\" \r\n      (paymentInit)=\"paymentInit()\" [currency]=\"currency\" (onClose)=\"paymentCancel()\" (callback)=\"paymentDone($event)\">\r\n      {{currency_symbol}}{{amountToShow}} Pay with Paystack \r\n    </buttton>  \r\n    <!-- pk_live_e1fe04533542cf4313ce66133eb31296411c1a02 -->\r\n    <!-- pk_test_393a9e0b8393df40d3502bf0b37be35533408b81 -->\r\n    <!-- <button\r\n    style=\"background: #c4932f;\r\n    padding: 21px;\r\n    border-radius: 17px;\r\n    color: white;\r\n    font-size: 17px;\r\n    font-weight: 800;\"\r\n    angular4-paystack\r\n    [paystackOptions]=\"options\"\r\n    (paymentInit)=\"paymentInit()\"\r\n    (onClose)=\"paymentCancel()\"\r\n    (callback)=\"paymentDone($event)\"\r\n  >\r\n    Pay with Paystack\r\n  </button> -->\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <ng-container\r\n      *ngIf=\"radioActive != '0' && radioActive != '3' &&  radioActive != '8' \"\r\n    >\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center\">\r\n          <div class=\"list_1\">\r\n            <ion-row>\r\n              <ion-col>\r\n                <h3>Receipt</h3>\r\n                <p class=\"upload_images left_4\">\r\n                  Upload Transaction screenshot\r\n                </p>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    class=\"list_2\"\r\n                    (click)=\"uploadDocument()\"\r\n                    *ngIf=\"document_one =='' || document_one ==undefined\"\r\n                  >\r\n                    <img src=\"assets/img/Menu_Plus.svg\" />\r\n                  </ion-col>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    class=\"real_image\"\r\n                    (click)=\"uploadDocument()\"\r\n                    *ngIf=\"document_one\"\r\n                  >\r\n                    <img src=\"{{document_one}}\" class=\"imgh\" />\r\n                  </ion-col>\r\n                  <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\r\n                    Document is required.\r\n                  </span>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n          <!-- <ion-button (click)=\"uploadDocument()\" class=\"btn\" [class.btnActive]=\"imageGet != '' \"  expand=\"block\" shape=\"round\"  >Upload Transaction screenshot</ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ng-container>\r\n\r\n    <ion-row  *ngIf=\"radioActive != '8' && radioActive != '0'\">\r\n      <!-- <ion-row  *ngIf=\"radioActive != '0'\"> -->\r\n      <ion-col>\r\n        <ion-button\r\n          (click)=\"submit()\"\r\n          style=\"width: 60%; margin-left: 20%; position: relative; bottom: 0em\"\r\n          shape=\"round\"\r\n          >Submit</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FlutterWavesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPageRoutingModule", function() { return FlutterWavesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _flutter_waves_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flutter-waves.page */ "./src/app/flutter-waves/flutter-waves.page.ts");




const routes = [
    {
        path: '',
        component: _flutter_waves_page__WEBPACK_IMPORTED_MODULE_3__["FlutterWavesPage"]
    }
];
let FlutterWavesPageRoutingModule = class FlutterWavesPageRoutingModule {
};
FlutterWavesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FlutterWavesPageRoutingModule);



/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.module.ts ***!
  \*******************************************************/
/*! exports provided: FlutterWavesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPageModule", function() { return FlutterWavesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _flutter_waves_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flutter-waves-routing.module */ "./src/app/flutter-waves/flutter-waves-routing.module.ts");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _flutter_waves_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flutter-waves.page */ "./src/app/flutter-waves/flutter-waves.page.ts");








let FlutterWavesPageModule = class FlutterWavesPageModule {
};
FlutterWavesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular4_paystack__WEBPACK_IMPORTED_MODULE_6__["Angular4PaystackModule"].forRoot('pk_live_e1fe04533542cf4313ce66133eb31296411c1a02'),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // GooglePayButtonModule,
            _flutter_waves_routing_module__WEBPACK_IMPORTED_MODULE_5__["FlutterWavesPageRoutingModule"],
        ],
        declarations: [_flutter_waves_page__WEBPACK_IMPORTED_MODULE_7__["FlutterWavesPage"]],
    })
], FlutterWavesPageModule);



/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n.div-button-outer {\n  height: 11px;\n  width: 11px;\n  border: 1px solid #c4932f;\n  border-radius: 50%;\n  position: relative;\n  top: -7px;\n  left: 9px;\n}\n\n.activeRadio {\n  background: #c4932f;\n}\n\n.method {\n  font-size: 22px;\n  font-family: SFUIText-HeavyItalic;\n  margin-left: 18px;\n  color: #464646;\n}\n\n.methodAmount {\n  font-size: 22px;\n  font-family: SFUIText-HeavyItalic;\n  margin-left: 2px;\n  color: #c4932f;\n}\n\n.classh6 {\n  margin: 5px;\n  font-size: 17px;\n}\n\n.divClass {\n  font-size: 13px;\n  font-family: VarelaRound-Regular;\n  color: #C4932F;\n  padding: 0px 35px 27px 20px;\n}\n\n.footer {\n  height: 100px;\n  width: 100%;\n  position: absolute;\n}\n\n.btn {\n  width: 80%;\n  margin-left: 10%;\n  --background:#1A6BBE ;\n  font-size: 11px;\n}\n\n.btnActive {\n  --background:#35be1a ;\n}\n\n.params {\n  padding: 5px;\n  background-color: #fff;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n\n.params > label {\n  margin: 5px 10px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n}\n\n.params > label > * {\n  display: block;\n}\n\n.params > label > span {\n  margin-bottom: 2px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.params > label > input, .params > label > select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  padding: 4px;\n  border: 1px solid #999;\n  background-color: #fff;\n  border-radius: 0;\n  color: #000;\n}\n\n.example {\n  margin: 5px;\n  display: flex;\n  flex-direction: row;\n}\n\n.example > .title {\n  width: 250px;\n  align-items: center;\n  display: inherit;\n}\n\n.example > .demo {\n  flex: 1 0 0;\n}\n\n.example > .demo > * {\n  margin: 1px;\n}\n\n#angularpaystack {\n  background: #c4932f !important;\n  padding: 21px !important;\n  border-radius: 17px !important;\n  color: white !important;\n  font-size: 17px !important;\n  font-weight: 800 !important;\n  display: flex;\n  justify-content: center;\n}\n\n.main-form {\n  padding: 22px;\n  display: grid;\n  grid-gap: 13px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.input_con_form {\n  display: grid;\n}\n\n.mini_main_form {\n  display: grid;\n  justify-content: center;\n  grid-gap: 14px;\n}\n\n.form_input {\n  width: 100%;\n  height: 39px;\n  border: 1px solid #b6afaf;\n  padding: 11px 12px !important;\n  border-radius: 28px;\n}\n\n.d_form {\n  display: grid;\n  grid-template-columns: 67% 30%;\n  grid-gap: 8px;\n}\n\n.form_submit {\n  padding: 7px 25px;\n  background: #9b98f0;\n  color: #fbfbfb;\n}\n\n.form_btn_div {\n  display: grid;\n  justify-content: center;\n  padding: 20px;\n}\n\n.error_form {\n  border: 1px solid red;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 5.5em 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmx1dHRlci13YXZlcy9mbHV0dGVyLXdhdmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFJQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQU47O0FBRU07RUFDRSxjQUFBO0FBQVI7O0FBR007RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFJTTtFQUVFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSFI7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxOOztBQVFJO0VBQ0UsV0FBQTtBQU5OOztBQVFNO0VBQ0UsV0FBQTtBQU5SOztBQWNBO0VBRUksOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWko7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkE7RUFDSSxhQUFBO0FBZko7O0FBaUJBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBaEJKOztBQWtCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFmSjs7QUFpQkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFiSjs7QUFnQkE7RUFDSSxxQkFBQTtBQWJKOztBQWVBO0VBQ0ksZ0JBQUE7QUFaSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVko7O0FBWUE7RUFDSSw2QkFBQTtBQVRKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtBQVJKOztBQVVBO0VBQ0ksVUFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvZmx1dHRlci13YXZlcy9mbHV0dGVyLXdhdmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcblxyXG4uZGl2LWJ1dHRvbi1vdXRlcntcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTdweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG4uYWN0aXZlUmFkaW97XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xyXG59XHJcbiBcclxuLm1ldGhvZHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dC1IZWF2eUl0YWxpYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbn1cclxuLm1ldGhvZEFtb3VudHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBTRlVJVGV4dC1IZWF2eUl0YWxpYztcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBjb2xvcjogI2M0OTMyZjtcclxufVxyXG4uY2xhc3NoNntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICBcclxufVxyXG4uZGl2Q2xhc3N7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogVmFyZWxhUm91bmQtUmVndWxhcjtcclxuICAgIGNvbG9yOiAjQzQ5MzJGO1xyXG4gICAgcGFkZGluZzogMHB4IDM1cHggMjdweCAyMHB4O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMxQTZCQkUgO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi5idG5BY3RpdmV7XHJcbiAgICAtLWJhY2tncm91bmQ6IzM1YmUxYSA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnBhcmFtcyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgXHJcbiAgICAmID4gbGFiZWwge1xyXG4gICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICBcclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYgPiBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmID4gaW5wdXQsXHJcbiAgICAgICYgPiBzZWxlY3Qge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBcclxuICAgICYgPiAudGl0bGUge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmID4gLmRlbW8ge1xyXG4gICAgICBmbGV4OiAxIDAgMDtcclxuICBcclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG4jYW5ndWxhcnBheXN0YWNrIHtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzdGFydCBjYXJkIFxyXG4uYWN0aXZlX2NhcmR7XHJcbiAgICAvLyBib3JkZXI6IDRweCBzb2xpZCAjYzQ5MzJmO1xyXG4gICAgLy8gY29sb3I6IGJsYWNrO1xyXG59XHJcbiAgLm1haW4tZm9ybXtcclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaW5wdXRfY29uX2Zvcm17XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5taW5pX21haW5fZm9ybXtcclxuICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtZ2FwOiAxNHB4O1xyXG4gXHJcbn1cclxuIFxyXG4uZm9ybV9pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2YWZhZjtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxufVxyXG4uZF9mb3Jte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjclIDMwJTtcclxuICAgIGdyaWQtZ2FwOiA4cHg7XHJcbn1cclxuLmZvcm1fc3VibWl0e1xyXG4gICAgcGFkZGluZzogN3B4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWI5OGYwO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuLmZvcm1fYnRuX2RpdntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvcl9mb3Jte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbi5saXN0XzF7XHJcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG59XHJcbi5saXN0XzEgaDN7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcbi51cGxvYWRfaW1hZ2Vze1xyXG4gICAgY29sb3I6I0M0OTMyRjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ubGVmdF80e1xyXG4gICAgbWFyZ2luLWxlZnQ6MC43ZW0gIWltcG9ydGFudDtcclxufVxyXG4ubGlzdF8ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDUuNWVtIDBlbTtcclxuICAgLy8gcGFkZGluZzogMjUlIDBlbSAyMyUgMGVtO1xyXG59XHJcbi5saXN0XzIgcHtcclxuICAgIGNvbG9yOiAjZDJkNmQ4O1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.page.ts ***!
  \*****************************************************/
/*! exports provided: FlutterWavesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPage", function() { return FlutterWavesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/__ivy_ngcc__/ngx/index.js");










let FlutterWavesPage = class FlutterWavesPage {
    constructor(toastController, location, loadingController, storage, restService, activatedRoute, router, menuCtrl, imageService, alertCtrl, imagePicker, stripe) {
        this.toastController = toastController;
        this.location = location;
        this.loadingController = loadingController;
        this.storage = storage;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.imageService = imageService;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.stripe = stripe;
        // PayStack
        //currency = "NGN"; // for test
        this.currency = "GHS"; //for live
        this.reference = `${Math.ceil(Math.random() * 10e10)}`;
        this.title = '';
        // options: PaystackOptions = {
        //   amount: 50000,
        //   email: 'user@mail.com',
        //   ref: `${Math.ceil(Math.random() * 10e10)}`,
        // }
        // PayStack
        this.radioActive = 0;
        this.expri_date = "";
        this.card_number = "";
        this.cvv = "";
        this.card_error = "";
        this.expiry_error = "";
        this.card_active = "show";
        this.localTransection = false;
        this.imageGet = "";
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((res) => {
            this.amount = res.value.replace(/,/g, '') * 100;
            this.amountToShow = res.value.replace(/,/g, '');
            console.log("Value to pass", this.amount * 100);
            this.currency_symbol = res.symbol;
            (this.userid = res.userid),
                (this.bookingId = res.bookingId),
                (this.email = res.email);
        });
        this.storage.get("user_details").then((res) => {
            this.currencyID = res.currencies_id;
        });
        this.restService.getpaymentOption().subscribe((res) => {
            this.response = JSON.parse(res["_body"]);
            this.paymentGateways = this.response.payment_gateways;
        }, (err) => {
            console.log("err", err);
        });
    }
    active_card() {
        this.card_active = "show";
    }
    checkActive(getset) {
        //  this.radioActive = getset.payment_methods_id;
        this.paymentID = getset.payment_methods_id;
        if (getset.payment_methods_id == "8") {
            this.radioActive = getset.payment_methods_id;
            this.localTransection = false;
        }
        else if (getset.payment_methods_id == "5") {
            this.mobileTransfer(getset);
            this.radioActive = getset.payment_methods_id;
        }
        else if (getset.payment_methods_id == "6") {
            this.mobileTransfer(getset);
            this.radioActive = getset.payment_methods_id;
        }
    }
    mobileTransfer(getOptData) {
        this.paymentOption = getOptData.name;
        this.transferText = getOptData.description;
        this.localTransection = true;
    }
    back() {
        this.location.back();
    }
    uploadDocument() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Upload payment receipt",
                buttons: [
                    {
                        text: "Take image from camera",
                        handler: () => {
                            this.takeImageFromCamera();
                        },
                    },
                    {
                        text: "Upload image from gallery",
                        handler: () => {
                            this.getImageFromGallery();
                        },
                    },
                ],
            });
            alert.present();
        });
    }
    takeImageFromCamera() {
        this.imageService
            .selectImageInCamera()
            .then((imageData) => {
            this.document_one = `data:image/png;base64,${imageData}`;
            this.imageGet = imageData;
        })
            .catch((err) => console.error(err));
    }
    getImageFromGallery() {
        var options = {
            maximumImagesCount: 1,
            outputType: 1,
        };
        this.imagePicker.getPictures(options).then((imageData) => {
            this.document_one = `data:image/png;base64,${imageData}`;
            this.imageGet = imageData[0];
        }, (err) => {
            console.log("imagepicker  now:", err);
            this.document_oneError = true;
        });
    }
    submit() {
        if (this.localTransection == true) {
            if (this.imageGet != "") {
                this.present();
                var localSending = JSON.stringify({
                    requestType: "payment_process",
                    bookings_id: this.bookingId,
                    currencyID: this.currencyID,
                    receipt_image: this.imageGet,
                    customer_userid: this.userid,
                    payment_method_id: this.paymentID,
                });
                this.restService.paymentforbooking(localSending).subscribe((res) => {
                    this.dismiss();
                    this.retuenRes = JSON.parse(res["_body"]);
                    if (this.retuenRes.status == "success") {
                        this.presentToast(this.retuenRes.message);
                        this.router.navigate(["/other-booking-list"], {
                            queryParams: {
                                value: "pending",
                            },
                        });
                    }
                    else {
                        this.presentToast(this.retuenRes.message);
                    }
                }, (err) => {
                    console.log(err);
                });
            }
            else {
                this.presentToast("Please Upload Transaction screenshot");
            }
        }
        else if (this.localTransection == false) {
            this.stripPayment();
        }
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: "top",
            });
            toast.present();
        });
    }
    check_expiry() {
        if (this.expri_date.length == 2) {
            this.expri_date = this.expri_date + "/";
        }
    }
    check_card() {
        if (this.card_number.length == 4) {
            this.card_number = this.card_number + "-";
        }
        if (this.card_number.length == 9) {
            this.card_number = this.card_number + "-";
        }
        if (this.card_number.length == 14) {
            this.card_number = this.card_number + "-";
        }
    }
    card_test() {
        if (this.card_number != "") {
            if (this.card_number.length == 19) {
                this.card_error = "";
            }
            else {
                this.card_error = "error";
            }
        }
        else {
            this.card_error = "error";
        }
    }
    expiry_test() {
        if (this.expri_date != "") {
            if (this.expri_date.length == 5) {
                this.expiry_error = "";
            }
            else {
                this.expiry_error = "error";
            }
        }
        else {
            this.expiry_error = "error";
        }
    }
    stripPayment() {
        // alert("sdsdf");
        var new_number = this.card_number.replace(/-/g, "");
        if (new_number.length < 16 || !/[0-9]{16}/.test(new_number)) {
            this.presentToast("Please enter complete card number");
        }
        else if (this.expri_date.length < 5) {
            this.presentToast("Please enter valid expiry date");
        }
        else if (this.cvv.length < 3) {
            this.presentToast("Please enter valid expiry date");
        }
        else {
            this.present();
            var exp = this.expri_date.split("/");
            this.stripe.setPublishableKey("pk_test_51HtsCdBkmmnV9scEn3flkiLvRp0cgX4ArpMfMiJ5MIXfe5RFrgZy9PJVOOCc3y8IU234OrkSRF6jWV9IKnFvG3Km00Wmw04egH");
            let card = {
                number: new_number,
                expMonth: exp[0],
                expYear: exp[1],
                cvc: this.cvv,
            };
            this.stripe
                .createCardToken(card)
                .then((token) => {
                var id = token.id;
                var tokeninfro = JSON.stringify({
                    requestType: "stripe_process",
                    stripeToken: token.id,
                    email: this.email,
                    amount: this.amount,
                    booking_id: this.bookingId,
                    user_id: this.userid,
                    currency_id: this.currencyID,
                });
                this.restService.stripToken(tokeninfro).subscribe((res) => {
                    this.stripRes = JSON.parse(res["_body"]);
                    if (this.stripRes.status == "success") {
                        this.presentToast(this.stripRes.msg);
                        this.router.navigate(["/other-booking-list"], {
                            queryParams: {
                                value: "upcoming",
                            },
                        });
                        this.dismiss();
                    }
                    else {
                        this.dismiss();
                        this.presentToast(this.stripRes.msg);
                    }
                    //  alert(JSON.stringify(res));
                });
            })
                .catch((error) => {
                console.error(error);
                this.presentToast(JSON.stringify(error));
                this.dismiss();
            });
        }
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Please wait...",
            });
            yield this.loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    // PayStack
    paymentInit() {
        console.log('Payment initialized');
        this.present();
    }
    paymentDone(ref) {
        this.dismiss();
        this.title = 'Payment successfull';
        console.log("here the msg from ", ref);
        console.log("here the json--- from ", JSON.stringify(ref));
        if (ref.message == "Approved") {
            var tokeninfro = JSON.stringify({
                requestType: "paystack_process",
                trxref: ref.trxref,
                transaction: ref.transaction,
                email: this.email,
                amount: this.amount,
                booking_id: this.bookingId,
                user_id: this.userid,
                currency_id: this.currencyID,
            });
            this.restService.payStack(tokeninfro).subscribe((res) => {
                this.stripRes = JSON.parse(res["_body"]);
                if (this.stripRes.status == "success") {
                    this.presentToast(this.stripRes.message);
                    this.router.navigate(["/other-booking-list"], {
                        queryParams: {
                            value: "upcoming",
                        },
                    });
                }
                else {
                    this.presentToast(this.stripRes.msg);
                }
                //  alert(JSON.stringify(res));
            });
        }
    }
    paymentCancel() {
        console.log('payment failed');
        alert("Transaction failed");
        this.dismiss();
    }
};
FlutterWavesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_8__["RestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_7__["CameraimageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_9__["Stripe"] }
];
FlutterWavesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-flutter-waves",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./flutter-waves.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flutter-waves/flutter-waves.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./flutter-waves.page.scss */ "./src/app/flutter-waves/flutter-waves.page.scss")).default]
    })
], FlutterWavesPage);



/***/ })

}]);
//# sourceMappingURL=flutter-waves-flutter-waves-module-es2015.js.map
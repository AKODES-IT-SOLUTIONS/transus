(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listed-car-listed-car-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppListedCarListedCarPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\" />\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Listed Cars</ion-title>\n  </ion-toolbar>\n</ion-header>    \n<ion-content>   \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"vehicles_list?.length >0\">\n    <ng-container *ngFor=\"let p of vehicles_list; let i = index\">\n      <ng-container *ngIf=\"p.vehicle_imgs\">\n        <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          \n          <ion-col style=\"margin-top: 1.5em\" size=\"4\" class=\"lambo\">\n            <!--   <h4>{{p.model_name}}</h4> -->\n            <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" />\n            <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" />\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Charge per day</p>\n            <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p>\n            <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\">End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n\n            <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div>\n            <div *ngIf=\"p.admin_status == 'Rejected' \" class=\"give_rating-status-rejected list_issue\">\n              Rejected\n            </div>\n          </ion-col>\n          <ion-icon\n            name=\"trash\"\n            class=\"bin\"\n            (click)=\"removeImage(p,i)\"\n            style=\"\n                position: absolute;\n                right: 15px;\n                top: 35px;\n            \"\n\n          >\n          </ion-icon>\n        </ion-row>\n\n        <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col style=\"margin-top: 1.5em\" size=\"4\" class=\"lambo\">\n            <!-- <h4>{{p.model_name}}</h4> -->\n            <!-- <img src=\"{{base_url}}{{p.vehicle_imgs[0]}}\"> -->\n            <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\" />\n            <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\" />\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date | customeDate}}</p>\n            <p class=\"primary\">Charge per day</p>\n            <p style=\"margin-bottom: 27px\">{{symbol}} {{p.charge_per_day}}</p>\n            <div class=\"give_rating list_issue\" (click)=\"editDetail(p)\">\n              Edit Details\n            </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\">End Date</p>\n            <p>{{p.end_date | customeDate}}</p>\n\n            <div *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved list_issue\">\n              Approved\n            </div>\n            <div *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding list_issue\">\n              Pending\n            </div>\n            <div *ngIf=\"p.admin_status == 'Rejected' \" class=\"give_rating-status-rejected list_issue\">\n              Rejected\n            </div>\n          </ion-col>\n          <ion-icon\n            name=\"trash\"\n            class=\"bin\"\n            (click)=\"removeImage(p,i)\"\n            style=\"\n                position: absolute;\n                right: 15px;\n                top: 35px;\n            \"\n\n          >\n          </ion-icon>\n        </ion-row>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"vehicles_list?.length == 0\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h2>Data Not Found!</h2>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToCarList()\">List a Car</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToDraft()\">Drafts</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/listed-car/listed-car-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/listed-car/listed-car-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ListedCarPageRoutingModule */

    /***/
    function srcAppListedCarListedCarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListedCarPageRoutingModule", function () {
        return ListedCarPageRoutingModule;
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


      var _listed_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./listed-car.page */
      "./src/app/listed-car/listed-car.page.ts");

      var routes = [{
        path: '',
        component: _listed_car_page__WEBPACK_IMPORTED_MODULE_3__["ListedCarPage"]
      }];

      var ListedCarPageRoutingModule = /*#__PURE__*/_createClass(function ListedCarPageRoutingModule() {
        _classCallCheck(this, ListedCarPageRoutingModule);
      });

      ListedCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListedCarPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/listed-car/listed-car.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/listed-car/listed-car.module.ts ***!
      \*************************************************/

    /*! exports provided: ListedCarPageModule */

    /***/
    function srcAppListedCarListedCarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListedCarPageModule", function () {
        return ListedCarPageModule;
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


      var _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./listed-car-routing.module */
      "./src/app/listed-car/listed-car-routing.module.ts");
      /* harmony import */


      var _listed_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listed-car.page */
      "./src/app/listed-car/listed-car.page.ts");
      /* harmony import */


      var _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../custome-date.pipe */
      "./src/app/custome-date.pipe.ts");

      var ListedCarPageModule = /*#__PURE__*/_createClass(function ListedCarPageModule() {
        _classCallCheck(this, ListedCarPageModule);
      });

      ListedCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListedCarPageRoutingModule"]],
        declarations: [_listed_car_page__WEBPACK_IMPORTED_MODULE_6__["ListedCarPage"], _custome_date_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeDatePipe"]]
      })], ListedCarPageModule);
      /***/
    },

    /***/
    "./src/app/listed-car/listed-car.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/listed-car/listed-car.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppListedCarListedCarPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0em 0em 0 0;\n  --background: #c4932f;\n}\n\nion-toolbar.ios {\n  margin-top: 3px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 0em 0em 0px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 5px 9px;\n  position: relative;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 5px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6.4px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #D93A3A;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  margin: 0px;\n}\n\n.give_rating-status-aproved {\n  background: #82d93a;\n  color: #fff;\n  /* padding: 0.7em; */\n  border-radius: 25px;\n  /* width: 100%; */\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.give_rating-status-rejected {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  /* top: 3.6em; */\n  margin: 0px;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.list_issue {\n  padding: 7px;\n  position: absolute;\n  bottom: 0px;\n  width: 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGVkLWNhci9saXN0ZWQtY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBZ0JKOztBQWRBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBaUJKOztBQWZBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGVkLWNhci9saXN0ZWQtY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwZW0gMGVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbmlvbi10b29sYmFyLmlvcyB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMGVtIDBlbSAwcHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmdfZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XG59XG4ucGRfYnN7XG4gICAgcGFkZGluZzogNXB4IDlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGFtYm8gaDR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50cmlwX2RhdGVze1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMi40ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcbn1cbi50cmlwX2RhdGVzIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzFBNkJCRTtcbn1cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiNDNDkzMkY7XG59XG4udHJpcF9lbmRfZGF0ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYuNHB4O1xufVxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmdpdmVfcmF0aW5ne1xuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLyogcGFkZGluZzogMC43ZW07ICovXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZ2l2ZV9yYXRpbmctc3RhdHVzLWFwcm92ZWR7XG4gICAgYmFja2dyb3VuZDogIzgyZDkzYTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAvKiBwYWRkaW5nOiAwLjdlbTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogdG9wOiAzLjZlbTsgKi9cbiAgICBtYXJnaW46IDBweDtcbn1cbi5naXZlX3JhdGluZy1zdGF0dXMtcGFuZGluZ3tcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB0b3A6IDMuNmVtOyAqL1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmdpdmVfcmF0aW5nLXN0YXR1cy1yZWplY3RlZHtcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZjBiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB0b3A6IDMuNmVtOyAqL1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmxpc3RfaXNzdWV7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogODglO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/listed-car/listed-car.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/listed-car/listed-car.page.ts ***!
      \***********************************************/

    /*! exports provided: ListedCarPage */

    /***/
    function srcAppListedCarListedCarPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListedCarPage", function () {
        return ListedCarPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../rest.service */
      "./src/app/rest.service.ts");
      /* harmony import */


      var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../action-booking/action-booking.page */
      "./src/app/action-booking/action-booking.page.ts");

      var ListedCarPage = /*#__PURE__*/function () {
        function ListedCarPage(loadingController, popoverController, restService, storage, router, menuCtrl, plateform, toastController) {
          _classCallCheck(this, ListedCarPage);

          this.loadingController = loadingController;
          this.popoverController = popoverController;
          this.restService = restService;
          this.storage = storage;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.plateform = plateform;
          this.toastController = toastController;
          this.vehicles_list = [];
          this.page_number = 0;
        }

        _createClass(ListedCarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.get('user_details').then(function (user_details) {
              _this.userID = user_details.users_id;
              _this.Email = user_details.email;
              _this.symbol = user_details.symbol;

              _this.getCarList(false);

              _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.getCarList(false, event, "refresher");
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            this.getCarList(true, event);
          }
        }, {
          key: "getCarList",
          value: function getCarList(isFirstLoad, event, refresher) {
            var _this2 = this;

            var offset = 0;

            if (isFirstLoad == false) {
              this.page_number = offset;
            }

            var stringy = JSON.stringify({
              "requestType": "get_cars_list",
              "usersID": this.userID,
              "limit": 4,
              "offset": this.page_number
            });

            if (!isFirstLoad) {
              this.present();
            }

            this.restService.list_vehicles(stringy).subscribe(function (response) {
              if (isFirstLoad == false) {
                _this2.vehicles_list = [];
              }

              _this2.response = JSON.parse(response['_body']);
              _this2.vehicles_list = [].concat(_toConsumableArray(_this2.vehicles_list), _toConsumableArray(_this2.response.vehicles_list));
              /*  this.vehicles_list =  this.response.vehicles_list; */

              _this2.dismiss();

              if (isFirstLoad) {
                event.target.complete();
              }

              if (event) {
                event.target.complete();
              }

              if (refresher) {
                event.target.complete();
              }

              _this2.page_number = _this2.page_number + 4;

              if (!isFirstLoad) {
                _this2.dismiss();
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "goToCarList",
          value: function goToCarList() {
            this.router.navigate(['/listcar1']);
          }
        }, {
          key: "goToDraft",
          value: function goToDraft() {
            this.router.navigate(['/mydraftcar']);
          }
        }, {
          key: "editDetail",
          value: function editDetail(car_details) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var stringy;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.present();
                      stringy = JSON.stringify({
                        "requestType": "check_veh_req",
                        "veh_id": car_details.vehicles_id
                      });
                      this.restService.check_vehicles(stringy).subscribe(function (response) {
                        _this3.response = JSON.parse(response['_body']);

                        _this3.dismiss();

                        if (_this3.response.status == 'success') {
                          _this3.popover('veh_msg');
                        } else {
                          var myData = JSON.stringify({
                            vehiclesID: car_details.vehicles_id
                          });

                          _this3.router.navigate(['/edit-list-your-car'], {
                            queryParams: {
                              value: myData
                            }
                          });
                        }
                      }, function (err) {
                        console.log(err);
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "popover",
          value: function popover(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                        translucent: true,
                        componentProps: {
                          "booking": type
                        }
                      });

                    case 2:
                      popover = _context4.sent;
                      popover.onWillDismiss().then(function (data) {
                        if (data.data.val == 'ok') {}
                      });
                      _context4.next = 6;
                      return popover.present();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "removeImage",
          value: function removeImage(detail, i) {
            var _this4 = this;

            this.present();
            var stringy = JSON.stringify({
              "requestType": "check_veh_req",
              "veh_id": detail.vehicles_id
            });
            this.restService.check_vehicles(stringy).subscribe(function (response) {
              _this4.response = JSON.parse(response['_body']);

              _this4.dismiss();

              if (_this4.response.status == 'success') {
                _this4.popover('veh_delete');
              } else {
                _this4.action(detail, 'del_veh', i);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "action",
          value: function action(veh_details, _action, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this5 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.popoverController.create({
                        component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"],
                        translucent: true,
                        backdropDismiss: false,
                        componentProps: {
                          data: 1,
                          booking: _action,
                          ownerID: 2,
                          userID: veh_details.vehicles_id
                        }
                      });

                    case 2:
                      popover = _context5.sent;
                      popover.onWillDismiss().then(function (data) {
                        if (data.data.val == 'ok') {
                          _this5.vehicles_list.splice(i, 1);

                          _this5.presentToast('Car deleted successfully');
                        }
                      });
                      _context5.next = 6;
                      return popover.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000,
                        position: 'top'
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ListedCarPage;
      }();

      ListedCarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      ListedCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listed-car',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./listed-car.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./listed-car.page.scss */
        "./src/app/listed-car/listed-car.page.scss"))["default"]]
      })], ListedCarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=listed-car-listed-car-module-es5.js.map
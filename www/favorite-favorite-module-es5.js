(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavoriteFavoritePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [class.ios-headers]=\"plateformCheck == 'ios'\" >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title [class.globe_title]=\"plateformCheck == 'ios'\">Favorite</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> \n  <ng-container *ngIf=\"cars_list_result?.length >0\">\n    \n  <ion-row  *ngFor=\"let p of cars_list_result; let i = index\">\n    <ion-col class=\"main_div\" (click)=\"gotoDetail(p)\">\n      <img src=\"{{base_urls}}{{p.veh_imgs[0]}}\" class=\"s_img\" />\n      <div class=\"pentagon\">\n        <img src=\"assets/img/pentagon.svg\" class=\"\" />\n        <div class=\"badge\">\n          <span class=\"badge_dollar\">{{currency_symbol}}</span>\n          <span class=\"badge_price\">{{p.charge_per_day}}</span>\n          <span class=\"badge_per\">PER DAY</span>\n        </div>\n      </div>\n      <div class=\"bg_bottom\">\n        <ion-row>\n          <ion-col size=\"8\" class=\"fav_1\">\n            <h2>{{p.model_name}}</h2>\n            <h5>{{p.country_name}}</h5>\n          </ion-col>\n          <ion-col size=\"4\" class=\"fav_2\">\n            <!-- <p class=\"star_list\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/grey_star.svg\">\n            </p> -->\n            <p>{{p.total_trips}} trips</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ng-container>\n<ng-container *ngIf=\"cars_list_result?.length == 0\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <img src=\"assets/img/heart_empty.svg\">\n    </ion-col>\n  </ion-row>\n</ng-container>\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/favorite/favorite-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/favorite/favorite-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavoritePageRoutingModule */

    /***/
    function srcAppFavoriteFavoriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function () {
        return FavoritePageRoutingModule;
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


      var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var routes = [{
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
      }];

      var FavoritePageRoutingModule = /*#__PURE__*/_createClass(function FavoritePageRoutingModule() {
        _classCallCheck(this, FavoritePageRoutingModule);
      });

      FavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.module.ts ***!
      \*********************************************/

    /*! exports provided: FavoritePageModule */

    /***/
    function srcAppFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function () {
        return FavoritePageModule;
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


      var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorite-routing.module */
      "./src/app/favorite/favorite-routing.module.ts");
      /* harmony import */


      var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var FavoritePageModule = /*#__PURE__*/_createClass(function FavoritePageModule() {
        _classCallCheck(this, FavoritePageModule);
      });

      FavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
      })], FavoritePageModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavoriteFavoritePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 12px;\n  height: 200px;\n}\n\n.main_div {\n  width: 100%;\n  margin: 0px 8px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 17px;\n  left: 17px;\n}\n\n.bg_bottom {\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  right: 1.2%;\n  left: 1.2%;\n  background: #00000063;\n  color: #fff;\n  border-bottom-right-radius: 10px;\n  bottom: 9px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.fav_1 {\n  text-align: left;\n}\n\n.fav_2 {\n  text-align: right;\n}\n\n.fav_1 h2,\nh5 {\n  margin: 0px;\n}\n\n.fav_1 h5 {\n  font-size: 16px;\n}\n\n.fav_2 p {\n  margin: 0px;\n}\n\n.star_list img {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 9px;\n  color: #c4932f;\n  position: relative;\n  top: -6px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7QUFPSjs7QUFMQTs7RUFFSSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZUoiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS9mYXZvcml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuaW9uLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5iX2xpc3QxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLm1haW5fZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCA4cHg7XG59XG4ucGVudGFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgbGVmdDogMTdweDtcbn1cbi5iZ19ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjIlO1xuICAgIGxlZnQ6IDEuMiU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDYzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmZhdl8xIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZhdl8yIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mYXZfMSBoMixcbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5mYXZfMSBoNSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZhdl8yIHAge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnN0YXJfbGlzdCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhZGdlX2RvbGxhciB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYmFkZ2VfcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG59XG4uYmFkZ2VfcGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/favorite/favorite.page.ts ***!
      \*******************************************/

    /*! exports provided: FavoritePage */

    /***/
    function srcAppFavoriteFavoritePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePage", function () {
        return FavoritePage;
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

      var FavoritePage = /*#__PURE__*/function () {
        function FavoritePage(router, restService, storage, menuCtrl, plateform, loadingController) {
          _classCallCheck(this, FavoritePage);

          this.router = router;
          this.restService = restService;
          this.storage = storage;
          this.menuCtrl = menuCtrl;
          this.plateform = plateform;
          this.loadingController = loadingController; // Pay stack

          this.options = {
            amount: 50000,
            email: 'user@mail.com',
            ref: "".concat(Math.ceil(Math.random() * 10e10))
          };
          this.reference = '';
          this.cars_list_result = [];
          this.page_number = 0;
        }

        _createClass(FavoritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.reference = "ref-".concat(Math.ceil(Math.random() * 10e13));

            if (this.plateform.is('ios')) {
              this.plateformCheck = "ios";
            } else {
              this.plateformCheck = "android";
            }

            this.storage.get('base_urls').then(function (base_urls) {
              _this.base_urls = base_urls;
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.favourite(false, event, "refresher");
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.get('user_details').then(function (user_details) {
              _this2.storage.get('currency_symbol').then(function (currency_symbol) {
                _this2.currency_symbol = currency_symbol;
                console.log(user_details);
                _this2.userID = user_details.users_id;
                _this2.Currencies = user_details.currencies_id;

                _this2.favourite(false);
              });
            });
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            this.favourite(true, event);
          }
        }, {
          key: "favourite",
          value: function favourite(isFirstLoad, event, refresher) {
            var _this3 = this;

            if (!event) {
              this.present();
            }

            var offset = 0;

            if (isFirstLoad == false) {
              this.page_number = offset;
            }

            var stringy = JSON.stringify({
              "requestType": 'get_fav_cars_list',
              "usersID": this.userID,
              "currencyID": this.Currencies,
              "limit": 4,
              "offset": this.page_number
            });
            console.log(stringy);
            this.restService.list_vehicles(stringy).subscribe(function (response) {
              _this3.listVehicles = JSON.parse(response['_body']);

              if (isFirstLoad == false) {
                _this3.cars_list_result = [];
              }
              /*  this.cars_list_result = this.listVehicles.cars_list_result; */


              console.log(_this3.cars_list_result, "this.cars_list_resultthis.cars_list_resultthis.cars_list_result");

              if (!event) {
                _this3.dismiss();
              }

              for (var i = 0; i < _this3.listVehicles.cars_list_result.length; i++) {
                _this3.cars_list_result.push(_this3.listVehicles.cars_list_result[i]);
              }

              if (isFirstLoad) {
                event.target.complete();
              }

              _this3.page_number = _this3.page_number + 4;

              if (refresher) {
                event.target.complete();
              }

              if (_this3.cars_list_result == undefined) {
                _this3.cars_list_result = [];
              }
            }, function (err) {});
          }
        }, {
          key: "gotoDetail",
          value: function gotoDetail(data) {
            var myData = JSON.stringify({
              cars_list_result: data,
              redirect: '/favorite'
            });
            this.router.navigate(['/car-detail'], {
              queryParams: {
                value: myData
              }
            });
          }
        }, {
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loading.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "paymentInit",
          value: function paymentInit() {
            console.log('Payment initialized');
          }
        }, {
          key: "paymentDone",
          value: function paymentDone(ref) {
            this.title = 'Payment successfull';
            console.log(this.title, ref);
          }
        }, {
          key: "paymentCancel",
          value: function paymentCancel() {
            console.log('payment failed');
          }
        }]);

        return FavoritePage;
      }();

      FavoritePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      FavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorite.page.scss */
        "./src/app/favorite/favorite.page.scss"))["default"]]
      })], FavoritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favorite-favorite-module-es5.js.map
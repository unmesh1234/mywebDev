(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-wrapper\" [ngClass]=\"{'toggled' : getSideBarState()}\">\n  <app-sidebar></app-sidebar>\n  <main class=\"page-content\">\n<!--       <div class=\"container-fluid\">\n       \n              <div class=\"form-group col-md-12\">\n            \n                 \n                 <img src=\"assets/img/user.jpg\" alt=\"angular logo\" width=\"70px\">\n             \n                   \n                 <i class=\"fa fa-bars menu-bar\" (click)=\"toggleSidebar()\"></i>\n             \n              </div>\n         \n      </div> -->\n      <app-dashboard></app-dashboard>\n\n    \n      <div class=\"overlay\" (click)=\"toggleSidebar()\" [ngClass]=\"{'show' : !getSideBarState()}\"></div>\n  </main>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  height: 100vh; }\n  .page-wrapper .page-content {\n    display: inline-block;\n    width: 100%;\n    padding-top: 20px;\n    transition: padding-left .3s ease; }\n  @media screen and (min-width: 768px) {\n      .page-wrapper .page-content {\n        padding-left: 300px; } }\n  .page-wrapper .page-content .overlay {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 998;\n      background: #000;\n      opacity: .5;\n      display: none; }\n  @media screen and (max-width: 768px) {\n        .page-wrapper .page-content .overlay.show {\n          display: block; } }\n  .page-wrapper .sidebar {\n    left: 0px; }\n  .page-wrapper.toggled .page-content {\n    padding-left: 0; }\n  .page-wrapper .attribution {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    padding: 5px;\n    margin: 5px;\n    letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXG15LXNjaG9vbC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQW1EZDtFQXBERDtJQUlJLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsa0JBQWlCO0lBQ2pCLGtDQUFpQyxFQXdCbEM7RUF0QkM7TUFUSjtRQVVNLG9CQUFtQixFQXFCdEIsRUFBQTtFQS9CSDtNQWNNLGdCQUFlO01BQ2YsT0FBTTtNQUNOLFNBQVE7TUFDUixVQUFTO01BQ1QsUUFBTztNQUNQLGFBQVk7TUFDWixpQkFBZ0I7TUFDaEIsWUFBVztNQUNYLGNBQWEsRUFRZDtFQUpHO1FBMUJSO1VBMkJVLGVBQWMsRUFFakIsRUFBQTtFQTdCUDtJQWtDSSxVQUFTLEVBQ1Y7RUFuQ0g7SUF3Q00sZ0JBQWUsRUFDaEI7RUF6Q0w7SUE2Q0ksZ0JBQWU7SUFDZixVQUFTO0lBQ1QsU0FBUTtJQUNSLGFBQVk7SUFDWixZQUFXO0lBQ1gsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAuM3MgZWFzZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICAgIH1cblxuICAgIC5vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDk5ODtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICYuc2hvdyB7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cblxuICAmLnRvZ2dsZWQge1xuXG4gICAgLnBhZ2UtY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLmF0dHJpYnV0aW9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.service */ "./src/app/sidebar/sidebar.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sidebarservice) {
        this.sidebarservice = sidebarservice;
        this.title = 'angular-pro-sidebar';
    }
    AppComponent.prototype.toggleSidebar = function () {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    };
    AppComponent.prototype.getSideBarState = function () {
        return this.sidebarservice.getSidebarState();
    };
    AppComponent.prototype.hideSidebar = function () {
        this.sidebarservice.setSidebarState(false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/header/header.component */ "./src/app/dashboard/header/header.component.ts");
/* harmony import */ var _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/footer/footer.component */ "./src/app/dashboard/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]
            ],
            providers: [{
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-header></app-header>\n\n<main>\n\t\n\n\t<app-home></app-home>\n</main>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown > .dropdown-menu {\n  top: 200%;\n  transition: 0.3s all ease-in-out; }\n\n.dropdown:hover > .dropdown-menu {\n  display: block;\n  top: 100%; }\n\n.dropdown > .dropdown-toggle:active {\n  /*Without this, clicking will make it sticky*/\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Y6XFxteS1zY2hvb2wvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBUztFQUNULGlDQUFnQyxFQUNqQzs7QUFDRDtFQUNFLGVBQWM7RUFDZCxVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSw4Q0FBOEM7RUFDNUMscUJBQW9CLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bj4uZHJvcGRvd24tbWVudSB7XHJcbiAgdG9wOiAyMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24+LmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUge1xyXG4gIC8qV2l0aG91dCB0aGlzLCBjbGlja2luZyB3aWxsIG1ha2UgaXQgc3RpY2t5Ki9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/dashboard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/dashboard/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <div class=\"container-fluid\">\n       \n              <div class=\"form-group col-md-12\">\n            \n                 \n                 <img src=\"assets/img/user.jpg\" alt=\"angular logo\" width=\"70px\">\n             \n                   \n                 <i class=\"fa fa-bars menu-bar\" (click)=\"toggleSidebar()\"></i>\n             \n<!-- \n           <span style=\"float: right;\">  </span> -->\n\n\n           <div class=\"\" style=\"float: right;\">\n<!--       <nav>  \n      \t<ul>                             \n  <div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Tutorials\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n    <div class=\"dropdown\">\n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Tutorials\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n</ul>\n</nav> -->\n\n<div class=\"topnav\">\n\n  <a class=\"active\" href=\"#home\"> \n    <button class=\"btn btn-default\" type=\"button\">Home\n   </button>\n  </a>\n  <a class=\"active\" href=\"#home\"><div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">About\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div></a>\n\n\n\n  <a href=\"#news\">\n<div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Syllabus\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n\n  </a>\n  <a href=\"#contact\">\n  \t\n<div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Admission\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n\n  </a>\n  <a href=\"#about\">\n  \t\n  \t<div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Gallery\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n  </a>\n<a href=\"#about\">\n  \t\n  \t<div class=\"dropdown\">\n  \n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Contact US\n   </button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n    </ul>\n  </div>\n  </a>\n\n</div>\n\n</div>\n\n\n\n\n              </div>\n\n\n      </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-submenu {\n  position: relative; }\n\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -1px; }\n\n.topnav a {\n  float: left;\n  text-align: center;\n  padding: 4px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hlYWRlci9GOlxcbXktc2Nob29sL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsT0FBTTtFQUNOLFdBQVU7RUFDVixpQkFBZ0IsRUFDakI7O0FBR0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1zdWJtZW51IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1zdWJtZW51IC5kcm9wZG93bi1tZW51IHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcblxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLy8gLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMDsgLy8gcmVtb3ZlIHRoZSBnYXAgc28gaXQgZG9lc24ndCBjbG9zZVxyXG4vLyAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.service */ "./src/app/sidebar/sidebar.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarservice) {
        this.sidebarservice = sidebarservice;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    };
    HeaderComponent.prototype.getSideBarState = function () {
        return this.sidebarservice.getSidebarState();
    };
    HeaderComponent.prototype.hideSidebar = function () {
        this.sidebarservice.setSidebarState(false);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" class=\"sidebar\" [ngClass]=\"{'toggled' : getSideBarState()}\">\n  <div class=\"sidebar-content\">\n    <perfect-scrollbar>\n      <!-- <div class=\"sidebar-header\"> -->\n      <!--   <a href=\"#\" style=\"\n    position: absolute;\n    right: 10px;\n\"(click)=\"toggleSidebar()\">close</a> -->\n<!-- \n<a>\n<i class=\"fa fa-times-circle\" aria-hidden=\"true\" (click)=\"toggleSidebar()\" style=\"\n    position: absolute;\n    right: 10px;\n\"></i>\n</a> -->\n    <!--   </div> -->\n\n      <div class=\"sidebar-profile\">\n        <div class=\"user-pic\">\n          <img class=\"img-responsive img-rounded\" src=\"assets/img/user.jpg\" alt=\"User picture\">\n        </div>\n        <div class=\"user-info\">\n          <span class=\"user-name\">\n            <strong>Unmesh Biswas</strong>          <a>\n<i class=\"fa fa-times-circle\" aria-hidden=\"true\" (click)=\"toggleSidebar()\" style=\"\n    position: absolute;\n    right: 10px; top: 25px;\n\"></i>\n</a>\n          </span>\n\n        </div>\n      </div>\n      <div class=\"sidebar-menu\">\n        <ul>\n          <li *ngFor=\"let menu of menus\" [ngClass]=\"{'active': menu.active , 'sidebar-dropdown':menu.type === 'dropdown' , 'header-menu':menu.type === 'header'}\" >\n            <span *ngIf=\"menu.type === 'header'\" >{{menu.title}}</span>\n            <a *ngIf=\"menu.type !== 'header'\" href=\"#\" (click)='toggle(menu)'  style=\"\n    display: flex;\n    align-items: flex-end;\n\">\n              <i class=\"{{menu.icon}}\"></i>\n              <span>{{menu.title}}</span>\n            </a>\n            <div *ngIf=\"menu.type === 'dropdown'\" class=\"sidebar-submenu\" [@slide]=\"getState(menu)\">\n              <ul>\n                <li *ngFor=\"let submenu of menu.submenus\" >\n                  <a href=\"#\"  style=\"\n    display: flex;\n    align-items: flex-end;\n\"> {{submenu.title}}\n                   \n                  </a>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </perfect-scrollbar>\n  </div>\n </nav>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg); }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg); }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg); }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg); }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@-webkit-keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0; } }\n\n@keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0; } }\n\n.sidebar {\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0px;\n  z-index: 999;\n  transition: left .3s ease; }\n\n.sidebar a {\n    text-decoration: none;\n    transition: color .3s ease; }\n\n.sidebar .sidebar-content {\n    max-height: calc(100% - 30px);\n    height: calc(100% - 30px);\n    overflow-y: auto;\n    position: relative; }\n\n.sidebar .sidebar-content .sidebar-header {\n      padding: 10px 20px;\n      display: flex;\n      align-items: center; }\n\n.sidebar .sidebar-content .sidebar-header > a {\n        text-transform: uppercase;\n        font-weight: bold;\n        flex-grow: 1;\n        text-decoration: none; }\n\n.sidebar .sidebar-content .sidebar-header #close-sidebar {\n        cursor: pointer;\n        font-size: 20px;\n        transition: color .3s ease; }\n\n.sidebar .sidebar-content .sidebar-profile {\n      padding: 20px;\n      overflow: hidden; }\n\n.sidebar .sidebar-content .sidebar-profile .user-pic {\n        float: left;\n        width: 60px;\n        padding: 2px;\n        border-radius: 12px;\n        margin-right: 15px;\n        overflow: hidden; }\n\n.sidebar .sidebar-content .sidebar-profile .user-pic img {\n          -o-object-fit: cover;\n             object-fit: cover;\n          height: 100%;\n          width: 100%; }\n\n.sidebar .sidebar-content .sidebar-profile .user-info {\n        float: left; }\n\n.sidebar .sidebar-content .sidebar-profile .user-info > span {\n          display: block; }\n\n.sidebar .sidebar-content .sidebar-profile .user-info .user-role {\n          font-size: 12px; }\n\n.sidebar .sidebar-content .sidebar-profile .user-info .user-status {\n          font-size: 11px;\n          margin-top: 4px; }\n\n.sidebar .sidebar-content .sidebar-profile .user-info .user-status i {\n            font-size: 8px;\n            margin-right: 4px;\n            color: #5cb85c; }\n\n.sidebar .sidebar-content .sidebar-search > div {\n      padding: 10px 20px; }\n\n.sidebar .sidebar-content .sidebar-search .input-group-append .input-group-text {\n      border-left: 0; }\n\n.sidebar .sidebar-content .sidebar-menu {\n      padding-bottom: 10px; }\n\n.sidebar .sidebar-content .sidebar-menu .header-menu span {\n        font-weight: bold;\n        font-size: 14px;\n        padding: 15px 20px 5px 20px;\n        display: inline-block; }\n\n.sidebar .sidebar-content .sidebar-menu ul {\n        list-style-type: none;\n        padding: 0;\n        margin: 0; }\n\n.sidebar .sidebar-content .sidebar-menu ul li a {\n          display: inline-block;\n          width: 100%;\n          text-decoration: none;\n          position: relative;\n          padding: 8px 30px 8px 20px; }\n\n.sidebar .sidebar-content .sidebar-menu ul li a i {\n            margin-right: 10px;\n            font-size: 12px;\n            width: 30px;\n            height: 30px;\n            line-height: 30px;\n            text-align: center;\n            border-radius: 4px; }\n\n.sidebar .sidebar-content .sidebar-menu ul li a:hover > i::before {\n            display: inline-block;\n            -webkit-animation: swing ease-in-out .5s 1 alternate;\n                    animation: swing ease-in-out .5s 1 alternate; }\n\n.sidebar .sidebar-content .sidebar-menu ul li a span.label,\n          .sidebar .sidebar-content .sidebar-menu ul li a span.badge {\n            float: right;\n            margin-top: 8px;\n            margin-left: 5px; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown > a:after {\n        font-family: \"Font Awesome 5 Free\";\n        font-weight: 900;\n        content: \"\\f105\";\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        text-align: center;\n        background: 0 0;\n        position: absolute;\n        right: 15px;\n        top: 14px;\n        transition: -webkit-transform .3s ease;\n        transition: transform .3s ease;\n        transition: transform .3s ease, -webkit-transform .3s ease; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu {\n        overflow: hidden; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\n          padding: 5px 0; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\n          padding-left: 25px;\n          font-size: 13px; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\n            content: \"\\f111\";\n            font-family: \"Font Awesome 5 Free\";\n            font-weight: 400;\n            font-style: normal;\n            display: inline-block;\n            text-align: center;\n            text-decoration: none;\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n            margin-right: 10px;\n            font-size: 8px; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\n          .sidebar .sidebar-content .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\n            float: right;\n            margin-top: 0px; }\n\n.sidebar .sidebar-content .sidebar-menu .sidebar-dropdown.active > a:after {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        right: 15px; }\n\n.sidebar .sidebar-footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    display: flex; }\n\n.sidebar .sidebar-footer > div {\n      flex-grow: 1;\n      text-align: center;\n      height: 30px;\n      line-height: 30px;\n      position: static;\n      display: flex; }\n\n.sidebar .sidebar-footer > div > a {\n        flex-grow: 1; }\n\n.sidebar .sidebar-footer > div a .notification {\n        position: absolute;\n        top: 0; }\n\n.sidebar .sidebar-footer .dropdown-menu {\n      bottom: 31px;\n      left: 0 !important;\n      top: initial !important;\n      right: 0 !important;\n      -webkit-transform: none !important;\n              transform: none !important;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      font-size: .9rem; }\n\n.sidebar .sidebar-footer .messages .dropdown-item {\n      padding: .25rem 1rem; }\n\n.sidebar .sidebar-footer .messages .messages-header {\n      padding: 0 1rem; }\n\n.sidebar .sidebar-footer .messages .message-content {\n      display: flex; }\n\n.sidebar .sidebar-footer .messages .message-content .pic {\n        width: 40px;\n        height: 40px;\n        border-radius: 4px;\n        overflow: hidden; }\n\n.sidebar .sidebar-footer .messages .message-content .pic img {\n          -o-object-fit: cover;\n             object-fit: cover;\n          height: 100%; }\n\n.sidebar .sidebar-footer .messages .message-content .content {\n        line-height: 1.6;\n        padding-left: 5px;\n        width: calc(100% - 40px); }\n\n.sidebar .sidebar-footer .messages .message-content .content .message-title {\n          font-size: 13px; }\n\n.sidebar .sidebar-footer .messages .message-content .content .message-detail {\n          font-size: 12px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n.sidebar .sidebar-footer .notifications .dropdown-item {\n      padding: .25rem 1rem; }\n\n.sidebar .sidebar-footer .notifications .notifications-header {\n      padding: 0 1rem; }\n\n.sidebar .sidebar-footer .notifications .notification-content {\n      display: flex; }\n\n.sidebar .sidebar-footer .notifications .notification-content .icon {\n        width: 40px;\n        height: 40px; }\n\n.sidebar .sidebar-footer .notifications .notification-content .icon i {\n          width: 35px;\n          height: 35px;\n          text-align: center;\n          line-height: 35px;\n          border-radius: 4px; }\n\n.sidebar .sidebar-footer .notifications .notification-content .content {\n        line-height: 1.6;\n        padding-left: 5px;\n        width: calc(100% - 40px); }\n\n.sidebar .sidebar-footer .notifications .notification-content .content .notification-time {\n          font-size: .7rem;\n          color: #828282; }\n\n.sidebar .sidebar-footer .notifications .notification-content .content .notification-detail {\n          font-size: 12px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n.sidebar .sidebar-footer .badge-sonar {\n      display: inline-block;\n      background: #980303;\n      border-radius: 50%;\n      height: 8px;\n      width: 8px;\n      position: absolute;\n      top: 0; }\n\n.sidebar .sidebar-footer .badge-sonar:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        border: 2px solid #980303;\n        opacity: 0;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        -webkit-animation: sonar 1.5s infinite;\n                animation: sonar 1.5s infinite; }\n\n/*------------------------------default theme---------------------------------*/\n\n.sidebar {\n  background-color: #1d1d1d; }\n\n.sidebar .sidebar-profile,\n  .sidebar .sidebar-search,\n  .sidebar .sidebar-menu {\n    border-top: 1px solid #2b2b2b; }\n\n.sidebar .sidebar-search input.search-menu,\n  .sidebar .sidebar-search .input-group-text {\n    border-color: #2b2b2b;\n    box-shadow: none; }\n\n.sidebar .sidebar-profile .user-info .user-role,\n  .sidebar .sidebar-profile .user-info .user-status,\n  .sidebar .sidebar-search input.search-menu,\n  .sidebar .sidebar-search .input-group-text,\n  .sidebar .sidebar-header > a,\n  .sidebar .sidebar-menu ul li a,\n  .sidebar .sidebar-footer > div > a,\n  .sidebar #close-sidebar {\n    color: #bdbdbd; }\n\n.sidebar .sidebar-menu ul li:hover > a,\n  .sidebar .sidebar-menu .sidebar-dropdown.active > a,\n  .sidebar .sidebar-profile .user-info,\n  .sidebar .sidebar-header > a:hover,\n  .sidebar .sidebar-footer > div > a:hover i,\n  .sidebar #close-sidebar:hover {\n    color: #ffffff; }\n\n.sidebar ul li:hover a i,\n  .sidebar .sidebar-dropdown .sidebar-submenu li a:hover:before,\n  .sidebar .sidebar-search input.search-menu:focus + span,\n  .sidebar .sidebar-menu .sidebar-dropdown.active a i {\n    color: #ffffff; }\n\n.sidebar .sidebar-menu ul li a i,\n  .sidebar .sidebar-menu .sidebar-dropdown div,\n  .sidebar .sidebar-search input.search-menu,\n  .sidebar .sidebar-search .input-group-text {\n    background-color: #2b2b2b;\n    border: none;\n    margin-left: 1px; }\n\n.sidebar .sidebar-menu .header-menu span {\n    color: #6c7b88; }\n\n.sidebar .sidebar-footer {\n    background-color: #2b2b2b;\n    box-shadow: 0px -1px 5px #131212;\n    border-top: 1px solid #3a3a3a; }\n\n.sidebar .sidebar-footer > div:first-child {\n    border-left: none; }\n\n.sidebar .sidebar-footer > div:last-child {\n    border-right: none; }\n\n.sidebar.sidebar-bg {\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat; }\n\n.sidebar.sidebar-bg:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(29, 29, 29, 0.8); }\n\n.sidebar.sidebar-bg .sidebar-profile,\n    .sidebar.sidebar-bg .sidebar-search,\n    .sidebar.sidebar-bg .sidebar-menu {\n      border-top: 1px solid rgba(255, 255, 255, 0.1); }\n\n.sidebar.sidebar-bg .sidebar-search input.search-menu,\n    .sidebar.sidebar-bg .sidebar-search .input-group-text {\n      border-color: rgba(255, 255, 255, 0.1);\n      box-shadow: none; }\n\n.sidebar.sidebar-bg .sidebar-menu ul li a i,\n    .sidebar.sidebar-bg .sidebar-menu .sidebar-dropdown div,\n    .sidebar.sidebar-bg .sidebar-search input.search-menu,\n    .sidebar.sidebar-bg .sidebar-search .input-group-text {\n      background-color: rgba(255, 255, 255, 0.1); }\n\n.sidebar.sidebar-bg .sidebar-footer {\n      background-color: rgba(43, 43, 43, 0.5);\n      box-shadow: 0px -1px 5px rgba(43, 43, 43, 0.5);\n      border-top: 1px solid rgba(255, 255, 255, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9GOlxcbXktc2Nob29sL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFHMUI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUE7RUFHM0I7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFHMUI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUEsRUFBQTs7QUFsQzNCO0VBQ0U7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFHMUI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQUE7RUFHM0I7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUE7RUFHekI7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCLEVBQUE7RUFHMUI7SUFDRSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQUEsRUFBQTs7QUFJM0I7RUFDRTtJQUNFLDhCQUFvQjtZQUFwQixzQkFBb0I7SUFDcEIsV0FBVSxFQUFBO0VBR1o7SUFDRSw0QkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLFdBQVUsRUFBQSxFQUFBOztBQVJk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LHVDQXRHc0M7TUF1R3RDLGlCQUFnQixFQUNqQjs7QUFsR0w7Ozs7TUF3R00sMkNBOUdzQyxFQWdIdkM7O0FBMUdMO01BNkdNLHdDQWxIK0I7TUFtSC9CLCtDQW5IK0I7TUFvSC9CLCtDQXJIc0MsRUFzSHZDIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzd2luZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzb25hciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgdHJhbnNpdGlvbjogbGVmdCAuM3MgZWFzZTtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XG4gIH1cblxuICAuc2lkZWJhci1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICA+YSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2Nsb3NlLXNpZGViYXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItcHJvZmlsZSB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgLnVzZXItcGljIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgPnNwYW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItcm9sZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItc3RhdHVzIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1Y2I4NWM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lkZWJhci1zZWFyY2gge1xuXG4gICAgICA+ZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItbWVudSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgLmhlYWRlci1tZW51IHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xuXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXI+aTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgLjVzIDEgYWx0ZXJuYXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ubGFiZWwsXG4gICAgICAgICAgc3Bhbi5iYWRnZSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2lkZWJhci1kcm9wZG93biB7XG4gICAgICAgID5hOmFmdGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogMCAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xuXG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhci1zdWJtZW51IHtcbiAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYmFkZ2UsXG4gICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlPmE6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgfVxuXG4gIC5zaWRlYmFyLWZvb3RlciB7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA+ZGl2IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgID5hIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICBhIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICBib3R0b206IDMxcHg7XG4gICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgfVxuXG4gICAgLm1lc3NhZ2VzIHtcbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlcy1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5waWMge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG5cbiAgICAgICAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lc3NhZ2UtZGV0YWlsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb25zIHtcbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb25zLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcblxuICAgICAgICAgIC5ub3RpZmljYXRpb24tdGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vdGlmaWNhdGlvbi1kZXRhaWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5iYWRnZS1zb25hciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTgwMzAzO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTgwMzAzO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFuaW1hdGlvbjogc29uYXIgMS41cyBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWZhdWx0IHRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiRiZy1zaWRlYmFyLXdyYXBwZXIgOiAjMWQxZDFkO1xuJGJvcmRlci1jb2xvciA6ICMyYjJiMmI7XG4kZm9vdGVyLXRvcC1ib3JkZXItY29sb3IgOiMzYTNhM2E7XG4kY29sb3I6I2JkYmRiZDtcbiRoZWFkZXItbWVudS1jb2xvciA6IzZjN2I4ODtcbiRob3Zlci1jb2xvcjojZmZmZmZmO1xuJHNoYWRvdy1jb2xvcjojMTMxMjEyO1xuJGJnLXNjcm9sbGJhciA6IzYzNjM2MztcblxuLy8gY29sb3JzIHdpdGggYmFja2dvdW5kIGltYWdlXG4kaW1nLWJnLXNpZGViYXItd3JhcHBlciA6IHJnYmEoMjksIDI5LCAyOSwgMC44KTtcbiRpbWctYm9yZGVyLWNvbG9yIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuJGltZy1iZy1mb290ZXIgOnJnYmEoNDMsIDQzLCA0MywgMC41KTtcbiRpbWctc2hhZG93LWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcblxuXG5cbi5zaWRlYmFyIHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctc2lkZWJhci13cmFwcGVyO1xuXG4gIC5zaWRlYmFyLXByb2ZpbGUsXG4gIC5zaWRlYmFyLXNlYXJjaCxcbiAgLnNpZGViYXItbWVudSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIH1cblxuICAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXG4gIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAuc2lkZWJhci1wcm9maWxlIC51c2VyLWluZm8gLnVzZXItcm9sZSxcbiAgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvIC51c2VyLXN0YXR1cyxcbiAgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuICAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4gIC5zaWRlYmFyLWhlYWRlcj5hLFxuICAuc2lkZWJhci1tZW51IHVsIGxpIGEsXG4gIC5zaWRlYmFyLWZvb3Rlcj5kaXY+YSxcbiAgI2Nsb3NlLXNpZGViYXIge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cblxuICAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyPmEsXG4gIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlPmEsXG4gIC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyxcbiAgLnNpZGViYXItaGVhZGVyPmE6aG92ZXIsXG4gIC5zaWRlYmFyLWZvb3Rlcj5kaXY+YTpob3ZlciBpLFxuICAjY2xvc2Utc2lkZWJhcjpob3ZlciB7XG4gICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgfVxuXG4gIHVsIGxpOmhvdmVyIGEgaSxcbiAgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSxcbiAgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51OmZvY3VzK3NwYW4sXG4gIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XG4gICAgY29sb3I6ICRob3Zlci1jb2xvcjtcbiAgfVxuXG4gIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxuICAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcbiAgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuICAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIH1cblxuICAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgICBjb2xvcjogJGhlYWRlci1tZW51LWNvbG9yO1xuICB9XG5cbiAgLnNpZGViYXItZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDVweCAkc2hhZG93LWNvbG9yO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZm9vdGVyLXRvcC1ib3JkZXItY29sb3I7XG4gIH1cblxuICAuc2lkZWJhci1mb290ZXI+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgfVxuXG4gIC5zaWRlYmFyLWZvb3Rlcj5kaXY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgLy8gc3R5bGVzIHdpdGggYmFja2dyb3VuZCBpbWFnZVxuICAmLnNpZGViYXItYmcge1xuXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JnMS5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbWctYmctc2lkZWJhci13cmFwcGVyO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLXByb2ZpbGUsXG4gICAgLnNpZGViYXItc2VhcmNoLFxuICAgIC5zaWRlYmFyLW1lbnUge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRpbWctYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcbiAgICAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkaW1nLWJvcmRlci1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNpZGViYXItbWVudSB1bCBsaSBhIGksXG4gICAgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsXG4gICAgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuICAgIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW1nLWJvcmRlci1jb2xvcjtcblxuICAgIH1cblxuICAgIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW1nLWJnLWZvb3RlcjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDVweCAkaW1nLWJnLWZvb3RlcjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaW1nLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/sidebar/sidebar.service.ts");




// import { MenusService } from './menus.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarservice) {
        this.sidebarservice = sidebarservice;
        this.menus = [];
        this.menus = sidebarservice.getMenuList();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.getSideBarState = function () {
        return this.sidebarservice.getSidebarState();
    };
    SidebarComponent.prototype.toggle = function (currentMenu) {
        if (currentMenu.type === 'dropdown') {
            this.menus.forEach(function (element) {
                if (element === currentMenu) {
                    currentMenu.active = !currentMenu.active;
                }
                else {
                    element.active = false;
                }
            });
        }
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    };
    SidebarComponent.prototype.getState = function (currentMenu) {
        if (currentMenu.active) {
            return 'down';
        }
        else {
            return 'up';
        }
    };
    SidebarComponent.prototype.hasBackgroundImage = function () {
        return this.sidebarservice.hasBackgroundImage;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('up <=> down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200))
                ])
            ],
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.service.ts":
/*!********************************************!*\
  !*** ./src/app/sidebar/sidebar.service.ts ***!
  \********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.toggled = true;
        this._hasBackgroundImage = true;
        this.menus = [
            {
                title: 'Home',
                icon: 'fa fa-home',
            },
            {
                title: 'About',
                icon: 'fa fa-info',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Principle Message',
                    },
                    {
                        title: 'Aims & Objectives'
                    },
                    {
                        title: 'Academic Advisory Council'
                    }
                ]
            },
            {
                title: 'Syllabus',
                icon: 'fa fa-book',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Science side (PCM)',
                    },
                    {
                        title: 'Science side(PCB)'
                    },
                    {
                        title: 'Commarce side'
                    },
                    {
                        title: 'Art side'
                    }
                ]
            },
            {
                title: 'Admissions',
                icon: 'fa fa-university',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'why vivekanand vidyapeth',
                    },
                    {
                        title: 'Apply Online'
                    },
                    {
                        title: 'Addmission Procedure'
                    },
                    {
                        title: 'Fee Structure'
                    },
                    {
                        title: 'FAQ'
                    }
                ]
            },
            {
                title: 'Gallery',
                icon: 'fa fa-image',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Photos',
                    },
                    {
                        title: '3D 360 virtual tour'
                    },
                    {
                        title: 'Activities'
                    },
                    {
                        title: 'Expert,s Views'
                    }
                ]
            },
            {
                title: 'Contact Us',
                icon: 'fa fa-phone',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'ph-no:895-555-87',
                    },
                    {
                        title: 'Mobile:8941005685'
                    },
                    {
                        title: 'unmeshbiswasuk@gmail.com'
                    }
                ]
            },
        ];
    }
    SidebarService.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    SidebarService.prototype.getSidebarState = function () {
        return this.toggled;
    };
    SidebarService.prototype.setSidebarState = function (state) {
        this.toggled = state;
    };
    SidebarService.prototype.getMenuList = function () {
        return this.menus;
    };
    Object.defineProperty(SidebarService.prototype, "hasBackgroundImage", {
        get: function () {
            return this._hasBackgroundImage;
        },
        set: function (hasBackgroundImage) {
            this._hasBackgroundImage = hasBackgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    SidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\my-school\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
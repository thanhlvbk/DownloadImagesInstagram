module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_document__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_document__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _context$_documentPro = this.context._documentProps,
          html = _context$_documentPro.html,
          errorHtml = _context$_documentPro.errorHtml;
      var className = this.props.className;

      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: className, id: '__next', dangerouslySetInnerHTML: { __html: html } }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: '__next-error', dangerouslySetInnerHTML: { __html: errorHtml } })];
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

// https://vue-hn.now.sh/top


Main.defaultProps = {
  className: ''
};
Main.contextTypes = {
  _documentProps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
};

var AppDocument = function (_Document) {
  _inherits(AppDocument, _Document);

  function AppDocument() {
    _classCallCheck(this, AppDocument);

    return _possibleConstructorReturn(this, (AppDocument.__proto__ || Object.getPrototypeOf(AppDocument)).apply(this, arguments));
  }

  _createClass(AppDocument, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'html',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_document__["Head"],
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-tap-highlight', content: 'no' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'application-name', content: 'Download Images Instagram' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Download Images Instagram' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-TileColor', content: '#5C33AE' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#5C33AE' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://code.getmdl.io' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet prefetch',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.2/dialog-polyfill.min.css'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en'
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'body',
          {
            className: 'jsx-2088123080'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Main, null),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_document__["NextScript"], null),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2088123080',
            css: ['body{font-family:\'Roboto\',\'Helvetica\',\'Arial\',sans-serif;background-color:#f9f9f9;height:100%;min-height:auto !important;}']
          })
        )
      );
    }
  }]);

  return AppDocument;
}(__WEBPACK_IMPORTED_MODULE_3_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AppDocument);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ })
/******/ ]);
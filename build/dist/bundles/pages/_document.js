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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(3);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _document = __webpack_require__(7);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return [_react2.default.createElement('div', { className: className, id: '__next', dangerouslySetInnerHTML: { __html: html } }), _react2.default.createElement('div', { id: '__next-error', dangerouslySetInnerHTML: { __html: errorHtml } })];
    }
  }]);

  return Main;
}(_react.Component);

// https://vue-hn.now.sh/top


Main.defaultProps = {
  className: ''
};
Main.contextTypes = {
  _documentProps: _propTypes2.default.any
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
      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          _document.Head,
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
          _react2.default.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'
          }),
          _react2.default.createElement('meta', { name: 'msapplication-tap-highlight', content: 'no' }),
          _react2.default.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
          _react2.default.createElement('meta', { name: 'application-name', content: 'Download Images Instagram' }),
          _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
          _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
          _react2.default.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Download Images Instagram' }),
          _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#5C33AE' }),
          _react2.default.createElement('meta', { name: 'theme-color', content: '#5C33AE' }),
          _react2.default.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }),
          _react2.default.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }),
          _react2.default.createElement('link', { rel: 'dns-prefetch', href: 'https://code.getmdl.io' }),
          _react2.default.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en'
          }),
          _react2.default.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
          }),
          _react2.default.createElement('link', {
            rel: 'stylesheet prefetch',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.2/dialog-polyfill.min.css'
          }),
          _react2.default.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css'
          }),
          _react2.default.createElement('link', {
            rel: 'stylesheet',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css'
          }),
          _react2.default.createElement('link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en'
          }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' })
        ),
        _react2.default.createElement(
          'body',
          {
            className: 'jsx-2088123080'
          },
          _react2.default.createElement(Main, null),
          _react2.default.createElement(_document.NextScript, null),
          _react2.default.createElement(_style2.default, {
            styleId: '2088123080',
            css: ['body{font-family:\'Roboto\',\'Helvetica\',\'Arial\',sans-serif;background-color:#f9f9f9;height:100%;min-height:auto !important;}']
          })
        )
      );
    }
  }]);

  return AppDocument;
}(_document2.default);

exports.default = AppDocument;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ })
/******/ ]);
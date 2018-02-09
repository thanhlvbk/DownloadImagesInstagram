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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_document__);
var _jsxFileName = '/var/www/download-images-instagram/pages/_document.js';

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

      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: className, id: '__next', dangerouslySetInnerHTML: { __html: html }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: '__next-error', dangerouslySetInnerHTML: { __html: errorHtml }, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })];
    }
  }]);

  return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

// https://vue-hn.now.sh/top


Main.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
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
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_document__["Head"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-tap-highlight', content: 'no', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'application-name', content: 'Download Images Instagram', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Download Images Instagram', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-TileColor', content: '#5C33AE', __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#5C33AE', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com', __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com', __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'dns-prefetch', href: 'https://code.getmdl.io', __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet prefetch',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.2/dialog-polyfill.min.css',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'preload',
            as: 'style',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet',
            href: 'https://code.getmdl.io/1.3.0/material.deep_purple-green.min.css',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'body',
          {
            className: 'jsx-2088123080',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Main, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_document__["NextScript"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2088123080',
            css: 'body{font-family:\'Roboto\',\'Helvetica\',\'Arial\',sans-serif;background-color:#f9f9f9;height:100%;min-height:auto !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRjZCLEFBR3NFLG9EQUM5Qix5QkFDYixZQUNlLDJCQUM3QiIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3Zhci93d3cvZG93bmxvYWQtaW1hZ2VzLWluc3RhZ3JhbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRG9jdW1lbnQsIHtIZWFkLCBOZXh0U2NyaXB0fSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gIH1cblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIF9kb2N1bWVudFByb3BzOiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtodG1sLCBlcnJvckh0bWx9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3Qge2NsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIFtcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWx9fSAvPixcbiAgICAgIDxkaXYgaWQ9XCJfX25leHQtZXJyb3JcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZXJyb3JIdG1sfX0gLz4sXG4gICAgXVxuICB9XG59XG5cbi8vIGh0dHBzOi8vdnVlLWhuLm5vdy5zaC90b3BcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcERvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIngtdWEtY29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ubyxtaW5pbWFsLXVpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiogRGlzYWJsZSB0YXAgaGlnaGxpZ2h0IG9uIElFICovfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLXRhcC1oaWdobGlnaHRcIiBjb250ZW50PVwibm9cIiAvPlxuXG4gICAgICAgICAgey8qKiBBZGQgdG8gaG9tZXNjcmVlbiBmb3IgQ2hyb21lIG9uIEFuZHJvaWQgKi99XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJEb3dubG9hZCBJbWFnZXMgSW5zdGFncmFtXCIgLz5cblxuICAgICAgICAgIHsvKiogQWRkIHRvIGhvbWVzY3JlZW4gZm9yIFNhZmFyaSBvbiBpT1MgKi99XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJibGFja1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkRvd25sb2FkIEltYWdlcyBJbnN0YWdyYW1cIiAvPlxuXG4gICAgICAgICAgey8qKiBUaWxlIGljb24gZm9yIFdpbjggKDE0NHgxNDQgKyB0aWxlIGNvbG9yKSAqL31cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzVDMzNBRVwiIC8+XG5cbiAgICAgICAgICB7LyoqIENvbG9yIHRoZSBzdGF0dXMgYmFyIG9uIG1vYmlsZSBkZXZpY2VzICovfVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNUMzM0FFXCIgLz5cblxuICAgICAgICAgIDxsaW5rIHJlbD1cImRucy1wcmVmZXRjaFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJkbnMtcHJlZmV0Y2hcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiZG5zLXByZWZldGNoXCIgaHJlZj1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW9cIiAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86cmVndWxhcixib2xkLGl0YWxpYyx0aGluLGxpZ2h0LGJvbGRpdGFsaWMsYmxhY2ssbWVkaXVtJmFtcDtsYW5nPWVuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXQgcHJlZmV0Y2hcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2RpYWxvZy1wb2x5ZmlsbC8wLjQuMi9kaWFsb2ctcG9seWZpbGwubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLmRlZXBfcHVycGxlLWdyZWVuLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qKiBQYWdlIHN0eWxlcyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5kZWVwX3B1cnBsZS1ncmVlbi5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiogRm9udHMgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOnJlZ3VsYXIsYm9sZCxpdGFsaWMsdGhpbixsaWdodCxib2xkaXRhbGljLGJsYWNrLG1lZGl1bSZhbXA7bGFuZz1lblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/_document.js */'
          })
        )
      );
    }
  }]);

  return AppDocument;
}(__WEBPACK_IMPORTED_MODULE_3_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AppDocument);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map
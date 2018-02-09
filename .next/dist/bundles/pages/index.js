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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./components/Button/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./components/utils/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/var/www/download-images-instagram/components/Button/Button.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var debug = __webpack_require__("debug")('react-mdl-library:Button:Button');

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.getFrameCount = function () {
      return _this.frameCount;
    };

    _this.setFrameCount = function (fC) {
      _this.frameCount = fC;
    };

    _this.addAnimating = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* addClass */])(_this.rippleElement, __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* IS_ANIMATING */]);
    };

    _this.removeAnimating = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* removeClass */])(_this.rippleElement, __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* IS_ANIMATING */]);
    };

    _this.downHandler = function (event) {
      _this.displayEffect();

      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = false;
      } else {
        if (event.type === 'touchstart') {
          _this.ignoringMouseDown = true;
        }

        var _this$getFrameCount = _this.getFrameCount(),
            frameCount = _this$getFrameCount.frameCount;

        if (frameCount > 0) {
          return;
        }

        _this.setFrameCount(1);

        var bound = event.currentTarget.getBoundingClientRect();
        var x = null;
        var y = null;
        if (event.clientX === 0 && event.clientY === 0) {
          x = Math.round(bound.width / 2);
          y = Math.round(bound.height / 2);
        } else {
          var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
          x = Math.round(clientX - bound.left);
          y = Math.round(clientY - bound.top);
        }
        _this.setRippleTransform(true, x, y);
        window.requestAnimationFrame(_this.animFrameHandler);
      }
    };

    _this.upHandler = function (event) {
      if (event && event.detail !== 2) {
        // Allow a repaint to occur before removing this class, so the animation
        // shows for tap events, which seem to trigger a mouseup too soon after
        // mousedown.
        window.setTimeout(_this.hideEffect, 0);
      }
    };

    _this.setRippleStyles = function (_ref) {
      var rippleSize = _ref.rippleSize,
          transformString = _ref.transformString;

      if (rippleSize) {
        _this.rippleElement.style.width = rippleSize + 'px';
        _this.rippleElement.style.height = rippleSize + 'px';
      }
      if (transformString) {
        _this.rippleElement.style.webkitTransform = transformString;
        _this.rippleElement.style.msTransform = transformString;
        _this.rippleElement.style.transform = transformString;
      }
    };

    _this.setRippleTransform = function (start, x, y) {
      var transformString = void 0,
          scale = void 0;
      var offset = 'translate(' + x + 'px, ' + y + 'px)';
      if (start) {
        scale = __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* INITIAL_SCALE */];
      } else {
        scale = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* FINAL_SCALE */];
        offset = 'translate(' + _this.boundWidth / 2 + 'px, ' + _this.boundHeight / 2 + 'px)';
      }
      transformString = 'translate(-50%, -50%) ' + offset + scale;

      // debugger
      _this.setRippleStyles({ transformString: transformString });

      if (start) {
        _this.removeAnimating();
      } else {
        _this.addAnimating();
      }
    };

    _this.displayEffect = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* addClass */])(_this.rippleElement, __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* IS_VISIBLE */]);
    };

    _this.hideEffect = function () {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* removeClass */])(_this.rippleElement, __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* IS_VISIBLE */]);
    };

    _this.animFrameHandler = function () {
      if (_this.frameCount-- > 0) {
        window.requestAnimationFrame(_this.animFrameHandler);
      } else {
        _this.setRippleTransform(false);
      }
    };

    _this.componentDidMount = function () {
      _this.buttonElement = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this);
      var ripple = _this.props.ripple;

      if (ripple) {
        _this.rippleElement = _this.buttonElement.querySelectorAll('.mdl-ripple')[0];
        var element = _this.buttonElement;
        var rect = element.getBoundingClientRect();
        _this.boundHeight = rect.height;
        _this.boundWidth = rect.width;
        var rippleSize = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;

        _this.setRippleStyles({ rippleSize: rippleSize });
      }
    };

    _this.frameCount = 0;
    _this.ignoringMouseDown = false;
    return _this;
  }

  /**
   * Getter for frameCount
   * @return {number} the frame count.
   */


  /**
   * Setter for frameCount
   * @param {number} fC the frame count.
   */


  _createClass(Button, [{
    key: 'render',
    value: function render() {
      debug('render button');

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          raised = _props.raised,
          fab = _props.fab,
          disabledProp = _props.disabled,
          ripple = _props.ripple,
          other = _objectWithoutProperties(_props, ['children', 'className', 'color', 'raised', 'fab', 'disabled', 'ripple']);

      var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('mdl-button', 'mdl-js-button', { 'mdl-button--raised': raised }, { 'mdl-button--fab': fab }, { 'mdl-button--primary': color === 'primary' }, { 'mdl-button--accent': color === 'accent' }, { 'mdl-js-ripple-effect': ripple }, className);

      if (ripple) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          _extends({
            className: classes,
            disabled: disabledProp,
            onMouseDown: this.downHandler,
            onTouchStart: this.downHandler,
            onMouseUp: this.upHandler,
            onMouseLeave: this.upHandler,
            onTouchEnd: this.upHandler,
            onBlur: this.upHandler
          }, other, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            }
          }),
          children,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'mdl-button__ripple-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'mdl-ripple', __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              }
            })
          )
        );
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        _extends({ className: classes, disabled: disabledProp }, other, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }),
        children
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  raised: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  fab: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  ripple: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};

Button.defaultProps = {
  children: null,
  className: '',
  color: '',
  raised: false,
  fab: false,
  disabled: false,
  ripple: false
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Button/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INITIAL_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FINAL_SCALE; });
/* unused harmony export RIPPLE_CENTER */
/* unused harmony export RIPPLE_EFFECT_IGNORE_EVENTS */
/* unused harmony export RIPPLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IS_ANIMATING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IS_VISIBLE; });
var INITIAL_SCALE = 'scale(0.0001, 0.0001)';
// export const INITIAL_SIZE = '1px'
// export const INITIAL_OPACITY = '0.4'
// export const FINAL_OPACITY = '0'
var FINAL_SCALE = '';
var RIPPLE_CENTER = 'mdl-ripple--center';
var RIPPLE_EFFECT_IGNORE_EVENTS = 'mdl-js-ripple-effect--ignore-events';
var RIPPLE = 'mdl-ripple';
var IS_ANIMATING = 'is-animating';
var IS_VISIBLE = 'is-visible';

/***/ }),

/***/ "./components/Button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__("./components/Button/Button.js");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */]);

/***/ }),

/***/ "./components/CheckUrlModal/CheckUrlModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog__ = __webpack_require__("./components/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__("./components/Button/index.js");
var _jsxFileName = '/var/www/download-images-instagram/components/CheckUrlModal/CheckUrlModal.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CheckUrlModal = function (_React$PureComponent) {
  _inherits(CheckUrlModal, _React$PureComponent);

  function CheckUrlModal(props) {
    _classCallCheck(this, CheckUrlModal);

    var _this = _possibleConstructorReturn(this, (CheckUrlModal.__proto__ || Object.getPrototypeOf(CheckUrlModal)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(CheckUrlModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showModal = _props.showModal,
          closeModal = _props.closeModal,
          error = _props.error;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__Dialog__["a" /* default */],
          {
            actions: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */],
              { key: 0, onClick: closeModal, color: 'accent', ripple: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              'Ok'
            )],
            close: closeModal,
            open: showModal,
            styleBackdrop: { zIndex: '10', height: '100%', position: 'fixed' },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          error
        )
      );
    }
  }]);

  return CheckUrlModal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

CheckUrlModal.propTypes = {
  showModal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  closeModal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

CheckUrlModal.defaultProps = {};

/* harmony default export */ __webpack_exports__["a"] = (CheckUrlModal);

/***/ }),

/***/ "./components/CheckUrlModal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckUrlModal__ = __webpack_require__("./components/CheckUrlModal/CheckUrlModal.js");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__CheckUrlModal__["a" /* default */]);

/***/ }),

/***/ "./components/Dialog/Dialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isString__ = __webpack_require__("lodash/isString");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/var/www/download-images-instagram/components/Dialog/Dialog.js';





function Dialog(props) {
  var actionsFullWidth = props.actionsFullWidth,
      title = props.title,
      actions = props.actions,
      children = props.children,
      className = props.className,
      style = props.style,
      open = props.open,
      close = props.close,
      disableBackdrop = props.disableBackdrop,
      styleBackdrop = props.styleBackdrop;


  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('mdl-dialog', className);
  var classesObfuscator = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('mdl-layout__obfuscator', { 'is-visible': open });
  var titleDialog = void 0;
  if (__WEBPACK_IMPORTED_MODULE_2_lodash_isString___default()(title)) {
    titleDialog = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      title
    ), {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('mdl-dialog__title')
    });
  }
  if (title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(title)) {
    titleDialog = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(title, {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('mdl-dialog__title', title.props.className)
    });
  }
  var actionsDialog = void 0;
  if (actions) {
    actionsDialog = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      actions
    ), {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': actionsFullWidth
      })
    });
  }
  if (disableBackdrop) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'dialog',
      { key: 0, className: classes, style: style, open: open, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      },
      titleDialog,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'mdl-dialog__content', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        children
      ),
      actionsDialog
    );
  }
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'dialog',
    { key: 0, className: classes, style: style, open: open, __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    },
    titleDialog,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'mdl-dialog__content', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      children
    ),
    actionsDialog
  ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { key: 1, className: classesObfuscator, onClick: close, style: styleBackdrop, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })];
}

Dialog.propTypes = {
  actions: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  open: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  actionsFullWidth: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  close: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  disableBackdrop: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  styleBackdrop: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};

Dialog.defaultProps = {
  actions: null,
  title: null,
  children: null,
  className: '',
  style: {},
  open: false,
  actionsFullWidth: false,
  disableBackdrop: false,
  styleBackdrop: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ "./components/Dialog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog__ = __webpack_require__("./components/Dialog/Dialog.js");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Dialog__["a" /* default */]);

/***/ }),

/***/ "./components/Textfield/Textfield.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./components/utils/index.js");
var _jsxFileName = '/var/www/download-images-instagram/components/Textfield/Textfield.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Textfield = function (_React$PureComponent) {
  _inherits(Textfield, _React$PureComponent);

  function Textfield() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Textfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textfield.__proto__ || Object.getPrototypeOf(Textfield)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function () {
      var currentRowCount = _this.input.value.length;
      var error = _this.props.error;

      var checkValidate = _this.input.validity.valid;

      if (currentRowCount > 0 && error !== null && !checkValidate) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* addClass */])(_this.textField, 'is-dirty');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* addClass */])(_this.textField, 'is-invalid');
      } else if (currentRowCount > 0 && (error === null || checkValidate)) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* addClass */])(_this.textField, 'is-dirty');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* removeClass */])(_this.textField, 'is-invalid');
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* removeClass */])(_this.textField, 'is-dirty');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* removeClass */])(_this.textField, 'is-invalid');
      }

      _this.props.onChangeValue(_this.input.value);
    }, _this.downHandler = function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* addClass */])(_this.textField, 'is-focused');
    }, _this.upHandler = function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* removeClass */])(_this.textField, 'is-focused');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textfield, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          className = _props.className,
          style = _props.style,
          label = _props.label,
          pattern = _props.pattern,
          error = _props.error,
          floatingLabel = _props.floatingLabel,
          rows = _props.rows,
          expandable = _props.expandable,
          value = _props.value;

      var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('mdl-textfield', 'mdl-js-textfield', 'is-upgraded', { 'mdl-textfield--floating-label': floatingLabel }, { 'mdl-textfield--expandable': expandable }, className);
      var children = null;
      if (type === 'input') {
        children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          className: 'mdl-textfield__input',
          type: 'text',
          pattern: pattern,
          ref: function ref(input) {
            _this2.input = input;
          },
          onChange: this.onChange,
          value: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { action: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: classes,
            style: style,
            ref: function ref(div) {
              _this2.textField = div;
            },
            onFocus: this.downHandler,
            onTouchStart: this.downHandler,
            onTouchEnd: this.upHandler,
            onBlur: this.upHandler,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          children,
          expandable && label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mdl-textfield__expandable-holder', __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'mdl-textfield__input', type: 'text', id: 'search-input', __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'mdl-textfield__label', htmlFor: 'sample-expandable', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              label
            )
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'mdl-textfield__label', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            label
          ),
          error !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'mdl-textfield__error', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            error
          )
        )
      );
    }
  }]);

  return Textfield;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Textfield.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  pattern: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  rows: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  expandable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  floatingLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onChangeValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

Textfield.defaultProps = {
  type: 'input',
  className: '',
  style: {},
  label: '',
  pattern: '',
  error: null,
  rows: 1,
  expandable: false,
  floatingLabel: false,
  value: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Textfield);

/***/ }),

/***/ "./components/Textfield/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textfield__ = __webpack_require__("./components/Textfield/Textfield.js");


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Textfield__["a" /* default */]);

/***/ }),

/***/ "./components/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClass;
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    node.className += ' ' + className;
  }
}

function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    node.className = node.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Textfield__ = __webpack_require__("./components/Textfield/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CheckUrlModal__ = __webpack_require__("./components/CheckUrlModal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Button__ = __webpack_require__("./components/Button/index.js");
var _jsxFileName = '/var/www/download-images-instagram/pages/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FileSaver = __webpack_require__("file-saver");

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.onChangeUrl = function (value) {
      _this.setState(function (prevState) {
        return _extends({}, prevState, {
          url: value
        });
      });
      _this.checkUrl(value);
    };

    _this.checkUrl = function (value) {
      var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');

      if (!pattern.test(value) && value.length > 0) {
        _this.setState(function (prevState) {
          return _extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'Invalid URL'
          });
        });
      } else if (value.indexOf("instagram.com") < 0) {
        _this.setState(function (prevState) {
          return _extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'Entered URL is not an instagram.com URL.'
          });
        });
      } else {
        _this.getImageFromUrl(value);
      }
    };

    _this.getImageFromUrl = function (value) {
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(window.location.href + 'get-image/' + value.split("/").toString()).then(function (response) {
        _this.setState({
          url: '',
          image: response.data.img
        });
      });
    };

    _this.downloadImage = function () {
      var image = _this.state.image;

      __WEBPACK_IMPORTED_MODULE_3_axios___default()({
        method: 'get',
        url: image,
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], { type: '' + response.headers['content-type'] });
        var imageName = response.headers.expires + '.' + response.headers['content-type'].split('/')[1];

        FileSaver.saveAs(blob, imageName);
      });
    };

    _this.closeCheckUrlModal = function () {
      _this.setState(function (prevState) {
        return _extends({}, prevState, {
          showCheckUrlModal: false
        });
      });
    };

    _this.state = {
      url: '',
      error: '',
      showCheckUrlModal: false,
      image: null
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          url = _state.url,
          error = _state.error,
          showCheckUrlModal = _state.showCheckUrlModal,
          image = _state.image;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1424380737' + ' ' + 'dii-main',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-1424380737' + ' ' + 'dii-app-name',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          'Download Instagram'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: 'jsx-1424380737' + ' ' + 'dii-slogan',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          'Instagram images preview and download '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Textfield__["a" /* default */], {
          onChangeValue: this.onChangeUrl,
          label: 'Add link instagram ...',
          value: url,
          className: 'dii-input',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CheckUrlModal__["a" /* default */], {
          showModal: showCheckUrlModal,
          closeModal: this.closeCheckUrlModal,
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }),
        image && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: image, className: 'jsx-1424380737' + ' ' + 'dii-image',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7__components_Button__["a" /* default */],
            { raised: true, ripple: true, color: 'accent', onClick: this.downloadImage, className: 'dii-button', __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            },
            'Download'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1424380737',
          css: '.dii-main{text-align:center;padding:0 20px;}.dii-app-name{font-size:35px;font-weight:bold;margin-bottom:0px;}.dii-slogan{font-size:14px;opacity:0.75;margin:0 0 0.75em;}.dii-input{width:87% !important;}.dii-image{display:block;width:95%;margin:0 auto;}.dii-button{margin:15px 0px !important;text-transform:none !important;}.mdl-dialog{z-index:11;padding:0px;}.mdl-dialog__content{padding:20px;font-size:14px;color:#000 !important;}@media screen and (min-width:480px){.dii-main{padding:0 40px;}.dii-app-name{font-size:56px;}.dii-slogan{font-size:21px;}.dii-input{width:63% !important;}.dii-image{width:68%;}}@media screen and (min-width:840px){.dii-input{width:46% !important;}.dii-image{width:50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHMkIsQUFHK0IsQUFJSCxBQUtBLEFBTWxCLEFBRWlCLEFBTWQsQUFHVyxBQUtYLEFBS2lCLEFBR0EsQUFHQSxBQUlsQixBQUVhLEFBTWIsQUFFYSxVQVBaLEFBUUEsQ0E5QlksRUFJRyxDQWJMLENBYk8sQUFLSixBQTJCYixBQUdBLEFBR0EsR0ExQ2UsR0FjakIsQUErQkUsQUFRQSxFQTFCRixDQVRnQixHQUlpQixDQVpiLEFBcUJJLElBekJ6QixDQUxDLEtBa0JBLFFBUkEsSUFMQSxBQTBCQSxRQVRBIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii92YXIvd3d3L2Rvd25sb2FkLWltYWdlcy1pbnN0YWdyYW0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRmaWVsZCdcbmltcG9ydCBDaGVja1VybE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tVcmxNb2RhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nXG5cbmNvbnN0IEZpbGVTYXZlciA9IHJlcXVpcmUoJ2ZpbGUtc2F2ZXInKVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVybDogJycsXG4gICAgICBlcnJvcjogJycsXG4gICAgICBzaG93Q2hlY2tVcmxNb2RhbDogZmFsc2UsXG4gICAgICBpbWFnZTogbnVsbCxcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2VVcmwgPSAodmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgdXJsOiB2YWx1ZSxcbiAgICB9KSlcbiAgICB0aGlzLmNoZWNrVXJsKHZhbHVlKVxuICB9XG5cbiAgY2hlY2tVcmwgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ14oPzpbYS16XSs6KT8vLycsICdpJylcblxuICAgIGlmICghcGF0dGVybi50ZXN0KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNob3dDaGVja1VybE1vZGFsOiB0cnVlLFxuICAgICAgICBlcnJvcjogJ0ludmFsaWQgVVJMJyxcbiAgICAgIH0pKVxuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZihcImluc3RhZ3JhbS5jb21cIikgPCAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNob3dDaGVja1VybE1vZGFsOiB0cnVlLFxuICAgICAgICBlcnJvcjogJ0VudGVyZWQgVVJMIGlzIG5vdCBhbiBpbnN0YWdyYW0uY29tIFVSTC4nLFxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0SW1hZ2VGcm9tVXJsKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGdldEltYWdlRnJvbVVybCA9ICh2YWx1ZSkgPT4ge1xuICAgIGF4aW9zLmdldChgJHt3aW5kb3cubG9jYXRpb24uaHJlZn1nZXQtaW1hZ2UvJHt2YWx1ZS5zcGxpdChcIi9cIikudG9TdHJpbmcoKX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpbWFnZTogcmVzcG9uc2UuZGF0YS5pbWdcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRvd25sb2FkSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge2ltYWdlfSA9IHRoaXMuc3RhdGVcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6J2dldCcsXG4gICAgICB1cmw6aW1hZ2UsXG4gICAgICByZXNwb25zZVR5cGU6J2Jsb2InXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0sIHt0eXBlOiBgJHtyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXX1gfSlcbiAgICAgIGNvbnN0IGltYWdlTmFtZSA9IGAke3Jlc3BvbnNlLmhlYWRlcnMuZXhwaXJlc30uJHtyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXS5zcGxpdCgnLycpWzFdfWBcbiAgICAgIFxuICAgICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCBpbWFnZU5hbWUpXG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlQ2hlY2tVcmxNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgc2hvd0NoZWNrVXJsTW9kYWw6IGZhbHNlLFxuICAgIH0pKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt1cmwsIGVycm9yLCBzaG93Q2hlY2tVcmxNb2RhbCwgaW1hZ2V9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpaS1tYWluXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaWktYXBwLW5hbWVcIj5Eb3dubG9hZCBJbnN0YWdyYW08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaWktc2xvZ2FuXCI+SW5zdGFncmFtIGltYWdlcyBwcmV2aWV3IGFuZCBkb3dubG9hZCA8L3NwYW4+XG4gICAgICAgIDxUZXh0ZmllbGRcbiAgICAgICAgICBvbkNoYW5nZVZhbHVlPXt0aGlzLm9uQ2hhbmdlVXJsfVxuICAgICAgICAgIGxhYmVsPXsnQWRkIGxpbmsgaW5zdGFncmFtIC4uLid9XG4gICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJkaWktaW5wdXRcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2hlY2tVcmxNb2RhbFxuICAgICAgICAgIHNob3dNb2RhbD17c2hvd0NoZWNrVXJsTW9kYWx9XG4gICAgICAgICAgY2xvc2VNb2RhbD17dGhpcy5jbG9zZUNoZWNrVXJsTW9kYWx9XG4gICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAvPlxuICAgICAgICB7aW1hZ2UgJiZcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGNsYXNzTmFtZT1cImRpaS1pbWFnZVwiLz5cbiAgICAgICAgICAgIDxCdXR0b24gcmFpc2VkIHJpcHBsZSBjb2xvcj1cImFjY2VudFwiIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRJbWFnZX0gY2xhc3NOYW1lPVwiZGlpLWJ1dHRvblwiPlxuICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC8gUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuZGlpLW1haW4ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlpLWFwcC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWktc2xvZ2FuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjc1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWktaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDg3JSAhaW1wb3J0YW50XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWktaW1hZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWktYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggIWltcG9ydGFudFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1kbC1kaWFsb2cge1xuICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZGwtZGlhbG9nX19jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHhcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAuZGlpLW1haW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlpLWFwcC1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpaS1zbG9nYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlpLWlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYzJSAhaW1wb3J0YW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlpLWltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDY4JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgIC5kaWktaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogNDYlICFpbXBvcnRhbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaWktaW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkluZGV4LnByb3BUeXBlcyA9IHt9XG5cbkluZGV4LmRlZmF1bHRQcm9wcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Index.propTypes = {};

Index.defaultProps = {};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "debug":
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "file-saver":
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "lodash/isString":
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(9);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(10);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(3);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./components/utils/index.js
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
// CONCATENATED MODULE: ./components/Textfield/Textfield.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Textfield_Textfield = function (_React$PureComponent) {
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
        addClass(_this.textField, 'is-dirty');
        addClass(_this.textField, 'is-invalid');
      } else if (currentRowCount > 0 && (error === null || checkValidate)) {
        addClass(_this.textField, 'is-dirty');
        removeClass(_this.textField, 'is-invalid');
      } else {
        removeClass(_this.textField, 'is-dirty');
        removeClass(_this.textField, 'is-invalid');
      }

      _this.props.onChangeValue(_this.input.value);
    }, _this.downHandler = function () {
      addClass(_this.textField, 'is-focused');
    }, _this.upHandler = function () {
      removeClass(_this.textField, 'is-focused');
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

      var classes = external__classnames__default()('mdl-textfield', 'mdl-js-textfield', 'is-upgraded', { 'mdl-textfield--floating-label': floatingLabel }, { 'mdl-textfield--expandable': expandable }, className);
      var children = null;
      if (type === 'input') {
        children = external__react__default.a.createElement('input', {
          className: 'mdl-textfield__input',
          type: 'text',
          pattern: pattern,
          ref: function ref(input) {
            _this2.input = input;
          },
          onChange: this.onChange,
          value: value
        });
      }

      return external__react__default.a.createElement(
        'form',
        { action: '#' },
        external__react__default.a.createElement(
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
            onBlur: this.upHandler
          },
          children,
          expandable && label ? external__react__default.a.createElement(
            'div',
            { className: 'mdl-textfield__expandable-holder' },
            external__react__default.a.createElement('input', { className: 'mdl-textfield__input', type: 'text', id: 'search-input' }),
            external__react__default.a.createElement(
              'label',
              { className: 'mdl-textfield__label', htmlFor: 'sample-expandable' },
              label
            )
          ) : external__react__default.a.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            label
          ),
          error !== null && external__react__default.a.createElement(
            'span',
            { className: 'mdl-textfield__error' },
            error
          )
        )
      );
    }
  }]);

  return Textfield;
}(external__react__default.a.PureComponent);

Textfield_Textfield.defaultProps = {
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

/* harmony default export */ var components_Textfield_Textfield = (Textfield_Textfield);
// CONCATENATED MODULE: ./components/Textfield/index.js


/* harmony default export */ var components_Textfield = (components_Textfield_Textfield);
// EXTERNAL MODULE: external "lodash/isString"
var isString_ = __webpack_require__(11);
var isString__default = /*#__PURE__*/__webpack_require__.n(isString_);

// CONCATENATED MODULE: ./components/Dialog/Dialog.js





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


  var classes = external__classnames__default()('mdl-dialog', className);
  var classesObfuscator = external__classnames__default()('mdl-layout__obfuscator', { 'is-visible': open });
  var titleDialog = void 0;
  if (isString__default()(title)) {
    titleDialog = external__react__default.a.cloneElement(external__react__default.a.createElement(
      'h4',
      null,
      title
    ), {
      className: external__classnames__default()('mdl-dialog__title')
    });
  }
  if (title && external__react__default.a.isValidElement(title)) {
    titleDialog = external__react__default.a.cloneElement(title, {
      className: external__classnames__default()('mdl-dialog__title', title.props.className)
    });
  }
  var actionsDialog = void 0;
  if (actions) {
    actionsDialog = external__react__default.a.cloneElement(external__react__default.a.createElement(
      'div',
      null,
      actions
    ), {
      className: external__classnames__default()('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': actionsFullWidth
      })
    });
  }
  if (disableBackdrop) {
    return external__react__default.a.createElement(
      'dialog',
      { key: 0, className: classes, style: style, open: open },
      titleDialog,
      external__react__default.a.createElement(
        'div',
        { className: 'mdl-dialog__content' },
        children
      ),
      actionsDialog
    );
  }
  return [external__react__default.a.createElement(
    'dialog',
    { key: 0, className: classes, style: style, open: open },
    titleDialog,
    external__react__default.a.createElement(
      'div',
      { className: 'mdl-dialog__content' },
      children
    ),
    actionsDialog
  ), external__react__default.a.createElement('div', { key: 1, className: classesObfuscator, onClick: close, style: styleBackdrop })];
}

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

/* harmony default export */ var Dialog_Dialog = (Dialog);
// CONCATENATED MODULE: ./components/Dialog/index.js


/* harmony default export */ var components_Dialog = (Dialog_Dialog);
// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(12);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: ./components/Button/constants.js
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
// CONCATENATED MODULE: ./components/Button/Button.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Button__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var debug = __webpack_require__(13)('react-mdl-library:Button:Button');

var Button_Button = function (_React$PureComponent) {
  Button__inherits(Button, _React$PureComponent);

  function Button(props) {
    Button__classCallCheck(this, Button);

    var _this = Button__possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.getFrameCount = function () {
      return _this.frameCount;
    };

    _this.setFrameCount = function (fC) {
      _this.frameCount = fC;
    };

    _this.addAnimating = function () {
      addClass(_this.rippleElement, IS_ANIMATING);
    };

    _this.removeAnimating = function () {
      removeClass(_this.rippleElement, IS_ANIMATING);
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
        scale = INITIAL_SCALE;
      } else {
        scale = FINAL_SCALE;
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
      addClass(_this.rippleElement, IS_VISIBLE);
    };

    _this.hideEffect = function () {
      removeClass(_this.rippleElement, IS_VISIBLE);
    };

    _this.animFrameHandler = function () {
      if (_this.frameCount-- > 0) {
        window.requestAnimationFrame(_this.animFrameHandler);
      } else {
        _this.setRippleTransform(false);
      }
    };

    _this.componentDidMount = function () {
      _this.buttonElement = external__react_dom__default.a.findDOMNode(_this);
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


  Button__createClass(Button, [{
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

      var classes = external__classnames__default()('mdl-button', 'mdl-js-button', { 'mdl-button--raised': raised }, { 'mdl-button--fab': fab }, { 'mdl-button--primary': color === 'primary' }, { 'mdl-button--accent': color === 'accent' }, { 'mdl-js-ripple-effect': ripple }, className);

      if (ripple) {
        return external__react__default.a.createElement(
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
          }, other),
          children,
          external__react__default.a.createElement(
            'span',
            { className: 'mdl-button__ripple-container' },
            external__react__default.a.createElement('span', { className: 'mdl-ripple' })
          )
        );
      }
      return external__react__default.a.createElement(
        'button',
        _extends({ className: classes, disabled: disabledProp }, other),
        children
      );
    }
  }]);

  return Button;
}(external__react__default.a.PureComponent);

Button_Button.defaultProps = {
  children: null,
  className: '',
  color: '',
  raised: false,
  fab: false,
  disabled: false,
  ripple: false
};

/* harmony default export */ var components_Button_Button = (Button_Button);
// CONCATENATED MODULE: ./components/Button/index.js


/* harmony default export */ var components_Button = (components_Button_Button);
// CONCATENATED MODULE: ./components/CheckUrlModal/CheckUrlModal.js
var CheckUrlModal__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function CheckUrlModal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CheckUrlModal__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function CheckUrlModal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CheckUrlModal_CheckUrlModal = function (_React$PureComponent) {
  CheckUrlModal__inherits(CheckUrlModal, _React$PureComponent);

  function CheckUrlModal(props) {
    CheckUrlModal__classCallCheck(this, CheckUrlModal);

    var _this = CheckUrlModal__possibleConstructorReturn(this, (CheckUrlModal.__proto__ || Object.getPrototypeOf(CheckUrlModal)).call(this, props));

    _this.state = {};
    return _this;
  }

  CheckUrlModal__createClass(CheckUrlModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showModal = _props.showModal,
          closeModal = _props.closeModal,
          error = _props.error;

      return external__react__default.a.createElement(
        external__react__default.a.Fragment,
        null,
        external__react__default.a.createElement(
          components_Dialog,
          {
            actions: [external__react__default.a.createElement(
              components_Button,
              { key: 0, onClick: closeModal, color: 'accent', ripple: true },
              'Ok'
            )],
            close: closeModal,
            open: showModal,
            styleBackdrop: { zIndex: '10', height: '100%', position: 'fixed' }
          },
          error
        )
      );
    }
  }]);

  return CheckUrlModal;
}(external__react__default.a.PureComponent);

CheckUrlModal_CheckUrlModal.defaultProps = {};

/* harmony default export */ var components_CheckUrlModal_CheckUrlModal = (CheckUrlModal_CheckUrlModal);
// CONCATENATED MODULE: ./components/CheckUrlModal/index.js


/* harmony default export */ var components_CheckUrlModal = (components_CheckUrlModal_CheckUrlModal);
// CONCATENATED MODULE: ./pages/index.js
var pages__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FileSaver = __webpack_require__(14);

var pages_Index = function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index(props) {
    pages__classCallCheck(this, Index);

    var _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.onChangeUrl = function (value) {
      _this.setState(function (prevState) {
        return pages__extends({}, prevState, {
          url: value
        });
      });
      _this.checkUrl(value);
    };

    _this.checkUrl = function (value) {
      var pattern = new RegExp('^(?:[a-z]+:)?//', 'i');

      if (!pattern.test(value) && value.length > 0) {
        _this.setState(function (prevState) {
          return pages__extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'Invalid URL'
          });
        });
      } else if (value.indexOf("instagram.com") < 0) {
        _this.setState(function (prevState) {
          return pages__extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'Entered URL is not an instagram.com URL.'
          });
        });
      } else {
        _this.getImageFromUrl(value.substring(28, 39).trim());
      }
    };

    _this.getImageFromUrl = function (value) {
      external__axios__default.a.get(window.location.href + 'get-image/' + value).then(function (response) {
        console.log(response, 'response');
        _this.setState({
          url: '',
          image: response.data.img,
          postId: value
        });
      });
    };

    _this.closeCheckUrlModal = function () {
      _this.setState(function (prevState) {
        return pages__extends({}, prevState, {
          showCheckUrlModal: false
        });
      });
    };

    _this.state = {
      url: '',
      error: '',
      showCheckUrlModal: false,
      image: null,
      postId: null
    };
    return _this;
  }

  pages__createClass(Index, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          url = _state.url,
          error = _state.error,
          showCheckUrlModal = _state.showCheckUrlModal,
          image = _state.image,
          postId = _state.postId;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-3631461895' + ' ' + 'dii-main'
        },
        external__react__default.a.createElement(
          'h1',
          {
            className: 'jsx-3631461895' + ' ' + 'dii-app-name'
          },
          'Download Instagram'
        ),
        external__react__default.a.createElement(
          'span',
          {
            className: 'jsx-3631461895' + ' ' + 'dii-slogan'
          },
          'Instagram images preview and download '
        ),
        external__react__default.a.createElement(components_Textfield, {
          onChangeValue: this.onChangeUrl,
          label: 'Add link instagram ...',
          value: url,
          className: 'dii-input'
        }),
        external__react__default.a.createElement(components_CheckUrlModal, {
          showModal: showCheckUrlModal,
          closeModal: this.closeCheckUrlModal,
          error: error
        }),
        image && external__react__default.a.createElement(
          external__react__default.a.Fragment,
          null,
          external__react__default.a.createElement('img', { src: image, className: 'jsx-3631461895' + ' ' + 'dii-image'
          }),
          external__react__default.a.createElement(
            'a',
            { href: '/download-image/' + postId, download: true, className: 'jsx-3631461895' + ' ' + 'dii-button'
            },
            'Download'
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '3631461895',
          css: ['.dii-main{text-align:center;padding:0 20px;}', '.dii-app-name{font-size:35px;font-weight:bold;margin-bottom:0px;}', '.dii-slogan{font-size:14px;opacity:0.75;margin:0 0 0.75em;}', '.dii-input{width:87% !important;}', '.dii-image{display:block;width:95%;margin:0 auto;}', '.dii-button{margin:15px 0px;border:none;border-radius:2px;position:relative;height:36px;min-width:64px;padding:0 16px;display:inline-block;font-family:"Roboto","Helvetica","Arial",sans-serif;font-size:14px;font-weight:500;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;overflow:hidden;outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle;color:rgb(66,66,66);background-color:rgb(105,240,174);}', '.mdl-dialog{z-index:11;padding:0px;}', '.mdl-dialog__content{padding:20px;font-size:14px;color:#000 !important;}', '@media screen and (min-width:480px){.dii-main{padding:0 40px;}.dii-app-name{font-size:56px;}.dii-slogan{font-size:21px;}.dii-input{width:63% !important;}.dii-image{width:68%;}}', '@media screen and (min-width:840px){.dii-input{width:46% !important;}.dii-image{width:50%;}}']
        })
      );
    }
  }]);

  return Index;
}(external__react__default.a.Component);

pages_Index.defaultProps = {};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ })
/******/ ]);
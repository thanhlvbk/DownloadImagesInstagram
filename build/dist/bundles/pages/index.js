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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(3);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

var _Textfield = __webpack_require__(11);

var _Textfield2 = _interopRequireDefault(_Textfield);

var _CheckUrlModal = __webpack_require__(13);

var _CheckUrlModal2 = _interopRequireDefault(_CheckUrlModal);

var _GuideLines = __webpack_require__(23);

var _GuideLines2 = _interopRequireDefault(_GuideLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _this.getImageFromUrl(value.substring(28, 39).trim());
      }
    };

    _this.getImageFromUrl = function (value) {
      _axios2.default.get(window.location.href + 'get-image/' + value).then(function (response) {
        _this.setState({
          url: '',
          image: response.data.img,
          postId: value
        });
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
      image: null,
      postId: null
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
          image = _state.image,
          postId = _state.postId;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-4020303706' + ' ' + 'dii-main'
        },
        _react2.default.createElement(
          'h1',
          {
            className: 'jsx-4020303706' + ' ' + 'dii-app-name'
          },
          'Download Instagram'
        ),
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-4020303706' + ' ' + 'dii-slogan'
          },
          'Instagram images preview and download '
        ),
        _react2.default.createElement(_Textfield2.default, {
          onChangeValue: this.onChangeUrl,
          label: 'Add link instagram ...',
          value: url,
          className: 'dii-input'
        }),
        _react2.default.createElement(_CheckUrlModal2.default, {
          showModal: showCheckUrlModal,
          closeModal: this.closeCheckUrlModal,
          error: error
        }),
        image && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement('img', { src: image, className: 'jsx-4020303706' + ' ' + 'dii-image'
          }),
          _react2.default.createElement(
            'a',
            { href: '/download-image/' + postId, download: true, className: 'jsx-4020303706' + ' ' + 'dii-button'
            },
            'Download'
          )
        ),
        _react2.default.createElement(_GuideLines2.default, null),
        _react2.default.createElement(_style2.default, {
          styleId: '4020303706',
          css: ['.dii-main{text-align:center;padding:0 20px;}', '.dii-app-name{font-size:35px;font-weight:bold;margin-bottom:0px;}', '.dii-slogan{font-size:14px;opacity:0.75;margin:0 0 0.75em;}', '.dii-input{width:87% !important;}', '.dii-image{display:block;width:95%;margin:0 auto;}', '.dii-button{margin:15px 0px;border:none;border-radius:2px;position:relative;height:36px;min-width:64px;padding:0 16px;display:inline-block;font-family:"Roboto","Helvetica","Arial",sans-serif;font-size:14px;font-weight:500;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;overflow:hidden;outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle;color:#424242;background-color:#69f0ae;}', '.mdl-dialog{z-index:11;padding:0px;}', '.mdl-dialog__content{padding:20px;font-size:14px;color:#000 !important;}', '@media screen and (min-width:480px){.dii-main{padding:0 40px;}.dii-app-name{font-size:56px;}.dii-slogan{font-size:21px;}.dii-input{width:63% !important;}.dii-image{width:68%;}}', '@media screen and (min-width:840px){.dii-input{width:46% !important;}.dii-image{width:50%;}}']
        })
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.defaultProps = {};

exports.default = Index;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Textfield = __webpack_require__(12);

var _Textfield2 = _interopRequireDefault(_Textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Textfield2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        (0, _utils.addClass)(_this.textField, 'is-dirty');
        (0, _utils.addClass)(_this.textField, 'is-invalid');
      } else if (currentRowCount > 0 && (error === null || checkValidate)) {
        (0, _utils.addClass)(_this.textField, 'is-dirty');
        (0, _utils.removeClass)(_this.textField, 'is-invalid');
      } else {
        (0, _utils.removeClass)(_this.textField, 'is-dirty');
        (0, _utils.removeClass)(_this.textField, 'is-invalid');
      }

      _this.props.onChangeValue(_this.input.value);
    }, _this.downHandler = function () {
      (0, _utils.addClass)(_this.textField, 'is-focused');
    }, _this.upHandler = function () {
      (0, _utils.removeClass)(_this.textField, 'is-focused');
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

      var classes = (0, _classnames2.default)('mdl-textfield', 'mdl-js-textfield', 'is-upgraded', { 'mdl-textfield--floating-label': floatingLabel }, { 'mdl-textfield--expandable': expandable }, className);
      var children = null;
      if (type === 'input') {
        children = _react2.default.createElement('input', {
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

      return _react2.default.createElement(
        'form',
        { action: '#' },
        _react2.default.createElement(
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
          expandable && label ? _react2.default.createElement(
            'div',
            { className: 'mdl-textfield__expandable-holder' },
            _react2.default.createElement('input', { className: 'mdl-textfield__input', type: 'text', id: 'search-input' }),
            _react2.default.createElement(
              'label',
              { className: 'mdl-textfield__label', htmlFor: 'sample-expandable' },
              label
            )
          ) : _react2.default.createElement(
            'label',
            { className: 'mdl-textfield__label' },
            label
          ),
          error !== null && _react2.default.createElement(
            'span',
            { className: 'mdl-textfield__error' },
            error
          )
        )
      );
    }
  }]);

  return Textfield;
}(_react2.default.PureComponent);

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

exports.default = Textfield;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckUrlModal = __webpack_require__(14);

var _CheckUrlModal2 = _interopRequireDefault(_CheckUrlModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CheckUrlModal2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(15);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = __webpack_require__(18);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            actions: [_react2.default.createElement(
              _Button2.default,
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
}(_react2.default.PureComponent);

CheckUrlModal.defaultProps = {};

exports.default = CheckUrlModal;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialog = __webpack_require__(16);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dialog2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _isString = __webpack_require__(17);

var _isString2 = _interopRequireDefault(_isString);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


  var classes = (0, _classnames2.default)('mdl-dialog', className);
  var classesObfuscator = (0, _classnames2.default)('mdl-layout__obfuscator', { 'is-visible': open });
  var titleDialog = void 0;
  if ((0, _isString2.default)(title)) {
    titleDialog = _react2.default.cloneElement(_react2.default.createElement(
      'h4',
      null,
      title
    ), {
      className: (0, _classnames2.default)('mdl-dialog__title')
    });
  }
  if (title && _react2.default.isValidElement(title)) {
    titleDialog = _react2.default.cloneElement(title, {
      className: (0, _classnames2.default)('mdl-dialog__title', title.props.className)
    });
  }
  var actionsDialog = void 0;
  if (actions) {
    actionsDialog = _react2.default.cloneElement(_react2.default.createElement(
      'div',
      null,
      actions
    ), {
      className: (0, _classnames2.default)('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': actionsFullWidth
      })
    });
  }
  if (disableBackdrop) {
    return _react2.default.createElement(
      'dialog',
      { key: 0, className: classes, style: style, open: open },
      titleDialog,
      _react2.default.createElement(
        'div',
        { className: 'mdl-dialog__content' },
        children
      ),
      actionsDialog
    );
  }
  return [_react2.default.createElement(
    'dialog',
    { key: 0, className: classes, style: style, open: open },
    titleDialog,
    _react2.default.createElement(
      'div',
      { className: 'mdl-dialog__content' },
      children
    ),
    actionsDialog
  ), _react2.default.createElement('div', { key: 1, className: classesObfuscator, onClick: close, style: styleBackdrop })];
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

exports.default = Dialog;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(19);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(21);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = __webpack_require__(22)('react-mdl-library:Button:Button');

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
      (0, _utils.addClass)(_this.rippleElement, _constants.IS_ANIMATING);
    };

    _this.removeAnimating = function () {
      (0, _utils.removeClass)(_this.rippleElement, _constants.IS_ANIMATING);
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
        scale = _constants.INITIAL_SCALE;
      } else {
        scale = _constants.FINAL_SCALE;
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
      (0, _utils.addClass)(_this.rippleElement, _constants.IS_VISIBLE);
    };

    _this.hideEffect = function () {
      (0, _utils.removeClass)(_this.rippleElement, _constants.IS_VISIBLE);
    };

    _this.animFrameHandler = function () {
      if (_this.frameCount-- > 0) {
        window.requestAnimationFrame(_this.animFrameHandler);
      } else {
        _this.setRippleTransform(false);
      }
    };

    _this.componentDidMount = function () {
      _this.buttonElement = _reactDom2.default.findDOMNode(_this);
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

      var classes = (0, _classnames2.default)('mdl-button', 'mdl-js-button', { 'mdl-button--raised': raised }, { 'mdl-button--fab': fab }, { 'mdl-button--primary': color === 'primary' }, { 'mdl-button--accent': color === 'accent' }, { 'mdl-js-ripple-effect': ripple }, className);

      if (ripple) {
        return _react2.default.createElement(
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
          _react2.default.createElement(
            'span',
            { className: 'mdl-button__ripple-container' },
            _react2.default.createElement('span', { className: 'mdl-ripple' })
          )
        );
      }
      return _react2.default.createElement(
        'button',
        _extends({ className: classes, disabled: disabledProp }, other),
        children
      );
    }
  }]);

  return Button;
}(_react2.default.PureComponent);

Button.defaultProps = {
  children: null,
  className: '',
  color: '',
  raised: false,
  fab: false,
  disabled: false,
  ripple: false
};

exports.default = Button;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_SCALE = exports.INITIAL_SCALE = 'scale(0.0001, 0.0001)';
// export const INITIAL_SIZE = '1px'
// export const INITIAL_OPACITY = '0.4'
// export const FINAL_OPACITY = '0'
var FINAL_SCALE = exports.FINAL_SCALE = '';
var RIPPLE_CENTER = exports.RIPPLE_CENTER = 'mdl-ripple--center';
var RIPPLE_EFFECT_IGNORE_EVENTS = exports.RIPPLE_EFFECT_IGNORE_EVENTS = 'mdl-js-ripple-effect--ignore-events';
var RIPPLE = exports.RIPPLE = 'mdl-ripple';
var IS_ANIMATING = exports.IS_ANIMATING = 'is-animating';
var IS_VISIBLE = exports.IS_VISIBLE = 'is-visible';

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GuideLines = __webpack_require__(24);

var _GuideLines2 = _interopRequireDefault(_GuideLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _GuideLines2.default;

/***/ }),
/* 24 */
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

var _Lists = __webpack_require__(25);

var _Lists2 = _interopRequireDefault(_Lists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuideLines = function (_React$PureComponent) {
  _inherits(GuideLines, _React$PureComponent);

  function GuideLines() {
    _classCallCheck(this, GuideLines);

    return _possibleConstructorReturn(this, (GuideLines.__proto__ || Object.getPrototypeOf(GuideLines)).apply(this, arguments));
  }

  _createClass(GuideLines, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _Lists2.default,
          { className: 'dii-guidelines' },
          _react2.default.createElement(
            'h4',
            {
              className: 'jsx-25717875' + ' ' + 'dii-guidelines__title'
            },
            'How to download instagram photos?'
          ),
          _react2.default.createElement(_Lists.ListItem, {
            primaryContent: _react2.default.createElement(
              'span',
              {
                className: 'jsx-25717875'
              },
              '1. Go to instagram.com, find instagram image which you want to download.'
            ),
            secondaryText: _react2.default.createElement('img', { src: '/public/step01.jpg', alt: 'step-01', className: 'jsx-25717875' + ' ' + 'dii-image'
            })
          }),
          _react2.default.createElement(_Lists.ListItem, {
            primaryContent: _react2.default.createElement(
              'span',
              {
                className: 'jsx-25717875'
              },
              '2. Get the url/link of the instagram photo.'
            ),
            secondaryText: _react2.default.createElement('img', { src: '/public/step02.jpg', alt: 'step-02', className: 'jsx-25717875' + ' ' + 'dii-image'
            })
          }),
          _react2.default.createElement(_Lists.ListItem, {
            primaryContent: _react2.default.createElement(
              'span',
              {
                className: 'jsx-25717875'
              },
              '3. Paste the instagram image url/link in input box and wait a few seconds for the image to be downloaded.'
            ),
            secondaryText: _react2.default.createElement('img', { src: '/public/step03.jpg', alt: 'step-03', className: 'jsx-25717875' + ' ' + 'dii-image'
            })
          }),
          _react2.default.createElement(_Lists.ListItem, {
            primaryContent: _react2.default.createElement(
              'span',
              {
                className: 'jsx-25717875'
              },
              '4. Download Image.'
            ),
            secondaryText: _react2.default.createElement('img', { src: '/public/step04.jpg', alt: 'step-04', className: 'jsx-25717875' + ' ' + 'dii-image'
            })
          })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '25717875',
          css: ['.dii-guidelines__title{font-size:14px;font-weight:bold;margin-bottom:0px !important;}', '.mdl-list__item--three-line,.mdl-list__item-primary-content,.mdl-list__item-text-body{height:auto !important;font-size:14px !important;}', '.mdl-list__item-text-body{margin-top:15px;}', '@media screen and (min-width:480px){.dii-guidelines__title{font-size:21px;}}']
        })
      );
    }
  }]);

  return GuideLines;
}(_react2.default.PureComponent);

GuideLines.defaultProps = {};

exports.default = GuideLines;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _List = __webpack_require__(26);

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(27);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ListItem = _ListItem2.default;
exports.default = _List2.default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
  var children = props.children,
      className = props.className,
      Type = props.type;

  var classes = (0, _classnames2.default)('mdl-list', className);
  return _react2.default.createElement(
    Type,
    { className: classes },
    children
  );
}

// Specifies the default values for props:
List.defaultProps = {
  type: 'ul',
  className: null,
  children: null
};

exports.default = List;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListItem(props) {
  var secondaryText = props.secondaryText;
  var className = props.className,
      primaryContent = props.primaryContent,
      Type = props.type,
      onClick = props.onClick;

  var classes = (0, _classnames2.default)('mdl-list__item', className);

  if (secondaryText) {
    secondaryText = _react2.default.cloneElement(_react2.default.createElement(
      'span',
      null,
      secondaryText
    ), {
      className: (0, _classnames2.default)('mdl-list__item-text-body')
    });
    classes = (0, _classnames2.default)('mdl-list__item--three-line', classes);
  }

  return _react2.default.createElement(
    Type,
    { className: classes, onClick: onClick },
    _react2.default.createElement(
      'span',
      { className: 'mdl-list__item-primary-content' },
      primaryContent,
      secondaryText
    )
  );
}

// Specifies the default values for props:
ListItem.defaultProps = {
  className: null,
  type: 'li',
  primaryContent: null,
  secondaryText: null,
  onClick: function onClick() {}
};

exports.default = ListItem;

/***/ })
/******/ ]);
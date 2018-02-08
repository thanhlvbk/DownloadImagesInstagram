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
var isString_ = __webpack_require__(10);
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
            actions: [],
            close: closeModal,
            open: showModal,
            className: 'sd-modal--up sd-add-image-modal',
            style: {
              zIndex: '11'
            },
            styleBackdrop: { zIndex: '10' }
          },
          error
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2085888330',
          css: []
        })
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
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var cheerio = __webpack_require__(11);
var FileSaver = __webpack_require__(12);

var pages_Index = function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index(props) {
    pages__classCallCheck(this, Index);

    var _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.onChangeUrl = function (value) {
      _this.setState(function (prevState) {
        return _extends({}, prevState, {
          url: value
        });
      });
      _this.checkUrl(value);
    };

    _this.checkUrl = function (value) {
      var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
      if (!pattern.test(value)) {
        _this.setState(function (prevState) {
          return _extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'String is not url'
          });
        });
      } else if (value.indexOf("instagram.com") < 0) {
        _this.setState(function (prevState) {
          return _extends({}, prevState, {
            showCheckUrlModal: true,
            error: 'Url is not instagram'
          });
        });
      } else {
        _this.getImageFromUrl(value);
      }
    };

    _this.getImageFromUrl = function (value) {
      external__axios__default.a.get(value).then(function (response) {
        var $ = cheerio.load(response.data);
        _this.setState({
          image: $('meta[property="og:image"]').attr('content')
        });
      });
    };

    _this.downloadImage = function () {
      var image = _this.state.image;

      external__axios__default()({
        method: 'get',
        url: image,
        responseType: 'blob'
      }).then(function (response) {
        var blob = new Blob([response.data], { type: '' + response.headers['content-type'] });
        var imageName = response.headers.expires + '.' + response.headers['content-type'].split('/')[1];

        // response.data.pipe(FileSaver.saveAs(blob, imageName))
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

  pages__createClass(Index, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          url = _state.url,
          error = _state.error,
          showCheckUrlModal = _state.showCheckUrlModal,
          image = _state.image;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-4137067488' + ' ' + 'dii-main'
        },
        external__react__default.a.createElement(
          'h1',
          {
            className: 'jsx-4137067488'
          },
          'Download Instagram'
        ),
        external__react__default.a.createElement(
          'span',
          {
            className: 'jsx-4137067488'
          },
          'Instagram images download and preview'
        ),
        external__react__default.a.createElement(components_Textfield, {
          onChangeValue: this.onChangeUrl,
          label: 'Add link instagram ...',
          value: url
          // style={{width: '100%'}}
        }),
        external__react__default.a.createElement(components_CheckUrlModal, {
          showModal: showCheckUrlModal,
          closeModal: this.closeCheckUrlModal,
          error: error
        }),
        image && external__react__default.a.createElement(
          external__react__default.a.Fragment,
          null,
          external__react__default.a.createElement('img', { src: image, className: 'jsx-4137067488'
          }),
          external__react__default.a.createElement(
            'button',
            { onClick: this.downloadImage, className: 'jsx-4137067488'
            },
            'Download'
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '4137067488',
          css: ['.dii-main{text-align:center;}']
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

module.exports = require("lodash/isString");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ })
/******/ ]);
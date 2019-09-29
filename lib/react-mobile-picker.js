(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["Picker"] = factory(require("prop-types"), require("react"));
	else
		root["Picker"] = factory(root["prop-types"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PickerColumn = undefined;

	var _Picker = __webpack_require__(4);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _PickerColumn = __webpack_require__(1);

	var _PickerColumn2 = _interopRequireDefault(_PickerColumn);

	__webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Picker2.default;
	exports.PickerColumn = _PickerColumn2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PickerColumn = function (_React$Component) {
	  _inherits(PickerColumn, _React$Component);

	  function PickerColumn(props) {
	    _classCallCheck(this, PickerColumn);

	    var _this = _possibleConstructorReturn(this, (PickerColumn.__proto__ || Object.getPrototypeOf(PickerColumn)).call(this, props));

	    _initialiseProps.call(_this);

	    _this.state = _extends({
	      isMoving: false,
	      startTouchY: 0,
	      startScrollerTranslate: 0
	    }, _this.computeTranslate(props));
	    return _this;
	  }

	  _createClass(PickerColumn, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var refScroll = this.refScroll;

	      refScroll.addEventListener('touchstart', this.handleTouchStart, false);
	      refScroll.addEventListener('touchmove', this.handleTouchMove, false);
	      refScroll.addEventListener('touchend', this.handleTouchEnd, false);
	      refScroll.addEventListener('touchcancel', this.handleTouchCancel, false);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.isMoving) {
	        return;
	      }
	      this.setState(this.computeTranslate(nextProps));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var refScroll = this.refScroll;

	      refScroll.removeEventListener('touchstart', this.handleTouchStart, false);
	      refScroll.removeEventListener('touchmove', this.handleTouchMove, false);
	      refScroll.removeEventListener('touchend', this.handleTouchEnd, false);
	      refScroll.removeEventListener('touchcancel', this.handleTouchCancel, false);
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var _this2 = this;

	      var _props = this.props,
	          options = _props.options,
	          itemHeight = _props.itemHeight,
	          value = _props.value;

	      return options.map(function (option, index) {
	        var style = {
	          height: itemHeight + 'px',
	          lineHeight: itemHeight + 'px'
	        };
	        var className = 'picker-item' + (option.value === value ? ' picker-item-selected' : '');
	        return _react2.default.createElement(
	          'div',
	          {
	            key: index,
	            className: className,
	            style: style,
	            onClick: function onClick() {
	              return _this2.handleItemClick(option);
	            } },
	          option.text
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var translateString = 'translate3d(0, ' + this.state.scrollerTranslate + 'px, 0)';
	      var style = {
	        MsTransform: translateString,
	        MozTransform: translateString,
	        OTransform: translateString,
	        WebkitTransform: translateString,
	        transform: translateString
	      };
	      if (this.state.isMoving) {
	        style.transitionDuration = '0ms';
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'picker-column' },
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'picker-scroller',
	            style: style,
	            ref: this.bindRef
	          },
	          this.renderItems()
	        )
	      );
	    }
	  }]);

	  return PickerColumn;
	}(_react2.default.Component);

	PickerColumn.propTypes = {
	  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
	    text: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.any
	  })).isRequired,
	  name: _propTypes2.default.string.isRequired,
	  value: _propTypes2.default.any,
	  itemHeight: _propTypes2.default.number.isRequired,
	  columnHeight: _propTypes2.default.number.isRequired,
	  onChange: _propTypes2.default.func.isRequired
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.refScroll = null;

	  this.computeTranslate = function (props) {
	    var options = props.options,
	        value = props.value,
	        itemHeight = props.itemHeight,
	        columnHeight = props.columnHeight;


	    var selectedIndex = (0, _utils.findIndex)(options, function (item) {
	      return item.value === value;
	    });
	    if (selectedIndex < 0) {
	      if (options.length) {
	        // throw new ReferenceError();
	        console.warn('Warning: "' + _this3.props.name + '" doesn\'t contain an option of "' + value + '".');
	        _this3.onValueSelected(options[0].value);
	        selectedIndex = 0;
	      } else if (value !== undefined) {
	        console.warn('Warning: "' + _this3.props.name + '" doesn\'t contain any options.');
	        _this3.onValueSelected(undefined);
	        selectedIndex = -1;
	      }
	    }
	    return {
	      scrollerTranslate: columnHeight / 2 - itemHeight / 2 - selectedIndex * itemHeight,
	      minTranslate: columnHeight / 2 - itemHeight * options.length + itemHeight / 2,
	      maxTranslate: columnHeight / 2 - itemHeight / 2
	    };
	  };

	  this.onValueSelected = function (newValue) {
	    _this3.props.onChange(_this3.props.name, newValue);
	  };

	  this.handleTouchStart = function (event) {
	    var startTouchY = event.targetTouches[0].pageY;
	    _this3.setState(function (_ref) {
	      var scrollerTranslate = _ref.scrollerTranslate;
	      return {
	        startTouchY: startTouchY,
	        startScrollerTranslate: scrollerTranslate
	      };
	    });
	  };

	  this.handleTouchMove = function (event) {
	    event.preventDefault();
	    var touchY = event.targetTouches[0].pageY;
	    _this3.setState(function (_ref2) {
	      var isMoving = _ref2.isMoving,
	          startTouchY = _ref2.startTouchY,
	          startScrollerTranslate = _ref2.startScrollerTranslate,
	          minTranslate = _ref2.minTranslate,
	          maxTranslate = _ref2.maxTranslate;

	      if (!isMoving) {
	        return {
	          isMoving: true
	        };
	      }

	      var nextScrollerTranslate = startScrollerTranslate + touchY - startTouchY;
	      if (nextScrollerTranslate < minTranslate) {
	        nextScrollerTranslate = minTranslate - Math.pow(minTranslate - nextScrollerTranslate, 0.8);
	      } else if (nextScrollerTranslate > maxTranslate) {
	        nextScrollerTranslate = maxTranslate + Math.pow(nextScrollerTranslate - maxTranslate, 0.8);
	      }
	      return {
	        scrollerTranslate: nextScrollerTranslate
	      };
	    });
	  };

	  this.handleTouchEnd = function (event) {
	    if (!_this3.state.isMoving) {
	      return;
	    }
	    _this3.setState({
	      isMoving: false,
	      startTouchY: 0,
	      startScrollerTranslate: 0
	    });
	    setTimeout(function () {
	      var _props2 = _this3.props,
	          options = _props2.options,
	          itemHeight = _props2.itemHeight;
	      var _state = _this3.state,
	          scrollerTranslate = _state.scrollerTranslate,
	          minTranslate = _state.minTranslate,
	          maxTranslate = _state.maxTranslate;

	      var activeIndex = void 0;
	      if (scrollerTranslate > maxTranslate) {
	        activeIndex = 0;
	      } else if (scrollerTranslate < minTranslate) {
	        activeIndex = options.length - 1;
	      } else {
	        activeIndex = -Math.floor((scrollerTranslate - maxTranslate) / itemHeight);
	      }
	      _this3.onValueSelected(options[activeIndex].value);
	    }, 0);
	  };

	  this.handleTouchCancel = function (event) {
	    if (!_this3.state.isMoving) {
	      return;
	    }
	    _this3.setState(function (startScrollerTranslate) {
	      return {
	        isMoving: false,
	        startTouchY: 0,
	        startScrollerTranslate: 0,
	        scrollerTranslate: startScrollerTranslate
	      };
	    });
	  };

	  this.handleItemClick = function (option) {
	    if (option.value !== _this3.props.value) {
	      _this3.onValueSelected(option.value);
	    }
	  };

	  this.bindRef = function (ref) {
	    _this3.refScroll = ref;
	  };
	};

	exports.default = PickerColumn;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _PickerColumn = __webpack_require__(1);

	var _PickerColumn2 = _interopRequireDefault(_PickerColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Picker = function (_React$Component) {
	  _inherits(Picker, _React$Component);

	  function Picker(props) {
	    _classCallCheck(this, Picker);

	    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

	    _initialiseProps.call(_this);

	    _this.state = _this.transformState(props);
	    return _this;
	  }

	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.optionGroups !== this.props.optionGroups) {
	        this.setState(this.transformState(nextProps));
	      }
	    }
	  }, {
	    key: 'renderInner',
	    value: function renderInner() {
	      var _props = this.props,
	          valueGroups = _props.valueGroups,
	          itemHeight = _props.itemHeight,
	          height = _props.height,
	          onChange = _props.onChange;
	      var optionGroups = this.state.optionGroups;

	      var highlightStyle = {
	        height: itemHeight,
	        marginTop: -(itemHeight / 2)
	      };
	      var columnNodes = [];
	      for (var name in optionGroups) {
	        columnNodes.push(_react2.default.createElement(_PickerColumn2.default, {
	          key: name,
	          name: name,
	          options: optionGroups[name],
	          value: valueGroups[name],
	          itemHeight: itemHeight,
	          columnHeight: height,
	          onChange: onChange }));
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'picker-inner' },
	        columnNodes,
	        _react2.default.createElement('div', { className: 'picker-highlight', style: highlightStyle })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        height: this.props.height
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: 'picker-container', style: style },
	        this.renderInner()
	      );
	    }
	  }]);

	  return Picker;
	}(_react2.default.Component);

	Picker.propTyps = {
	  optionGroups: _propTypes2.default.object.isRequired,
	  valueGroups: _propTypes2.default.object.isRequired,
	  onChange: _propTypes2.default.func.isRequired,
	  itemHeight: _propTypes2.default.number,
	  height: _propTypes2.default.number
	};
	Picker.defaultProps = {
	  itemHeight: 36,
	  height: 216
	};

	var _initialiseProps = function _initialiseProps() {
	  this.transformState = function (props) {
	    var optionGroups = props.optionGroups;


	    var state = {
	      optionGroups: {}
	    };

	    for (var name in optionGroups) {
	      if (Object.prototype.hasOwnProperty.call(optionGroups, name)) {
	        state.optionGroups[name] = optionGroups[name].map(function (item) {
	          return typeof item === 'string' ? { text: item, value: item } : item;
	        });
	      }
	    }

	    return state;
	  };
	};

	exports.default = Picker;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findIndex = findIndex;
	function findIndex(list, fn) {
	  for (var index = 0; index < list.length; index++) {
	    if (fn(list[index])) {
	      return index;
	    }
	  }
	  return -1;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".picker-container {\n  z-index: 10001;\n  width: 100%;\n}\n.picker-container,\n.picker-container *,\n.picker-container *:before,\n.picker-container *:after {\n  box-sizing: border-box;\n}\n.picker-container .picker-inner {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 100%;\n  padding: 0 20px;\n  font-size: 1.2em;\n  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);\n}\n.picker-container .picker-column {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  position: relative;\n  max-height: 100%;\n  overflow: hidden;\n  text-align: center;\n}\n.picker-container .picker-column .picker-scroller {\n  transition: 300ms;\n  transition-timing-function: ease-out;\n}\n.picker-container .picker-column .picker-item {\n  position: relative;\n  padding: 0 10px;\n  white-space: nowrap;\n  color: #999999;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.picker-container .picker-column .picker-item.picker-item-selected {\n  color: #222;\n}\n.picker-container .picker-highlight {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n}\n.picker-container .picker-highlight:before,\n.picker-container .picker-highlight:after {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  right: auto;\n  display: block;\n  width: 100%;\n  height: 1px;\n  background-color: #d9d9d9;\n  transform: scaleY(0.5);\n}\n.picker-container .picker-highlight:before {\n  top: 0;\n  bottom: auto;\n}\n.picker-container .picker-highlight:after {\n  bottom: 0;\n  top: auto;\n}\n", ""]);

	// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
/******/ ])
});
;
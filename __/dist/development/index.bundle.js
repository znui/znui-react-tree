(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AccordionTree.js":
/*!**************************!*\
  !*** ./AccordionTree.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var AccordionTreeItem = __webpack_require__(/*! ./AccordionTreeItem */ "./AccordionTreeItem.js");

var Tree = React.createClass({
  displayName: 'ZRAccordionTree',
  getDefaultProps: function getDefaultProps() {
    return {
      itemKey: 'id'
    };
  },
  getInitialState: function getInitialState() {
    return {
      actived: false,
      loading: true,
      selected: null,
      selectedIndex: 0,
      data: null,
      className: '',
      style: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onDidMount && this.props.onDidMount(this);
  },
  __itemClick: function __itemClick(event, owner, item, index) {
    if (this.props.root) {
      if (this.props.root.__actived__) {
        this.props.root.__actived__.setState({
          actived: false
        });
      }

      this.props.root.__actived__ = this;
    }

    this.__actived__ = this;
    this.setState({
      actived: true
    });
    this.state.selected = item[this.props.itemKey];
    this.state.selectedIndex = index;

    var _return = this.props.onItemClick && this.props.onItemClick(event, owner, item, index, this);

    if (_return !== false && item.data) {
      this.state.data = item.data;
      this.forceUpdate();
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    item.index = index;
    return /*#__PURE__*/React.createElement(AccordionTreeItem, {
      key: index,
      parent: this,
      item: item,
      selected: this.props.itemKey && item[this.props.itemKey] && item[this.props.itemKey] == this.state.selected,
      labelKey: this.props.labelKey,
      itemLabelRender: this.props.itemLabelRender,
      onClick: function onClick(event, owner) {
        return _this.__itemClick(event, owner, item, index);
      }
    });
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished(data) {
    this.setState({
      loading: false
    });
    return this.props.onDataLoaded && this.props.onDataLoaded(data);
  },
  __render: function __render(data) {
    if (!data) {
      return null;
    }

    if (data.length) {
      return /*#__PURE__*/React.createElement("ul", {
        className: "data-list"
      }, data.map(function (item, index) {
        return this.__itemRender(item, index);
      }.bind(this)));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "no-data"
      }, "No Data");
    }
  },
  refresh: function refresh(argv, events, context) {
    if (this.data) {
      this.data.refresh(argv, zn.extend({
        after: function (response) {}.bind(this)
      }, events), context);
    }
  },
  refreshChild: function refreshChild() {
    if (this.child) {
      this.child.refresh();
    }
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-accordion-tree", this.props.className, this.state.className, this.state.actived ? 'actived' : ''),
      style: znui.react.style(this.props.style, this.state.style)
    }, /*#__PURE__*/React.createElement("div", {
      className: "data-view"
    }, /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      responseHandler: this.props.responseHandler,
      onDataCreated: function onDataCreated(data) {
        return _this2.data = data;
      },
      onLoading: this.__onLoading,
      onFinished: this.__onFinished,
      data: this.props.data,
      render: this.__render
    }), this.state.loading && /*#__PURE__*/React.createElement("div", {
      className: "zr-tree-list-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Loading ..."))), this.state.data && /*#__PURE__*/React.createElement(Tree, {
      onDidMount: function onDidMount(tree) {
        return _this2.child = tree;
      },
      responseHandler: this.props.responseHandler,
      labelKey: this.props.labelKey,
      key: this.state.selectedIndex,
      root: this.props.root || this,
      data: this.state.data,
      onItemClick: this.props.onItemClick
    }));
  }
});
module.exports = Tree;

/***/ }),

/***/ "./AccordionTreeItem.js":
/*!******************************!*\
  !*** ./AccordionTreeItem.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRAccordionTreeItem',
  getDefaultProps: function getDefaultProps() {
    return {
      depth: 1,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  __onIconClick: function __onIconClick(event) {
    var _this = this;

    event.stopPropagation();

    if (this.state.data) {
      return this.setState({
        data: null
      }), false;
    }

    this.setState({
      loading: true
    });
    setTimeout(function () {
      return _this.setState({
        loading: false,
        data: _this.props.item.data
      });
    }, 1000);
  },
  __renderNav: function __renderNav() {
    if (this.props.item.data) {
      var _path = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';
      return /*#__PURE__*/React.createElement("svg", {
        onClick: this.__onIconClick,
        "aria-hidden": "true",
        focusable: "false",
        className: "svg-inline--fa fa-caret-right fa-w-6 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 192 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: _path
      }));
    }
  },
  __renderLabel: function __renderLabel() {
    var _element = znui.react.createReactElement(this.props.itemLabelRender, {
      data: this.props.item,
      treeitem: this
    });

    if (_element) {
      return _element;
    }

    var _labelKey = this.props.labelKey || 'label',
        _label = '';

    if (_labelKey.indexOf('{') != -1 && _labelKey.indexOf('}') != -1) {
      _label = _labelKey.toString().format(this.props.item);
    } else {
      _label = this.props.item[_labelKey];
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "item-label"
    }, /*#__PURE__*/React.createElement("span", null, _label));
  },
  __click: function __click(event) {
    this.props.onClick && this.props.onClick(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("li", {
      className: znui.react.classname("zr-accordion-tree-item", this.props.className),
      style: this.props.style,
      "data-selected": this.props.selected,
      onClick: this.__click
    }, this.__renderLabel(), this.__renderNav());
  }
});

/***/ }),

/***/ "./Tree.js":
/*!*****************!*\
  !*** ./Tree.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var TreeItem = __webpack_require__(/*! ./TreeItem */ "./TreeItem.js");

module.exports = React.createClass({
  displayName: 'ZRTree',
  getInitialState: function getInitialState() {
    return {
      loading: true,
      selected: null
    };
  },
  __itemClick: function __itemClick(event, owner) {
    this.props.onItemClick && this.props.onItemClick(event, owner);
  },
  __itemRender: function __itemRender(item, index) {
    item.index = index;
    return /*#__PURE__*/React.createElement(TreeItem, {
      root: this.props.root || this,
      item: item,
      depth: this.props.depth || 1,
      onClick: this.__itemClick,
      key: index
    });
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished() {
    this.setState({
      loading: false
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("ul", {
      className: znui.react.classname("zr-tree", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && /*#__PURE__*/React.createElement("li", {
      className: "zr-tree-list-loader"
    }, /*#__PURE__*/React.createElement("span", {
      className: "loader"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "Loading ...")));
  }
});

/***/ }),

/***/ "./TreeItem.js":
/*!*********************!*\
  !*** ./TreeItem.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRTreeItem',
  getDefaultProps: function getDefaultProps() {
    return {
      depth: 1,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false,
      active: false,
      selected: false
    };
  },
  loading: function loading(value) {
    this.setState({
      loading: value
    });
  },
  __existChildren: function __existChildren() {
    if (this.props.data) {
      return true;
    } else {
      return false;
    }
  },
  __onIconClick: function __onIconClick(event) {
    var _this = this;

    event.stopPropagation();

    if (this.state.data) {
      return this.setState({
        data: null
      }), false;
    }

    this.setState({
      loading: true
    });
    setTimeout(function () {
      return _this.setState({
        loading: false,
        data: _this.props.item.data
      });
    }, 1000);
  },
  __renderIcon: function __renderIcon() {
    if (this.state.loading) {
      return /*#__PURE__*/React.createElement("i", {
        className: "loading"
      });
    }

    if (this.props.item.data) {
      var _path = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';

      if (this.state.data) {
        _path = 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z';
      }

      return /*#__PURE__*/React.createElement("svg", {
        onClick: this.__onIconClick,
        "aria-hidden": "true",
        focusable: "false",
        className: "svg-inline--fa fa-caret-right fa-w-6 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 192 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: _path
      }));
    }
  },
  __renderNav: function __renderNav() {
    return /*#__PURE__*/React.createElement("span", {
      className: "item-nav",
      style: {
        width: this.props.depth * 20 + 'px'
      }
    }, this.__renderIcon());
  },
  __renderLabel: function __renderLabel() {
    var _element = znui.react.createReactElement(this.props.itemLabelRender, {
      data: this.props.item,
      treeitem: this
    });

    if (_element) {
      return _element;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "item-label"
    }, /*#__PURE__*/React.createElement("span", null, this.props.item.label));
  },
  __render: function __render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "tree-item",
      onClick: this.__click
    }, this.__renderNav(), this.__renderLabel());
  },
  __click: function __click(event) {
    if (this.props.root.__selected__) {
      this.props.root.__selected__.setState({
        selected: false
      });
    }

    this.props.root.__selected__ = this;
    this.setState({
      selected: true
    });
    this.props.onClick && this.props.onClick(event, this);
  },
  __clickItem: function __clickItem(event, owner) {
    this.props.onClick && this.props.onClick(event, owner);
  },
  __renderChildren: function __renderChildren() {
    if (this.state.data) {
      var Tree = __webpack_require__(/*! ./Tree */ "./Tree.js");

      return /*#__PURE__*/React.createElement(Tree, {
        root: this.props.root,
        data: this.state.data,
        depth: this.props.depth + 1,
        onItemClick: this.__clickItem
      });
    }

    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("li", {
      className: znui.react.classname("zr-tree-item", this.props.className),
      style: this.props.style,
      "data-selected": this.state.selected
    }, this.__render(), this.__renderChildren());
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Tree: __webpack_require__(/*! ./Tree */ "./Tree.js"),
  TreeItem: __webpack_require__(/*! ./TreeItem */ "./TreeItem.js"),
  AccordionTree: __webpack_require__(/*! ./AccordionTree */ "./AccordionTree.js"),
  AccordionTreeItem: __webpack_require__(/*! ./AccordionTreeItem */ "./AccordionTreeItem.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWNjb3JkaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9BY2NvcmRpb25UcmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9UcmVlLmpzIiwid2VicGFjazovLy8uL1RyZWVJdGVtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkFjY29yZGlvblRyZWVJdGVtIiwiVHJlZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJpdGVtS2V5IiwiZ2V0SW5pdGlhbFN0YXRlIiwiYWN0aXZlZCIsImxvYWRpbmciLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJkYXRhIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwib25EaWRNb3VudCIsIl9faXRlbUNsaWNrIiwiZXZlbnQiLCJvd25lciIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJfX2FjdGl2ZWRfXyIsInNldFN0YXRlIiwic3RhdGUiLCJfcmV0dXJuIiwib25JdGVtQ2xpY2siLCJmb3JjZVVwZGF0ZSIsIl9faXRlbVJlbmRlciIsImxhYmVsS2V5IiwiaXRlbUxhYmVsUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJvbkRhdGFMb2FkZWQiLCJfX3JlbmRlciIsImxlbmd0aCIsIm1hcCIsImJpbmQiLCJyZWZyZXNoIiwiYXJndiIsImV2ZW50cyIsImNvbnRleHQiLCJ6biIsImV4dGVuZCIsImFmdGVyIiwicmVzcG9uc2UiLCJyZWZyZXNoQ2hpbGQiLCJjaGlsZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwicmVzcG9uc2VIYW5kbGVyIiwidHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXB0aCIsIl9fb25JY29uQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRUaW1lb3V0IiwiX19yZW5kZXJOYXYiLCJfcGF0aCIsIl9fcmVuZGVyTGFiZWwiLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInRyZWVpdGVtIiwiX2xhYmVsS2V5IiwiX2xhYmVsIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwiZm9ybWF0IiwiX19jbGljayIsIm9uQ2xpY2siLCJUcmVlSXRlbSIsImFjdGl2ZSIsInZhbHVlIiwiX19leGlzdENoaWxkcmVuIiwiX19yZW5kZXJJY29uIiwid2lkdGgiLCJsYWJlbCIsIl9fc2VsZWN0ZWRfXyIsIl9fY2xpY2tJdGVtIiwiX19yZW5kZXJDaGlsZHJlbiIsIkFjY29yZGlvblRyZWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUlDLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLG1EQUFELENBQS9COztBQUVBLElBQUlFLElBQUksR0FBR0osS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQzVCQyxhQUFXLEVBQUMsaUJBRGdCO0FBRTVCQyxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsYUFBTyxFQUFFO0FBREgsS0FBUDtBQUdBLEdBTjJCO0FBTzVCQyxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsYUFBTyxFQUFFLEtBREg7QUFFTkMsYUFBTyxFQUFFLElBRkg7QUFHTkMsY0FBUSxFQUFFLElBSEo7QUFJTkMsbUJBQWEsRUFBRSxDQUpUO0FBS05DLFVBQUksRUFBRSxJQUxBO0FBTU5DLGVBQVMsRUFBRSxFQU5MO0FBT05DLFdBQUssRUFBRTtBQVBELEtBQVA7QUFTQSxHQWpCMkI7QUFrQjVCQyxtQkFBaUIsRUFBRSw2QkFBVztBQUM3QixTQUFLQyxLQUFMLENBQVdDLFVBQVgsSUFBeUIsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLENBQXNCLElBQXRCLENBQXpCO0FBQ0EsR0FwQjJCO0FBcUI1QkMsYUFBVyxFQUFFLHFCQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQW9DO0FBQ2hELFFBQUcsS0FBS04sS0FBTCxDQUFXTyxJQUFkLEVBQW1CO0FBQ2xCLFVBQUcsS0FBS1AsS0FBTCxDQUFXTyxJQUFYLENBQWdCQyxXQUFuQixFQUFnQztBQUMvQixhQUFLUixLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLFdBQWhCLENBQTRCQyxRQUE1QixDQUFxQztBQUFFakIsaUJBQU8sRUFBRTtBQUFYLFNBQXJDO0FBQ0E7O0FBQ0QsV0FBS1EsS0FBTCxDQUFXTyxJQUFYLENBQWdCQyxXQUFoQixHQUE4QixJQUE5QjtBQUNBOztBQUNELFNBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFBRWpCLGFBQU8sRUFBRTtBQUFYLEtBQWQ7QUFDQSxTQUFLa0IsS0FBTCxDQUFXaEIsUUFBWCxHQUFzQlcsSUFBSSxDQUFDLEtBQUtMLEtBQUwsQ0FBV1YsT0FBWixDQUExQjtBQUNBLFNBQUtvQixLQUFMLENBQVdmLGFBQVgsR0FBMkJXLEtBQTNCOztBQUNBLFFBQUlLLE9BQU8sR0FBRyxLQUFLWCxLQUFMLENBQVdZLFdBQVgsSUFBMEIsS0FBS1osS0FBTCxDQUFXWSxXQUFYLENBQXVCVCxLQUF2QixFQUE4QkMsS0FBOUIsRUFBcUNDLElBQXJDLEVBQTJDQyxLQUEzQyxFQUFrRCxJQUFsRCxDQUF4Qzs7QUFDQSxRQUFHSyxPQUFPLEtBQUssS0FBWixJQUFxQk4sSUFBSSxDQUFDVCxJQUE3QixFQUFrQztBQUNqQyxXQUFLYyxLQUFMLENBQVdkLElBQVgsR0FBa0JTLElBQUksQ0FBQ1QsSUFBdkI7QUFDQSxXQUFLaUIsV0FBTDtBQUNBO0FBQ0QsR0FyQzJCO0FBc0M1QkMsY0FBWSxFQUFFLHNCQUFVVCxJQUFWLEVBQWdCQyxLQUFoQixFQUFzQjtBQUFBOztBQUNuQ0QsUUFBSSxDQUFDQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSx3QkFBTyxvQkFBQyxpQkFBRDtBQUFtQixTQUFHLEVBQUVBLEtBQXhCO0FBQ04sWUFBTSxFQUFFLElBREY7QUFFTixVQUFJLEVBQUVELElBRkE7QUFHTixjQUFRLEVBQUUsS0FBS0wsS0FBTCxDQUFXVixPQUFYLElBQXNCZSxJQUFJLENBQUMsS0FBS0wsS0FBTCxDQUFXVixPQUFaLENBQTFCLElBQWtEZSxJQUFJLENBQUMsS0FBS0wsS0FBTCxDQUFXVixPQUFaLENBQUosSUFBMEIsS0FBS29CLEtBQUwsQ0FBV2hCLFFBSDNGO0FBSU4sY0FBUSxFQUFFLEtBQUtNLEtBQUwsQ0FBV2UsUUFKZjtBQUtOLHFCQUFlLEVBQUUsS0FBS2YsS0FBTCxDQUFXZ0IsZUFMdEI7QUFNTixhQUFPLEVBQUUsaUJBQUNiLEtBQUQsRUFBUUMsS0FBUjtBQUFBLGVBQWdCLEtBQUksQ0FBQ0YsV0FBTCxDQUFpQkMsS0FBakIsRUFBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixFQUFxQ0MsS0FBckMsQ0FBaEI7QUFBQTtBQU5ILE1BQVA7QUFPQSxHQS9DMkI7QUFnRDVCVyxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsU0FBS1IsUUFBTCxDQUFjO0FBQ2JoQixhQUFPLEVBQUU7QUFESSxLQUFkO0FBR0EsR0FwRDJCO0FBcUQ1QnlCLGNBQVksRUFBRSxzQkFBVXRCLElBQVYsRUFBZTtBQUM1QixTQUFLYSxRQUFMLENBQWM7QUFDYmhCLGFBQU8sRUFBRTtBQURJLEtBQWQ7QUFJQSxXQUFPLEtBQUtPLEtBQUwsQ0FBV21CLFlBQVgsSUFBMkIsS0FBS25CLEtBQUwsQ0FBV21CLFlBQVgsQ0FBd0J2QixJQUF4QixDQUFsQztBQUNBLEdBM0QyQjtBQTRENUJ3QixVQUFRLEVBQUUsa0JBQVV4QixJQUFWLEVBQWU7QUFDeEIsUUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUixhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFHQSxJQUFJLENBQUN5QixNQUFSLEVBQWU7QUFDZCwwQkFDQztBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUVFekIsSUFBSSxDQUFDMEIsR0FBTCxDQUFTLFVBQVVqQixJQUFWLEVBQWdCQyxLQUFoQixFQUFzQjtBQUM5QixlQUFPLEtBQUtRLFlBQUwsQ0FBa0JULElBQWxCLEVBQXdCQyxLQUF4QixDQUFQO0FBQ0EsT0FGUSxDQUVQaUIsSUFGTyxDQUVGLElBRkUsQ0FBVCxDQUZGLENBREQ7QUFTQSxLQVZELE1BVUs7QUFDSiwwQkFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixtQkFERDtBQUdBO0FBQ0QsR0EvRTJCO0FBZ0Y1QkMsU0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QkMsT0FBeEIsRUFBZ0M7QUFDeEMsUUFBRyxLQUFLL0IsSUFBUixFQUFhO0FBQ1osV0FBS0EsSUFBTCxDQUFVNEIsT0FBVixDQUFrQkMsSUFBbEIsRUFBd0JHLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVO0FBQ2pDQyxhQUFLLEVBQUUsVUFBVUMsUUFBVixFQUFtQixDQUV6QixDQUZNLENBRUxSLElBRkssQ0FFQSxJQUZBO0FBRDBCLE9BQVYsRUFJckJHLE1BSnFCLENBQXhCLEVBSVlDLE9BSlo7QUFLQTtBQUNELEdBeEYyQjtBQXlGNUJLLGNBQVksRUFBRSx3QkFBVztBQUN4QixRQUFHLEtBQUtDLEtBQVIsRUFBYztBQUNiLFdBQUtBLEtBQUwsQ0FBV1QsT0FBWDtBQUNBO0FBQ0QsR0E3RjJCO0FBOEY1QlUsUUFBTSxFQUFFLGtCQUFVO0FBQUE7O0FBQ2pCLHdCQUNDO0FBQUssZUFBUyxFQUFFbkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFXQyxTQUFYLENBQXFCLG1CQUFyQixFQUEwQyxLQUFLcEMsS0FBTCxDQUFXSCxTQUFyRCxFQUFnRSxLQUFLYSxLQUFMLENBQVdiLFNBQTNFLEVBQXVGLEtBQUthLEtBQUwsQ0FBV2xCLE9BQVgsR0FBbUIsU0FBbkIsR0FBNkIsRUFBcEgsQ0FBaEI7QUFBMEksV0FBSyxFQUFFVCxJQUFJLENBQUNvRCxLQUFMLENBQVdyQyxLQUFYLENBQWlCLEtBQUtFLEtBQUwsQ0FBV0YsS0FBNUIsRUFBbUMsS0FBS1ksS0FBTCxDQUFXWixLQUE5QztBQUFqSixvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksYUFBWjtBQUEwQixxQkFBZSxFQUFFLEtBQUtFLEtBQUwsQ0FBV3FDLGVBQXREO0FBQXVFLG1CQUFhLEVBQUUsdUJBQUN6QyxJQUFEO0FBQUEsZUFBVSxNQUFJLENBQUNBLElBQUwsR0FBWUEsSUFBdEI7QUFBQSxPQUF0RjtBQUFtSCxlQUFTLEVBQUUsS0FBS3FCLFdBQW5JO0FBQWdKLGdCQUFVLEVBQUUsS0FBS0MsWUFBaks7QUFBK0ssVUFBSSxFQUFFLEtBQUtsQixLQUFMLENBQVdKLElBQWhNO0FBQXNNLFlBQU0sRUFBRSxLQUFLd0I7QUFBbk4sTUFERCxFQUVFLEtBQUtWLEtBQUwsQ0FBV2pCLE9BQVgsaUJBQXNCO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQXFDO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE1BQXJDLGVBQWdFO0FBQU0sZUFBUyxFQUFDO0FBQWhCLHFCQUFoRSxDQUZ4QixDQURELEVBTUUsS0FBS2lCLEtBQUwsQ0FBV2QsSUFBWCxpQkFBbUIsb0JBQUMsSUFBRDtBQUFNLGdCQUFVLEVBQUUsb0JBQUMwQyxJQUFEO0FBQUEsZUFBVSxNQUFJLENBQUNMLEtBQUwsR0FBYUssSUFBdkI7QUFBQSxPQUFsQjtBQUErQyxxQkFBZSxFQUFFLEtBQUt0QyxLQUFMLENBQVdxQyxlQUEzRTtBQUE0RixjQUFRLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV2UsUUFBakg7QUFBMkgsU0FBRyxFQUFFLEtBQUtMLEtBQUwsQ0FBV2YsYUFBM0k7QUFBMEosVUFBSSxFQUFFLEtBQUtLLEtBQUwsQ0FBV08sSUFBWCxJQUFtQixJQUFuTDtBQUF5TCxVQUFJLEVBQUUsS0FBS0csS0FBTCxDQUFXZCxJQUExTTtBQUFnTixpQkFBVyxFQUFFLEtBQUtJLEtBQUwsQ0FBV1k7QUFBeE8sTUFOckIsQ0FERDtBQVdBO0FBMUcyQixDQUFsQixDQUFYO0FBNkdBMkIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEQsSUFBakIsQzs7Ozs7Ozs7Ozs7QUNoSEEsSUFBSUosS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQXVELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjFELEtBQUssQ0FBQ0ssV0FBTixDQUFrQjtBQUNsQ0MsYUFBVyxFQUFFLHFCQURxQjtBQUVsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05vRCxXQUFLLEVBQUUsQ0FERDtBQUVONUMsZUFBUyxFQUFFO0FBRkwsS0FBUDtBQUlBLEdBUGlDO0FBUWxDTixpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU8sRUFBUDtBQUdBLEdBWmlDO0FBYWxDbUQsZUFBYSxFQUFFLHVCQUFVdkMsS0FBVixFQUFnQjtBQUFBOztBQUM5QkEsU0FBSyxDQUFDd0MsZUFBTjs7QUFDQSxRQUFHLEtBQUtqQyxLQUFMLENBQVdkLElBQWQsRUFBb0I7QUFDbkIsYUFBTyxLQUFLYSxRQUFMLENBQWM7QUFDcEJiLFlBQUksRUFBRTtBQURjLE9BQWQsR0FFSCxLQUZKO0FBR0E7O0FBQ0QsU0FBS2EsUUFBTCxDQUFjO0FBQ2JoQixhQUFPLEVBQUU7QUFESSxLQUFkO0FBSUFtRCxjQUFVLENBQUM7QUFBQSxhQUFJLEtBQUksQ0FBQ25DLFFBQUwsQ0FBYztBQUM1QmhCLGVBQU8sRUFBRSxLQURtQjtBQUU1QkcsWUFBSSxFQUFFLEtBQUksQ0FBQ0ksS0FBTCxDQUFXSyxJQUFYLENBQWdCVDtBQUZNLE9BQWQsQ0FBSjtBQUFBLEtBQUQsRUFHTixJQUhNLENBQVY7QUFJQSxHQTVCaUM7QUE2QmxDaUQsYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFFBQUcsS0FBSzdDLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQlQsSUFBbkIsRUFBd0I7QUFDdkIsVUFBSWtELEtBQUssR0FBRywwSkFBWjtBQUNBLDBCQUFPO0FBQUssZUFBTyxFQUFFLEtBQUtKLGFBQW5CO0FBQWtDLHVCQUFZLE1BQTlDO0FBQXFELGlCQUFTLEVBQUMsT0FBL0Q7QUFBdUUsaUJBQVMsRUFBQyx1Q0FBakY7QUFBeUgsWUFBSSxFQUFDLEtBQTlIO0FBQW9JLGFBQUssRUFBQyw0QkFBMUk7QUFBdUssZUFBTyxFQUFDO0FBQS9LLHNCQUNOO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsU0FBQyxFQUFFSTtBQUE3QixRQURNLENBQVA7QUFHQTtBQUNELEdBcENpQztBQXFDbENDLGVBQWEsRUFBRSx5QkFBVztBQUN6QixRQUFJQyxRQUFRLEdBQUdqRSxJQUFJLENBQUNvRCxLQUFMLENBQVdjLGtCQUFYLENBQThCLEtBQUtqRCxLQUFMLENBQVdnQixlQUF6QyxFQUEwRDtBQUN4RXBCLFVBQUksRUFBRSxLQUFLSSxLQUFMLENBQVdLLElBRHVEO0FBRXhFNkMsY0FBUSxFQUFFO0FBRjhELEtBQTFELENBQWY7O0FBSUEsUUFBR0YsUUFBSCxFQUFhO0FBQ1osYUFBT0EsUUFBUDtBQUNBOztBQUNELFFBQUlHLFNBQVMsR0FBRyxLQUFLbkQsS0FBTCxDQUFXZSxRQUFYLElBQXVCLE9BQXZDO0FBQUEsUUFDQ3FDLE1BQU0sR0FBRyxFQURWOztBQUVBLFFBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixHQUFsQixLQUF3QixDQUFDLENBQXpCLElBQThCRixTQUFTLENBQUNFLE9BQVYsQ0FBa0IsR0FBbEIsS0FBd0IsQ0FBQyxDQUExRCxFQUE0RDtBQUMzREQsWUFBTSxHQUFHRCxTQUFTLENBQUNHLFFBQVYsR0FBcUJDLE1BQXJCLENBQTRCLEtBQUt2RCxLQUFMLENBQVdLLElBQXZDLENBQVQ7QUFDQSxLQUZELE1BRUs7QUFDSitDLFlBQU0sR0FBRyxLQUFLcEQsS0FBTCxDQUFXSyxJQUFYLENBQWdCOEMsU0FBaEIsQ0FBVDtBQUNBOztBQUVELHdCQUFPO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ04sa0NBQU9DLE1BQVAsQ0FETSxDQUFQO0FBR0EsR0F4RGlDO0FBeURsQ0ksU0FBTyxFQUFFLGlCQUFVckQsS0FBVixFQUFnQjtBQUN4QixTQUFLSCxLQUFMLENBQVd5RCxPQUFYLElBQXNCLEtBQUt6RCxLQUFMLENBQVd5RCxPQUFYLENBQW1CdEQsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQTNEaUM7QUE0RGxDK0IsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLHdCQUNDO0FBQUksZUFBUyxFQUFFbkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFXQyxTQUFYLENBQXFCLHdCQUFyQixFQUErQyxLQUFLcEMsS0FBTCxDQUFXSCxTQUExRCxDQUFmO0FBQ0MsV0FBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0YsS0FEbkI7QUFFQyx1QkFBZSxLQUFLRSxLQUFMLENBQVdOLFFBRjNCO0FBRXFDLGFBQU8sRUFBRSxLQUFLOEQ7QUFGbkQsT0FHRyxLQUFLVCxhQUFMLEVBSEgsRUFJRyxLQUFLRixXQUFMLEVBSkgsQ0FERDtBQVFBO0FBckVpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0ZBLElBQUkvRCxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUkwRSxRQUFRLEdBQUcxRSxtQkFBTyxDQUFDLGlDQUFELENBQXRCOztBQUVBdUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUQsS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsUUFEc0I7QUFFbENHLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNORSxhQUFPLEVBQUUsSUFESDtBQUVOQyxjQUFRLEVBQUU7QUFGSixLQUFQO0FBSUEsR0FQaUM7QUFRbENRLGFBQVcsRUFBRSxxQkFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBdUI7QUFDbkMsU0FBS0osS0FBTCxDQUFXWSxXQUFYLElBQTBCLEtBQUtaLEtBQUwsQ0FBV1ksV0FBWCxDQUF1QlQsS0FBdkIsRUFBOEJDLEtBQTlCLENBQTFCO0FBQ0EsR0FWaUM7QUFXbENVLGNBQVksRUFBRSxzQkFBVVQsSUFBVixFQUFnQkMsS0FBaEIsRUFBc0I7QUFDbkNELFFBQUksQ0FBQ0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Esd0JBQU8sb0JBQUMsUUFBRDtBQUFVLFVBQUksRUFBRSxLQUFLTixLQUFMLENBQVdPLElBQVgsSUFBaUIsSUFBakM7QUFBdUMsVUFBSSxFQUFFRixJQUE3QztBQUFtRCxXQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXeUMsS0FBWCxJQUFvQixDQUE5RTtBQUFpRixhQUFPLEVBQUUsS0FBS3ZDLFdBQS9GO0FBQTRHLFNBQUcsRUFBRUk7QUFBakgsTUFBUDtBQUNBLEdBZGlDO0FBZWxDVyxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsU0FBS1IsUUFBTCxDQUFjO0FBQ2JoQixhQUFPLEVBQUU7QUFESSxLQUFkO0FBR0EsR0FuQmlDO0FBb0JsQ3lCLGNBQVksRUFBRSx3QkFBVztBQUN4QixTQUFLVCxRQUFMLENBQWM7QUFDYmhCLGFBQU8sRUFBRTtBQURJLEtBQWQ7QUFHQSxHQXhCaUM7QUF5QmxDeUMsUUFBTSxFQUFDLGtCQUFVO0FBQ2hCLHdCQUNDO0FBQUksZUFBUyxFQUFFbkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFXQyxTQUFYLENBQXFCLFNBQXJCLEVBQWdDLEtBQUtwQyxLQUFMLENBQVdILFNBQTNDLENBQWY7QUFBc0UsV0FBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0Y7QUFBeEYsb0JBQ0Msb0JBQUMsSUFBRCxDQUFNLEtBQU4sQ0FBWSxRQUFaO0FBQXFCLFVBQUksRUFBRSxLQUFLRSxLQUFMLENBQVdKLElBQXRDO0FBQTRDLGdCQUFVLEVBQUUsS0FBS2tCLFlBQTdEO0FBQTJFLGVBQVMsRUFBRSxLQUFLRyxXQUEzRjtBQUF3RyxnQkFBVSxFQUFFLEtBQUtDO0FBQXpILE1BREQsRUFFRSxLQUFLUixLQUFMLENBQVdqQixPQUFYLGlCQUFzQjtBQUFJLGVBQVMsRUFBQztBQUFkLG9CQUFvQztBQUFNLGVBQVMsRUFBQztBQUFoQixNQUFwQyxlQUErRDtBQUFNLGVBQVMsRUFBQztBQUFoQixxQkFBL0QsQ0FGeEIsQ0FERDtBQU1BO0FBaENpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0hBLElBQUlYLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBRUF1RCxNQUFNLENBQUNDLE9BQVAsR0FBaUIxRCxLQUFLLENBQUNLLFdBQU4sQ0FBa0I7QUFDbENDLGFBQVcsRUFBRSxZQURxQjtBQUVsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05vRCxXQUFLLEVBQUUsQ0FERDtBQUVONUMsZUFBUyxFQUFFO0FBRkwsS0FBUDtBQUlBLEdBUGlDO0FBUWxDTixpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkUsYUFBTyxFQUFFLEtBREg7QUFFTmtFLFlBQU0sRUFBRSxLQUZGO0FBR05qRSxjQUFRLEVBQUU7QUFISixLQUFQO0FBS0EsR0FkaUM7QUFlbENELFNBQU8sRUFBRSxpQkFBVW1FLEtBQVYsRUFBZ0I7QUFDeEIsU0FBS25ELFFBQUwsQ0FBYztBQUNiaEIsYUFBTyxFQUFFbUU7QUFESSxLQUFkO0FBR0EsR0FuQmlDO0FBb0JsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixRQUFHLEtBQUs3RCxLQUFMLENBQVdKLElBQWQsRUFBb0I7QUFDbkIsYUFBTyxJQUFQO0FBQ0EsS0FGRCxNQUVNO0FBQ0wsYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQTFCaUM7QUEyQmxDOEMsZUFBYSxFQUFFLHVCQUFVdkMsS0FBVixFQUFnQjtBQUFBOztBQUM5QkEsU0FBSyxDQUFDd0MsZUFBTjs7QUFDQSxRQUFHLEtBQUtqQyxLQUFMLENBQVdkLElBQWQsRUFBb0I7QUFDbkIsYUFBTyxLQUFLYSxRQUFMLENBQWM7QUFDcEJiLFlBQUksRUFBRTtBQURjLE9BQWQsR0FFSCxLQUZKO0FBR0E7O0FBQ0QsU0FBS2EsUUFBTCxDQUFjO0FBQ2JoQixhQUFPLEVBQUU7QUFESSxLQUFkO0FBSUFtRCxjQUFVLENBQUM7QUFBQSxhQUFJLEtBQUksQ0FBQ25DLFFBQUwsQ0FBYztBQUM1QmhCLGVBQU8sRUFBRSxLQURtQjtBQUU1QkcsWUFBSSxFQUFFLEtBQUksQ0FBQ0ksS0FBTCxDQUFXSyxJQUFYLENBQWdCVDtBQUZNLE9BQWQsQ0FBSjtBQUFBLEtBQUQsRUFHTixJQUhNLENBQVY7QUFJQSxHQTFDaUM7QUEyQ2xDa0UsY0FBWSxFQUFFLHdCQUFXO0FBQ3hCLFFBQUcsS0FBS3BELEtBQUwsQ0FBV2pCLE9BQWQsRUFBdUI7QUFDdEIsMEJBQU87QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFBUDtBQUNBOztBQUNELFFBQUcsS0FBS08sS0FBTCxDQUFXSyxJQUFYLENBQWdCVCxJQUFuQixFQUF3QjtBQUN2QixVQUFJa0QsS0FBSyxHQUFHLDBKQUFaOztBQUNBLFVBQUcsS0FBS3BDLEtBQUwsQ0FBV2QsSUFBZCxFQUFvQjtBQUNuQmtELGFBQUssR0FBRyx5SEFBUjtBQUNBOztBQUNELDBCQUFPO0FBQUssZUFBTyxFQUFFLEtBQUtKLGFBQW5CO0FBQWtDLHVCQUFZLE1BQTlDO0FBQXFELGlCQUFTLEVBQUMsT0FBL0Q7QUFBdUUsaUJBQVMsRUFBQyx1Q0FBakY7QUFBeUgsWUFBSSxFQUFDLEtBQTlIO0FBQW9JLGFBQUssRUFBQyw0QkFBMUk7QUFBdUssZUFBTyxFQUFDO0FBQS9LLHNCQUNOO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsU0FBQyxFQUFFSTtBQUE3QixRQURNLENBQVA7QUFHQTtBQUNELEdBeERpQztBQXlEbENELGFBQVcsRUFBRSx1QkFBVztBQUN2Qix3QkFDQztBQUFNLGVBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFLLEVBQUU7QUFBQ2tCLGFBQUssRUFBRyxLQUFLL0QsS0FBTCxDQUFXeUMsS0FBWCxHQUFtQixFQUFwQixHQUEwQjtBQUFsQztBQUFsQyxPQUNHLEtBQUtxQixZQUFMLEVBREgsQ0FERDtBQUtBLEdBL0RpQztBQWdFbENmLGVBQWEsRUFBRSx5QkFBVztBQUN6QixRQUFJQyxRQUFRLEdBQUdqRSxJQUFJLENBQUNvRCxLQUFMLENBQVdjLGtCQUFYLENBQThCLEtBQUtqRCxLQUFMLENBQVdnQixlQUF6QyxFQUEwRDtBQUN4RXBCLFVBQUksRUFBRSxLQUFLSSxLQUFMLENBQVdLLElBRHVEO0FBRXhFNkMsY0FBUSxFQUFFO0FBRjhELEtBQTFELENBQWY7O0FBSUEsUUFBR0YsUUFBSCxFQUFhO0FBQ1osYUFBT0EsUUFBUDtBQUNBOztBQUVELHdCQUFPO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ04sa0NBQU8sS0FBS2hELEtBQUwsQ0FBV0ssSUFBWCxDQUFnQjJELEtBQXZCLENBRE0sQ0FBUDtBQUdBLEdBNUVpQztBQTZFbEM1QyxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsd0JBQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFPLEVBQUUsS0FBS29DO0FBQXpDLE9BQ0csS0FBS1gsV0FBTCxFQURILEVBRUcsS0FBS0UsYUFBTCxFQUZILENBREQ7QUFNQSxHQXBGaUM7QUFxRmxDUyxTQUFPLEVBQUUsaUJBQVVyRCxLQUFWLEVBQWdCO0FBQ3hCLFFBQUcsS0FBS0gsS0FBTCxDQUFXTyxJQUFYLENBQWdCMEQsWUFBbkIsRUFBaUM7QUFDaEMsV0FBS2pFLEtBQUwsQ0FBV08sSUFBWCxDQUFnQjBELFlBQWhCLENBQTZCeEQsUUFBN0IsQ0FBc0M7QUFBRWYsZ0JBQVEsRUFBRTtBQUFaLE9BQXRDO0FBQ0E7O0FBQ0QsU0FBS00sS0FBTCxDQUFXTyxJQUFYLENBQWdCMEQsWUFBaEIsR0FBK0IsSUFBL0I7QUFDQSxTQUFLeEQsUUFBTCxDQUFjO0FBQ2JmLGNBQVEsRUFBRTtBQURHLEtBQWQ7QUFHQSxTQUFLTSxLQUFMLENBQVd5RCxPQUFYLElBQXNCLEtBQUt6RCxLQUFMLENBQVd5RCxPQUFYLENBQW1CdEQsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQTlGaUM7QUErRmxDK0QsYUFBVyxFQUFFLHFCQUFVL0QsS0FBVixFQUFpQkMsS0FBakIsRUFBdUI7QUFDbkMsU0FBS0osS0FBTCxDQUFXeUQsT0FBWCxJQUFzQixLQUFLekQsS0FBTCxDQUFXeUQsT0FBWCxDQUFtQnRELEtBQW5CLEVBQTBCQyxLQUExQixDQUF0QjtBQUNBLEdBakdpQztBQWtHbEMrRCxrQkFBZ0IsRUFBRSw0QkFBVztBQUM1QixRQUFHLEtBQUt6RCxLQUFMLENBQVdkLElBQWQsRUFBb0I7QUFDbkIsVUFBSVYsSUFBSSxHQUFHRixtQkFBTyxDQUFDLHlCQUFELENBQWxCOztBQUNBLDBCQUNDLG9CQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS2dCLEtBQUwsQ0FBV08sSUFBdkI7QUFBNkIsWUFBSSxFQUFFLEtBQUtHLEtBQUwsQ0FBV2QsSUFBOUM7QUFBb0QsYUFBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBV3lDLEtBQVgsR0FBbUIsQ0FBOUU7QUFBaUYsbUJBQVcsRUFBRSxLQUFLeUI7QUFBbkcsUUFERDtBQUdBOztBQUVELFdBQU8sSUFBUDtBQUNBLEdBM0dpQztBQTRHbENoQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsd0JBQ0M7QUFBSSxlQUFTLEVBQUVuRCxJQUFJLENBQUNvRCxLQUFMLENBQVdDLFNBQVgsQ0FBcUIsY0FBckIsRUFBcUMsS0FBS3BDLEtBQUwsQ0FBV0gsU0FBaEQsQ0FBZjtBQUNDLFdBQUssRUFBRSxLQUFLRyxLQUFMLENBQVdGLEtBRG5CO0FBRUMsdUJBQWUsS0FBS1ksS0FBTCxDQUFXaEI7QUFGM0IsT0FHRSxLQUFLMEIsUUFBTCxFQUhGLEVBSUUsS0FBSytDLGdCQUFMLEVBSkYsQ0FERDtBQVFBO0FBckhpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0ZBNUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J0RCxNQUFJLEVBQUVGLG1CQUFPLENBQUMseUJBQUQsQ0FEQTtBQUViMEUsVUFBUSxFQUFFMUUsbUJBQU8sQ0FBQyxpQ0FBRCxDQUZKO0FBR2JvRixlQUFhLEVBQUVwRixtQkFBTyxDQUFDLDJDQUFELENBSFQ7QUFJYkMsbUJBQWlCLEVBQUVELG1CQUFPLENBQUMsbURBQUQ7QUFKYixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBY2NvcmRpb25UcmVlSXRlbSA9IHJlcXVpcmUoJy4vQWNjb3JkaW9uVHJlZUl0ZW0nKTtcblxudmFyIFRyZWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkFjY29yZGlvblRyZWUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRpdGVtS2V5OiAnaWQnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmVkOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbCxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDAsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkRpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMucHJvcHMucm9vdCl7XG5cdFx0XHRpZih0aGlzLnByb3BzLnJvb3QuX19hY3RpdmVkX18pIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5yb290Ll9fYWN0aXZlZF9fLnNldFN0YXRlKHsgYWN0aXZlZDogZmFsc2UgfSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByb3BzLnJvb3QuX19hY3RpdmVkX18gPSB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLl9fYWN0aXZlZF9fID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlZDogdHJ1ZSB9KTtcblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkID0gaXRlbVt0aGlzLnByb3BzLml0ZW1LZXldO1xuXHRcdHRoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlICYmIGl0ZW0uZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSBpdGVtLmRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiA8QWNjb3JkaW9uVHJlZUl0ZW0ga2V5PXtpbmRleH1cblx0XHRcdHBhcmVudD17dGhpc30gXG5cdFx0XHRpdGVtPXtpdGVtfSBcblx0XHRcdHNlbGVjdGVkPXt0aGlzLnByb3BzLml0ZW1LZXkgJiYgaXRlbVt0aGlzLnByb3BzLml0ZW1LZXldICYmIGl0ZW1bdGhpcy5wcm9wcy5pdGVtS2V5XT09dGhpcy5zdGF0ZS5zZWxlY3RlZH1cblx0XHRcdGxhYmVsS2V5PXt0aGlzLnByb3BzLmxhYmVsS2V5fVxuXHRcdFx0aXRlbUxhYmVsUmVuZGVyPXt0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlcn1cblx0XHRcdG9uQ2xpY2s9eyhldmVudCwgb3duZXIpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpfSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhKTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZighZGF0YSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoZGF0YS5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImRhdGEtbGlzdFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLl9faXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0KTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPk5vIERhdGE8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoYXJndiwgZXZlbnRzLCBjb250ZXh0KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goYXJndiwgem4uZXh0ZW5kKHtcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSwgZXZlbnRzKSwgY29udGV4dCk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoQ2hpbGQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuY2hpbGQpe1xuXHRcdFx0dGhpcy5jaGlsZC5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSwgKHRoaXMuc3RhdGUuYWN0aXZlZD8nYWN0aXZlZCc6JycpKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdmlld1wiPlxuXHRcdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gb25EYXRhQ3JlYXRlZD17KGRhdGEpID0+IHRoaXMuZGF0YSA9IGRhdGEgfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IHJlbmRlcj17dGhpcy5fX3JlbmRlcn0gLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItdHJlZS1saXN0LWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgJiYgPFRyZWUgb25EaWRNb3VudD17KHRyZWUpID0+IHRoaXMuY2hpbGQgPSB0cmVlfSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSBsYWJlbEtleT17dGhpcy5wcm9wcy5sYWJlbEtleX0ga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IHJvb3Q9e3RoaXMucHJvcHMucm9vdCB8fCB0aGlzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IG9uSXRlbUNsaWNrPXt0aGlzLnByb3BzLm9uSXRlbUNsaWNrfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJBY2NvcmRpb25UcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBudWxsXG5cdFx0XHR9KSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbS5kYXRhXG5cdFx0fSksIDEwMDApO1xuXHR9LFxuXHRfX3JlbmRlck5hdjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pdGVtLmRhdGEpe1xuXHRcdFx0dmFyIF9wYXRoID0gJ00wIDM4NC42NjJWMTI3LjMzOGMwLTE3LjgxOCAyMS41NDMtMjYuNzQxIDM0LjE0Mi0xNC4xNDJsMTI4LjY2MiAxMjguNjYyYzcuODEgNy44MSA3LjgxIDIwLjQ3NCAwIDI4LjI4NEwzNC4xNDIgMzk4LjgwNEMyMS41NDMgNDExLjQwNCAwIDQwMi40OCAwIDM4NC42NjJ6Jztcblx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1yaWdodCBmYS13LTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MiA1MTJcIj5cblx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e19wYXRofT48L3BhdGg+XG5cdFx0XHQ8L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckxhYmVsOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlciwge1xuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLFxuXHRcdFx0dHJlZWl0ZW06IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX2xhYmVsS2V5ID0gdGhpcy5wcm9wcy5sYWJlbEtleSB8fCAnbGFiZWwnLFxuXHRcdFx0X2xhYmVsID0gJyc7XG5cdFx0aWYoX2xhYmVsS2V5LmluZGV4T2YoJ3snKSE9LTEgJiYgX2xhYmVsS2V5LmluZGV4T2YoJ30nKSE9LTEpe1xuXHRcdFx0X2xhYmVsID0gX2xhYmVsS2V5LnRvU3RyaW5nKCkuZm9ybWF0KHRoaXMucHJvcHMuaXRlbSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRfbGFiZWwgPSB0aGlzLnByb3BzLml0ZW1bX2xhYmVsS2V5XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+XG5cdFx0XHQ8c3Bhbj57X2xhYmVsfTwvc3Bhbj5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYWNjb3JkaW9uLXRyZWUtaXRlbVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gXG5cdFx0XHRcdGRhdGEtc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9IG9uQ2xpY2s9e3RoaXMuX19jbGlja30gPlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJMYWJlbCgpIH1cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTmF2KCkgfVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVHJlZUl0ZW0gPSByZXF1aXJlKCcuL1RyZWVJdGVtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUcmVlJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdHNlbGVjdGVkOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgb3duZXIpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgb3duZXIpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiA8VHJlZUl0ZW0gcm9vdD17dGhpcy5wcm9wcy5yb290fHx0aGlzfSBpdGVtPXtpdGVtfSBkZXB0aD17dGhpcy5wcm9wcy5kZXB0aCB8fCAxfSBvbkNsaWNrPXt0aGlzLl9faXRlbUNsaWNrfSBrZXk9e2luZGV4fSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsaSBjbGFzc05hbWU9XCJ6ci10cmVlLWxpc3QtbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TG9hZGluZyAuLi48L3NwYW4+PC9saT59XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJUcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdmFsdWVcblx0XHR9KTtcblx0fSxcblx0X19leGlzdENoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25JY29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRhdGE6IG51bGxcblx0XHRcdH0pLCBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpPT50aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLmRhdGFcblx0XHR9KSwgMTAwMCk7XG5cdH0sXG5cdF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gPGkgY2xhc3NOYW1lPVwibG9hZGluZ1wiIC8+O1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BzLml0ZW0uZGF0YSl7XG5cdFx0XHR2YXIgX3BhdGggPSAnTTAgMzg0LjY2MlYxMjcuMzM4YzAtMTcuODE4IDIxLjU0My0yNi43NDEgMzQuMTQyLTE0LjE0MmwxMjguNjYyIDEyOC42NjJjNy44MSA3LjgxIDcuODEgMjAuNDc0IDAgMjguMjg0TDM0LjE0MiAzOTguODA0QzIxLjU0MyA0MTEuNDA0IDAgNDAyLjQ4IDAgMzg0LjY2MnonO1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRcdF9wYXRoID0gJ00zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6Jztcblx0XHRcdH1cblx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1yaWdodCBmYS13LTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MiA1MTJcIj5cblx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e19wYXRofT48L3BhdGg+XG5cdFx0XHQ8L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlck5hdjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tbmF2XCIgc3R5bGU9e3t3aWR0aDogKHRoaXMucHJvcHMuZGVwdGggKiAyMCkgKyAncHgnfX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckljb24oKSB9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJMYWJlbDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5pdGVtTGFiZWxSZW5kZXIsIHtcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbSxcblx0XHRcdHRyZWVpdGVtOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpIHtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+XG5cdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy5pdGVtLmxhYmVsfTwvc3Bhbj5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0cmVlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJOYXYoKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckxhYmVsKCkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19jbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLnJvb3QuX19zZWxlY3RlZF9fKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJvb3QuX19zZWxlY3RlZF9fLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLnJvb3QuX19zZWxlY3RlZF9fID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNlbGVjdGVkOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fY2xpY2tJdGVtOiBmdW5jdGlvbiAoZXZlbnQsIG93bmVyKXtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCBvd25lcik7XG5cdH0sXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0dmFyIFRyZWUgPSByZXF1aXJlKCcuL1RyZWUnKTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxUcmVlIHJvb3Q9e3RoaXMucHJvcHMucm9vdH0gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBkZXB0aD17dGhpcy5wcm9wcy5kZXB0aCArIDF9IG9uSXRlbUNsaWNrPXt0aGlzLl9fY2xpY2tJdGVtfSAvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdHJlZS1pdGVtXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBcblx0XHRcdFx0ZGF0YS1zZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlcigpfVxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFRyZWU6IHJlcXVpcmUoJy4vVHJlZScpLFxuICAgIFRyZWVJdGVtOiByZXF1aXJlKCcuL1RyZWVJdGVtJyksXG4gICAgQWNjb3JkaW9uVHJlZTogcmVxdWlyZSgnLi9BY2NvcmRpb25UcmVlJyksXG4gICAgQWNjb3JkaW9uVHJlZUl0ZW06IHJlcXVpcmUoJy4vQWNjb3JkaW9uVHJlZUl0ZW0nKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=
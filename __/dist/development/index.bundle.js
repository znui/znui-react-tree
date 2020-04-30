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
  getInitialState: function getInitialState() {
    return {
      loading: true,
      selected: null,
      selectedIndex: 0,
      data: null
    };
  },
  __itemClick: function __itemClick(event, owner, item, index) {
    if (this.state.selected) {
      this.state.selected.setState({
        selected: false
      });
    }

    this.state.selected = owner;
    this.state.selectedIndex = index;
    this.state.selected.setState({
      selected: true
    });
    console.log(this.props);

    var _return = this.props.onItemClick && this.props.onItemClick(event, owner, item, index, this);

    if (_return !== false && item.data) {
      this.state.data = item.data;
      this.forceUpdate();
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    item.index = index;
    console.log(this.__itemClick);
    return /*#__PURE__*/React.createElement(AccordionTreeItem, {
      key: index,
      parent: this,
      item: item,
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
  refresh: function refresh() {
    if (this.data) {
      this.data.refresh();
    }
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-accordion-tree", this.props.className),
      style: this.props.style
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
    return {
      selected: false
    };
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

    return /*#__PURE__*/React.createElement("div", {
      className: "item-label"
    }, /*#__PURE__*/React.createElement("span", null, this.props.item[this.props.labelKey || 'label']));
  },
  __click: function __click(event) {
    this.props.onClick && this.props.onClick(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("li", {
      className: znui.react.classname("zr-accordion-tree-item", this.props.className),
      style: this.props.style,
      "data-selected": this.state.selected,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWNjb3JkaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9BY2NvcmRpb25UcmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9UcmVlLmpzIiwid2VicGFjazovLy8uL1RyZWVJdGVtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkFjY29yZGlvblRyZWVJdGVtIiwiVHJlZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZGF0YSIsIl9faXRlbUNsaWNrIiwiZXZlbnQiLCJvd25lciIsIml0ZW0iLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJfcmV0dXJuIiwib25JdGVtQ2xpY2siLCJmb3JjZVVwZGF0ZSIsIl9faXRlbVJlbmRlciIsImxhYmVsS2V5IiwiaXRlbUxhYmVsUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJvbkRhdGFMb2FkZWQiLCJfX3JlbmRlciIsImxlbmd0aCIsIm1hcCIsImJpbmQiLCJyZWZyZXNoIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlc3BvbnNlSGFuZGxlciIsInJvb3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGVwdGgiLCJfX29uSWNvbkNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VGltZW91dCIsIl9fcmVuZGVyTmF2IiwiX3BhdGgiLCJfX3JlbmRlckxhYmVsIiwiX2VsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJ0cmVlaXRlbSIsIl9fY2xpY2siLCJvbkNsaWNrIiwiVHJlZUl0ZW0iLCJhY3RpdmUiLCJ2YWx1ZSIsIl9fZXhpc3RDaGlsZHJlbiIsIl9fcmVuZGVySWNvbiIsIndpZHRoIiwibGFiZWwiLCJfX3NlbGVjdGVkX18iLCJfX2NsaWNrSXRlbSIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJBY2NvcmRpb25UcmVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxJQUFJQyxpQkFBaUIsR0FBR0QsbUJBQU8sQ0FBQyxtREFBRCxDQUEvQjs7QUFFQSxJQUFJRSxJQUFJLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQjtBQUM1QkMsYUFBVyxFQUFDLGlCQURnQjtBQUU1QkMsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05DLGFBQU8sRUFBRSxJQURIO0FBRU5DLGNBQVEs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SSxHQUFHRixtQkFBTyxDQUFDLHlCQUFELENBQWxCOztBQUNBLDBCQUNDLG9CQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS21CLEtBQUwsQ0FBV3FCLElBQXZCO0FBQTZCLFlBQUksRUFBRSxLQUFLekIsS0FBTCxDQUFXTixJQUE5QztBQUFvRCxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXeUIsS0FBWCxHQUFtQixDQUE5RTtBQUFpRixtQkFBVyxFQUFFLEtBQUtvQjtBQUFuRyxRQUREO0FBR0E7O0FBRUQsV0FBTyxJQUFQO0FBQ0EsR0EzR2lDO0FBNEdsQzlCLFFBQU0sRUFBRSxrQkFBVztBQUNsQix3QkFDQztBQUFJLGVBQVMsRUFBRW5DLElBQUksQ0FBQ29DLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixjQUFyQixFQUFxQyxLQUFLakIsS0FBTCxDQUFXa0IsU0FBaEQsQ0FBZjtBQUNDLFdBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUIsS0FEbkI7QUFFQyx1QkFBZSxLQUFLdkIsS0FBTCxDQUFXUjtBQUYzQixPQUdFLEtBQUtzQixRQUFMLEVBSEYsRUFJRSxLQUFLb0MsZ0JBQUwsRUFKRixDQUREO0FBUUE7QUFySGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkF4QixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYnhDLE1BQUksRUFBRUYsbUJBQU8sQ0FBQyx5QkFBRCxDQURBO0FBRWJ3RCxVQUFRLEVBQUV4RCxtQkFBTyxDQUFDLGlDQUFELENBRko7QUFHYmtFLGVBQWEsRUFBRWxFLG1CQUFPLENBQUMsMkNBQUQsQ0FIVDtBQUliQyxtQkFBaUIsRUFBRUQsbUJBQU8sQ0FBQyxtREFBRDtBQUpiLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFjY29yZGlvblRyZWVJdGVtID0gcmVxdWlyZSgnLi9BY2NvcmRpb25UcmVlSXRlbScpO1xuXG52YXIgVHJlZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWNjb3JkaW9uVHJlZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbCxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDAsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkID0gb3duZXI7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZC5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlICYmIGl0ZW0uZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSBpdGVtLmRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX19pdGVtQ2xpY2spO1xuXHRcdHJldHVybiA8QWNjb3JkaW9uVHJlZUl0ZW0ga2V5PXtpbmRleH1cblx0XHRcdHBhcmVudD17dGhpc30gXG5cdFx0XHRpdGVtPXtpdGVtfSBcblx0XHRcdGxhYmVsS2V5PXt0aGlzLnByb3BzLmxhYmVsS2V5fVxuXHRcdFx0aXRlbUxhYmVsUmVuZGVyPXt0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlcn1cblx0XHRcdG9uQ2xpY2s9eyhldmVudCwgb3duZXIpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpfSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhKTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZighZGF0YSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoZGF0YS5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImRhdGEtbGlzdFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLl9faXRlbVJlbmRlcihpdGVtLCBpbmRleCk7XG5cdFx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0KTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPk5vIERhdGE8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYWNjb3JkaW9uLXRyZWVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS12aWV3XCI+XG5cdFx0XHRcdFx0PHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSBvbkRhdGFDcmVhdGVkPXsoZGF0YSkgPT4gdGhpcy5kYXRhID0gZGF0YSB9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gcmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJ6ci10cmVlLWxpc3QtbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TG9hZGluZyAuLi48L3NwYW4+PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YSAmJiA8VHJlZSByZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSBsYWJlbEtleT17dGhpcy5wcm9wcy5sYWJlbEtleX0ga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IHJvb3Q9e3RoaXMucHJvcHMucm9vdCB8fCB0aGlzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IG9uSXRlbUNsaWNrPXt0aGlzLnByb3BzLm9uSXRlbUNsaWNrfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJBY2NvcmRpb25UcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBudWxsXG5cdFx0XHR9KSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbS5kYXRhXG5cdFx0fSksIDEwMDApO1xuXHR9LFxuXHRfX3JlbmRlck5hdjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pdGVtLmRhdGEpe1xuXHRcdFx0dmFyIF9wYXRoID0gJ00wIDM4NC42NjJWMTI3LjMzOGMwLTE3LjgxOCAyMS41NDMtMjYuNzQxIDM0LjE0Mi0xNC4xNDJsMTI4LjY2MiAxMjguNjYyYzcuODEgNy44MSA3LjgxIDIwLjQ3NCAwIDI4LjI4NEwzNC4xNDIgMzk4LjgwNEMyMS41NDMgNDExLjQwNCAwIDQwMi40OCAwIDM4NC42NjJ6Jztcblx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1yaWdodCBmYS13LTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MiA1MTJcIj5cblx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e19wYXRofT48L3BhdGg+XG5cdFx0XHQ8L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckxhYmVsOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlciwge1xuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLFxuXHRcdFx0dHJlZWl0ZW06IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGFiZWxcIj5cblx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLml0ZW1bdGhpcy5wcm9wcy5sYWJlbEtleSB8fCAnbGFiZWwnXX08L3NwYW4+XG5cdFx0PC9kaXY+O1xuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlLWl0ZW1cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IFxuXHRcdFx0XHRkYXRhLXNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9ID5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlck5hdigpIH1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRyZWVJdGVtID0gcmVxdWlyZSgnLi9UcmVlSXRlbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVHJlZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbFxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIG93bmVyKXtcblx0XHR0aGlzLnByb3BzLm9uSXRlbUNsaWNrICYmIHRoaXMucHJvcHMub25JdGVtQ2xpY2soZXZlbnQsIG93bmVyKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHRyZXR1cm4gPFRyZWVJdGVtIHJvb3Q9e3RoaXMucHJvcHMucm9vdHx8dGhpc30gaXRlbT17aXRlbX0gZGVwdGg9e3RoaXMucHJvcHMuZGVwdGggfHwgMX0gb25DbGljaz17dGhpcy5fX2l0ZW1DbGlja30ga2V5PXtpbmRleH0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx1bCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdHJlZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bGkgY2xhc3NOYW1lPVwienItdHJlZS1saXN0LWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uPC9zcGFuPjwvbGk+fVxuXHRcdFx0PC91bD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSVHJlZUl0ZW0nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkZXB0aDogMSxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcblx0XHRcdHNlbGVjdGVkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0bG9hZGluZzogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHZhbHVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fZXhpc3RDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBudWxsXG5cdFx0XHR9KSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbS5kYXRhXG5cdFx0fSksIDEwMDApO1xuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIDxpIGNsYXNzTmFtZT1cImxvYWRpbmdcIiAvPjtcblx0XHR9XG5cdFx0aWYodGhpcy5wcm9wcy5pdGVtLmRhdGEpe1xuXHRcdFx0dmFyIF9wYXRoID0gJ00wIDM4NC42NjJWMTI3LjMzOGMwLTE3LjgxOCAyMS41NDMtMjYuNzQxIDM0LjE0Mi0xNC4xNDJsMTI4LjY2MiAxMjguNjYyYzcuODEgNy44MSA3LjgxIDIwLjQ3NCAwIDI4LjI4NEwzNC4xNDIgMzk4LjgwNEMyMS41NDMgNDExLjQwNCAwIDQwMi40OCAwIDM4NC42NjJ6Jztcblx0XHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRfcGF0aCA9ICdNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyeic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9fb25JY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtcmlnaHQgZmEtdy02IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOTIgNTEyXCI+XG5cdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPXtfcGF0aH0+PC9wYXRoPlxuXHRcdFx0PC9zdmc+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJOYXY6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpdGVtLW5hdlwiIHN0eWxlPXt7d2lkdGg6ICh0aGlzLnByb3BzLmRlcHRoICogMjApICsgJ3B4J319PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJJY29uKCkgfVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyTGFiZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbUxhYmVsUmVuZGVyLCB7XG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0sXG5cdFx0XHR0cmVlaXRlbTogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPlxuXHRcdFx0PHNwYW4+e3RoaXMucHJvcHMuaXRlbS5sYWJlbH08L3NwYW4+XG5cdFx0PC9kaXY+O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHJlZS1pdGVtXCIgb25DbGljaz17dGhpcy5fX2NsaWNrfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTmF2KCkgfVxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJMYWJlbCgpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXykge1xuXHRcdFx0dGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXyA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZDogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2NsaWNrSXRlbTogZnVuY3Rpb24gKGV2ZW50LCBvd25lcil7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgb3duZXIpO1xuXHR9LFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHZhciBUcmVlID0gcmVxdWlyZSgnLi9UcmVlJyk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VHJlZSByb290PXt0aGlzLnByb3BzLnJvb3R9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gZGVwdGg9e3RoaXMucHJvcHMuZGVwdGggKyAxfSBvbkl0ZW1DbGljaz17dGhpcy5fX2NsaWNrSXRlbX0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRyZWUtaXRlbVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gXG5cdFx0XHRcdGRhdGEtc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXIoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBUcmVlOiByZXF1aXJlKCcuL1RyZWUnKSxcbiAgICBUcmVlSXRlbTogcmVxdWlyZSgnLi9UcmVlSXRlbScpLFxuICAgIEFjY29yZGlvblRyZWU6IHJlcXVpcmUoJy4vQWNjb3JkaW9uVHJlZScpLFxuICAgIEFjY29yZGlvblRyZWVJdGVtOiByZXF1aXJlKCcuL0FjY29yZGlvblRyZWVJdGVtJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9
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
    this.state.data = item.data;
    this.forceUpdate();
    this.props.onItemClick && this.props.onItemClick(event, owner, item, index);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    item.index = index;
    return /*#__PURE__*/React.createElement(AccordionTreeItem, {
      parent: this,
      item: item,
      onClick: function onClick(event, owner) {
        return _this.__itemClick(event, owner, item, index);
      },
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
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-accordion-tree", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("ul", {
      className: "data-view"
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
    }, "Loading ..."))), this.state.data && /*#__PURE__*/React.createElement(Tree, {
      key: this.state.selectedIndex,
      root: this.props.root || this,
      data: this.state.data,
      onItemClick: this.__clickItem
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
    }, /*#__PURE__*/React.createElement("span", null, this.props.item.label));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWNjb3JkaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9BY2NvcmRpb25UcmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9UcmVlLmpzIiwid2VicGFjazovLy8uL1RyZWVJdGVtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkFjY29yZGlvblRyZWVJdGVtIiwiVHJlZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZGF0YSIsIl9faXRlbUNsaWNrIiwiZXZlbnQiLCJvd25lciIsIml0ZW0iLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJmb3JjZVVwZGF0ZSIsInByb3BzIiwib25JdGVtQ2xpY2siLCJfX2l0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyb290IiwiX19jbGlja0l0ZW0iLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGVwdGgiLCJfX29uSWNvbkNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VGltZW91dCIsIl9fcmVuZGVyTmF2IiwiX3BhdGgiLCJfX3JlbmRlckxhYmVsIiwiX2VsZW1lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJpdGVtTGFiZWxSZW5kZXIiLCJ0cmVlaXRlbSIsImxhYmVsIiwiX19jbGljayIsIm9uQ2xpY2siLCJUcmVlSXRlbSIsImFjdGl2ZSIsInZhbHVlIiwiX19leGlzdENoaWxkcmVuIiwiX19yZW5kZXJJY29uIiwid2lkdGgiLCJfX3JlbmRlciIsIl9fc2Vs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QUFJLGVBQVMsRUFBRXhCLElBQUksQ0FBQ3lCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixjQUFyQixFQUFxQyxLQUFLUCxLQUFMLENBQVdRLFNBQWhELENBQWY7QUFDQyxXQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXUyxLQURuQjtBQUVDLHVCQUFlLEtBQUtaLEtBQUwsQ0FBV1I7QUFGM0IsT0FHRSxLQUFLOEMsUUFBTCxFQUhGLEVBSUUsS0FBS0UsZ0JBQUwsRUFKRixDQUREO0FBUUE7QUFySGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkF6QixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYjdCLE1BQUksRUFBRUYsbUJBQU8sQ0FBQyx5QkFBRCxDQURBO0FBRWIrQyxVQUFRLEVBQUUvQyxtQkFBTyxDQUFDLGlDQUFELENBRko7QUFHYndELGVBQWEsRUFBRXhELG1CQUFPLENBQUMsMkNBQUQsQ0FIVDtBQUliQyxtQkFBaUIsRUFBRUQsbUJBQU8sQ0FBQyxtREFBRDtBQUpiLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFjY29yZGlvblRyZWVJdGVtID0gcmVxdWlyZSgnLi9BY2NvcmRpb25UcmVlSXRlbScpO1xuXG52YXIgVHJlZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWNjb3JkaW9uVHJlZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbCxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDAsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkID0gb3duZXI7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZC5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IGl0ZW0uZGF0YTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiA8QWNjb3JkaW9uVHJlZUl0ZW0gcGFyZW50PXt0aGlzfSBpdGVtPXtpdGVtfSBvbkNsaWNrPXsoZXZlbnQsIG93bmVyKT0+dGhpcy5fX2l0ZW1DbGljayhldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KX0ga2V5PXtpbmRleH0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZGF0YS12aWV3XCI+XG5cdFx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsaSBjbGFzc05hbWU9XCJ6ci10cmVlLWxpc3QtbG9hZGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+TG9hZGluZyAuLi48L3NwYW4+PC9saT59XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgJiYgPFRyZWUga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IHJvb3Q9e3RoaXMucHJvcHMucm9vdCB8fCB0aGlzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IG9uSXRlbUNsaWNrPXt0aGlzLl9fY2xpY2tJdGVtfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJBY2NvcmRpb25UcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBudWxsXG5cdFx0XHR9KSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbS5kYXRhXG5cdFx0fSksIDEwMDApO1xuXHR9LFxuXHRfX3JlbmRlck5hdjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pdGVtLmRhdGEpe1xuXHRcdFx0dmFyIF9wYXRoID0gJ00wIDM4NC42NjJWMTI3LjMzOGMwLTE3LjgxOCAyMS41NDMtMjYuNzQxIDM0LjE0Mi0xNC4xNDJsMTI4LjY2MiAxMjguNjYyYzcuODEgNy44MSA3LjgxIDIwLjQ3NCAwIDI4LjI4NEwzNC4xNDIgMzk4LjgwNEMyMS41NDMgNDExLjQwNCAwIDQwMi40OCAwIDM4NC42NjJ6Jztcblx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1yaWdodCBmYS13LTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE5MiA1MTJcIj5cblx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e19wYXRofT48L3BhdGg+XG5cdFx0XHQ8L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckxhYmVsOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlciwge1xuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLFxuXHRcdFx0dHJlZWl0ZW06IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGFiZWxcIj5cblx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLml0ZW0ubGFiZWx9PC9zcGFuPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19jbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1hY2NvcmRpb24tdHJlZS1pdGVtXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBcblx0XHRcdFx0ZGF0YS1zZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gb25DbGljaz17dGhpcy5fX2NsaWNrfSA+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckxhYmVsKCkgfVxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJOYXYoKSB9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUcmVlSXRlbSA9IHJlcXVpcmUoJy4vVHJlZUl0ZW0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRyZWUnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0c2VsZWN0ZWQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBvd25lcil7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lcik7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0cmV0dXJuIDxUcmVlSXRlbSByb290PXt0aGlzLnByb3BzLnJvb3R8fHRoaXN9IGl0ZW09e2l0ZW19IGRlcHRoPXt0aGlzLnByb3BzLmRlcHRoIHx8IDF9IG9uQ2xpY2s9e3RoaXMuX19pdGVtQ2xpY2t9IGtleT17aW5kZXh9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRyZWVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxpIGNsYXNzTmFtZT1cInpyLXRyZWUtbGlzdC1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Mb2FkaW5nIC4uLjwvc3Bhbj48L2xpPn1cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUlRyZWVJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGFjdGl2ZTogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB2YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX2V4aXN0Q2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X19vbkljb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogbnVsbFxuXHRcdFx0fSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdHNldFRpbWVvdXQoKCk9PnRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0uZGF0YVxuXHRcdH0pLCAxMDAwKTtcblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiA8aSBjbGFzc05hbWU9XCJsb2FkaW5nXCIgLz47XG5cdFx0fVxuXHRcdGlmKHRoaXMucHJvcHMuaXRlbS5kYXRhKXtcblx0XHRcdHZhciBfcGF0aCA9ICdNMCAzODQuNjYyVjEyNy4zMzhjMC0xNy44MTggMjEuNTQzLTI2Ljc0MSAzNC4xNDItMTQuMTQybDEyOC42NjIgMTI4LjY2MmM3LjgxIDcuODEgNy44MSAyMC40NzQgMCAyOC4yODRMMzQuMTQyIDM5OC44MDRDMjEuNTQzIDQxMS40MDQgMCA0MDIuNDggMCAzODQuNjYyeic7XG5cdFx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdFx0X3BhdGggPSAnTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnonO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX29uSWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LXJpZ2h0IGZhLXctNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiPlxuXHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17X3BhdGh9PjwvcGF0aD5cblx0XHRcdDwvc3ZnPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTmF2OiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1uYXZcIiBzdHlsZT17e3dpZHRoOiAodGhpcy5wcm9wcy5kZXB0aCAqIDIwKSArICdweCd9fT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVySWNvbigpIH1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckxhYmVsOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlciwge1xuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLFxuXHRcdFx0dHJlZWl0ZW06IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGFiZWxcIj5cblx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLml0ZW0ubGFiZWx9PC9zcGFuPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRyZWUtaXRlbVwiIG9uQ2xpY2s9e3RoaXMuX19jbGlja30+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlck5hdigpIH1cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18pIHtcblx0XHRcdHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18uc2V0U3RhdGUoeyBzZWxlY3RlZDogZmFsc2UgfSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18gPSB0aGlzO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWQ6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19jbGlja0l0ZW06IGZ1bmN0aW9uIChldmVudCwgb3duZXIpe1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIG93bmVyKTtcblx0fSxcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR2YXIgVHJlZSA9IHJlcXVpcmUoJy4vVHJlZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFRyZWUgcm9vdD17dGhpcy5wcm9wcy5yb290fSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGRlcHRoPXt0aGlzLnByb3BzLmRlcHRoICsgMX0gb25JdGVtQ2xpY2s9e3RoaXMuX19jbGlja0l0ZW19IC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10cmVlLWl0ZW1cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IFxuXHRcdFx0XHRkYXRhLXNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgVHJlZTogcmVxdWlyZSgnLi9UcmVlJyksXG4gICAgVHJlZUl0ZW06IHJlcXVpcmUoJy4vVHJlZUl0ZW0nKSxcbiAgICBBY2NvcmRpb25UcmVlOiByZXF1aXJlKCcuL0FjY29yZGlvblRyZWUnKSxcbiAgICBBY2NvcmRpb25UcmVlSXRlbTogcmVxdWlyZSgnLi9BY2NvcmRpb25UcmVlSXRlbScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
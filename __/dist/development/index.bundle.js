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

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

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
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    })), this.state.data && /*#__PURE__*/React.createElement(Tree, {
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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

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
      return /*#__PURE__*/React.createElement(SVGIcon, {
        onClick: this.__onIconClick,
        icon: this.state.data ? "faCaretDown" : "faCaretRight"
      });
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

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

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
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

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
      return /*#__PURE__*/React.createElement(SVGIcon, {
        onClick: this.__onIconClick,
        icon: this.state.data ? "faCaretDown" : "faCaretRight"
      });
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

__webpack_require__(/*! znui-react */ "znui-react");

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

/***/ }),

/***/ "znui-react":
/*!*********************!*\
  !*** external "zr" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWNjb3JkaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9BY2NvcmRpb25UcmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9UcmVlLmpzIiwid2VicGFjazovLy8uL1RyZWVJdGVtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwienJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkFjY29yZGlvblRyZWVJdGVtIiwibG9hZGVyIiwiVHJlZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZGF0YSIsIl9faXRlbUNsaWNrIiwiZXZlbnQiLCJvd25lciIsIml0ZW0iLCJpbmRleCIsInN0YXRlIiwic2V0U3RhdGUiLCJmb3JjZVVwZGF0ZSIsInByb3BzIiwib25JdGVtQ2xpY2siLCJfX2l0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyb290IiwiX19jbGlja0l0ZW0iLCJtb2R1bGUiLCJleHBvcnRzIiwiU1ZHSWNvbiIsImdldERlZmF1bHRQcm9wcyIsImRlcHRoIiwiX19vbkljb25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJfX3JlbmRlck5hdiIsIl9fcmVuZGVyTGFiZWwiLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsIml0ZW1MYWJlbFJlbmRlciIsInRyZWVpdGVtIiwibGFiZWwiLCJfX2NsaWNrIiwib25DbGljayIsIlRyZWVJdGVtIiwiYWN0aXZlIiwidmFsdWUiLCJfX2V4aXN0Q2hpbGRyZW4iLCJfX3JlbmRlckljb24iLCJ3aWR0aCIsIl9fcmVuZGVyIiwiX19zZWxlY3RlZF9fIiwiX19yZW5kZXJDaGlsZHJlbiIsIkFjY29yZGlvblRyZWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUlDLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLG1EQUFELENBQS9COztBQUNBLElBQUlFLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFwQjs7QUFFQSxJQUFJRyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUM1QkMsYUFBVyxFQUFDLGlCQURnQjtBQUU1QkMsaUJBQWUsRUFBRSwy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QUFDbEIsd0JBQ0M7QUFBSSxlQUFTLEVBQUV6QixJQUFJLENBQUMwQixLQUFMLENBQVdDLFNBQVgsQ0FBcUIsY0FBckIsRUFBcUMsS0FBS1AsS0FBTCxDQUFXUSxTQUFoRCxDQUFmO0FBQ0MsV0FBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1MsS0FEbkI7QUFFQyx1QkFBZSxLQUFLWixLQUFMLENBQVdSO0FBRjNCLE9BR0UsS0FBSzhDLFFBQUwsRUFIRixFQUlFLEtBQUtFLGdCQUFMLEVBSkYsQ0FERDtBQVFBO0FBL0dpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0hBeEQsbUJBQU8sQ0FBQyw4QkFBRCxDQUFQOztBQUNBK0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2I3QixNQUFJLEVBQUVILG1CQUFPLENBQUMseUJBQUQsQ0FEQTtBQUViZ0QsVUFBUSxFQUFFaEQsbUJBQU8sQ0FBQyxpQ0FBRCxDQUZKO0FBR2J5RCxlQUFhLEVBQUV6RCxtQkFBTyxDQUFDLDJDQUFELENBSFQ7QUFJYkMsbUJBQWlCLEVBQUVELG1CQUFPLENBQUMsbURBQUQ7QUFKYixDQUFqQixDOzs7Ozs7Ozs7OztBQ0RBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSw2QkFBNkIsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E1QyxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBY2NvcmRpb25UcmVlSXRlbSA9IHJlcXVpcmUoJy4vQWNjb3JkaW9uVHJlZUl0ZW0nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG52YXIgVHJlZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQWNjb3JkaW9uVHJlZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbCxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDAsXG5cdFx0XHRkYXRhOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkID0gb3duZXI7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5zdGF0ZS5zZWxlY3RlZC5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuXHRcdHRoaXMuc3RhdGUuZGF0YSA9IGl0ZW0uZGF0YTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiA8QWNjb3JkaW9uVHJlZUl0ZW0gcGFyZW50PXt0aGlzfSBpdGVtPXtpdGVtfSBvbkNsaWNrPXsoZXZlbnQsIG93bmVyKT0+dGhpcy5fX2l0ZW1DbGljayhldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KX0ga2V5PXtpbmRleH0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZGF0YS12aWV3XCI+XG5cdFx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgJiYgPFRyZWUga2V5PXt0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXh9IHJvb3Q9e3RoaXMucHJvcHMucm9vdCB8fCB0aGlzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IG9uSXRlbUNsaWNrPXt0aGlzLl9fY2xpY2tJdGVtfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJBY2NvcmRpb25UcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uSWNvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBudWxsXG5cdFx0XHR9KSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuaXRlbS5kYXRhXG5cdFx0fSksIDEwMDApO1xuXHR9LFxuXHRfX3JlbmRlck5hdjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pdGVtLmRhdGEpe1xuXHRcdFx0cmV0dXJuIDxTVkdJY29uIG9uQ2xpY2s9e3RoaXMuX19vbkljb25DbGlja30gaWNvbj17dGhpcy5zdGF0ZS5kYXRhP1wiZmFDYXJldERvd25cIjpcImZhQ2FyZXRSaWdodFwifSAvPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTGFiZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbUxhYmVsUmVuZGVyLCB7XG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0sXG5cdFx0XHR0cmVlaXRlbTogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPlxuXHRcdFx0PHNwYW4+e3RoaXMucHJvcHMuaXRlbS5sYWJlbH08L3NwYW4+XG5cdFx0PC9kaXY+O1xuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlLWl0ZW1cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IFxuXHRcdFx0XHRkYXRhLXNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9ID5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlck5hdigpIH1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRyZWVJdGVtID0gcmVxdWlyZSgnLi9UcmVlSXRlbScpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUcmVlJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdHNlbGVjdGVkOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgb3duZXIpe1xuXHRcdHRoaXMucHJvcHMub25JdGVtQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkl0ZW1DbGljayhldmVudCwgb3duZXIpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHJldHVybiA8VHJlZUl0ZW0gcm9vdD17dGhpcy5wcm9wcy5yb290fHx0aGlzfSBpdGVtPXtpdGVtfSBkZXB0aD17dGhpcy5wcm9wcy5kZXB0aCB8fCAxfSBvbkNsaWNrPXt0aGlzLl9faXRlbUNsaWNrfSBrZXk9e2luZGV4fSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJUcmVlSXRlbScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdmFsdWVcblx0XHR9KTtcblx0fSxcblx0X19leGlzdENoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25JY29uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRhdGE6IG51bGxcblx0XHRcdH0pLCBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpPT50aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLmRhdGFcblx0XHR9KSwgMTAwMCk7XG5cdH0sXG5cdF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gPGkgY2xhc3NOYW1lPVwibG9hZGluZ1wiIC8+O1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BzLml0ZW0uZGF0YSl7XG5cdFx0XHRyZXR1cm4gPFNWR0ljb24gb25DbGljaz17dGhpcy5fX29uSWNvbkNsaWNrfSBpY29uPXt0aGlzLnN0YXRlLmRhdGE/XCJmYUNhcmV0RG93blwiOlwiZmFDYXJldFJpZ2h0XCJ9IC8+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJOYXY6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpdGVtLW5hdlwiIHN0eWxlPXt7d2lkdGg6ICh0aGlzLnByb3BzLmRlcHRoICogMjApICsgJ3B4J319PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJJY29uKCkgfVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyTGFiZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbUxhYmVsUmVuZGVyLCB7XG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0sXG5cdFx0XHR0cmVlaXRlbTogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPlxuXHRcdFx0PHNwYW4+e3RoaXMucHJvcHMuaXRlbS5sYWJlbH08L3NwYW4+XG5cdFx0PC9kaXY+O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHJlZS1pdGVtXCIgb25DbGljaz17dGhpcy5fX2NsaWNrfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTmF2KCkgfVxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJMYWJlbCgpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXykge1xuXHRcdFx0dGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBmYWxzZSB9KTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5yb290Ll9fc2VsZWN0ZWRfXyA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RlZDogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2NsaWNrSXRlbTogZnVuY3Rpb24gKGV2ZW50LCBvd25lcil7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgb3duZXIpO1xuXHR9LFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHZhciBUcmVlID0gcmVxdWlyZSgnLi9UcmVlJyk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VHJlZSByb290PXt0aGlzLnByb3BzLnJvb3R9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gZGVwdGg9e3RoaXMucHJvcHMuZGVwdGggKyAxfSBvbkl0ZW1DbGljaz17dGhpcy5fX2NsaWNrSXRlbX0gLz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRyZWUtaXRlbVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gXG5cdFx0XHRcdGRhdGEtc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXIoKX1cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59KTsiLCJyZXF1aXJlKCd6bnVpLXJlYWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBUcmVlOiByZXF1aXJlKCcuL1RyZWUnKSxcbiAgICBUcmVlSXRlbTogcmVxdWlyZSgnLi9UcmVlSXRlbScpLFxuICAgIEFjY29yZGlvblRyZWU6IHJlcXVpcmUoJy4vQWNjb3JkaW9uVHJlZScpLFxuICAgIEFjY29yZGlvblRyZWVJdGVtOiByZXF1aXJlKCcuL0FjY29yZGlvblRyZWVJdGVtJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInpyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9
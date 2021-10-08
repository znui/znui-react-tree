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
      itemKey: 'zxnz_ID'
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
  __itemRender: function __itemRender(item, index, data) {
    var _this = this;

    item.index = index;

    var _element = znui.react.createReactElement(this.props.itemRender, {
      item: item,
      index: index,
      tree: this
    }, this.props.context);

    if (_element) {
      return _element;
    }

    return /*#__PURE__*/React.createElement(AccordionTreeItem, {
      key: index,
      parent: this,
      item: item,
      selected: this.props.itemKey && item[this.props.itemKey] && item[this.props.itemKey] == this.state.selected,
      labelKey: this.props.labelKey,
      itemLabelRender: function itemLabelRender(value) {
        return _this.props.itemLabelRender && _this.props.itemLabelRender(value, item, index, data);
      },
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
    var _this2 = this;

    if (!data) {
      return null;
    }

    if (data.code != 200) {
      return /*#__PURE__*/React.createElement("div", {
        className: "no-data"
      }, data.result.message || data.message);
    }

    data = data.result;

    if (data.length) {
      return /*#__PURE__*/React.createElement("ul", {
        className: "data-list"
      }, this.props.topRender && /*#__PURE__*/React.createElement(AccordionTreeItem, {
        itemLabelRender: function itemLabelRender() {
          return _this2.props.topRender(data, _this2);
        }
      }), data.map(function (item, index) {
        return this.__itemRender(item, index, data);
      }.bind(this)), this.props.bottomRender && /*#__PURE__*/React.createElement(AccordionTreeItem, {
        itemLabelRender: function itemLabelRender() {
          return _this2.props.bottomRender(data, _this2);
        }
      }));
    } else {
      var _emptyContent = znui.react.createReactElement(this.props.emptyContentRender, this, this.props.context);

      var _empty = znui.react.createReactElement(this.props.emptyRender, this, this.props.context);

      if (!_emptyContent) {
        _emptyContent = /*#__PURE__*/React.createElement("div", {
          className: "no-data"
        }, "\u6682\u65E0\u6570\u636E");
      }

      if (!_empty) {
        _empty = /*#__PURE__*/React.createElement("ul", {
          className: "data-list"
        }, this.props.topRender && /*#__PURE__*/React.createElement(AccordionTreeItem, {
          itemLabelRender: function itemLabelRender() {
            return _this2.props.topRender(data, _this2);
          }
        }), /*#__PURE__*/React.createElement(AccordionTreeItem, {
          itemLabelRender: _emptyContent
        }));
      }

      return _empty;
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
    var _this3 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-accordion-tree", this.props.className, this.state.className, this.state.actived ? 'actived' : ''),
      style: znui.react.style(this.props.style, this.state.style)
    }, /*#__PURE__*/React.createElement("div", {
      className: "data-view"
    }, /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      responseHandler: this.props.responseHandler,
      onDataCreated: function onDataCreated(data) {
        return _this3.data = data;
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
        return _this3.child = tree;
      },
      topRender: this.props.topRender,
      bottomRender: this.props.bottomRender,
      itemLabelRender: this.props.itemLabelRender,
      emptyRender: this.props.emptyRender,
      emptyContentRender: this.props.emptyContentRender,
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
      clicked: false
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
    if (this.props.item && this.props.item.data) {
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
      tree: this.props.parent,
      treeitem: this
    }, this.props.context);

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
  setClicked: function setClicked(clicked) {
    this.setState({
      clicked: clicked
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("li", {
      style: this.props.style,
      className: znui.react.classname("zr-accordion-tree-item", this.props.className),
      "data-clicked": this.state.clicked,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWNjb3JkaW9uVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9BY2NvcmRpb25UcmVlSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9UcmVlLmpzIiwid2VicGFjazovLy8uL1RyZWVJdGVtLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkFjY29yZGlvblRyZWVJdGVtIiwiVHJlZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJpdGVtS2V5IiwiZ2V0SW5pdGlhbFN0YXRlIiwiYWN0aXZlZCIsImxvYWRpbmciLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJkYXRhIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwib25EaWRNb3VudCIsIl9faXRlbUNsaWNrIiwiZXZlbnQiLCJvd25lciIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJfX2FjdGl2ZWRfXyIsInNldFN0YXRlIiwic3RhdGUiLCJfcmV0dXJuIiwib25JdGVtQ2xpY2siLCJmb3JjZVVwZGF0ZSIsIl9faXRlbVJlbmRlciIsIl9lbGVtZW50IiwicmVhY3QiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJpdGVtUmVuZGVyIiwidHJlZSIsImNvbnRleHQiLCJsYWJlbEtleSIsInZhbHVlIiwiaXRlbUxhYmVsUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJvbkRhdGFMb2FkZWQiLCJfX3JlbmRlciIsImNvZGUiLCJyZXN1bHQiLCJtZXNzYWdlIiwibGVuZ3RoIiwidG9wUmVuZGVyIiwibWFwIiwiYmluZCIsImJvdHRvbVJlbmRlciIsIl9lbXB0eUNvbnRlbnQiLCJlbXB0eUNvbnRlbnRSZW5kZXIiLCJfZW1wdHkiLCJlbXB0eVJlbmRlciIsInJlZnJlc2giLCJhcmd2IiwiZXZlbnRzIiwiem4iLCJleHRlbmQiLCJhZnRlciIsInJlc3BvbnNlIiwicmVmcmVzaENoaWxkIiwiY2hpbGQiLCJyZW5kZXIiLCJjbGFzc25hbWUiLCJyZXNwb25zZUhhbmRsZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVwdGgiLCJjbGlja2VkIiwiX19vbkljb25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJfX3JlbmRlck5hdiIsIl9wYXRoIiwiX19yZW5kZXJMYWJlbCIsInBhcmVudCIsInRyZWVpdGVtIiwiX2xhYmVsS2V5IiwiX2xhYmVsIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwiZm9ybWF0IiwiX19jbGljayIsIm9uQ2xpY2siLCJzZXRDbGlja2VkIiwiVHJlZUl0ZW0iLCJhY3RpdmUiLCJfX2V4aXN0Q2hpbGRyZW4iLCJfX3JlbmRlckljb24iLCJ3aWR0aCIsImxhYmVsIiwiX19zZWxlY3RlZF9fIiwiX19jbGlja0l0ZW0iLCJfX3JlbmRlckNoaWxkcmVuIiwiQWNjb3JkaW9uVHJlZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVB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SVYsSUFBSSxHQUFHRixtQkFBTyxDQUFDLHlCQUFELENBQWxCOztBQUNBLDBCQUNDLG9CQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS2dCLEtBQUwsQ0FBV08sSUFBdkI7QUFBNkIsWUFBSSxFQUFFLEtBQUtHLEtBQUwsQ0FBV2QsSUFBOUM7QUFBb0QsYUFBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBV3NELEtBQVgsR0FBbUIsQ0FBOUU7QUFBaUYsbUJBQVcsRUFBRSxLQUFLeUI7QUFBbkcsUUFERDtBQUdBOztBQUVELFdBQU8sSUFBUDtBQUNBLEdBM0dpQztBQTRHbEM5QixRQUFNLEVBQUUsa0JBQVc7QUFDbEIsd0JBQ0M7QUFBSSxlQUFTLEVBQUVsRSxJQUFJLENBQUNpQyxLQUFMLENBQVdrQyxTQUFYLENBQXFCLGNBQXJCLEVBQXFDLEtBQUtsRCxLQUFMLENBQVdILFNBQWhELENBQWY7QUFDQyxXQUFLLEVBQUUsS0FBS0csS0FBTCxDQUFXRixLQURuQjtBQUVDLHVCQUFlLEtBQUtZLEtBQUwsQ0FBV2hCO0FBRjNCLE9BR0UsS0FBS2lDLFFBQUwsRUFIRixFQUlFLEtBQUtxRCxnQkFBTCxFQUpGLENBREQ7QUFRQTtBQXJIaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNGQTVCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNibkUsTUFBSSxFQUFFRixtQkFBTyxDQUFDLHlCQUFELENBREE7QUFFYndGLFVBQVEsRUFBRXhGLG1CQUFPLENBQUMsaUNBQUQsQ0FGSjtBQUdiaUcsZUFBYSxFQUFFakcsbUJBQU8sQ0FBQywyQ0FBRCxDQUhUO0FBSWJDLG1CQUFpQixFQUFFRCxtQkFBTyxDQUFDLG1EQUFEO0FBSmIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWNjb3JkaW9uVHJlZUl0ZW0gPSByZXF1aXJlKCcuL0FjY29yZGlvblRyZWVJdGVtJyk7XG5cbnZhciBUcmVlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJBY2NvcmRpb25UcmVlJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXRlbUtleTogJ3p4bnpfSUQnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmVkOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRzZWxlY3RlZDogbnVsbCxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IDAsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnByb3BzLm9uRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkRpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMucHJvcHMucm9vdCl7XG5cdFx0XHRpZih0aGlzLnByb3BzLnJvb3QuX19hY3RpdmVkX18pIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5yb290Ll9fYWN0aXZlZF9fLnNldFN0YXRlKHsgYWN0aXZlZDogZmFsc2UgfSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByb3BzLnJvb3QuX19hY3RpdmVkX18gPSB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLl9fYWN0aXZlZF9fID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlZDogdHJ1ZSB9KTtcblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkID0gaXRlbVt0aGlzLnByb3BzLml0ZW1LZXldO1xuXHRcdHRoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lciwgaXRlbSwgaW5kZXgsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlICYmIGl0ZW0uZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSBpdGVtLmRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgZGF0YSl7XG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbVJlbmRlciwge1xuXHRcdFx0aXRlbTogaXRlbSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdHRyZWU6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpIHtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPEFjY29yZGlvblRyZWVJdGVtIGtleT17aW5kZXh9XG5cdFx0XHRwYXJlbnQ9e3RoaXN9IFxuXHRcdFx0aXRlbT17aXRlbX0gXG5cdFx0XHRzZWxlY3RlZD17dGhpcy5wcm9wcy5pdGVtS2V5ICYmIGl0ZW1bdGhpcy5wcm9wcy5pdGVtS2V5XSAmJiBpdGVtW3RoaXMucHJvcHMuaXRlbUtleV09PXRoaXMuc3RhdGUuc2VsZWN0ZWR9XG5cdFx0XHRsYWJlbEtleT17dGhpcy5wcm9wcy5sYWJlbEtleX1cblx0XHRcdGl0ZW1MYWJlbFJlbmRlcj17KHZhbHVlKT0+e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5pdGVtTGFiZWxSZW5kZXIgJiYgdGhpcy5wcm9wcy5pdGVtTGFiZWxSZW5kZXIodmFsdWUsIGl0ZW0sIGluZGV4LCBkYXRhKTtcblx0XHRcdH19XG5cdFx0XHRvbkNsaWNrPXsoZXZlbnQsIG93bmVyKT0+dGhpcy5fX2l0ZW1DbGljayhldmVudCwgb3duZXIsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoZGF0YSk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYoIWRhdGEpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmKGRhdGEuY29kZSAhPSAyMDApIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm8tZGF0YVwiPntkYXRhLnJlc3VsdC5tZXNzYWdlIHx8IGRhdGEubWVzc2FnZX08L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcblx0XHRpZihkYXRhLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZGF0YS1saXN0XCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50b3BSZW5kZXIgJiYgPEFjY29yZGlvblRyZWVJdGVtIGl0ZW1MYWJlbFJlbmRlcj17KCk9PnRoaXMucHJvcHMudG9wUmVuZGVyKGRhdGEsIHRoaXMpfSAvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fX2l0ZW1SZW5kZXIoaXRlbSwgaW5kZXgsIGRhdGEpO1xuXHRcdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmJvdHRvbVJlbmRlciAmJiA8QWNjb3JkaW9uVHJlZUl0ZW0gaXRlbUxhYmVsUmVuZGVyPXsoKT0+dGhpcy5wcm9wcy5ib3R0b21SZW5kZXIoZGF0YSwgdGhpcyl9IC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0KTtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBfZW1wdHlDb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eUNvbnRlbnRSZW5kZXIsIHRoaXMsIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0XHR2YXIgX2VtcHR5ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwgdGhpcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRcdGlmKCFfZW1wdHlDb250ZW50KXtcblx0XHRcdFx0X2VtcHR5Q29udGVudCA9IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vLWRhdGFcIj7mmoLml6DmlbDmja48L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIV9lbXB0eSkge1xuXHRcdFx0XHRfZW1wdHkgPSAoXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImRhdGEtbGlzdFwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnRvcFJlbmRlciAmJiA8QWNjb3JkaW9uVHJlZUl0ZW0gaXRlbUxhYmVsUmVuZGVyPXsoKT0+dGhpcy5wcm9wcy50b3BSZW5kZXIoZGF0YSwgdGhpcyl9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uVHJlZUl0ZW0gaXRlbUxhYmVsUmVuZGVyPXtfZW1wdHlDb250ZW50fSAvPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfZW1wdHk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoYXJndiwgZXZlbnRzLCBjb250ZXh0KXtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goYXJndiwgem4uZXh0ZW5kKHtcblx0XHRcdFx0YWZ0ZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSwgZXZlbnRzKSwgY29udGV4dCk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoQ2hpbGQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuY2hpbGQpe1xuXHRcdFx0dGhpcy5jaGlsZC5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWFjY29yZGlvbi10cmVlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSwgKHRoaXMuc3RhdGUuYWN0aXZlZD8nYWN0aXZlZCc6JycpKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdmlld1wiPlxuXHRcdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgcmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn0gb25EYXRhQ3JlYXRlZD17KGRhdGEpID0+IHRoaXMuZGF0YSA9IGRhdGEgfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IHJlbmRlcj17dGhpcy5fX3JlbmRlcn0gLz5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwienItdHJlZS1saXN0LWxvYWRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiIC8+PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkxvYWRpbmcgLi4uPC9zcGFuPjwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgJiYgPFRyZWUgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGlkTW91bnQ9eyh0cmVlKSA9PiB0aGlzLmNoaWxkID0gdHJlZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvcFJlbmRlcj17dGhpcy5wcm9wcy50b3BSZW5kZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbVJlbmRlcj17dGhpcy5wcm9wcy5ib3R0b21SZW5kZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1MYWJlbFJlbmRlcj17dGhpcy5wcm9wcy5pdGVtTGFiZWxSZW5kZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVtcHR5UmVuZGVyPXt0aGlzLnByb3BzLmVtcHR5UmVuZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbXB0eUNvbnRlbnRSZW5kZXI9e3RoaXMucHJvcHMuZW1wdHlDb250ZW50UmVuZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxLZXk9e3RoaXMucHJvcHMubGFiZWxLZXl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb3Q9e3RoaXMucHJvcHMucm9vdCB8fCB0aGlzfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25JdGVtQ2xpY2s9e3RoaXMucHJvcHMub25JdGVtQ2xpY2t9IC8+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWU7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkFjY29yZGlvblRyZWVJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGlja2VkOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkljb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogbnVsbFxuXHRcdFx0fSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdHNldFRpbWVvdXQoKCk9PnRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0uZGF0YVxuXHRcdH0pLCAxMDAwKTtcblx0fSxcblx0X19yZW5kZXJOYXY6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXRlbSAmJiB0aGlzLnByb3BzLml0ZW0uZGF0YSl7XG5cdFx0XHR2YXIgX3BhdGggPSAnTTAgMzg0LjY2MlYxMjcuMzM4YzAtMTcuODE4IDIxLjU0My0yNi43NDEgMzQuMTQyLTE0LjE0MmwxMjguNjYyIDEyOC42NjJjNy44MSA3LjgxIDcuODEgMjAuNDc0IDAgMjguMjg0TDM0LjE0MiAzOTguODA0QzIxLjU0MyA0MTEuNDA0IDAgNDAyLjQ4IDAgMzg0LjY2MnonO1xuXHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX29uSWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LXJpZ2h0IGZhLXctNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiPlxuXHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17X3BhdGh9PjwvcGF0aD5cblx0XHRcdDwvc3ZnPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTGFiZWw6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbUxhYmVsUmVuZGVyLCB7XG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0sXG5cdFx0XHR0cmVlOiB0aGlzLnByb3BzLnBhcmVudCxcblx0XHRcdHRyZWVpdGVtOiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX2xhYmVsS2V5ID0gdGhpcy5wcm9wcy5sYWJlbEtleSB8fCAnbGFiZWwnLFxuXHRcdFx0X2xhYmVsID0gJyc7XG5cdFx0aWYoX2xhYmVsS2V5LmluZGV4T2YoJ3snKSE9LTEgJiYgX2xhYmVsS2V5LmluZGV4T2YoJ30nKSE9LTEpe1xuXHRcdFx0X2xhYmVsID0gX2xhYmVsS2V5LnRvU3RyaW5nKCkuZm9ybWF0KHRoaXMucHJvcHMuaXRlbSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRfbGFiZWwgPSB0aGlzLnByb3BzLml0ZW1bX2xhYmVsS2V5XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+XG5cdFx0XHQ8c3Bhbj57X2xhYmVsfTwvc3Bhbj5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdHNldENsaWNrZWQ6IGZ1bmN0aW9uIChjbGlja2VkKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNsaWNrZWQ6IGNsaWNrZWRcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYWNjb3JkaW9uLXRyZWUtaXRlbVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRkYXRhLWNsaWNrZWQ9e3RoaXMuc3RhdGUuY2xpY2tlZH1cblx0XHRcdFx0ZGF0YS1zZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH0gb25DbGljaz17dGhpcy5fX2NsaWNrfSA+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckxhYmVsKCkgfVxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJOYXYoKSB9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUcmVlSXRlbSA9IHJlcXVpcmUoJy4vVHJlZUl0ZW0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRyZWUnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0c2VsZWN0ZWQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBvd25lcil7XG5cdFx0dGhpcy5wcm9wcy5vbkl0ZW1DbGljayAmJiB0aGlzLnByb3BzLm9uSXRlbUNsaWNrKGV2ZW50LCBvd25lcik7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0cmV0dXJuIDxUcmVlSXRlbSByb290PXt0aGlzLnByb3BzLnJvb3R8fHRoaXN9IGl0ZW09e2l0ZW19IGRlcHRoPXt0aGlzLnByb3BzLmRlcHRoIHx8IDF9IG9uQ2xpY2s9e3RoaXMuX19pdGVtQ2xpY2t9IGtleT17aW5kZXh9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRyZWVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxpIGNsYXNzTmFtZT1cInpyLXRyZWUtbGlzdC1sb2FkZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIiAvPjxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5Mb2FkaW5nIC4uLjwvc3Bhbj48L2xpPn1cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUlRyZWVJdGVtJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGFjdGl2ZTogZmFsc2UsXG5cdFx0XHRzZWxlY3RlZDogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB2YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX2V4aXN0Q2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X19vbkljb25DbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogbnVsbFxuXHRcdFx0fSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdHNldFRpbWVvdXQoKCk9PnRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLml0ZW0uZGF0YVxuXHRcdH0pLCAxMDAwKTtcblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiA8aSBjbGFzc05hbWU9XCJsb2FkaW5nXCIgLz47XG5cdFx0fVxuXHRcdGlmKHRoaXMucHJvcHMuaXRlbS5kYXRhKXtcblx0XHRcdHZhciBfcGF0aCA9ICdNMCAzODQuNjYyVjEyNy4zMzhjMC0xNy44MTggMjEuNTQzLTI2Ljc0MSAzNC4xNDItMTQuMTQybDEyOC42NjIgMTI4LjY2MmM3LjgxIDcuODEgNy44MSAyMC40NzQgMCAyOC4yODRMMzQuMTQyIDM5OC44MDRDMjEuNTQzIDQxMS40MDQgMCA0MDIuNDggMCAzODQuNjYyeic7XG5cdFx0XHRpZih0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdFx0X3BhdGggPSAnTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnonO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX29uSWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LXJpZ2h0IGZhLXctNiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiPlxuXHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17X3BhdGh9PjwvcGF0aD5cblx0XHRcdDwvc3ZnPjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTmF2OiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1uYXZcIiBzdHlsZT17e3dpZHRoOiAodGhpcy5wcm9wcy5kZXB0aCAqIDIwKSArICdweCd9fT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVySWNvbigpIH1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckxhYmVsOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLml0ZW1MYWJlbFJlbmRlciwge1xuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5pdGVtLFxuXHRcdFx0dHJlZWl0ZW06IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGFiZWxcIj5cblx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLml0ZW0ubGFiZWx9PC9zcGFuPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRyZWUtaXRlbVwiIG9uQ2xpY2s9e3RoaXMuX19jbGlja30+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlck5hdigpIH1cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18pIHtcblx0XHRcdHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18uc2V0U3RhdGUoeyBzZWxlY3RlZDogZmFsc2UgfSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMucm9vdC5fX3NlbGVjdGVkX18gPSB0aGlzO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWQ6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19jbGlja0l0ZW06IGZ1bmN0aW9uIChldmVudCwgb3duZXIpe1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIG93bmVyKTtcblx0fSxcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR2YXIgVHJlZSA9IHJlcXVpcmUoJy4vVHJlZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFRyZWUgcm9vdD17dGhpcy5wcm9wcy5yb290fSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGRlcHRoPXt0aGlzLnByb3BzLmRlcHRoICsgMX0gb25JdGVtQ2xpY2s9e3RoaXMuX19jbGlja0l0ZW19IC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10cmVlLWl0ZW1cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IFxuXHRcdFx0XHRkYXRhLXNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyKCl9XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvbGk+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgVHJlZTogcmVxdWlyZSgnLi9UcmVlJyksXG4gICAgVHJlZUl0ZW06IHJlcXVpcmUoJy4vVHJlZUl0ZW0nKSxcbiAgICBBY2NvcmRpb25UcmVlOiByZXF1aXJlKCcuL0FjY29yZGlvblRyZWUnKSxcbiAgICBBY2NvcmRpb25UcmVlSXRlbTogcmVxdWlyZSgnLi9BY2NvcmRpb25UcmVlSXRlbScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
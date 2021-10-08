"use strict";

var React = znui.React || require('react');

var AccordionTreeItem = require('./AccordionTreeItem');

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
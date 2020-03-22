"use strict";

var React = znui.React || require('react');

var AccordionTreeItem = require('./AccordionTreeItem');

var loader = require('znui-react-loader');

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
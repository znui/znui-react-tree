"use strict";

var React = znui.React || require('react');

var TreeItem = require('./TreeItem');

var loader = require('znui-react-loader');

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
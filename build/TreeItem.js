"use strict";

var React = znui.React || require('react');

var SVGIcon = require('znui-react-icon').SVGIcon;

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
      return React.createElement("i", {
        className: "loading"
      });
    }

    if (this.props.item.data) {
      return React.createElement(SVGIcon, {
        onClick: this.__onIconClick,
        icon: this.state.data ? "faCaretDown" : "faCaretRight"
      });
    }
  },
  __renderNav: function __renderNav() {
    return React.createElement("span", {
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

    return React.createElement("div", {
      className: "item-label"
    }, React.createElement("span", null, this.props.item.label));
  },
  __render: function __render() {
    return React.createElement("div", {
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
      var Tree = require('./Tree');

      return React.createElement(Tree, {
        root: this.props.root,
        data: this.state.data,
        depth: this.props.depth + 1,
        onItemClick: this.__clickItem
      });
    }

    return null;
  },
  render: function render() {
    return React.createElement("li", {
      className: znui.react.classname("zr-tree-item", this.props.className),
      style: this.props.style,
      "data-selected": this.state.selected
    }, this.__render(), this.__renderChildren());
  }
});
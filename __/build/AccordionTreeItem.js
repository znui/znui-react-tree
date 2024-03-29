"use strict";

var React = znui.React || require('react');

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
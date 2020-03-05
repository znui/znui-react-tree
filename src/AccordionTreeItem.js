var React = znui.React || require('react');
var SVGIcon = require('znui-react-icon').SVGIcon;

module.exports = React.createClass({
	displayName: 'ZRAccordionTreeItem',
	getDefaultProps: function (){
		return {
			depth: 1,
			className: ''
		}
	},
	getInitialState: function() {
		return {
			selected: false
		}
	},
	__onIconClick: function (event){
		event.stopPropagation();
		if(this.state.data) {
			return this.setState({
				data: null
			}), false;
		}
		this.setState({
			loading: true
		});

		setTimeout(()=>this.setState({
			loading: false,
			data: this.props.item.data
		}), 1000);
	},
	__renderNav: function (){
		if(this.props.item.data){
			return <SVGIcon onClick={this.__onIconClick} icon={this.state.data?"faCaretDown":"faCaretRight"} />;
		}
	},
	__renderLabel: function (){
		var _element = znui.react.createReactElement(this.props.itemLabelRender, {
			data: this.props.item,
			treeitem: this
		});
		if(_element) {
			return _element;
		}

		return <div className="item-label">
			<span>{this.props.item.label}</span>
		</div>;
	},
	__click: function (event){
		this.props.onClick && this.props.onClick(event, this);
	},
	render: function (){
		return (
			<li className={znui.react.classname("zr-accordion-tree-item", this.props.className)} 
				style={this.props.style} 
				data-selected={this.state.selected} onClick={this.__click} >
				{ this.__renderLabel() }
				{ this.__renderNav() }
			</li>
		);
	}
});
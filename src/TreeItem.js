var React = znui.React || require('react');
var SVGIcon = require('znui-react-icon').SVGIcon;

module.exports = React.createClass({
	displayName: 'ZRTreeItem',
	getDefaultProps: function (){
		return {
			depth: 1,
			className: ''
		}
	},
	getInitialState: function() {
		return {
			loading: false,
			active: false,
			selected: false
		}
	},
	loading: function (value){
		this.setState({
			loading: value
		});
	},
	__existChildren: function (){
		if(this.props.data) {
			return true;
		}else {
			return false;
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
	__renderIcon: function (){
		if(this.state.loading) {
			return <i className="loading" />;
		}
		if(this.props.item.data){
			return <SVGIcon onClick={this.__onIconClick} icon={this.state.data?"faCaretDown":"faCaretRight"} />;
		}
	},
	__renderNav: function (){
		return (
			<span className="item-nav" style={{width: (this.props.depth * 20) + 'px'}}>
				{ this.__renderIcon() }
			</span>
		);
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
	__render: function (){
		return (
			<div className="tree-item" onClick={this.__click}>
				{ this.__renderNav() }
				{ this.__renderLabel() }
			</div>
		);
	},
	__click: function (event){
		if(this.props.root.__selected__) {
			this.props.root.__selected__.setState({ selected: false });
		}
		this.props.root.__selected__ = this;
		this.setState({
			selected: true
		});
		this.props.onClick && this.props.onClick(event, this);
	},
	__clickItem: function (event, owner){
		this.props.onClick && this.props.onClick(event, owner);
	},
	__renderChildren: function (){
		if(this.state.data) {
			var Tree = require('./Tree');
			return (
				<Tree root={this.props.root} data={this.state.data} depth={this.props.depth + 1} onItemClick={this.__clickItem} />
			);
		}
		
		return null;
	},
	render: function (){
		return (
			<li className={znui.react.classname("zr-tree-item", this.props.className)} 
				style={this.props.style} 
				data-selected={this.state.selected} >
				{this.__render()}
				{this.__renderChildren()}
			</li>
		);
	}
});
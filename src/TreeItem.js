var React = znui.React || require('react');

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
			var _path = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';
			if(this.state.data) {
				_path = 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z';
			}
			return <svg onClick={this.__onIconClick} aria-hidden="true" focusable="false" className="svg-inline--fa fa-caret-right fa-w-6 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
				<path fill="currentColor" d={_path}></path>
			</svg>;
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
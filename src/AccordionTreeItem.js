var React = znui.React || require('react');

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
			var _path = 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z';
			return <svg onClick={this.__onIconClick} aria-hidden="true" focusable="false" className="svg-inline--fa fa-caret-right fa-w-6 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
				<path fill="currentColor" d={_path}></path>
			</svg>;
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
			<span>{this.props.item[this.props.labelKey || 'label']}</span>
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
var React = znui.React || require('react');
var TreeItem = require('./TreeItem');
var loader = require('znui-react-loader');

module.exports = React.createClass({
	displayName:'ZRTree',
	getInitialState: function (){
		return {
			loading: true,
			selected: null
		};
	},
	__itemClick: function (event, owner){
		this.props.onItemClick && this.props.onItemClick(event, owner);
	},
	__itemRender: function (item, index){
		item.index = index;
		return <TreeItem root={this.props.root||this} item={item} depth={this.props.depth || 1} onClick={this.__itemClick} key={index} />
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (){
		this.setState({
			loading: false
		});
	},
	render:function(){
		return (
			<ul className={znui.react.classname("zr-tree", this.props.className)} style={this.props.style}>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} onLoading={this.__onLoading} onFinished={this.__onFinished} />
				{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
			</ul>
		);
	}
});
var React = znui.React || require('react');
var AccordionTreeItem = require('./AccordionTreeItem');
var loader = require('znui-react-loader');

var Tree = React.createClass({
	displayName:'ZRAccordionTree',
	getInitialState: function (){
		return {
			loading: true,
			selected: null,
			selectedIndex: 0,
			data: null
		};
	},
	__itemClick: function (event, owner, item, index){
		if(this.state.selected) {
			this.state.selected.setState({ selected: false });
		}
		this.state.selected = owner;
		this.state.selectedIndex = index;
		this.state.selected.setState({ selected: true });
		this.state.data = item.data;
		this.forceUpdate();
		this.props.onItemClick && this.props.onItemClick(event, owner, item, index);
	},
	__itemRender: function (item, index){
		item.index = index;
		return <AccordionTreeItem parent={this} item={item} onClick={(event, owner)=>this.__itemClick(event, owner, item, index)} key={index} />
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
			<div className={znui.react.classname("zr-accordion-tree", this.props.className)} style={this.props.style}>
				<ul className="data-view">
					<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} onLoading={this.__onLoading} onFinished={this.__onFinished} />
					{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
				</ul>
				{
					this.state.data && <Tree key={this.state.selectedIndex} root={this.props.root || this} data={this.state.data} onItemClick={this.__clickItem} />
				}
			</div>
		);
	}
});

module.exports = Tree;
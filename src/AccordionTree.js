var React = znui.React || require('react');
var AccordionTreeItem = require('./AccordionTreeItem');

var Tree = React.createClass({
	displayName:'ZRAccordionTree',
	getDefaultProps: function (){
		return {
			itemKey: 'id'
		}
	},
	getInitialState: function (){
		return {
			actived: false,
			loading: true,
			selected: null,
			selectedIndex: 0,
			data: null,
			className: '',
			style: {}
		};
	},
	componentDidMount: function (){
		this.props.onDidMount && this.props.onDidMount(this);
	},
	__itemClick: function (event, owner, item, index){
		if(this.props.root){
			if(this.props.root.__actived__) {
				this.props.root.__actived__.setState({ actived: false });
			}
			this.props.root.__actived__ = this;
		}
		this.__actived__ = this;
		this.setState({ actived: true });
		this.state.selected = item[this.props.itemKey];
		this.state.selectedIndex = index;
		var _return = this.props.onItemClick && this.props.onItemClick(event, owner, item, index, this);
		if(_return !== false && item.data){
			this.state.data = item.data;
			this.forceUpdate();
		}
	},
	__itemRender: function (item, index){
		item.index = index;
		return <AccordionTreeItem key={index}
			parent={this} 
			item={item} 
			selected={this.props.itemKey && item[this.props.itemKey] && item[this.props.itemKey]==this.state.selected}
			labelKey={this.props.labelKey}
			itemLabelRender={this.props.itemLabelRender}
			onClick={(event, owner)=>this.__itemClick(event, owner, item, index)} />
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (data){
		this.setState({
			loading: false
		});

		return this.props.onDataLoaded && this.props.onDataLoaded(data);
	},
	__render: function (data){
		if(!data){
			return null;
		}
		if(data.length){
			return (
				<ul className="data-list">
					{
						data.map(function (item, index){
							return this.__itemRender(item, index);
						}.bind(this))
					}
				</ul>
			);
		}else{
			return (
				<div className="no-data">No Data</div>
			);
		}
	},
	refresh: function (argv, events, context){
		if(this.data){
			this.data.refresh(argv, zn.extend({
				after: function (response){
					
				}.bind(this)
			}, events), context);
		}
	},
	refreshChild: function (){
		if(this.child){
			this.child.refresh();
		}
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-accordion-tree", this.props.className, this.state.className, (this.state.actived?'actived':''))} style={znui.react.style(this.props.style, this.state.style)}>
				<div className="data-view">
					<znui.react.DataLifecycle responseHandler={this.props.responseHandler} onDataCreated={(data) => this.data = data } onLoading={this.__onLoading} onFinished={this.__onFinished} data={this.props.data} render={this.__render} />
					{this.state.loading && <div className="zr-tree-list-loader"><span className="loader" /><span className="text">Loading ...</span></div>}
				</div>
				{
					this.state.data && <Tree onDidMount={(tree) => this.child = tree} responseHandler={this.props.responseHandler} labelKey={this.props.labelKey} key={this.state.selectedIndex} root={this.props.root || this} data={this.state.data} onItemClick={this.props.onItemClick} />
				}
			</div>
		);
	}
});

module.exports = Tree;
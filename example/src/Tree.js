var React = znui.React || require('react');
var tree = require('../../src/index');

module.exports = React.createClass({
	displayName:'Tag',
	getInitialState: function (){
		return {
			
		};
	},
	__onTreeItemClick: function (event, owner, item, index, tree){
		var _data = zn.deepAssign({}, tree.props.data);
		_data.params.parent_id = item.child_id;
		tree.setState({
			data: _data
		});
	},
	render: function(){
		return (
			<tree.AccordionTree 
				style={{margin: 50}} 
				labelKey="child_name"
				data={{
					method: "get",
					url: 'xxx',
					params: {
						pageNum: 1,
						pageSize: 1000,
						parent_id: "NULL"
					}
				}} 
				responseHandler={function (response){return response.data.items;} }
				onItemClick={this.__onTreeItemClick} />
		);
	}
});
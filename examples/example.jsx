var Developers = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render: function(){
		var items = this.props.map(function(el){
			return <li>{el.name}</li>
		});
		
		return (
			<ul className="list-unstyled">
				{items}
			</ul>
		);
	}
});
module.exports = Developers;
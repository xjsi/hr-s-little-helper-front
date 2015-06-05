var React = require('react');

var Interviewer = React.createClass({
	render: function(){
		return (
			<tr>
			<td>{this.props.interviewer.name}</td>
			<td>{this.props.interviewer.email}</td>
			<td><a href='#'>Update</a> <a href='#'>Delete</a></td>
			</tr>
			)
	}
});

module.exports = Interviewer;
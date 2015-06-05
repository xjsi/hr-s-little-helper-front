var React = require('react');
var InterviewersListBody = require('./interviewers-body');

var InterviewersList = React.createClass({
	getInitialState: function(){
		return {interviewers: []};
	},
	componentDidMount: function(){
		$.ajax({
    		url: this.props.url,
    		dataType: 'json',
    		cache: false,
    		success: function(data) {
    		  this.setState({interviewers: data});
    		}.bind(this),
    		error: function(xhr, status, err) {
    		  console.error(this.props.url, status, err.toString());
    		}.bind(this)
    	});
	},
  
	render: function(){
	 return (
	 	<table>
	 		<thead>
			<td>Name</td>
			<td>Email</td>
			<td>Opertions</td>
		</thead>
	  	<InterviewersListBody interviewers={this.state.interviewers}></InterviewersListBody>
	  </table>
	 );
	}
});

module.exports = InterviewersList;

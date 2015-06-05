var React = require('react');
var InterviewerItem = require('./interviewers-item');

var InterviewersListBody = React.createClass({
	render: function(){
		var interviewerItems = this.props.interviewers.map(function(interviewer){
			return <InterviewerItem interviewer={interviewer}></InterviewerItem>;
		});
		return (
			<tbody className='list-body'>
			{interviewerItems}
			</tbody>
			);
	}
});

module.exports = InterviewersListBody;
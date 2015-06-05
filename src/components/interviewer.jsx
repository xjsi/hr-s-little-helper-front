var Field = require('./field');
var React = require('react');
var InterviewerForm = React.createClass({
  handle_submit: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      method: 'POST',
      data:{'name':this.refs.name.value,'tel':this.refs.tel.value,'email':this.refs.email.value},
      success: function(data) {
        console.log('success');
        alert('Add interviewer success');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("create interviewer", status, err.toString());
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div className='row'>
        <div className="small-11 small-centered large-6 large-centered columns">
          <h2>Create New Interviewer</h2>
          <Field lname='Name' id='name' ref='name'></Field>
          <Field lname='Email' id='email' ref='email'></Field>
          <Field lname='Tel.' id='tel' ref='tel'></Field>
          <input type='submit' id='submit' className="button" value="Create" onClick={this.handle_submit}/>
        </div>
      </div>
    );
  }
});
module.exports = InterviewerForm;

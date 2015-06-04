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
      <div>
        <span className='title'>Create New Interviewer</span>

        <div className='interviewer-form'>
          <Field lname='Name' id='name' ref='name'></Field>
          <Field lname='Email' id='email' ref='email'></Field>
          <Field lname='Tel.' id='tel' ref='tel'></Field>
          <hr/>
          <input type='button' value='Sumit' id='submit'  onClick={this.handle_submit}/>
        </div>
      </div>
    );
  }
});
module.exports = InterviewerForm;

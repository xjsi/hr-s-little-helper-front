var Field = require('./field');
var React = require('react');
var store = require('../store');
var InterviewerForm = React.createClass({
  getInitialState: function() {
    return {
      status: -1
    }
  },
  _handleSubmit: async function(e){
    e.preventDefault();
    var resp = await store.newInterviewer(
      {'name':this.refs.name.value,
       'email':this.refs.email.value});
    this.setState({
      status: resp.status.code
    })
  },

  render: function(){
    var message;
    if (this.state.status===201){
      message = (
        <div data-alert className="alert-box status radius">
          interviewer created!
        </div>
      )
    }else if(this.state.status>0){
      message = (
        <div data-alert className="alert-box alert radius">
          Error when creating, try again
        </div>
      )
    }
    return (
      <div className='row'>
        <div className="small-11 small-centered large-6 large-centered columns">
          <h2>Create New Interviewer</h2>
          {message}
          <form onSubmit={this._handleSubmit} method="post">
            <Field lname='Name' id='name' ref='name'></Field>
            <Field lname='Email' id='email' ref='email'></Field>
            <Field lname='Tel.' id='tel' ref='tel'></Field>
            <input type='submit' id='submit' className="button" value="Create"/>
          </form>
        </div>
      </div>
    );
  }
});
module.exports = InterviewerForm;

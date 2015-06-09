var Field = require('./field');
var React = require('react');


var InterviewerForm = React.createClass({

  getFormData: function(){
    return ({'name':this.refs.name.value,
             'email':this.refs.email.value,
             'key':this.getDefaultValue("key")});
  },

  getDefaultValue:  function(name){
    return this.props.data ? this.props.data[name] : '';
  },

  _viewAll: function(){
    window.location = "http://"+window.location.host+'/#/interviewers';
  },

  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit} method="post">
        <Field lname='Name' id='name' ref='name' dValue={this.getDefaultValue('name')}></Field>
        <Field lname='Email' id='email' ref='email' dValue={this.getDefaultValue('email')}></Field>
        <Field lname='Tel.' id='tel' ref='tel' dValue=''></Field>
          <ul className="button-group even-2">
            <li><input type='submit' id='submit' className="button radius" value="Save"/></li>
            <li><button id='viewAll' className="button radius" onClick={this._viewAll}>View All</button></li>
          </ul>

      </form>
    );
  }
});

module.exports = InterviewerForm;
var Field = require('./field');
var React = require('react');
var InterviewerForm = require('./interviewer-form')
var store = require('../store');

var Interviewer = React.createClass({
  getInitialState: function() {
    return {
      status: -1,
      interviewer: null
    }
  },

  componentDidMount: async function(){
    if (! this._isNew()){
      var resp = await store.viewInterviewer(this.props.id);
      this.setState({interviewer: resp.entity});
    }
  },

  _isNew: function(e){
    return this.props.id ? false : true;
  },

  _handleSubmit: async function(e){
    e.preventDefault();
    var resp;
    if(this._isNew()){
      resp = await store.newInterviewer(this.refs.form.getFormData());
    }
    else{
      resp = await store.updateInterviewer(this.refs.form.getFormData());
    }
    this.setState({
      status: resp.status.code
    })
  },

  render: function(){
    var message, interviewerForm;
    if (this.state.status >=200 && this.state.status < 300 ){
      message = (
        <div data-alert className="alert-box status radius">
          interviewer saved!
        </div>
      )
    }else if(this.state.status>0){
      message = (
        <div data-alert className="alert-box alert radius">
          Error when saving, try again
        </div>
      )
    }

    if (this._isNew() || this.state.interviewer){
      interviewerForm = <InterviewerForm handleSubmit={this._handleSubmit} ref='form' data={this.state.interviewer}></InterviewerForm>
    }
    else{
      interviewerForm =<div>Loading..</div>
    }
    return (
      <div className='row'>
        <div className="small-11 small-centered large-6 large-centered columns">
          <h2>{this.props.title}</h2>
          {message}
          {interviewerForm}
        </div>
      </div>
    );
  }
});
module.exports = Interviewer;

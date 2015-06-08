var React = require('react');
var store = require('../store');
var Form = require('./form');
var Field = require('./field');
var Interview = React.createClass({
  getInitialState: function() {
    return {status:-1}
  },
  _handleSubmit: async function(e){
    e.preventDefault();
    var resp = await store.newInterview(
      {'description':this.refs.description.value});
    this.setState({
      status: resp.status.code
    })
  },
  render: function() {
    return (
      <Form onSubmit={this._handleSubmit} method="post" title="Create Interview" status={this.state.status}>
        <Field lname='description' id="description" ref="description"></Field>
        <input type='submit' id='submit' className="button" value="Create"/>
      </Form>
    )
  },
})
  module.exports = Interview;

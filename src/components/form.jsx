var React = require('react');
var store = require('../store');
var Field = require('./field');
var Form = React.createClass({
  getInitialState: function() {
    return {
      status: -1
    }
  },
  _message: function() {
    if (this.props.status>=200 && this.props.status<300){
      return (
        <div data-alert className="alert-box status radius">
          {this.props.successMsg||'success'}
        </div>
      )
    }else if(this.props.status>0){
      return (
        <div data-alert className="alert-box alert radius">
          {this.props.errorMsg || 'something went wrong! try again'}
        </div>
      )
    }
  },
  render: function() {
    var message
    return (
      <div className='row'>
        <div className="small-11 small-centered large-6 large-centered columns">
          <h2>{this.props.title}</h2>
          {this._message()}
          <form onSubmit={this.props.onSubmit} method={this.props.method}>
            {this.props.children}
          </form>
        </div>
      </div>
    )
  },
})
module.exports = Form;

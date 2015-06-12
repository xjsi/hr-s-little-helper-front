var React = require('react');

var Search = React.createClass({
  render: function(){
    return (
      <div className="row collapse">
        <div className="large-8 small-9 columns">
          <input type="text" placeholder="Interviewee Name"></input>
        </div>
        <div className="large-4 small-3 columns">
          <a href="#/interviewers" className="alert button expand">Search</a>
        </div>
      </div>
    );
  }
});

module.exports = Search;
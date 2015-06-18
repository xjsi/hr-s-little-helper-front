var React = require('react')

var Search = React.createClass({
  _updateRoute: function(e) {
      location.hash='/search/'+e.target.value
  },
  render: function(){
    return (
      <div className="row collapse">
        <div className="large-8 small-9 columns">
          <input type="search" placeholder="Interviewee Name" onChange={this._updateRoute}></input>
        </div>
      </div>
    );
  }
});

module.exports = Search;

let React = require('react'),
    Selector = require('./selector'),
    List = require('./list'),
    store = require('../store');
let Chooser = React.createClass({
  getInitialState: function() {
    return {
      selected: []
    }
  },
  _handleSelect: function(e) {
    let selected = this.state.selected
    this.setState({
      selected: selected.concat({name:e.target.name, value:e.target.value})
    },function() {
      this.value = this.state.selected.map(s=>s.value);
    })
  },
  _dataFetcher: function() {
    return store.fetchInterviewers();
  },
  render: function() {
    return (
      <div>
        <List data={this.state.selected} name="Selected Interviewer" />
        <Selector name="Interviewer" dataFetcher={this._dataFetcher} onChange={this._handleSelect}/>
      </div>
    )
  }
})
module.exports = Chooser;

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
      selected: selected.concat({value:e.target.value.split(':')[0], email:e.target.value.split(':')[1]})
    },function() {
      this.value = this.state.selected.map(s=>s.email)
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

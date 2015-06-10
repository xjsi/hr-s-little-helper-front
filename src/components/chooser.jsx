let React = require('react'),
    Selector = require('./selector'),
    List = require('./list'),
    store = require('../store'),
    m = require('mori');

let Chooser = React.createClass({
  getInitialState: function() {
    return {
      selected: m.set()
    }
  },
  _handleSelect: function(e) {
    let selected = this.state.selected;
    let data = e.target.selectedOptions[0].dataset;
    this.setState({
      selected: m.conj(this.state.selected,
                       m.hashMap('name', data.name,
                                 'email', data.email,
                                 'key', data.key)
      )
    },function() {
        this.value = m.intoArray(m.map(s=>s.key, this.state.selected))
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

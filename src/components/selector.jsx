let React = require('react');
let Selector = React.createClass({
  getInitialState: function() {
    return {
      options: []
    }
  },
  componentDidMount: async function() {
    var data = await this.props.dataFetcher();
    this.setState({
      options: data
    })
  },
  render: function() {
    var options = this.state.options.map(option=>(<option value={option.name+':'+option.email}>{option.name}</option>))
    return (
      <label>{this.props.name}
        <select onChange={this.props.onChange}>
          {options}
        </select>
      </label>
    )
  }
})
module.exports = Selector;

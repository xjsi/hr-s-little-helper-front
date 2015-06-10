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
      options: data.entity
    })
  },
  render: function() {
    var options = this.state.options.map(option=>(
      <option value={option.key} data-email={option.email} data-name={option.name}>{option.name}</option>))
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

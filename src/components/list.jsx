let React = require('react');
let List = React.createClass({
  render:function() {
    let items = this.props.data.map(d=><li> <span className="label" value={d.email}>{d.value}</span></li>)
      return (
        <label>{this.props.name}
      <ul className="inline-list">
        {items}
      </ul>
        </label>
    )
  }
})
module.exports = List;

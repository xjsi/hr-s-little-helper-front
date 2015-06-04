var Field = React.createClass({
  value:'',
  handleInputChange: function(){
    this.value = this.refs.value.getDOMNode().value
  },
  render: function(){
    return (
      <div className='form-element'>
        <span className='lbl'>{this.props.lname}</span>
        <input type='text' id={this.props.id} onChange={this.handleInputChange} ref='value'></input>
      </div>
    );
  }
});
module.exports = Field;

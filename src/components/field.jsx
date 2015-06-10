var React = require('react');
var Field = React.createClass({
  handleInputChange: function(e){
    this.value = e.target.value
  },
  render: function(){
    return (
      <div className='form-element'>
        <span className='lbl'>{this.props.lname}</span>
        <input type='text' id={this.props.id} onChange={this.handleInputChange} defaultValue={this.props.dValue}></input>
      </div>
    );
  }
});
module.exports = Field;

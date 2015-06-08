var React = require('react');
var store = require('../store');

var Interviewer = React.createClass({

  interviewer_key: function(){
    return this.props.interviewer.key;
  },

  delInterviewer: async function(){
    if (confirm("do you want to delete")){
      var resp = await store.deleteInterviewer({email: this.interviewer_key()});
      if (resp.entity == true){
        console.log('Delete Successfule');
      }
      this.props.deleteCallback();
    }
  },
  updateInterviewer: function(){
    window.location = "http://"+window.location.host+'/#/interviewer/view/' + encodeURIComponent(this.interviewer_key());
  },
  render: function(){
  	return (
  	  <tr>
  	    <td>{this.props.interviewer.name}</td>
  	    <td>{this.props.interviewer.email}</td>
  	    <td><button className="radius small" onClick={this.updateInterviewer}>Update</button> <button className="radius small" onClick={this.delInterviewer}>Delete</button></td>
  	  </tr>
  	  )
  }
});

module.exports = Interviewer;
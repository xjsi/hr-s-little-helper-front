var React = require('react');

var Add = React.createClass({
  render: function(){
    return (
       <li className="has-dropdown not-click" >
         <a href="#">ADD</a>
         <ul className="dropdown">
           <li className="active"><a href="#/interviewer/new">Interviewer</a></li>
           <li><a href="#/interview/new">Interview</a></li>
         </ul>
       </li>
    );
  }
});

module.exports = Add;
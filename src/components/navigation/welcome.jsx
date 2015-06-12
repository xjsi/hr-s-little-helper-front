var React = require('react');

var TitleArea = React.createClass({
  render: function(){
    return (
      <ul className="title-area">
        <li className="name">
          <h1><a href="#">Hello, HR</a></h1>
        </li>
        <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
      </ul>
    );
  }
});

module.exports = TitleArea;
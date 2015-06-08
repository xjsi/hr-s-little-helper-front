var React= require('react');
var InterviewerForm = require('./components/interviewer');
var Interview = require('./components/interview');
var {Router} = require('director');

var appElement = document.getElementById('app');
var routes = {
  '/interviewer': {
    '/new': function(){
      React.render(
        <InterviewerForm/>,
        appElement);
    }
  },
  '/interview': {
    '/new': function() {
      React.render(
        <Interview/>,
        appElement);
    }
  }
};

var router = Router(routes);

router.init();

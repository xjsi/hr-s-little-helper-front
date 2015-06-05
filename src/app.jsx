var React= require('react');
var InterviewerForm = require('./components/interviewer');
var {Router} = require('director');

var routes = {
  '/interviewer': {
    '/new': function(){
      React.render(
        <InterviewerForm></InterviewerForm>,
        document.getElementById('interviewer-form'));
    }
  }
};

var router = Router(routes);

router.init();

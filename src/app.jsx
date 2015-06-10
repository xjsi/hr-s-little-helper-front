var React= require('react');

var Interview = require('./components/interview');
var Interviewer = require('./components/interviewer');
var InterviewersList = require('./components/interviewers')

var {Router} = require('director');

var appElement = document.getElementById('app');
var routes = {
  '/interviewer': {
    '/new': function(){
      React.render(
        <Interviewer title='Create new interviewer'/>,
        appElement);
    },
    '/:interviewID':function(interviewID){
          React.render(
            <Interviewer title='Update new interviewer' id={interviewID}/>,
            appElement);
    }
  },
  '/interview': {
    '/new': function() {
      React.render(
        <Interview/>,
        appElement);
    },

  },

  '/interviewers':function(){
  	React.render(
  		<InterviewersList/>,
  		appElement);
  }
};

var router = Router(routes);

router.init();

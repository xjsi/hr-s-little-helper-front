var client = require('./client'),
    when = require('when');

var store={};
store.newInterviewer = function(entity) {
  return client({method:'POST', path: 'interviewer', entity: entity});
}

store.newInterview = function(entity) {
  return client({method:'POST', path: 'interview', entity: entity});
}
store.fetchInterviewers =function() {
  return when([
    {
      name: 'jichao',
      email: 'jichao@thoughtworks.com'
    },
    {
      name: 'ouyang',
      email: 'ouyang@thoughtworks.com'
    }
  ])
}
module.exports = store;

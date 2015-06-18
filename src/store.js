var client = require('./client'),
    when = require('when');

var store={};
store.newInterviewer = function(entity) {
  return client({method:'POST', path: 'interviewer', entity: entity});
};

store.updateInterviewer = function(entity) {
  return client({method:'PUT', path: 'interviewer/'+entity.key, entity: entity});
};

store.allInterviewers = function(){
  return client({method:'GET', path: 'interviewers'});
};

store.interviews = function(){
  return client({method:'GET', path: 'interviews'});
};

store.getInterview = function(id){
  return client({method:'GET', path: 'interview/'+id});
};

store.viewInterviewer = function(id){
  return client({method:'GET', path:'interviewer/'+id});
};

store.deleteInterviewer = function(id){
  return client({method:'DELETE',path:'interviewer/'+id});
};

store.newInterview = function(entity) {
  return client({method:'POST', path: 'interview', entity: entity});
}

store.editInterview = function(id, entity) {
  return client({method:'PUT', path: 'interview/'+id, entity: entity});
}

module.exports = store;

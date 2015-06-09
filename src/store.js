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

store.viewInterviewer = function(id){
  return client({method:'GET', path:'interviewer/'+id});
}


store.deleteInterviewer = function(id){
  return client({method:'DELETE',path:'interviewer/'+id});
}

module.exports = store;

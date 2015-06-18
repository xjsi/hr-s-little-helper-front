var client = require('./client'),
    when = require('when');

var store={};

var authclient = function(opt) {
  client(opt).then(function(resp) {
    debugger
    if(resp.status.code===401) location.href='/login/'
    return resp
  })
}
store.newInterviewer = function(entity) {
  return authclient({method:'POST', path: 'interviewer', entity: entity});
};

store.updateInterviewer = function(entity) {
  return authclient({method:'PUT', path: 'interviewer/'+entity.key, entity: entity});
};

store.allInterviewers = function(){
  return authclient({method:'GET', path: 'interviewers'});
};

store.interviews = function(){
  return authclient({method:'GET', path: 'interviews'});
};

store.getInterview = function(id){
  return authclient({method:'GET', path: 'interview/'+id});
};

store.viewInterviewer = function(id){
  return authclient({method:'GET', path:'interviewer/'+id});
};

store.deleteInterviewer = function(id){
  return authclient({method:'DELETE',path:'interviewer/'+id});
};

store.newInterview = function(entity) {
  return authclient({method:'POST', path: 'interview', entity: entity});
}

store.editInterview = function(id, entity) {
  return authclient({method:'PUT', path: 'interview/'+id, entity: entity});
}

module.exports = store;

var client = require('./client');
var store={};
store.newInterviewer = function(entity) {
  return client({method:'POST', path: 'interviewer', entity: entity});
}
module.exports = store;

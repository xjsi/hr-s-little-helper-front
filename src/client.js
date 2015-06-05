var rest = require('rest'),
    pathPrefix = require('rest/interceptor/pathPrefix'),
    errorCode = require('rest/interceptor/errorCode'),
    mime = require('rest/interceptor/mime'),
    defaultRequest = require('rest/interceptor/defaultRequest');

var api_remote = process.env.HRLH_SERVICE || 'http://localhost:3000/api/v1/'
var client =
      rest.wrap(mime, {mime:'application/json'})
      .wrap(errorCode, { code: 500 })
      .wrap(pathPrefix, { prefix: api_remote })
if(localStorage.access_token)
  client = client.wrap(defaultRequest, { headers: { 'Authorization': 'token '+ localStorage.access_token } });
module.exports = client;

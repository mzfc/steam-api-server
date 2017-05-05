'use strict';

exports.createTeam = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Team)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "type" : "aeiou",
  "message" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.searchTeams = function(args, res, next) {
  /**
   * parameters expected in the args:
  * searchString (String)
  * skip (Integer)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "ower" : {
    "password" : "xyz",
    "name" : "Matt Shen",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "someone@somesite.com"
  },
  "createBy" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "members" : [ "" ],
  "name" : "Excellent Smart Team X",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "createdOn" : "2016-08-29T09:12:33.001Z"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.searchUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * searchString (String)
  * teamId (UUID)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "xyz",
  "name" : "Matt Shen",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : "someone@somesite.com"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


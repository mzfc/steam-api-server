'use strict';

var Team = require('../models/Team');

exports.createTeam = function (args, res, next) {
  /**
   * parameters expected in the args:
  * body (Team)
  **/
  var examples = {};
  examples['application/json'] = {
    "code": 123,
    "type": "aeiou",
    "message": "aeiou"
  };

  var team = new Team();

  Object.assign(team, args.body.value);

  console.log('the team obj going to store', team);

  team.save(function (err) {
    console.error('errors happen', err);
    if (err) res.end(err);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      "code": 0,
      "type": "aeiou",
      "message": "aeiou"
    }), null, 2);
  });

}

exports.searchTeams = function (args, res, next) {
  /**
   * parameters expected in the args:
  * searchString (String)
  * skip (Integer)
  * limit (Integer)
  **/

  Team.find((err, teams) => {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(teams || {}, null, 2));
  });

}

exports.searchUsers = function (args, res, next) {
  /**
   * parameters expected in the args:
  * searchString (String)
  * teamId (UUID)
  **/
  var examples = {};
  examples['application/json'] = [{
    "password": "xyz",
    "name": "Matt Shen",
    "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email": "someone@somesite.com"
  }];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

}


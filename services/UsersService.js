'use strict';
var Team = require('../models/Team');
var log4js = require('log4js');
var logger = log4js.getLogger();

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
      "type": "success",
      "message": "success"
    }), null, 2);
  });

}

exports.updateTeam = function (args, res, next) {

  Team.findById(args.id.value, function (err, team) {
    if (err) res.end(err);

    if (team) {
      Object.assign(team, args.body.value);
      logger.debug('the team obj going to store', team);
      team.save(function (err) {
        console.error('errors happen', err);
        if (err) res.end(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          "code": 200,
          "type": "success",
          "message": "Team is updated"
        }), null, 2);
      });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(team || {}, null, 2));
    }

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

exports.getTeamById = function (args, res, next) {

  Team.findById(args.id.value, function (err, team) {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(team || {}, null, 2));
  });

}

exports.deleteTeamById = function (args, res, next) {

  Team.findById(args.id.value).remove(function (err) {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ code: 200, type: 'success', message: 'Operation is successful' } || {}, null, 2));
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


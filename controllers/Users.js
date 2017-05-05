'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.createTeam = function createTeam (req, res, next) {
  Users.createTeam(req.swagger.params, res, next);
};

module.exports.searchTeams = function searchTeams (req, res, next) {
  Users.searchTeams(req.swagger.params, res, next);
};

module.exports.searchUsers = function searchUsers (req, res, next) {
  Users.searchUsers(req.swagger.params, res, next);
};

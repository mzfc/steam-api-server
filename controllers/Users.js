'use strict';

var url = require('url');


var Users = require('../services/UsersService');


//C
module.exports.createTeam = function createTeam (req, res, next) {
  Users.createTeam(req.swagger.params, res, next);
};

//U
module.exports.updateTeam = function updateTeam (req, res, next) {
  Users.updateTeam(req.swagger.params, res, next);
};

//S
module.exports.searchTeams = function searchTeams (req, res, next) {
  Users.searchTeams(req.swagger.params, res, next);
};
//R
module.exports.getTeamById = function getTeamById (req, res, next) {
  Users.getTeamById(req.swagger.params, res, next);
};

//D
module.exports.deleteTeamById = function deleteTeamById (req, res, next) {
  Users.deleteTeamById(req.swagger.params, res, next);
};

module.exports.searchUsers = function searchUsers (req, res, next) {
  Users.searchUsers(req.swagger.params, res, next);
};


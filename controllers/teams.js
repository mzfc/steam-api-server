'use strict';
const crud = require('../services/crudService');
const Team = require('../models/Team');

//C
module.exports.createTeam = function createTeam (req, res, next) {
  crud.create(Team, req.swagger.params, res, next);
};

//U
module.exports.updateTeam = function updateTeam (req, res, next) {
  crud.update(Team, req.swagger.params, res, next);
};

//S
module.exports.searchTeams = function searchTeams (req, res, next) {
  crud.search(Team, req.swagger.params, res, next);
};

//R
module.exports.getTeamById = function getTeamById (req, res, next) {
  crud.getById(Team, req.swagger.params, res, next);
};

//D
module.exports.deleteTeamById = function deleteTeamById (req, res, next) {
  crud.deleteById(Team, req.swagger.params, res, next);
};
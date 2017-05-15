'use strict';

var url = require('url');
const crud = require('../services/crudService');
const User = require('../models/User');

//C
module.exports.createUser = function createUser(req, res, next) {
  crud.create(User, req.swagger.params, res, next);
};

//U
module.exports.updateUser = function updateUser(req, res, next) {
  crud.update(User, req.swagger.params, res, next);
};

//S
module.exports.searchUsers = function searchUsers(req, res, next) {
  crud.search(User, req.swagger.params, res, next);
};

//R
module.exports.getUserById = function getUserById(req, res, next) {
  crud.getById(User, req.swagger.params, res, next);
};

//D
module.exports.deleteUserById = function deleteUserById(req, res, next) {
  crud.deleteById(User, req.swagger.params, res, next);
};

'use strict';

var url = require('url');


var Developers = require('../services/DevelopersService');


module.exports.createUser = function createUser (req, res, next) {
  Developers.createUser(req.swagger.params, res, next);
};

module.exports.searchInventory = function searchInventory (req, res, next) {
  Developers.searchInventory(req.swagger.params, res, next);
};

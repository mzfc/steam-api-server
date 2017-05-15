'use strict';
const crud = require('../services/crudService');
const Task = require('../models/Task');

//C
module.exports.createTask = function createTask(req, res, next) {
  crud.create(Task, req.swagger.params, res, next);
};

//U
module.exports.updateTask = function updateTask(req, res, next) {
  crud.update(Task, req.swagger.params, res, next);
};

//S
module.exports.searchTasks = function searchTasks(req, res, next) {
  crud.search(Task, req.swagger.params, res, next);
};

//R
module.exports.getTaskById = function getTaskById(req, res, next) {
  crud.getById(Task, req.swagger.params, res, next);
};

//D
module.exports.deleteTaskById = function deleteTaskById(req, res, next) {
  crud.deleteById(Task, req.swagger.params, res, next);
};
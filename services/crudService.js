'use strict';
var log4js = require('log4js');
var logger = log4js.getLogger();

exports.create = function (model, args, res, next) {
  var entity = new model();
  Object.assign(entity, args.body.value);

  entity.save(function (err) {
    if (err) res.end(err);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      "code": 0,
      "type": "success",
      "message": "success",
    }), null, 2);
  });

};

exports.update = function (model, args, res, next) {

  model.findById(args.id.value, function (err, entity) {
    if (err) res.end(err);

    if (entity) {
      Object.assign(entity, args.body.value);
      logger.debug('the entity to store', entity);
      entity.save(function (err) {
        if (err) res.end(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          "code": 200,
          "type": "success",
          "message": "entity is updated",
        }), null, 2);
      });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(entity || {}, null, 2));
    }

  });

};

exports.search = function (model, args, res, next) {

  model.find((err, entities) => {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(entities || {}, null, 2));
  });

};

exports.getById = function (model, args, res, next) {

  model.findById(args.id.value, function (err, entity) {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(entity || {}, null, 2));
  });

};

exports.deleteById = function (model, args, res, next) {

  model.findById(args.id.value).remove(function (err) {
    if (err) res.end(err);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ code: 200, type: 'success', message: 'Operation is successful' } || {}, null, 2));
  });

};
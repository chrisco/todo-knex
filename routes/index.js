var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('todo').select().then(function (data) {
    res.render('index', {
      todos: data
    });
  });
});

module.exports = router;

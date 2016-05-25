'use strict';

var express = require('express');
var router = express.Router();
var moment = require('moment');

var Person = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/person', (req, res, next) => {
  var db = req.db;
  var year = moment().get('year') + 543;
  var thaiDate = moment().format('DD/MM') + '/' + year + ' ' + moment().format('HH:mm:ss');

  var date = moment().format('DD/MM/YYYY HH:mm:ss');
  Person.getPerson(db)
    .then(function (rows) {
      res.send({thaidate: thaiDate, ok: true, rows: rows, date: date})
    }, function (err) {
      res.send({ok: false, msg: err})
    });
});

router.post('/person', (req, res, next) => {
  res.send({ok: true, msg: 'Save success'})
});

router.put('/person', (req, res, next) => {
  res.send({ok: true, msg: 'Update success'})
});

router.delete('/person/:id', (req, res, next) => {
  res.send({ok: true, msg: 'Delete success'})
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Users = require('../models/users');

/* GET users listing. */
// /users/
router.get('/', function (req, res, next) {
  Users.getUser();
  res.send('respond with a resource');
});
// /users/list
router.get('/list', function (req, res, next) {

});
// /users/detail/20
router.get('/detail/:id', function (req, res, next) {

});

module.exports = router;

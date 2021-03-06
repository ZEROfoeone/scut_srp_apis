var express = require('express');
var router = express.Router();
var do_login = require('../apis/login')
var do_token_validate = require('../apis/token_validate')
var do_logout = require('../apis/logout')

router.post('/login', function(req, res, next) {
  do_login(req, res, next)
})

router.post('/token_validate', function(req, res, next) {
  do_token_validate(req, res, next)
})

router.post('/logout', function(req, res, next) {
  do_logout(req, res, next)
})

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
router.post('/upload', upload.single('myfile'), function(req, res, next) {
  console.log(req.file)
  res.end('xixi')
})

module.exports = router;

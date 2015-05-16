var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{query : req.query});
});
router.post('/', function(req, res, next) {

  res.render('index',{query : req.query});
});

module.exports = router;

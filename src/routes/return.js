var express = require('express');
var router = express.Router();

router.get('/return', function(req, res) {
  res.render('return');
});

module.exports = router;
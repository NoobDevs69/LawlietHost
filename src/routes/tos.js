var express = require('express');
var router = express.Router();

router.get('/tos', function(req, res) {
  res.render('tos');
});

module.exports = router;
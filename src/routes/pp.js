var express = require('express');
var router = express.Router();

router.get('/pp', function(req, res) {
  res.render('pp');
});

module.exports = router;
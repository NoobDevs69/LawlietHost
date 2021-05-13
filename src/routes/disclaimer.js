var express = require('express');
var router = express.Router();

router.get('/disclaimer', function(req, res) {
  res.render('disclaimer',{ title: 'LawlietHost™ - Free Minecraft & Discord Bot hosting' });
});

module.exports = router;
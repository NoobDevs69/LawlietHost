var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LawlietHost™ - Free Minecraft & Discord Bot hosting' });
});

router.get('/hello',function(req,res){
  res.render('hello.ejs')
});
 
module.exports = router;

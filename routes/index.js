var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 console.log(req.headers)
 console.log(req.connection.remoteAddress)

 res.json(req.connection.remoteAddress);
});


module.exports = router;

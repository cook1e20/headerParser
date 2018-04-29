var express = require('express');
var router = express.Router();
var getIP = require('ipware')

/* GET home page. */
router.get('/', function(req, res, next) {
 
 

 res.json(getIP(req));



});


module.exports = router;

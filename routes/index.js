var express = require('express');
var router = express.Router();
var getIP = require('ipware')().get_ip;

/* GET home page. */
router.get('/', function(req, res, next) {
 let response = {}


 response.ipaddress = getIP(req);
 response.language = #;
 response.software = #;





 res.json(response);



});


module.exports = router;

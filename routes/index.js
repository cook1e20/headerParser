var express = require('express');
var router = express.Router();
var getIP = require('ipware')().get_ip;

/* GET home page. */
router.get('/', function(req, res, next) {
 let response = {}

let software = req.headers['user-agent'].match(/\(([^)]*)\)/)[1];

 response.ipaddress = getIP(req).clientIp;
 response.language = req.headers['accept-language'].split(',')[0];
 response.software = software;



console.log(software);

 res.json(response);



});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
 console.log("remote host: " + req.connection.remoteAddress);
 console.log("local host: " + req.connection.localAddress);
 console.log("remote host: " + req.socket.remoteAddress);
 console.log("local host: " + req.socket.localAddress);

 res.json("remote host: " + req.connection.remoteAddress + "local host: " + req.connection.localAddress + "remote host: " + req.socket.remoteAddress + "local host: " + req.socket.localAddress)



});


module.exports = router;

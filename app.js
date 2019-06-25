var express = require('express');
const http = require('http');
var app = express();
var http_port = process.env.PORT || 3000;
var appserver = require('./appserver');
app.use('/', express.static(__dirname + '/app'));

var httpServer = http.createServer(app);

httpServer.listen(http_port, () => {
  console.log("http server starting on port : " + http_port)
});
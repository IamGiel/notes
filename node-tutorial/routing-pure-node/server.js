var http = require('http');
var app = require("./app");

http.createServer(app.handleRequests).listen(8007);
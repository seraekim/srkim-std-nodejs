/**
 * a basic nodejs http server
 */
var http = require('http');

var server = http.createServer(function(req, res) { // can be used instead of server.on('request'...)
    console.log('[create cb] %j, %j', req, res);
});

var host = '127.0.0.1';
var port = 8081;
server.listen(port, host, function() {
    console.log('server started on port-%d', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('[accesse info] %j', addr);
});

server.on('request', function(req, res) {
    console.log('[request info] %j', req); // Circular
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<script>alert("hello world");</script>');
    res.end(); // before end, already script transfereds
});

server.on('close', function() {
    console.log('server closed');
});

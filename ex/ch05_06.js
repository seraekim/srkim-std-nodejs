/**
 * a basic nodejs http server
 * image chunk read and response write via pipe
 */
var http = require('http');
var fs = require('fs');
var path = require('path');

function printCircular(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        console.log(i, keys[i], obj[keys[i]]);
    }
}

var server = http.createServer(function (req, res) { // can be used instead of server.on('request'...)
});

var host = '127.0.0.1';
var port = 8081;
server.listen(port, host, function () {
    console.log('server started on port-%d', port);
});

server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('[accesse info] %j', addr);
});

server.on('request', function (req, res) {
    console.log('[request info] %j', req); // Circular
    printCircular(req);

    var filepath = path.join(__dirname, 'img', 'cz.png');
    var infile = fs.createReadStream(filepath, { flags: 'r' });
    var fileLen = 0;
    var currLen = 0;

    fs.stat(filepath, function (err, stat) {
        fileLen = stat.size;
    });

    res.writeHead(200, { 'Content-type': 'image/png' });

    infile.on('readable', function () {
        var chunk;
        // default chunk size 65536 byte. can specify read(bytesize)
        while (null !== (chunk = infile.read())) {
            //console.log('%d byte read', chunk.length);
            currLen += chunk.length;
            res.write(chunk, 'utf8', function (err) {
                // console.log('%d/%d byte written', currLen, fileLen);
                if (currLen == fileLen) { // coz writing is async... must be ended here..
                    console.log(currLen, fileLen);
                    res.end();
                }
            });
        }
        // image broken rendered
        // res.end();
    });
});

server.on('close', function () {
    console.log('server closed');
});

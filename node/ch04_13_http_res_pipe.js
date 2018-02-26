/**
 * read file via http response pipe
 */
var fs = require('fs');
var path = require('path');
var http = require('http');

var filepath = path.join(__dirname, '../package-lock.json');

var server = http.createServer(function (req, res) {
    var instream = fs.createReadStream(filepath);
    instream.pipe(res);
});

server.listen(8080, '127.0.0.1');

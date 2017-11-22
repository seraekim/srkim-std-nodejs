var fs = require('fs');
var path = require('path');

var CHUNK_SIZE = 10, // 10 Byte
    buffer = new Buffer(CHUNK_SIZE),
    filePath = path.join(__dirname, '../package-lock.json');

var readable = fs.createReadStream(filePath, {
    encoding: 'utf8',
    fd: null,
});
readable.on('readable', function () {
    var chunk;
    while (null !== (chunk = readable.read(CHUNK_SIZE))) {
        console.log(chunk); // chunk is one symbol
    }
});
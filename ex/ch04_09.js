/**
 * process specific a buffer of its file
 */
var fs = require('fs');
var path = require('path');

fs.open(path.join(__dirname, '../package-lock.json'), 'r', function(err, fd) {
    if (err) throw err;
    var buf = new Buffer(10);
    console.log(fd, Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer) {
        if (err) throw err;

        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log(fd, inStr);

        fs.close(fd, function() {
            console.log(fd, 'close');
        });
    });
});

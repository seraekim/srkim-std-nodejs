/**
 * io and nio file
 */
var fs = require('fs');

// NIO
fs.readFile(__filename, 'utf-8', function (err, data) {
    err ? console.log(err) : console.log('======== NIO ========\r\n', data);
});

// IO
var data = fs.readFileSync(__filename, 'utf-8');
console.log('======== IO ========\r\n', data);

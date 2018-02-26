/**
 * read and write file via stream
 */
var fs = require('fs');
var path = require('path');

var infile = fs.createReadStream(path.join(__dirname, '../package-lock.json'), {flags: 'r'});
var outfile = fs.createWriteStream(path.join(__dirname, '../package-lock2.json'), {flags: 'w'});

infile.on('data', function(data) {
    console.log('read: %j', data);
    outfile.write(data);
});

infile.on('end', function() {
    console.log('read ends');
    outfile.end(function() {
        console.log('write ends');
    });
});


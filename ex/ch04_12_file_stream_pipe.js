/**
 * read and write file via stream pipe
 */
var fs = require('fs');
var path = require('path');

var inname = path.join(__dirname, '../package-lock.json');
var outname = path.join(__dirname, '../package-lock2.json');

fs.exists(outname, function(exists) {
    if(exists) {
        fs.unlink(outname, function(err) {
            if(err) throw err;
            console.log('delete: %s', outname);
        });
    }
    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log('cp done: %s -> %s', inname, outname);
});


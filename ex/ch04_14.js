/**
 * 0777 for dir mode
 * 0666 for file mode
 * The default of umask is 002 or 022.
 * fs.mkdir executes chmod mode & ~process.umask()
 * 
 * @auther srkim
 */
var fs = require('fs');
var path = require('path');

function dec2Bin(dec) {
    if (dec >= 0) {
        // The toString() function basically takes the decimal, converts it to binary and adds a "-" sign.
        return dec.toString(2);
    } else {
        // The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format.
        return (dec >>> 0).toString(2);
    }
}

// remove umask effect
//process.umask(0);

var reversedUmask = ~process.umask();
var umask = process.umask();
var mode = 0666;
console.log(dec2Bin(reversedUmask), reversedUmask);
console.log(dec2Bin(umask), umask);

// in the end mode & ~process.umask() applied
fs.mkdir(dirpath, mode, function (err) {
    if (err) throw err;
    console.log('created temp_dir!');
    fs.rmdir(dirpath, function (err) {
        if (err) throw err;
        console.log('deleted temp_dir')
    });
});
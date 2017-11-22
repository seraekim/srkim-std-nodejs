/**
 * internal module
 * path
 */
var path = require('path');

var dirs = ['srkim', 'js', 'less'];
var dirsJoin = dirs.join(path.sep);
console.log('dir path: %s', dirsJoin);

var filePath = path.join('c:', dirsJoin, 'srkim.exe');
console.log('file path : %s', filePath);

console.log('dirname: %s', path.dirname(filePath));
console.log('basename: %s', path.basename(filePath));
console.log('extname: %s', path.extname(filePath));

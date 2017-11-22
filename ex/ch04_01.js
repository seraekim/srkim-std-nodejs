/**
 * url
 */
var url = require('url');
var qs = require('querystring');

// to url object
var urlObj = url.parse('https://github.com/seraekim/srkim-lang-sh/search?utf8=✓&q=file&type=');

// to url string
var urlStr = url.format(urlObj);

console.log(urlStr);
console.dir(urlObj);

// to query object
var p = qs.parse(urlObj.query);

console.log('query: %j', p);
console.log('original request params: %s', qs.stringify(p));

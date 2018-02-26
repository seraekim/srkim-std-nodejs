/**
 * a basic nodejs http client requesting get method
 */
var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
};

var req = http.get(options, function(res) {
    var resData = '';
    res.on('data', function(chunk) {
        console.log('data >>', chunk);
        resData += chunk;
    });

    res.on('end', function() {
        console.log('end >>',resData);
    });
});

req.on('error', function(err) {
    console.log('error:', err.message);
});

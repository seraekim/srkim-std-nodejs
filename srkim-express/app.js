var express = require('express'), http = require('http');

var app = express();

console.log(process.env);

// default port
app.set('port', process.env.PORT || 3000);

// express server start
http.createServer(app).listen(app.get('port'), function() {
    console.log('express started :', app.get('port'));
});

// url : localhost:3000/login.html

var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyParser = require('body-parser'),
    static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

// parse application/x-www-form-urlencded with body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));
//app.use('/public', static(path.join(__dirname, 'public')));

// check params
app.use(function (req, res, next) {
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.write('<span>' + paramId + ' ' + paramPassword + '</span>');
    res.end();
});

http.createServer(app).listen(3000, function() {
    console.log('express started at 3000 port');
});

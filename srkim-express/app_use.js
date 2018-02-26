var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next) {
    console.log('first middleware');
    console.log('User-Agent', req.header('User-Agent'));
    console.log('req.query', req.query);
    console.log('req.body', req.body);
    req.user = 'srkim';
    next();
});

app.use('/', function(req, res, next) {
    console.log('second middleware from', req.app);
    
    // html
    // res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    // res.end('<h1>response of '+req.user+' from express server</h1>');

    // json data
    // res.send({author:req.user});

    // http status code
    // res.status(403).send('Forbidden!!');
    // res.sendStatus(403);

    // redirect
    res.redirect('http://google.co.kr');
});

http.createServer(app).listen(3000, function() {
    console.log('express started at 3000 port');
});


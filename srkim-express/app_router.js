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

var router = express.Router();
router.route('/process/login/:token').post(function(req, res) {
    console.log(req.url);
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.write('<span>' + paramId + ' ' + paramPassword + ' '+ req.params.token + '</span>');
    res.end();
});

var cookieParser = require('cookie-parser');
app.use(cookieParser());

router.route('/process/showCookie').get(function(req, res) {
    console.log(req.url);
    res.send(req.cookies);
});

router.route('/process/setUserCookie').get(function(req, res) {
    console.log(req.url);
    res.cookie('user', {
        id: 'srkim',
        name: 'name',
        authorized: true
    });

    res.redirect('/process/showCookie');
});
// register router to app
app.use('/', router);

// app.all('*', function(req, res) {
//     res.status(404).send('<h1>404</h1>')
// });

var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(3000, function() {
    console.log('express started at 3000 port');
});

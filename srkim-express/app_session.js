/**
 * 테스트 방법
 * http://localhost:3000/process/product 로 접속, 세션없으니 로그인 화면 이동
 * 로그아웃 후에 http://localhost:3000/process/product 에 접근하면 로그인화면으로 이동.
 * 그러나.... product.html로는 다이렉트 접근가능. 못하게하는 방법은?
 */

var express = require('express'),
http = require('http'),
path = require('path'),
bodyParser = require('body-parser'),
static = require('serve-static'),
cookieParser = require('cookie-parser'),
expressSession = require('express-session');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({secret:'my key', resave:true, saveUninitialized:true}));

var router = express.Router();

//상품정보 라우팅 함수
router.route('/process/product').get(function(req, res){
    console.log('/process/product 호출됨.');

    if(req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login2.html');
    }
});

// 로그인 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/login/:token').post(function(req, res){
    console.log('/process/login 호출됨.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if(req.session.user){
        // 이미 로그인된 상태
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');
        res.redirect('/public/product.html');
    }else{
        // 세션 저장
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            authorized: true
        };

        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h1>로그인 성공</h1>');
        res.write('<a href="/process/product">상품 페이지로 이동하기</a>');
        res.end();
    }
});

// 로그아웃 라우팅 함수 - 로그아웃 후 세션 삭제함
router.route('/process/logout').get(function(req, res){
    console.log('/process/logout 호출됨.');

    if(req.session.user){
        // 로그인된 상태
        console.log('로그아웃합니다.');

        req.session.destroy(function(err){
            if(err){throw err;}
            console.log('세션을 삭제하고 로그아웃되었습니다.');
            res.redirect('/public/login2.html');
        });
    }else{
        // 로그인 안된 상태
        console.log('아직 로그인되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
})
app.use('/', router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('express started :', app.get('port'));
});

/**
 * Router 객체를 이용해 라우팅 함수 등록하기
 * POST로 요청할 때 URL 파라미터를 params 객체로 확인
 *
 * (1) 웹 브라우저에서 http://localhost:3000/public/login3.html 페이지 열고 요청
 * (2) 크롬 브라우저 : POST 방식으로 요청
 */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');

//에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');
//Session 미들웨어 불러오기
var expressSession = require('express-session');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))
// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));

//cookie-parser 설정
app.use(cookieParser());

//세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized: true
}));

// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

router.route('/process/login').post(function(req, res){
	console.log('/process/login 호출됨.');
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
 //************** */
 
	if(req.session.user){
		console.log('이미 로그인되어 상품 페이지로 이동합니다.');
		res.redirect('/public/product.html');
	}else{
		req.session.user = {
			id:paramId,
			name:'이름',
			authorized:true
		};

		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h1>로그인 성공</h1>');
		res.write('<div><p>Param id: '+ paramId +'</p></div>');
		res.write('<div><p>Param password: '+ paramPassword +'</p></div>');
		res.write('<br><br><a href="/process/product">상품 페이지로 이동하기</a>');
		res.write('<div><p>Param id: '+ paramId +'</p></div>');
		res.end();
	}
});

router.route('/process/logout').get(function(req, res){
	console.log('/process/logout 호출됨.');

	if(req.session.user){
		console.log('로그아웃합니다.');
		req.session.destroy(function(err){
			if(err) { throw err; }
			console.log('세션을 삭제하고 로그아웃 되었습니다.');
			res.redirect('/public/login2.html');
		})
	}
});

router.route('/process/product').get(function(req, res){
	console.log('/process/product 호출됨.');
	if(req.session.user){
		res.redirect('/public/product.html');
	}else{
		res.redirect('/public/login2.html');
	}
});
app.use('/', router);

//404 에러 페이지 처리
var errorHandler = expressErrorHandler({
	static:{
		'404':'./ExpressExample/public/404.html' //***************** */
	}
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
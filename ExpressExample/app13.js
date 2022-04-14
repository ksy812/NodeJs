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

//파일 업로드용 미들웨어
var multer = require('multer');
var fs = require('fs');

//클라이언트에서 ajax로 요청시 CORS(다중 서버 접속) 지원
var cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

//cookie-parser 설정
app.use(cookieParser());

//세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized: true
}));

app.use(cors()); //multer 미들웨어 사용: 미들웨어 사용 순서 중요
//body-parser -> multer -> router
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname);
        callback(null, basename + Date.now() + extension);
    }
});

var upload = multer({
    storage: storage,
    limits: {
        files: 12,
        fileSize: 1024*1024*1024*1024
    }
});

// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

router.route('/process/photo').post(upload.array('photo1', 1), function(req, res){
    console.log('/process/photo 호출됨.');

    try{
        var files = req.files;

        console.dir('#=====업로드 된 첫번째 파일 정보 ========#');
        console.dir(req.files[0]);
        console.dir('#=========#');

        var originalname = '',
        mimetype = '',
        size = 0;
        if(Array.isArray(files)){
            console.log("배열에 들어있는 파일 갯수 : %d", files.length);

            for(var index = 0; index<files.length; index++){
                originalname = files[index].originalname;
                filename = files[index].filename;
                mimetype = files[index].mimetype;
                size = files[index].size;
            }
        }else{
            console.log("파일 갯수 : 1");

            originalname = files[index].originalname;
            filename = files[index].name;
            mimetype = files[index].mimetype;
            size = files[index].size;
        }
        console.log('현재 파일 정보 : '+originalname+', '+filename+', '+mimetype+', '+size);

        res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
        res.write('<h3>파일 업로드 성공</h3>');
        res.write('<hr/>');
        res.write('<p>원본 파일명 : '+ originalname+'-> 저장 파일명 : '+filename+'</p>');
        res.write('<p>MIME TYPE : '+mimetype+'</p>');
        res.end();
    }catch(err){
        console.dir(err.stack);
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
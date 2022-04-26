
// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// 파일 업로드용 미들웨어
var multer = require('multer');
var fs = require('fs');

//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
var cors = require('cors');
const { runInNewContext } = require('vm');


// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(express.json())

// public 폴더와 uploads 폴더 오픈
app.use(static(path.join(__dirname, 'public')));
//***********8app14.js에서 바뀐 내용
//app.use('/uploads', static(path.join(__dirname, 'uploads'))); 

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));


//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
app.use(cors());


//multer 미들웨어 사용 : 미들웨어 사용 순서 중요  body-parser -> multer -> router
// 파일 제한 : 10개, 1G
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        //callback(null, file.originalname + Date.now())
		//callback(null, file.originalname)
		var extension = path.extname(file.originalname);
		var basename = path.basename(file.originalname, extension);
		callback(null, basename + Date.now() + extension);
	 }
});

var upload = multer({ //=>upload라는 변수에 multer()를 할당하고 실행하여줌
    storage: storage,
    limits: {
		files: 12,
		fileSize: 1024 * 1024 * 1024
	}
});


// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

// 파일 업로드 라우팅 함수 - 로그인 후 세션 저장함
router.route('/process/photo12').post(upload.array('photo12', 12), function(req, res) {
	console.log('/process/photo12 호출됨.');
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'})
	try {
		var files = req.files;
        
		// 현재의 파일 정보를 저장할 변수 선언
			filename = '',
			mimetype = '',
			size = 0;
		
		if (Array.isArray(files)) {   // 배열에 들어가 있는 경우 (설정에서 1개의 파일도 배열에 넣게 했음)
	        console.log("배열에 들어있는 파일 갯수 : %d", files.length);
	        
	        for (var index = 0; index < files.length; index++) {
	            console.dir('#===== 업로드된'+ (index+1) +'번째 파일 정보 =====#')
    
				originalname = files[index].originalname;
	        	filename = files[index].filename;
	        	mimetype = files[index].mimetype;
	        	size = files[index].size;
				
				console.log('현재 파일 정보: '+originalname+', '+filename+', '
				+ mimetype +', '+ size);

				res.write('<h3>'+(index+1)+'번째 파일 업로드 성공</h3>');
				res.write('<hr/>');
				res.write('<p>원본 파일명: '+originalname+'<br> -> 저장 파일명: '+ filename +'</p>');
				res.write('<p>MIME TYPE: '+ mimetype +'</p>');
				res.end();
	        }//for-end
	        
	    }//if-end
	} catch(err) {
		console.dir(err.stack);
	}//try-end
});
 
app.use('/', router);


// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
		'404':'./public/404.html' //******************
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
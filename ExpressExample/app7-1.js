//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

//Express 객체 생성
var bodyParser = require('body-parser');
var static = require('serve-static');

//기본 속성 설정
var app = express();
app.set('port', process.env.PORT || 3003);

//body-parse를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

//body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));
//app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res){
    console.log('첫번째 미들웨어에서 요청을 처리함');
    res.redirect('./login.html');
})

app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함.');
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : '+ paramId +'</p></div>');
    res.write('<div><p>Param password : '+ paramPassword + '</p></div>');
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});
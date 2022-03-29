var express = require('express');
var http = require('http');

var app = express();

//첫번째 미들웨어에서 다음 미들웨어로 넘김
app.use(function(req, res, next){
   console.log('첫 번째 미들웨어에서 요청을 처리함.');
   
   res.redirect('http://google.co.kr'); //웹페이지 경로를 강제로 이동시킴
});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});
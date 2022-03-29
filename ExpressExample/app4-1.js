var express = require('express');
var http = require('http');

var app = express();

//첫번째 미들웨어에서 다음 미들웨어로 넘김
app.use(function(req, res, next){
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    //실습1 -> X (Error)
    // var person = {name:'소녀시대', age:20};
    // res.writeHead('200', {'content-Type':'html/text; charset=utf8'});
    // res.end(person);

    //실습2 -> O ({"name":"소녀시대","age":20})
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'content-Type':'application/json; charset=utf8'});
    // res.end(personStr);

    //실습3 -> X (깨져서 나옴)
    var person = {name:'소녀시대', age:20};
    var personStr = JSON.stringify(person);
    res.end(personStr);
    
    //실습4 -> O
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);
    // res.writeHead('200', {'content-Type':'text/html; charset=utf8'});
    // res.end(personStr);

    //실습5 -> O
    // var person = {name:'소녀시대', age:20};
    // var personStr = JSON.stringify(person);
    // res.send(personStr);

    //실습6 -> O
    // var person = {name:'소녀시대', age:20};
    // res.send(person);

    //실습7 -> O
    // req.user = 'sunny';
    // res.writeHead('200', {'content-Type':'text/html; charset=utf8'});
    // res.end('<h1>Express 서버에서 '+req.user +'를 res, writeHead와 end로 응답한 결과입니다.</h>');

    //실습8 -> O
    // req.user = 'sunny';
    // res.send('<h1>Express 서버에서 '+req.user +'를 send로 응답한 결과입니다.</h>');


});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});
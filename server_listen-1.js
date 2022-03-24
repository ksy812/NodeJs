var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); //한글 깨짐 방지
    res.write('<title>페이지 제목</title>');
    res.write('<h1>노드제이에스로부터의 응답 페이지</h1>');

    res.write('<ul>');
    res.write('<li>리스트1</li>');
    res.write('<li>리스트2</li>');
    res.write('</ul>');

    res.write('<h2>H2 태그</h2>');

    res.end(); //write와 end는 페어다.
}).listen(8000);
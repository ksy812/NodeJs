var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Helloworld!</h1>');
    res.end(); //write와 end는 짝이다.
}).listen(8080);
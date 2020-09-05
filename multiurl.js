var http = require('http');
var url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Hello, Node.js!</h1> -get');
    }
 	 if (req.url === '/'&& req.method==='POST') {
        res.write('<h1>Hello, Node.js! - POST</h1>');
    }
	if (req.url === '/hi') {
        res.write('<h1>Hi, Node.js!</h1>');
    }
    res.end();
});

server.listen(1080);
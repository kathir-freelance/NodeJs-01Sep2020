var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') {
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
{
var num=1;
	res.setHeader('refresh',3);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end(String(++num));
        res.end('Invalid Request!');
}
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
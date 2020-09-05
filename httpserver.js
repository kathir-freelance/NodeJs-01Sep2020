var http=require('http');
var url=require('url');


// enpoint process
//below is default endpoint - \
var app=http.createServer((req,resp)=>{

	resp.writeHead(200,{'content-type':'text/plain'});
	resp.write('<h1>hi hello</h1>');
	var q=url.parse(req.url,true).query;	
	var name=q.name;
	var city=q.city;
	resp.write(name +' ' +city);
	console.log(name+' '+city+' '+req.url);
	resp.end();

});

//listening to port
app.listen(2000);

//localhost:2000\?name=ajay&city=mumbai
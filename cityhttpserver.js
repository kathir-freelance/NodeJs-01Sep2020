const cities = require('cities'); //3rd party plugin
console.log(cities);
const url = require('url');
const http = require('http');
const app = http.createServer((request, response) => {
  var city, query;
console.log(request.method);
  query = url.parse(request.url, true).query;
  if (query.zipCode) 
	{
	city = cities.zip_lookup(query.zipCode).city;
	latitude = cities.zip_lookup(query.zipCode).latitude;
	}
  else city = "not found"
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`<h1>The city you are in is ${city} - ${latitude}.</h1>`);
  response.end();
});

app.listen(3000);
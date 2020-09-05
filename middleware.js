var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});
app.use('/', function(req, res, next){
   console.log("/ url" + Date.now());
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

app.get('/', function(req, res){
   res.send('<h1>hi hello - home page</h1>');
});
app.listen(3000);
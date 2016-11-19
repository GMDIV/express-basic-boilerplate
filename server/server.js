var express = require('express');
var bodyParser =  require('body-parser');


var app = express(); 


app.use(bodyParser.json()) //JSON.parse(req.body)
//run this middleware on each function with .use

app.get('/', function(req, res){
	res.status(200).send();
})

app.post('/messages', function(req, res){
	console.log(req.body)
})


app.listen(8080);
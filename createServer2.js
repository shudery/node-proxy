var express = require('express');
var app = express();

app.get('/proxy', (req,res)=>{
	console.log(req.headers);
	var a = {1:'server2'};

	res.send(a);
})

app.get('/proxy2', (req,res)=>{
	console.log(req.headers);
	var a = {2:'server2'};

	res.send(a);
})

app.listen(3333,()=>{
	console.log('server2 start at port 3333.')
})
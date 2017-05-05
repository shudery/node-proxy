var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.get('/', (req,res)=>{
	console.log(req.headers);
	var a = {1:'home'};

	res.send(a);
})
app.get('/api', (req,res)=>{
	console.log(req.headers);
	var a = {1:'api'};

	res.send(a);
})
app.get('/test',(req,res)=>{
	res.send('test')
})
//跨域请求http://localhost:3333/proxy.
app.use('/proxy',proxy({target: 'http://localhost:3333/'}));
app.use('/proxy2',proxy({target: 'http://localhost:3333/'}));

app.listen(2222,()=>{
	console.log('server start at port 2222.')
})
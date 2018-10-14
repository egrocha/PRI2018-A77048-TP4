var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req,res)=>{
	var purl = url.parse(req.url, true)
	var query = purl.query
	var id = query.id
	var url_obras = "/obra?id="+query.id;
	if (req.url === url_obras) {
		fs.readFile("./website/html/obra"+id+".html",(erro,dados)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			if(!erro)
				res.write(dados)
			else
				res.write(erro.toString())
			res.end()
		})
	}
	else{
		fs.readFile("./website/index.html",(erro,dados)=>{
			res.writeHead(200, {'Content-Type': 'text/html'});
			if(!erro)
				res.write(dados)
			else
				res.write(erro.toString())
			res.end()
		})
	}
}).listen(4004,()=>{
	console.log('Servidor à escuta na porta 4004...')
})

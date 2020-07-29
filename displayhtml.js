var http=require('http')
var fs=require('fs')

fs.readFile("./Sample.html",function(err,html){
 console.log(html)
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"})
	response.write(html)
	response.end()
}).listen(8000)
})
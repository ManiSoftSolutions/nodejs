var http=require('http')
var url=require('url')

	function serverstart(request,response){
		var pathname=url.parse(request.url).pathname
		//route(pathname,handle,response
		if(pathname.toString()==='/hi'){
			console.log('Hi Welcome')
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write("Hi Welcome");
			response.end();
		}else if(pathname.toString()==='/hello'){
			console.log('Hello Buddy')
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write("Hello Buddy");
			response.end();
		}else{
			console.log('no handler for path '+ pathname)
			response.writeHead(404,{"Content-Type":"text/plain"});
			response.write("404 File not found error");
			response.end();
		}

	}

	const server=http.createServer(serverstart);
	server.listen(8000)
console.log('Welcome Home')
console.log('HI TCSer')

var http=require('http')
var url=require('url')

	function serverstart(request,response){
		var pathname=url.parse(request.url).pathname
		//route(pathname,handle,response
		if(pathname.toString()==='/hi'){
			console.log('hi welcome')
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write("Hi welcome");
			response.end();
		}else if(pathname.toString()==='/hello'){
			console.log('hello Buddy')
			response.writeHead(200,{"Content-Type":"text/plain"});
			response.write("hello Buddy");
			response.end();
		}else{
			console.log('no handler for path '+ pathname)
			response.writeHead(404,{"Content-Type":"text/plain"});
			response.write("Page not found");
			response.end();
		}
		
	}

	const server=http.createServer(serverstart);
	server.listen(8000)

console.log('Hi TCSer')

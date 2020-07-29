var http=require('http')
var url=require('url')
var querystring=require('querystring')

function serverStartup(route,handle){
	function serverstart(request,response){
		var pathname=url.parse(request.url).pathname
		var input=''
		request.setEncoding('utf8')
		request.addListener('data', function(chunk){
					input+=chunk
		})
		
		request.addListener('end',function(){
			route(pathname,handle,response,input)
		})
				
		
		console.log('Inside Server ')
		/*response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello World");
		response.end();*/
	}

	const server=http.createServer(serverstart);
	server.listen(8000)
}

exports.serverStartup=serverStartup
var http=require('http')
var url=require('url')
var querystring=require('querystring')
var fs=require('fs')

	function serverstart(request,response){
		fs.readFile("./sample1.html",function(err,html){
		var pathname=url.parse(request.url).pathname
		
		//route(pathname,handle,response
			if(pathname.toString()==='/home'){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.write(html);
				response.end();
			}
			else if(pathname.toString()==='/newpage'){
				var input=''
				var nameval={};
				request.setEncoding('utf8')
				request.addListener('data', function(chunk){
					input+=chunk
				})
				
				request.addListener('end',function(){
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write('query string '+querystring.parse(input).fname);
					response.end();
					nameval=
					{
						fname:querystring.parse(input).fname,
						age:querystring.parse(input).age,
						sname:querystring.parse(input).sname
					}
					fs.writeFile("./output.txt",JSON.stringify(nameval));
				})
			}
		})
	}

	const server=http.createServer(serverstart);
	server.listen(8000)
console.log('Welcome Home')
console.log('HI TCSer')

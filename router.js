 function route(pathname,handle,response,input){
	 console.log(input)
	 console.log('Inside router for '+pathname)
	 if(typeof handle[pathname]==='function')
		 handle[pathname](response,input);
	 else{
		 console.log('no handler for path '+ pathname)
		 response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("Page not found");
		response.end();
	 }
 }
 
 exports.route=route
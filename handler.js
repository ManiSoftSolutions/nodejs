var fs=require('fs')
var querystring=require('querystring')

function hi(response,input){
	console.log('hi welcome')
	fs.readFile("./sample1.html",function(err,html){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(html);
		response.end();
	})
}

function newpage(response,input){
	console.log(input)
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write('query string '+querystring.parse(input).fname);
	response.end();
}

exports.hi=hi
exports.newpage=newpage
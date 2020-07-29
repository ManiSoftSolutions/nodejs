var https = require('https');
var fs=require('fs')

var options = {
  host: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Node',
  method: 'GET'
  
};	

var req = https.request(options, function(res) {
 console.log(res.statusCode);
  var data=''
  res.on('data', function(chunk) {
    data+=chunk;
  });
  
  res.on('end',function(){
	  console.log(data)
	  fs.writeFile('./Nodejs.html',data)
  })
});
req.end();

req.on('error', function(e) {
  console.error('error in calling https '+e);
});
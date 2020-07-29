var fs=require('fs')
var writeStream=fs.createWriteStream('Big_data.txt')
 var data='Node.js is an ultimate backend javascript for backend development'

 for(i=1;i<=50;i++){
 writeStream.write(data,'UTF8')
}
 writeStream.end()
 writeStream.on('finish',function(){
	 console.log('write completed')
 })
var fs=require('fs')
var readStream=fs.createReadStream('./Node-stream-handson/data_file.txt')

var data=''
readStream.setEncoding('UTF8')
readStream.on('data',function(chunk){
  data+=chunk
  console.log(chunk.length)
})
readStream.on('end',function(){
  console.log(data.length)
})
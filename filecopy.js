var fs=require('fs')

var readStream=fs.createReadStream('./Node-stream-handson/data_file.txt')
var writeStream=fs.createWriteStream('./Node-stream-handson/new_data_file.txt')
readStream.setEncoding('UTF8')
readStream.pipe(writeStream)
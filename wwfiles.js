var fs=require('fs')

fs.readFile("./To_Read.txt",function(err,data){
	console.log(data.toString())
	console.log("industry")
})

var var1=function(text){
	console.log(text)
}

function mainfun(subfun,value){
	subfun(value)
}
mainfun(var1,"Hello")
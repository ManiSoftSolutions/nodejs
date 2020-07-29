var result=0
function add(){
	for(var i=2;i<process.argv.length;i++){
		result+=Number(process.argv[i])
	}
	console.log(result)
}
add()

var count=0
var num=1
var nt=10001
var j
function nth(){
	while(count<nt){
	num=num+1;
		for(var i=2;i<=num;i++){
			j=i
			if(num%i==0){
				break;
			}
		}
		
		if(j==num)
			count=count+1;
	}
	
	return num
}

console.log(nth())
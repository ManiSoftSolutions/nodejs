var sum=0
var n=20000000

for(var j=2;j<=n;j++){
	for (var i=2;i<=j/2;i++){
		if(j%i==0)
			sum+=i
	}	
}
console.log(sum)
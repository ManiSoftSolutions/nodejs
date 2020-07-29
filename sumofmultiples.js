var x=3
var y=5
var sum=0
for (var i=2;i<1000;i++){
	if(i%x==0 || i%y==0)
		sum+=i
}

console.log(sum)
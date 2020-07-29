var n=100

var sum=0
var sum1=0
for(var i=1;i<=100;i++){
	sum+=Math.pow(i,2)
}

for(var i=1;i<=100;i++){
	sum1+=i
}

console.log(Math.pow(sum1,2)-sum)

// 
var n= 44
var temp=0
var fact=''
for (var i=2;i<=n;i++){
	while(n%i==0){
		n/=i
		console.log(n)
		fact+=i
	}
}

console.log(fact)
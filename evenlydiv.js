// 
var ans=1

for (var i=1;i<=20;i++){
	ans=(ans*i)/gcd(ans,i)
}

function gcd(a,b){
	if(a%b!=0)
		return gcd(b,a%b)
	else
		return b
}

console.log(ans)
function callback(num){
	var x=0
	for(var i=num;i<=1000;i=i+num){
		x+=Number(i);
	}
	return x;
}

console.log(callback(3)+callback(5))
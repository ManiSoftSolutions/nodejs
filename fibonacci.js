function fibonacci(){
	var arr=[1,2]
	var sum=2
	for (var i=2;arr[i-2]+arr[i-1]<=4000000 ;i++){
		arr.push(arr[i-2]+arr[i-1])
		if( (arr[i-2]+arr[i-1])%2===0 )
			sum+=arr[i-2]+arr[i-1]
	}
	
	return sum
}

console.log(fibonacci())
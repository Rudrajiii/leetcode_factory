const rangeSum = (nums , n , left , right) => {

	let subArray = [];
	for(let i = 0 ; i < n ; i++){
		let counter = 0;
		for(let j = i ; j < n ; j++){
			counter += nums[j];
			subArray.push(counter);
		}
	}
	subArray.sort((a,b) => a - b);
	return subArray.slice(left - 1 , right).reduce((a , c) => a + c , 0) % (10**9 + 7);

}
let exp = rangeSum([1,2,3,4],4 , 1 , 5);
console.log(exp);

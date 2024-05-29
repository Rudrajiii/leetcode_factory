
// 2562. Find the Array Concatenation Value
var findTheArrayConcVal = function(nums) {
    let lP = 0;
    let rP = nums.length - 1;
    let sum = 0;
    while( lP < rP){
        let concat = String(nums[lP]) + String(nums[rP]);
        sum += Number(concat);
        lP++;
        rP--;
   }
   if(nums.length % 2 !== 0){
       let midIdx = Math.floor(nums.length / 2);
       return sum + nums[midIdx];
   }
    return sum;
};

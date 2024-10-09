/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //brute force solution
    let obj = {};
    for(let i of nums){
      if(obj[i]){
        obj[i] += 1;
      }else{
        obj[i] = 1;
      }
    }
    for(let i of nums){
      if(obj[i] === 1){
        return i;
      }
    }
    //optimal solution
    let XOR = 0;
    for(let num of nums){
        XOR ^= num;
    }
    return XOR;
};
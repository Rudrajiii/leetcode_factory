/**
 * @param {number[]} nums
 * @return {number}
 */
//Most Optimal T O(N) S(1)
var singleNumber = function(nums) {
    let XOR = 0;
    for(let num of nums){
        XOR ^= num;
    }
    return XOR;
};
//Better T O(N) S(N)
var singleNumber = function(nums) {
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
};
// 2441. Largest Positive Integer That Exists With Its Negative

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let res = -1
    nums = nums.sort((a , b)=> a - b);
    for(let num = nums.length - 1 ; num > 0 ; num--){
        let check = -1 * nums[num];
        if(nums.includes(check)){
            res = nums[num];
            break;
        }
    }
    return res;
};
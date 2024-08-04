//2908. Minimum Sum of Mountain Triplets I

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let res = Infinity;
    let finalRes;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[k] < nums[j]) {
                    let sum = nums[i] + nums[j] + nums[k];
                    res = Math.min(sum , res)
                }
            }
        }
    }
    res == Infinity ? finalRes=-1 : finalRes=res
    return finalRes;
};
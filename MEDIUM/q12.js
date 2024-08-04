//53. Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let i=0 ; i<nums.length ; i++){
        currentSum += nums[i];
        maxSum = Math.max(currentSum , maxSum);
        if( currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
};
//!1480. Running Sum of 1d Array
//?Description

//*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//* Return the running sum of nums.

//todo Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
//todo Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//todo Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
      nums[i] = nums[i] + nums[i-1];
    }
    return nums
  };
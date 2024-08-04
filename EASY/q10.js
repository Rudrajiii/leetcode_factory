//!448. Find All Numbers Disappeared in an Array
//?Description

//* Given an array nums of n integers where nums[i] is in the range [1, n],
//* return an array of all the integers in the range [1, n] that do not appear in nums.

//todo Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

//todo Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    const result = [];
  
    for (let i = 1; i <= nums.length; i++) {
      if (!numSet.has(i)) {
        result.push(i);
      }
    }
  
    return result;
  };
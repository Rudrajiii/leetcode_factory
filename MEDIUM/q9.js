//!55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) return true; 

    let maxReach = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;

        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) return true; 
    }

    return false;
};


//Python Version

// class Solution(object):
//     def canJump(self, nums):
//         Our_Goal = len(nums) - 1
//         for i in range(len(nums) - 2 , -1 , -1):
//             if i + nums[i] >= Our_Goal:
//                 Our_Goal = i
//         return Our_Goal == 0

//!2824. Count Pairs Whose Sum is Less than Target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    nums.forEach((num, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            if (num + nums[j] < target) {
                count++;
            }
        }
    });
    return count;
};

//!153. Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let len = nums.length;
    let l = 0;
    let r = len - 1;
    while( l < r){
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[r]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    return nums[l];
};
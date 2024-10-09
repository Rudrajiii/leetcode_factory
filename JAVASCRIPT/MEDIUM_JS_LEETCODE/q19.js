//238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    const n = nums.length;
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }
    return result;
};

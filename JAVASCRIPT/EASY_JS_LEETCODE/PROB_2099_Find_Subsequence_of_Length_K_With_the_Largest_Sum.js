/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    return nums.map((value, index) => ({ value, index }))
               .sort((x,y)=>y.value-x.value)
               .slice(0,k)
               .sort((m,n)=>m.index-n.index)
               .map((p)=>p.value);
};
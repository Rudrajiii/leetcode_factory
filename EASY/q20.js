
// 2956. Find Common Elements Between Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let [v1 , v2] = [0 , 0]
    for(let i of nums1){
        if(nums2.includes(i)){
            v1 += 1
        }
    }
    for(let i of nums2){
        if(nums1.includes(i)){
            v2 += 1
        }
    }
    return [v1 , v2];
};
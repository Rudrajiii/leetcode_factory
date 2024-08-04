
//3131. Find the Integer Added to Array I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const n = nums1.length;
        let res = 0;
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);
        for (let i = 0; i < n; i++) {
            if (nums2[i] || nums1[i]) {
                let ret = nums2[i] - nums1[i];
                res = ret;
            }
        }
        return res;
};

//565. Array Nesting

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let maax = 1;
    let res = new Set();
    for(let key=0 ; key < nums.length ; key++){
        let current = key;
        let len = 0;
        while(!(res.has(current))){
            res.add(current);
            current = nums[current];
            len++
        }
    maax = Math.max(maax , len);  
    }
    return maax;
};

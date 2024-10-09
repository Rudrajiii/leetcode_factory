//2903. Find Indices With Index and Value Difference I

/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    const defaultRes = [-1 , - 1];
    const res = [];
    let bool = false;
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length ; j++){
            if(Math.abs(i - j) >= indexDifference){
                if(Math.abs(nums[i] - nums[j] >= valueDifference)){
                    res.push(i);
                    res.push(j);
                    bool = true;
                    break;
                }
            }
        }
    }
    if(bool){
        return res;
    }else{
        return defaultRes;
    }

};
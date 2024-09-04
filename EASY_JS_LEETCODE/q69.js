/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let temp = []
    let k = 0
    for(let i = 0 ; i < nums.length ; i++){
        let p = nums[i]; //0 , 1 , 2 , 3
        let j = p + 1; // 1 , 2 , 3(NOT_PRESENT)
        if(nums.includes(j)){
            continue;
        }else{
            if(nums[k] !== j - 1){
                temp.push(`${nums[k]}->${j - 1}`);
                k = i+1;
            }else{
                temp.push(String(nums[k]));
                k = i+1;
            }
            
        }
    }
    return temp;
};
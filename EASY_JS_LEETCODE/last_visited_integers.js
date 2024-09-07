/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    let [seen , ans] = [[] , []];
    let k = 1;
    for(let i of nums){
        if(i !== -1){
            seen.unshift(i);
            k = 1;
        }
        if(i === -1){
            if(k <= seen.length){
                ans.push(seen[k-1]);
                k++;
            }else{
                ans.push(-1);
            }

        }
    }
    return ans;
};
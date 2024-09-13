/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sortedArray = arr.sort((a , b) => a - b);
    let bool = true;
    let cd = sortedArray[1] - sortedArray[0]
    for(let i = 2 ; i < arr.length ; i++){
        if((sortedArray[i] - sortedArray[i-1]) !== cd) return false;
    }
    return bool;
};


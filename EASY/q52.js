//2710. Remove Trailing Zeros From a String
// Solved
// Easy
// Topics
// Companies
// Hint

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    numArray = num.split('');
    for(let i = numArray.length-1;i>0;i--){
        if(numArray[i] === '0'){
           numArray = numArray.slice(0 , i);
        }else{
            break;
        }
    }
    return numArray.join('')
};
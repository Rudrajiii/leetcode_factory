
// 191. Number of 1 Bits
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    var binaryToString = String(n.toString(2)).split('');
    let count = 0
    for(let digit of binaryToString){
        if(digit === '1'){
            count++;
        }
    }
    return count;

};
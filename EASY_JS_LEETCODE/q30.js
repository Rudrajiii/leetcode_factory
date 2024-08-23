
//!3079. Find the Sum of Encrypted Integers
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let total = 0;
    for (let i of nums) {
        total += encrypt(i);
    }
    return total;
};

var encrypt = function(item) {
    let itemToStr = String(item);
    let s = itemToStr.split('');
    for (let i = 0; i < s.length - 1 ; i++) {
        if(Number(s[i]) > Number(s[i + 1])) {
            let temp = s[i];
            s[i] = s[i + 1];
            s[i + 1] = temp;
            i = -1;
        }
    }
    let pickUp = s[s.length - 1];
    let originalNum = '';
    for (let k = 0; k < itemToStr.length; k++) {
        originalNum += pickUp;
    }
    return Number(originalNum);
}
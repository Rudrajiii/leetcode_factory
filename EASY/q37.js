//3110. Score of a String

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let total = 0;
    for(let i = 1 ; i < s.length  ; i++){
        total += Math.abs(s[i-1].charCodeAt(0) - s[i].charCodeAt(0));
    }
    return total;
};
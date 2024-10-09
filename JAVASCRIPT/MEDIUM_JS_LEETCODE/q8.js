//!7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
*/
var reverse = function(x) {
    let isNegative = x < 0;
    x = Math.abs(x);
    let r = 0;
    while(x > 0){
        let ld = x % 10;
        r *= 10;
        r += ld;
        x = Math.floor(x / 10);
    }
    if (isNegative) {
        r = -r;
    }
    if (r < -(2**31) || r > 2**31 - 1) {
        return 0;
    }
    return r;
};

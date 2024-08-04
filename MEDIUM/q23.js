/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if (n == 0) return "0";
    let res = '';
    while (n !== 0) {
        let remainder = Math.abs(n % 2);
        res = remainder + res;
        n = -(Math.floor(n / 2));
    }
    return res;
};

let exp = baseNeg2(6);
console.log(exp);


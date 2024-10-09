/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let c = 0;
    while(n > 0){
        let l = n % k;
        c += l;
        n = Math.floor(n / k);
    }
    return c;
};
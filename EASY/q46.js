

// 2427. Number of Common Factors

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
        if (b > a) {
            for (let i = 1; i <= a; i++) {
                if (a % i === 0 && b % i === 0) {
                    count += 1;
                }
            }
        } else {
            for (let i = 1; i <= b; i++) {
                if (b % i === 0 && a % i === 0) {
                    count += 1;
                }
            }
        }
        return count;
};
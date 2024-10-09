//  ! 43. Multiply Strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    return String(BigInt(BigInt(num1) * BigInt(num2)));
};
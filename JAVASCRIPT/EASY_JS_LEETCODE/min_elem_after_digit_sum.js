/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let replacement = nums.map((i) => digitSum(i));
    return Math.min(...replacement);
};

var digitSum = (n) => {
    let sum = 0;
    while(n > 0){
        let ld = n % 10;
        sum += ld;
        n = Math.floor(n / 10);
    }
    return sum;
}
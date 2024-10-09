/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i of nums){
        sum1 += i;
        i > 9 ? sum2 += splitDigit(i) : sum2 += i;
        
    }
    return Math.abs(sum1 - sum2);

};
var splitDigit = (n) => {
    let addUp = 0;
    while(n !== 0){
        let ld = n % 10;
        addUp += ld;
        n = Math.floor(n / 10); 
    }
    return addUp;
}
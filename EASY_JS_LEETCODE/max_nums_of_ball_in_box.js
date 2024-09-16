/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    // n = 10 // 10 9 8 7 6 5 4 3 2 1
    // n = 15 - 5 + 1 = 11 // 15 14 13 12 11 10 9 8 7 6 5
    // 1 2 3 4 5 6 7 8 9 10 11...
    // 1 1
    let hashSet = {};
    for(let i = highLimit ; i >= lowLimit ; i--){
        let val = digitSum(i);
        if(!hashSet[val]){
            hashSet[val] = 1;
        }else{
            hashSet[val] += 1;
        }
    }
    return Math.max(...Object.values(hashSet));
};

var digitSum = (n) => {
    let sum = 0;
    while( n > 0){
        let ld = n % 10;
        sum += ld;
        n = Math.floor(n / 10);
    }
    return sum;
}


//3099. Harshad Number

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let t = 0;
    let cpyInp = x;
    let res = 0;
    while(x > 0){
        let  r = x % 10;
        t += r;
        x = Math.floor(x / 10);
    }
    cpyInp % t == 0 ? res = t : res = -1;
    return res;
};
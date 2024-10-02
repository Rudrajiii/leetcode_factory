/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let digits = '0123456789';
    for(let item of s){
        if(digits.includes(item)){
            let fh = s.slice(0 , s.indexOf(item) - 1);
            let sh = s.slice(s.indexOf(item) + 1 , s.length);
            s = fh + sh;
        }
    }
    return s;
};
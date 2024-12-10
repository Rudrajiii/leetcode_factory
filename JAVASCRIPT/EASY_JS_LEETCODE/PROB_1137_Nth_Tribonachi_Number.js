/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n==0) return 0;
    let t = [0, 1 , 1];
    for(let i = 0 ; i < n-2 ; i++){
        t[i+3] = t[i] + t[i+1] + t[i+2];
    }
    return t[t.length-1]; 
};
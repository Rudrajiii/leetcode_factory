/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let preffixXOR = new Array(arr.length + 1).fill(0);
    for(let i = 1 ; i < arr.length + 1 ; i++){
        preffixXOR[i] = preffixXOR[i - 1] ^ arr[i - 1]
    }
    let ans = [];
    for(let [l , r] of queries){
        ans.push(preffixXOR[r+1] ^ preffixXOR[l]);
    }
    return ans; 
};

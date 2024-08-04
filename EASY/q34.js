//Find the Peaks

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    const res = [];
    for(let i = 1; i < mountain.length - 1; i++) {
        if(mountain[i-1] < mountain[i] && mountain[i] > mountain[i+1]) {
            res.push(i);
        }
    }
    return res;
};
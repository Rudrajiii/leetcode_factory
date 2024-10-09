// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashSet = {};
    const res = [];
    const potol = [];
    for (let num of nums) {
        hashSet[num] ? hashSet[num] += 1 : hashSet[num] = 1;
    }
    for (let key in hashSet) {
        res.push({ num: key, freq: hashSet[key] });
    }
    res.sort((a, b) => b.freq - a.freq);
    for (let t = 0; t < k; t++) {
        potol.push(parseInt(res[t].num));
    }
    return potol;
};


/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let nums = '0123456789';
    for(let i of word){
        if(!nums.includes(i)){
            word = word.replace(i , ' ');
        }
    }
    let r = ( word.trim()).split(' ').filter((i)=>i !='').map((i)=>BigInt(i));

    let s = new Set(r);
    return s.size;
};


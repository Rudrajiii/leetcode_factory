//3408. Count the Number of Special Characters I

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let arr = []
    for(let i of word){
        if(word.includes(i.toUpperCase()) && word.includes(i.toLowerCase()) ){
            if(i === i.toUpperCase()){
                arr.push(i)
            }
        }
    }
    return new Set(arr).size;
};
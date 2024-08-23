//!2942. Find Words Containing Character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    // const res = [];
    // for(let i=0;i<words.length ; i++){
    //     if(words[i].indexOf(x) != -1){
    //         res.push(i)
    //     }
    // }
    // return res;
    return words.map((item , index)=>{
        if(item.indexOf(x) != -1){
            return index;
        }
    }).filter(i=>i !== undefined);
};

// 2649. Nested Array Generator
/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    if(arr.length < 1) return arr;
    for(let ar of arr){
        if(Array.isArray(ar)){
            yield* inorderTraversal(ar);
        }else{
            yield ar;
        }
    }
};
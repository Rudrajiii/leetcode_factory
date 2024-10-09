
//2625. Flatten Deeply Nested Array
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n===0)return arr;
    const storChuck = Array.of();
    n--;
    for(let ar of arr){
        if(Array.isArray(ar)){
            storChuck.push(...flat(ar , n));
        }else{
            storChuck.push(ar);
        }
    }
    return storChuck;
};

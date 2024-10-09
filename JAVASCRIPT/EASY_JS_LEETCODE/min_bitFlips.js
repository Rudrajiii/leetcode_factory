/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let [startBits , goalBits] = [makeBits(start) , makeBits(goal)]
    if(startBits === goalBits) return 0;
    if(startBits.length > goalBits.length){
        let getDiff = startBits.length - goalBits.length;
        goalBits = Array(getDiff).fill(0).join('') + goalBits;
    }else if(startBits.length < goalBits.length){
        let getDiff = goalBits.length - startBits.length;
        startBits = Array(getDiff).fill(0).join('') + startBits;
    }
    let startBitsArray = startBits.split('');
    let goalBitsArray = goalBits.split('');
    let flipCount = 0;
    for(let i = 0 ; i < startBitsArray.length ; i++){
        if(startBitsArray[i] !== goalBitsArray[i]){
            flipCount++;
        }else{
            continue;
        }
    }
    return flipCount;
};

var makeBits = (n) => {
    let bits = '';
    while(n !== 0){
        let r = n % 2;
        bits = r + bits;
        n = Math.floor( n / 2);
    }
    return bits;
}
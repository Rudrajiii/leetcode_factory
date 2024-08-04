
//1189. Maximum Number of Balloons
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const ballonMap = {};
    let balloon = 'balloon';
    for(let letter of text){
        if(balloon.includes(letter)){
            ballonMap[letter] = (ballonMap[letter] || 0) + 1;
        }
    }
    for(let c of balloon){
        if(!(ballonMap.hasOwnProperty(c))){
            return 0
        }
    }
    return Math.min(ballonMap['b'] , ballonMap['a'] , Math.floor(ballonMap['l'] / 2),Math.floor(ballonMap['o'] / 2) , ballonMap['n']);

};
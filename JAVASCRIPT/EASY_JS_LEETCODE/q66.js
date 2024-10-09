var distributeCandies = function(candyType) {
    let canEat = candyType.length / 2;
    let uniqueCandy = new Set(candyType);
    return uniqueCandy.size <= canEat ? uniqueCandy.size : canEat;
};
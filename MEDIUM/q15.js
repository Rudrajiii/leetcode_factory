// 2126. Destroying Asteroids


/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    let sortedAsteroids = asteroids.sort((a , b) => a - b);
    let bool = true;
    //planetMass = 5
    //[4 , 4 , 9 , 23]
    // 5 > 4 => 5 + 4 = 9 
    // 9 > 4 => 9 + 4 = 13
    // 13 > 9 => 13 + 9 = 22
    // 22 > 23 Not True. So Stop
    for(let i of sortedAsteroids){
        mass >= i ? mass += i : bool = false;
    }
    return bool;
};
//! Group By

Array.prototype.groupBy = function(fn) {
    const myMap = new Map();
    for (let i = 0; i < this.length; i++) {
    const [key , value] = [fn(this[i]) ,this[i]];
    myMap.has(key) ? myMap.get(key).push(value) 
                     : 
                     myMap.set(key, [value]);
  }

 return Object.fromEntries(myMap);
};
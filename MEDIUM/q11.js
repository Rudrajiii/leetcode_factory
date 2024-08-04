//2722. Join Two Arrays by ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to store objects by their id
    const map = new Map();
    arr1.forEach(obj => map.set(obj.id, obj));
    arr2.forEach(obj => {
      if (map.has(obj.id)) {
        // Merge properties if the id exists in both arrays
        const existingObj = map.get(obj.id);
        map.set(obj.id, {...existingObj, ...obj});
      } else {
        map.set(obj.id, obj);
      }
    });
    const joinedArray = Array.from(map.values());
    return joinedArray.sort((a, b) => a.id - b.id);
  };
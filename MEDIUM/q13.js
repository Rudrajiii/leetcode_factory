

// 2705. Compact Object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const falsyValues = [null, 0, false, NaN, undefined, '', ""];
    if (Array.isArray(obj)) {
        const res = [];
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i])) {
                res.push(compactObject(obj[i]));
            } else if (typeof obj[i] === 'object' && obj[i] !== null) {
                res.push(compactObject(obj[i]));
            } else if (!falsyValues.includes(obj[i])) {
                res.push(obj[i]);
            }
        }
        return res;
    } else if (typeof obj === 'object' && obj !== null) {
        const res = {};
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                res[key] = compactObject(obj[key]);
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                res[key] = compactObject(obj[key]);
            } else if (!falsyValues.includes(obj[key])) {
                res[key] = obj[key];
            }
        }
        return res;
    } else {
        return obj;
    }
};

var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return [];
    let res = _.chunk(original, n);
    return res.length == m ? res : []; 
};

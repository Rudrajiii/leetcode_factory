var deleteGreatestValue = function(grid) {
    let res = 0;
    while (grid[0].length > 0) {
        let y = [];
        for (let j = 0; j < grid.length; j++) {
            if (grid[j].length > 0) {
                let maxValue = Math.max(...grid[j]);
                y.push(maxValue);
                grid[j].splice(grid[j].indexOf(maxValue), 1);
            }
        }
        if (y.length > 0) {
            res += Math.max(...y);
        }
    }

    return res;
};
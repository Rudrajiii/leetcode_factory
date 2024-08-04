
//506. Relative Ranks

/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function(score) {
    const res = [];
    const sortedScores = [...score].sort((a, b) => b - a);
    const rankMap = {};

    sortedScores.forEach((value, index) => {
        if (index === 0) rankMap[value] = "Gold Medal";
        else if (index === 1) rankMap[value] = "Silver Medal";
        else if (index === 2) rankMap[value] = "Bronze Medal";
        else rankMap[value] = (index + 1).toString() + "th";
    });

    score.forEach((value) => {
        rankMap[value].endsWith('th') ? res.push(rankMap[value].replace('th', '')) :
        res.push(rankMap[value]);
    });

    return res;
};
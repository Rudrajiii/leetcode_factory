//2974. Minimum Number Game

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    if (nums.length == 2) {
        [nums[0] , nums[1]] = [nums[1], nums[0]];
    }
    const res = [];
    const numsCopy = [...nums]; // Create a copy of the input array to avoid modifying it
    for (let i = 0; i < nums.length / 2; i++) {
        let Alice = smallNum(numsCopy);
        let Bob = smallNum(numsCopy);
        res.push(Bob);
        res.push(Alice);
    }
    return res;
};

function smallNum(nums) {
    let smallestElement = nums[0];
    let smallestIndex = 0; // Keep track of the index of the smallest element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < smallestElement) {
            smallestElement = nums[i]; // Update smallestElement if a smaller element is found
            smallestIndex = i; // Update the index of the smallest element
        }
    }
    nums.splice(smallestIndex, 1);
    return smallestElement;
}

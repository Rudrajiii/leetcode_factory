/**
 * @param {number[]} nums
 * @return {number}
 */
//Most Optimal T O(N) S O(1)
var missingNumber = function (nums) {
  let xor1 = 0;
  let xor2 = 0;
  let numsSize = nums.length;
  for (let num = 0; num < numsSize; num++) {
    xor1 ^= num;
    xor2 ^= nums[num];
  }
  xor1 ^= numsSize;
  return xor1 ^ xor2;
};
//Brute Force T O(NLogN) S O(N)
var missingNumber = function (nums) {
  nums.sort((a, b) => b - a);
  let bNum = nums[0];
  let str = "";
  if (nums.length === 1 && nums[0] === 0) {
    str = bNum + 1;
  }
  for (let i = 0; i < bNum; i++) {
    if (!nums.includes(i)) {
      str = i;
      break;
    } else if (nums.includes(i)) {
      str = bNum + 1;
    }
  }
  return +str;
};

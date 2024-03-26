//! 1636. Sort Array by Increasing Frequency
//?Description

//* Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
//* If multiple values have the same frequency, sort them in decreasing order.
//* Return the sorted array.

 

//todo Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
//todo Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
//todo Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

var frequencySort = function(nums) {
    const map = {};
   for(let i of nums){
     if(map[i]){
       map[i] += 1;
     }else{
       map[i] = 1;
     }
   }
  nums.sort((a,b) =>{
    if(map[a] === map[b]){
      return b-a;
    }else{
      return map[a] - map[b];
    }
  })
  return nums;
};

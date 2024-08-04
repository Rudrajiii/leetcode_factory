//!217. Contains Duplicate
//?Description

//* Given an integer array nums, return true if any value appears at least twice in the array,
//* and return false if every element is distinct.

//Todo Example 1:

// Input: nums = [1,2,3,1]
// Output: true
//Todo Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    const hashMap = {};
    for(let i of nums){
        hashMap[i] ? hashMap[i] += 1 : hashMap[i] = 1;
      }
    const keys = [];
    for(let i in hashMap){
      hashMap[i] > 1 ?  keys.push(i) : null;
    }
    return keys.length === 0 ? false : true;
  };

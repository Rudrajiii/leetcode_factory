//! 169. Majority Element
//?Description
//*Given an array nums of size n, return the majority element.
//* The majority element is the element that appears more than ⌊n / 2⌋ times. 
//* You may assume that the majority element always exists in the array.

//todo Example 1:

// Input: nums = [3,2,3]
// Output: 3
//todo Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const nums = [2,2,1,1,1,2,2];
var majorityElement = function(nums) {
  let obj = {};
  for(let i of nums){
    if(obj[i]){
      obj[i] += 1;
    }else{
      obj[i] = 1;
    }
  }
  const g = [];
  for(let i in obj){
    g.push(obj[i]);
  }
  g.sort((a,b)=>b-a);
  let big = g[0];
  for(let i in obj){
    if(obj[i] === big){
      return i;
    }
  }
};
//! 2418. Sort the People
//?Description

//* You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
//* For each index i, names[i] and heights[i] denote the name and height of the ith person.
//* Return names sorted in descending order by the people's heights.

 

//todo Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
//todo Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

var sortPeople = function(names, heights) {
  if( names.length !== heights.length) return [];
  let hashMap = new Map();
  for(let i = 0; i < names.length; i++){
    hashMap.set(heights[i],names[i]);
  }
 const res = [];
 [...hashMap.keys()].sort((a,b)=>b-a).forEach(key => res.push(hashMap.get(key)));
 return res;
};


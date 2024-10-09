//!2404. Most Frequent Even Element
//?description
//* Given an integer array nums, return the most frequent even element.
//* If there is a tie, return the smallest one. If there is no such element, return -1.

//todo Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
//todo Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
//todo Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.

var mostFrequentEven = function(nums) {
    const map = new Map();
    const mapForEvenNumbers ={};
    const frequencyOfitems = []
    for(let i of nums){
         map.set(i,(map.get(i) || 0)+1)
      }
    nums.sort((a,b)=>{
      map.get(a) === map.get(b) ? b-a : map.get(a) - map.get(b);
    })
   let newArr = nums.filter(a => a % 2 === 0  ).sort((a,b) => a-b);
    for(let i of newArr){
      mapForEvenNumbers[i] ? mapForEvenNumbers[i] += 1 : mapForEvenNumbers[i] = 1;
    }
    for(let i in mapForEvenNumbers){
        frequencyOfitems.push(mapForEvenNumbers[i]);
    }
    let resultentValue = frequencyOfitems.sort((a,b) => b-a)[0];
    for(let i in mapForEvenNumbers){
      if(mapForEvenNumbers[i] === resultentValue){
        return +i;
      }
    }
    return -1;
  };

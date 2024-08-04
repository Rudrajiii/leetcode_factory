//!1684. Count the Number of Consistent Strings

//?Description:

//* You are given a string allowed consisting of distinct characters and an array of strings words.
//*  A string is consistent if all characters in the string appear in the string allowed.
//* Return the number of consistent strings in the array words.

//todo Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

//todo Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

//todo Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
const allowed = "cad";
const words = ["cc","acd","b","ba","bac","bad","ac","d"];
var countConsistentStrings = function(allowed, words) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
      let consistent = true;
      for (let j = 0; j < words[i].length; j++) {
        !allowed.includes(words[i][j]) ? consistent = false : null;
      }
      consistent ? res.push(words[i]) : null;
    }
    return res.length;
  }; 
console.log(countConsistentStrings(allowed, words));


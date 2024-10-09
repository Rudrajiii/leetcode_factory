//!520. Detect Capital
//? Description:

//* We define the usage of capitals in a word to be right when one of the following cases holds:

//* All letters in this word are capitals, like "USA".
//* All letters in this word are not capitals, like "leetcode".
//* Only the first letter in this word is capital, like "Google".
//* Given a string word, return true if the usage of capitals in it is right.

//Todo Example 1:

// Input: word = "USA"
// Output: true
//Todo Example 2:

// Input: word = "FlaG"
// Output: false

var detectCapitalUse = function(word) {
    var f = word[0];
    var d = word.slice(1);
    if(f === f.toUpperCase() && d === d.toLowerCase()) return true;
    if(word !== word.toUpperCase() && word !== word.toLowerCase()) return false;
    
  return true;
};
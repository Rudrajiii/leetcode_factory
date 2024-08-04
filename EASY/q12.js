//! 415. Add Strings
//?Description:
//* Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
//* You must solve the problem without using any built-in library for handling large integers (such as BigInteger).
//* You must also not convert the inputs to integers directly.

//todo Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
//todo Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
//todo Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

var addStrings = function(num1, num2) {
    return String(BigInt(num1)+BigInt(num2));
};
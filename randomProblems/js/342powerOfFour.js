// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1

var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
      }
      // Calculate log base 4 using natural logarithm
      let logResult = Math.log(n) / Math.log(4);
      // Check if logResult is an integer
      return Number.isInteger(logResult);
};

let n = 5;
let res = isPowerOfFour(n);
console.log(res);

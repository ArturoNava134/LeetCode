// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

//first two pointers exercise. 

var isPalindrome = function(s) {
    // first we clean the string of all non-alphanumeric characters.
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '');
    // then we define our 2 variables 1 for reverse the string and set it as lower case and the other one just to set the
    // lower case, for compare them.
    let sToCompare = cleanedStr.split('').reverse().join('').toLowerCase()
    let sClean = cleanedStr.toLowerCase()
    //then if they're the same means that is a palindrome, if not, they're not.
    if (sToCompare == sClean){
        console.log(sToCompare, ' is a palindrome.');
        return true;
    }else{
        console.log(sToCompare, ' is not a palindrome.');
        return false;
    }
};

let s = " ";

isPalindrome(s)
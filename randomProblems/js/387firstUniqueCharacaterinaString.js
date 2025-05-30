// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function(s) {
    let charCount = {};

    //here we map the characters and the times they appear in the string
    for (let i = 0; i < s.length; i++) {
        let currentValue = s[i];
        charCount[currentValue] = (charCount[currentValue] || 0) + 1;
    }

    // here we find the first character that ins't repeated
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

let s = "leetcode";
console.log(firstUniqChar(s));

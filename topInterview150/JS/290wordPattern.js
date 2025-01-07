// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

var wordPattern = function(pattern, s) {
    // first we save the string as an array by the words it contains.
    const sArray = s.split(/\s+/);
    // then we check the lengths of the pattern and the arrray.
    const patternLength = pattern.length;
    const sLength = sArray.length;
    // we start a map where we are gonna save the characters and the words of the array.
    const map = new Map();
    const usedWords = new Set();

    // if the lengths are different, we return false, bc they're not the same
    if (patternLength !== sLength) {
        console.log("false");
        return false;
    }
    // then we loop the length of the array.
    for (let i = 0; i < sLength; i++) {
        const charPattern = pattern.charAt(i);
        const wordS = sArray[i];

        console.log("Run number:", i, " char:", charPattern, " word:", wordS);

        // if the map already has the character
        if (map.has(charPattern)) {
            // Check if the existing mapping matches the current word
            if (map.get(charPattern) !== wordS) {
                console.log("false");
                return false;
            }
        } else {
            // Check if the word is already mapped to another pattern character
            if (usedWords.has(wordS)) {
                console.log("false");
                return false;
            }
            //if the word isn't mapped, we can set the values to the arrays.
            map.set(charPattern, wordS);
            usedWords.add(wordS);
        }
    }

    console.log("map:", map);
    console.log("true");
    return true;
};

const pattern = "abba";
const s = "dog cat cat dog";
wordPattern(pattern, s);

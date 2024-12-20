// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


var canConstruct = function(ransomNote, magazine) {
    // we define our hash map.
    const charCount = {};
    // then we loop the magazine string to save each character and the times it is repeated.
    for (const char of magazine){
        // we get the current character, if it has not been registered, it will be undefined.
        // if the character is undefined, we replace it as 0 and add 1 to it, if it already has a value, we just add 1.
        charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount);
    // then we loop the characters of ransomNote, 
    for (const char of ransomNote){
        // if the character that we are looping isn't in the hash map, or it's value is equal to 0 we return false.
        // because it means that we don't have the character in the magazine array or we used all the characters available.
        if (!charCount[char] || charCount[char] == 0){
            console.log('false')
            return false;
        }
        // if the loop doesn't break the running in the last validation, we discount 1 to the character we are looping in our map.
        charCount[char]--; 
    }
    // if the loop can finish without being break, that means that we can build the word using the characters of magazine. 
    // so we can return true.
    console.log('true');
    return true;
};


let ransomNote = "aa";
let magazine = "aab";

canConstruct(ransomNote, magazine)

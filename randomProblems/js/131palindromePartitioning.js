// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase English letters only.

var partition = function(inputString) {
    const isPalindrome = (substring) => {
        let leftIndex = 0, rightIndex = substring.length - 1;
        while (leftIndex < rightIndex) {
            if (substring[leftIndex++] !== substring[rightIndex--]) {
                return false;
            }
        }
        return true;
    };
    
    const findPartitions = (startIndex, currentPath, allPartitions) => {
        if (startIndex === inputString.length) {
            allPartitions.push([...currentPath]);
            return;
        }
        
        for (let endIndex = startIndex + 1; endIndex <= inputString.length; endIndex++) {
            const substring = inputString.substring(startIndex, endIndex);
            if (isPalindrome(substring)) {
                currentPath.push(substring);
                findPartitions(endIndex, currentPath, allPartitions);
                currentPath.pop();
            }
        }
    };
    
    const allPartitions = [];
    findPartitions(0, [], allPartitions);
    console.log(allPartitions);
    return allPartitions;
};



let s = "aab";

partition(s);
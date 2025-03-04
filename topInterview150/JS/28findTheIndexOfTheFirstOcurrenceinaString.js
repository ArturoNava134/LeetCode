// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

//recursive approach 

var strStr = function(haystack, needle, index1 = 0, index2 = 0) {
    if (index2 == needle.length) return index1 - index2;
    if (index1 == haystack.length) return -1;
    if (haystack[index1] == needle[index2])
        return strStr(haystack, needle, index1 + 1, index2 + 1);
    return strStr(haystack, needle, index1 - index2 + 1, 0);
};

// Ejemplo de uso:
console.log(strStr("hello", "ll"));

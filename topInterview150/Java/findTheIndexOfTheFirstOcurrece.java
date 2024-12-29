// EXERCISE 28 Find the index of the first occurrence in a String.
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

class FindTheIndex {
    public int strStr(String haystack, String needle) {
        // first we parse our haystack to a char array.
        char[] charHayStack = haystack.toCharArray();
        // we initialize the variable currIndex as 0 so we use it as a counter for each char we loop.
        int currIndex = 0;
        // we build a new String where we're gonna save the characters that are being looped.
        String word = "";
        // then we save the length of the String needed
        int lengthOfNeedle = needle.length();
        // strat the for each loop, looping the characters.
        for (char c: charHayStack){
            System.out.println(currIndex);
            // for each character we loop we can add 1 to the currIndex.
            currIndex++;
            // here we add each character to the word String.
            word = word + c;
            // once we add a new character, we validate if the string word contains the word needle.
            if (word.contains(needle)){
                //if it cointains the word we print finded
                System.out.println("finded");
                // and set our result as the curent index - the length of the word.
                int result = currIndex - lengthOfNeedle;
                // then return the result
                return result;
            }
        }
        // if the validation is never true, we return -1 as default.
        return -1;
    }

    public static void main(String[] args){
        FindTheIndex solution = new FindTheIndex();
        String haystack = "sadbutsad";
        String needle = "sad";

        int result = solution.strStr(haystack, needle);

        System.out.println(result);
    }
}
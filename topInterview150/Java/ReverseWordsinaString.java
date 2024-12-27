// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.
 

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

//Exercise number 151

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReverseWordsinaString {

    public String reverseWords(String s) {

        // first we can build an array using just the characters ignoring the white spaces, as we do in the exercise number 58.
        String[] words = s.split("\\s+");
        //then we can convert the array to a list, that is bc we cannot use the reverse() funcion with an array.
        List<String> list = Arrays.asList(words);
        // we reverse the list using the collections lib
        Collections.reverse(list);

        // once we reversed the list, we can convert it back to an array.
        String[] arrayReversedWord = list.toArray(new String[0]);
         // and set the result adding the spaces for each word but at the end we  remove the first and the last space using .trim()
         // .trim removes '' regular spaces, tabs, newlines, etc at the start and the end of the string.
        String result = String.join(" ", arrayReversedWord).trim();
        
        return result;
    }

    public static void main(String[] args){
        ReverseWordsinaString solution = new ReverseWordsinaString();
        String input = "  hello world  ";

        String output = solution.reverseWords(input);

        System.out.println(output);

    }

}

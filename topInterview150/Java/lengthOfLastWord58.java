// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

class LengthOfLastWord {

    public int lengthOfLastWord(String s) {
        // first we use split to divide the string into substrings  
        // \\s+ is a delimiter \\s represents whitespaces, that means that we are not gonna save the white spaces 
        // or line breaks tabs etc, + is used to ingore multiple spaces, etc 
        String[] words = s.split("\\s+");
        // then we save the last string in a variable, using the length-1 that is the final position.
        String lastWordStr = words[words.length-1];
        //then we can save the length of the last word using the length.
        int lastWord = lastWordStr.length();

        return(lastWord); 
        //this can return the last word as a string.
        // String testWord = words[words.length-1];
        
        // return(testWord);        
    }

    public static void main(String[] args) {
        LengthOfLastWord solution = new LengthOfLastWord();
        
        String word = "   fly me   to   the moon  ";
        int result = solution.lengthOfLastWord(word);
        
        System.out.println(result);
    }

}

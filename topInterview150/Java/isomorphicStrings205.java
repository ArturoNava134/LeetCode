// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

import java.util.HashMap;

class Solution {
    public boolean isIsomorphic(String s, String t) {
        // first we initialize a hashMap were we are gonna hash the characters of the first word with the ones of the 
        // seccond word.
        HashMap<Character, Character> hash = new HashMap<>();
        
        // we get the length of both Strings.
        int sLength = s.length();
        int tLength = t.length();
        // then validate if the lengths are differente, we return false, bc we can't map it.
        if(sLength != tLength){
            return false;
        }
        // if the lengths are the same we start looping the first string 
        for (int i = 0; i<sLength; i++){
            //then we define the characters at the current position of the loop.
            Character valueS = s.charAt(i);
            Character valueT = t.charAt(i);
            // first we check if the value S already exist in the hashmap
            if (hash.containsKey(valueS)){
                //if it exist and it's different the valueT we saved in the map for other key, we return false
                if(hash.get(valueS) != valueT){
                    return false;
                }
            //then we can check if the hash do not contains the S value, we check if existe the valueT
            //if the value T exist, we return false, bc we don't have a value s
            }else if (hash.containsValue(valueT)){
                return false;
            // if none of the conditions are true, we put both values into the map.
            }else{
                hash.put(valueS, valueT);
            }
        }

        System.out.println(hash);

        return true;
    }

    public static void main (String[] args){
        Solution solution = new Solution();

        String s = "foo";
        String t = "baa";

        Boolean result = solution.isIsomorphic(s, t);
        System.out.println(result);
    }
}
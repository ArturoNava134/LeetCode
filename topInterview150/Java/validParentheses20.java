// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


import java.util.HashMap;
import java.util.Stack;

// my solution, that is accepted but can't be submited bc in this validation they said it's wrong. "([)]" but they didn't requested the
// parentheses to be in order or smtn like that.

class validParentheses20 {

    // public boolean isValid(String s) {
    //     char[] arr = s.toCharArray();
    //     Map<Character, Integer> countMap = new HashMap<>();

    //     for (int i = 0; i < arr.length; i++){
    //         Character element = arr[i];
    //         countMap.put(element, countMap.getOrDefault(element, 0) + 1);
    //     }
    //     boolean response = false;
    //     char char1, char2, char3, char4, char5, char6;
    //     char1 = '('; char2 = ')'; char3 = '['; char4 = ']'; char5 = '{'; char6 = '}';
        
    //     if (countMap.containsKey(char1) && countMap.containsKey(char2)){
    //         int count1 = countMap.get(char1);
    //         int count2 = countMap.get(char2);

    //         if (count1 == count2){
    //             System.out.println("the () appears the same number of times. " + char1 + " appears " + count1 + " times, and " + char2 + " appears " + count2 + " times." );
    //             response = true;
    //         }else {
    //             System.out.println("the () doesn't appears the same number of times. " + char1 + " appears " + count1 + " times, and " + char2 + " appears " + count2 + " times." );
    //             response = false;
    //         }
    //     }
    //     if (countMap.containsKey(char3) && countMap.containsKey(char4)){
    //         int count3 = countMap.get(char3);
    //         int count4 = countMap.get(char4);

    //         if (count3 == count4){
    //             System.out.println("the () appears the same number of times. " + char3 + " appears " + count3 + " times, and " + char4 + " appears " + count4 + " times." );
    //             response = true;
    //         }else {
    //             System.out.println("the () doesn't appears the same number of times. " + char3 + " appears " + count3 + " times, and " + char4 + " appears " + count4 + " times." );
    //             response = false;
    //         }
    //     }
    //     if (countMap.containsKey(char5) && countMap.containsKey(char6)){
    //         int count5 = countMap.get(char5);
    //         int count6 = countMap.get(char6);

    //         if (count5 == count6){
    //             System.out.println("the () appears the same number of times. " + char5 + " appears " + count5 + " times, and " + char6 + " appears " + count6 + " times." );
    //             response = true;
    //         }else {
    //             System.out.println("the () doesn't appears the same number of times. " + char5 + " appears " + count5 + " times, and " + char6 + " appears " + count6 + " times." );
    //             response = false;
    //         }
    //     }
    //     System.out.println(countMap);
    //     return response;
    // }

    //this solution works and can be submitted.

    public boolean isValid(String input) {
    // Create a map to match opening and closing brackets
    HashMap<Character, Character> pairMap = new HashMap<>();
    pairMap.put('(', ')');
    pairMap.put('[', ']');
    pairMap.put('{', '}');

    // Stack to keep track of opening brackets
    Stack<Character> charStack = new Stack<>();

    // Loop through each character in the string
    for (int idx = 0; idx < input.length(); idx++) {
        char currentChar = input.charAt(idx);

        // If it's an opening bracket, push it to the stack
        if (currentChar == '(' || currentChar == '{' || currentChar == '[') {
            charStack.push(currentChar);
        } else {
            // If the stack is empty, there's no matching opening bracket
            if (charStack.isEmpty()) {
                return false;
            }

            // Check if the closing bracket matches the top of the stack
            if (pairMap.get(charStack.pop()).equals(currentChar)) {
                continue;
            } else {
                return false;
            }
        }
    }
    // If the stack is empty, all brackets are matched
    return charStack.isEmpty();
    }


    public static void main(String[] args){
        validParentheses20 solution = new validParentheses20();
        String input = "(]";
        Boolean result = solution.isValid(input);
        System.out.println(result);

    }
}


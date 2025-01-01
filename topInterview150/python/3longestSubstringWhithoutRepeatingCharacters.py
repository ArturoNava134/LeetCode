# Given a string s, find the length of the longest substring without repeating characters.

 

# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

# Constraints:

# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

#This solution runs but it can't be submited due a error where this string should return 3? "dvdf" when it repeats a value so the 
#response should be 2 but 
class Solution(object):
    def lengthOfLongestSubstring(s):
        if (s == ""):
            return 0
        #first we create our variables needed, substrings where we are gonna save the length of the substrings
        substrings = []
        # arr is gonna be used to save the letters while they don't repeat.
        arr = []
        length = len(s)
        # we start a loop that is gonna go through the complete string.
        for i in range(length):
            #here we print each position in the string.
            print("position: ", i)
            # here we assign the value of the position we are in.
            val = s[i]
            print("value", val)
            # here we check if the val we are looping is not in the array.
            if (val not in arr):
                #if the array is not in the array, we push it to the array.
                arr.append(val)
                print("value pushed")
            else:
                #if the value already exist in the array, we push the length of the array to the substrings array.
                substrings.append(len(arr))
                # and here we clean the array to start with a new count.
                arr = []
                # then we push the value to the array anyway so we don't loose the current char that we are looping.
                arr.append(val)
        
        print("array: ", arr)
        # this last check is at the end of the array, bc if the last two letter were for example bb we have a value in the array
        # but we never pushed it to the substrings, so we push the array if it has something at the end.
        if (len(arr) != 0):
            substrings.append(len(arr))

        print("substrings: ", substrings)
        maxValue = max(substrings)
        print("the max value is: ", maxValue)
        return maxValue

    s = ""
    lengthOfLongestSubstring(s)


    # this is a accepted solution.

class Solution:
    # This solution finds the length of the longest substring without repeating characters.
    # We use a sliding window approach with the help of a dictionary (`usedChar`) to track the last occurrence of each character.
    # `start` keeps track of the starting index of the current window, and `maxLength` stores the maximum length of substrings found.

    def lengthOfLongestSubstring(self, s):
        start = maxLength = 0  # Initialize the starting index and the max length of the substring.
        usedChar = {}  # Dictionary to store the index of characters that have been encountered.

        # We loop through each character in the string by its index `i`.
        for i in range(len(s)):
            # If the current character is already in `usedChar` and is inside the current window,
            # we move the `start` pointer to one position after its previous occurrence to ensure the substring is unique.
            if s[i] in usedChar and start <= usedChar[s[i]]:
                start = usedChar[s[i]] + 1
            else:
                # If no duplicate is found, calculate the length of the current substring
                # and update `maxLength` if it's larger than the current max length.
                maxLength = max(maxLength, i - start + 1)

            # Update the last occurrence of the current character.
            usedChar[s[i]] = i

        # Return the maximum length of the substring without repeating characters.
        return maxLength


# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

# Example 1:

# Input: s = "abc", t = "ahbgdc"
# Output: true
# Example 2:

# Input: s = "axc", t = "ahbgdc"
# Output: false
 

# Constraints:

# 0 <= s.length <= 100
# 0 <= t.length <= 104
# s and t consist only of lowercase English letters.
 

class Solution(object):
    def isSubsequence(s, t):
        # we define the value to check as 0 to compare the first position of S.
        valToCheck = 0
        # convert s and t to arrays.
        arrS = list(s)
        arrT = list(t)
        # save in a variable the length of the array S.
        lengthS = len(arrS)
        # before start, we check if the array is empty, if it is, we return true.
        if (lengthS == 0):
            print('true')
            return True
        # if the array isn't empty, we can start looping the arrT.
        for i in arrT:
            #print the values to compare, so we can see how the code's running.
            print('current value:', i)
            print('value to check: ', arrS[valToCheck])
            # we assign the val variable as the position 0 of the arrS
            val = arrS[valToCheck]
            # then we can compare, if the current value of the loop is equal to the first value of S, we move 1 position in S to 
            # compare the next value. if the current value isn't equal, the loop continue with the next vale of T.
            if (i == val):
                valToCheck += 1
            #if valToCheck is equal to the length of S it means that we finded all the values in the array, so we return true.
            if (valToCheck == lengthS):
                print('Completed')
                return True
        #if the loop ends that means that we didn't find all the values, so we return false.
        print('false')
        return False

    s = ""
    t = "ahbgdc"
    isSubsequence(s, t)
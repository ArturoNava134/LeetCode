# A self-dividing number is a number that is divisible by every digit it contains.

# For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
# A self-dividing number is not allowed to contain the digit zero.

# Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

 

# Example 1:

# Input: left = 1, right = 22
# Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
# Example 2:

# Input: left = 47, right = 85
# Output: [48,55,66,77]
 

# Constraints:

# 1 <= left <= right <= 104


#solution:

class Solution(object):

    def selfDividingNumbers(left, right):
        
        def isSelfDivisible(n):
            for digit in str(n):
                digit = int(digit)
                if digit == 0 or n % digit != 0:
                    return False
            return True

        res = []
        while(left<=right):
            print(left)
            if (isSelfDivisible(left)):
                res.append(left)
            left += 1
        print(res)
        return res

    left = 47
    right = 85

    selfDividingNumbers(left, right)
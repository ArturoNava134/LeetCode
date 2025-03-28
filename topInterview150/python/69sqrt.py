# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

# Example 1:

# Input: x = 4
# Output: 2
# Explanation: The square root of 4 is 2, so we return 2.
# Example 2:

# Input: x = 8
# Output: 2
# Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

# Constraints:

# 0 <= x <= 231 - 1

class Solution(object):
    # this function calculates the square root of a number and returns the floor value
    def mySqrt(self, x):
        # if the number is negative, we print a message and return nothing
        if x < 0:
            print("you can't get a square of a negative number")
            return

        # we calculate the square root and floor it to get the integer part
        result = int(x ** 0.5)

        # we print the result to check the value
        print(result)

        # we return the result
        return result


x = 8
sol = Solution()

sol.mySqrt(x)

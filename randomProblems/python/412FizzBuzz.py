# Given an integer n, return a string array answer (1-indexed) where:

# answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
# answer[i] == "Fizz" if i is divisible by 3.
# answer[i] == "Buzz" if i is divisible by 5.
# answer[i] == i (as a string) if none of the above conditions are true.
 

# Example 1:

# Input: n = 3
# Output: ["1","2","Fizz"]
# Example 2:

# Input: n = 5
# Output: ["1","2","Fizz","4","Buzz"]
# Example 3:

# Input: n = 15
# Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

# Constraints:

# 1 <= n <= 104

class Solution(object):
    def fizzBuzz(n):
        i = 0
        res = []
        while (i < n):
            i += 1
            fiveAndThree = "FizzBuzz"
            five = "Buzz"
            three = "Fizz"
            currStrNumber = str(i)
            if (i % 5 == 0 and i % 3 == 0):
                print(fiveAndThree)
                res.append(fiveAndThree)
            elif (i % 5 == 0):
                print(five)
                res.append(five)
            elif (i % 3 == 0):
                print(three)
                res.append(three)
            else:
                print(currStrNumber)
                res.append(currStrNumber)
        print(res)
        return res
    
    n = 15
    fizzBuzz(n)
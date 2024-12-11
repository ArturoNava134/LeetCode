# simple solution using max function

class Solution(object):
    def majorityElement(nums):
        # This type of variable allows us to save two values, in this case we are gonna save the value of the array
        # and the times that it appears.
        counter = {}
        #we are using i to know the position we are looping through in the array.
        for i in nums:
            # for each position we are saving the value if it doesn't exist, as 0 but if exist, we add 1 to it.
            counter[i] = counter.get(i, 0) + 1
        
        # then we assign n as the maximun value in counter determinated by its frequency.
        n = max(counter, key=counter.get)
    
        # then we can print the n value which is the number that appears the most
        print(n)
        # we can also print the times that the number appears using the next line
        print(counter[n])
        # the next line prints the complete map of numbers that we are saving, all the numbers with its frequencies
        print(counter)

    nums = [2,2,1,1,1,2,2]
    majorityElement(nums)
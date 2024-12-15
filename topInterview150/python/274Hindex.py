# Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

# According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

# Example 1:

# Input: citations = [3,0,6,1,5]
# Output: 3
# Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
# Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
# Example 2:

# Input: citations = [1,3,1]
# Output: 1
 

# Constraints:

# n == citations.length
# 1 <= n <= 5000
# 0 <= citations[i] <= 1000


class Solution(object):
    def hIndex(citations):
        # first we sort the array so we can handle it in order
        citations.sort()
        # then we reverse it to compare first the max values.
        citations.reverse()
        # h is gonna be the response of citations > 3
        h = 0
        # n represents the length 
        n = len(citations)
        # we validate if n is minor or equal to 1, if it is, we set the res variable as the first number into the array
        if (n <= 1):
            res = citations[0]
            # we check if res is higher than 3
            if(res >= 3):
                # if it is, set h as 1 and return it
                h = 1
                return h
            #if it is not, 
            else:
                #return res as the first number in the array.
                print(res)
                return res
        # we loop the length
        for i in range(n):
            # we validate if the current number is greater than the position + 1, if it is, we add the position+1 to h
            if citations[i] >= i+1:
                print('i: ', i)
                h = i+1
                print ('h:', h)
        print(h)
        return h
        
    citations = [3,0,6,1,5]
    hIndex(citations)
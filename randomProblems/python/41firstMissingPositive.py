class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        s=set(nums)
        if 1 not in s:
            return 1
        smallest=max(s)+1
        for i in s:
            if (i-1) not in s:
                current=i
                while((current+1) in s):
                    current=current+1
                if current+1>0:
                    smallest=min(smallest,current+1)
        return smallest

            
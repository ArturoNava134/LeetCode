from typing import List

class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        res = []

        if len(s) > 12:
            return res
        
        def backtrack(i, dots, curIP):
            if dots == 4 and i == len(s):
                res.append(curIP[:-1]) # Remove the last dot
                return
            if dots > 4:
                return 
            
            for j in range(i, min(i + 3, len(s))):
                # The segment to check is s[i:j+1]
                # It must be less than or equal to 255
                # And it cannot have a leading zero unless it is just "0"
                if int(s[i:j+1]) <= 255 and (i == j or s[i] != "0"):
                    backtrack(j + 1, dots + 1, curIP + s[i:j+1] + ".")
        
        backtrack(0, 0, "")
        return res
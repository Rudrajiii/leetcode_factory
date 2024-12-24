from typing import *
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        r = []
        for i in range(0 , len(s) , k):
            if len(s[i:i+k]) != k:
                l = k - len(s[i:i+k])
                c = s[i:i+k]
                for _ in range(l):
                    c += fill
                r.append(c)
            else:
                r.append(s[i:i+k])
        return r

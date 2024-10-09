from typing import *
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        res = list()
        dict = Counter(s1.split(' ') + s2.split(' '))
        for i in dict:
            if dict[i] == 1:
                res.append(i)
        return res
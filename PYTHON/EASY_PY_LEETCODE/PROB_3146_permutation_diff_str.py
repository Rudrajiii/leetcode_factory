from typing import *
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        abs_diff = 0
        for i in s:
            abs_diff += abs(s.index(i) - t.index(i))
        return abs_diff

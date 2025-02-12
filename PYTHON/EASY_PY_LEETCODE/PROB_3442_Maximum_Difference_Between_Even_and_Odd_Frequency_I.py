from typing import *
class Solution:
    def maxDifference(self, s: str) -> int:
        freq_map = Counter(s)
        max_odd = float('-inf')
        min_odd = float('inf')
        for i in freq_map:
            if freq_map[i] % 2 == 0:
                min_odd = min(min_odd , freq_map[i])
            if freq_map[i] % 2 == 1:
                max_odd = max(max_odd , freq_map[i])
        return max_odd - min_odd

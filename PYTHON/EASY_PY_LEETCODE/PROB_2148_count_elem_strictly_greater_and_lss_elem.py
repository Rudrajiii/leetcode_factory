from typing import *
class Solution:
    def countElements(self, nums: List[int]) -> int:
        # 15 11 7 2
        # 90 3 3 -3
        x = sorted(nums, reverse=True)
        r = 0
        for i in range(1 , len(x) - 1):
            left_window = x[:i]
            right_window = x[i+1:]
            if any(z > x[i] or z < x[i] for z in left_window):
                if any(a > x[i] or a < x[i] for a in right_window):
                    r += 1
        return r
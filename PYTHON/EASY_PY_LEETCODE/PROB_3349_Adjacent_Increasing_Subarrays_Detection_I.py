from typing import *
class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        """
        b = a + k
        2<5
        5 = 2 + 3
        """
        def is_inc(_list_):
            boolean = True
            for i in range(len(_list_) - 1):
                if _list_[i] >= _list_[i+1]:
                    boolean = False
                    break
            return boolean

        for i in range(len(nums) - 1):
            left_window = nums[i:i+k]
            right_window = nums[i+k : i+2*k]
            if len(left_window) == k and len(right_window) == k:
                if is_inc(left_window) and is_inc(right_window):
                    return True
        return False
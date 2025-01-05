from typing import *
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        is_size_ok = True
        i = 0
        count = 0
        while is_size_ok:
            sub_arr = nums[i : i + 3]
            if len(sub_arr) == 3:
                if sub_arr[0] + sub_arr[2] == sub_arr[1] / 2:
                    count += 1
            else:
                is_size_ok = False
            i += 1
        return count

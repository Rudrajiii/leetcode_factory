from typing import *
class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        c = 0
        for i in range(len(nums)-1):
            l = nums[:i+1]
            r = nums[i+1:]
            if (sum(l) - sum(r)) % 2 == 0:
                c += 1
        return c
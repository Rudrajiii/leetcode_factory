from typing import *
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        res = nums.copy()
        for i in range(len(nums)):
            preffix = nums[0:i+1]
            suffix = nums[i+1:]
            res[i] = len(set(preffix)) - len(set(suffix))
        return res

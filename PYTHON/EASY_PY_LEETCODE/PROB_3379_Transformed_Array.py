from typing import *
class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        """[1 1 1 3]
        [3 -2 1 1]"""
        result = [0] * len(nums)
        for i in range(len(nums)):
            if nums[i] > 0:
                result[i] = nums[(i + nums[i]) % len(nums)]
            if nums[i] < 0:
                result[i] = nums[abs((abs(nums[i]) - i) % (-1 * len(nums)))]
            if nums[i] == 0:
                result[i] = nums[i]
        return result
from typing import *
class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        maxi = float('-inf')
        for i in range(len(nums)):
            maxi = max(maxi , abs(nums[i % len(nums)] - nums[(i+1) % len(nums)]))
        return maxi
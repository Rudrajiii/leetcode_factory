from typing import *
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        if nums[0] + nums[1] <= nums[2] or nums[0] + nums[2] <= nums[1] or nums[1] + nums[2] <= nums[0] :
            return "none"
        if len(set(nums)) == 1:
            return "equilateral"
        if len(set(nums)) == 2:
            return "isosceles"
        if len(set(nums)) == 3:
            return "scalene"
from typing import *
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        xor1 = 0
        xor2 = 0
        for i in range(len(nums)):
            xor1 ^= i
            xor2 ^= nums[i]
        xor1 ^= len(nums)
        return xor1 ^ xor2
from typing import *
class Solution:
    def minMaxGame(self, nums: List[int]) -> int:
        while len(nums) != 1:
            c = 0
            r = []
            for i in range(0 , len(nums) , 2):
                if c % 2 == 0:
                    r.append(min(nums[i] , nums[i+1]))
                    c += 1
                else:
                    r.append(max(nums[i] , nums[i+1]))
                    c += 1
            nums = r
        return nums[0]

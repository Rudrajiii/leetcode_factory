from typing import *
class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target_array = [None] * len(nums)
        for i in range(len(nums)):
            if target_array[index[i]] == None:
                target_array[index[i]] = nums[i]
            else:
                for k in range(len(nums) - 1 , index[i] , -1):
                    target_array[k] = target_array[k-1]
                target_array[index[i]] = nums[i]
        return target_array
    
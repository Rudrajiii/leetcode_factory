from typing import *
class Solution:
    def alternatingSubarray(self, nums: List[int]) -> int:
        def f(arr):
            for i in range(1, len(arr)):
                if arr[i] - arr[i - 1] != ((i % 2) * 2 - 1):
                    return False
            return True

        l = []
        for i in range(len(nums)):
            for j in range(i+1,len(nums) + 1):
                if j - i > 1:  
                    l.append(nums[i:j])
        maxi = float('-inf')
        for i in l:
            if f(i):
                maxi = max(maxi , len(i))
        return maxi if maxi != float('-inf') else -1

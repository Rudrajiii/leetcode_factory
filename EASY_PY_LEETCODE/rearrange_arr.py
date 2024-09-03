from typing import *
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        p_arr = []
        n_arr = []
        res = [0] * len(nums)
        for i in nums:
            if i > 0 :
                p_arr.append(i)
            else:
                n_arr.append(i)
        j = 0        
        for i in range(0 , len(nums) , 2):
            res[i] = p_arr[j]
            res[i+1] = n_arr[j]
            j += 1
            
        return res
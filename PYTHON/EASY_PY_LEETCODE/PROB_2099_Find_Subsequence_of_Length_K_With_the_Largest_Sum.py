from typing import *
class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        indexed_nums = list(enumerate(nums))  
        indexed_nums.sort(key=lambda x: x[1], reverse=True)  
        top_k_elements = sorted(indexed_nums[:k], key=lambda x: x[0]) 
        return [x[1] for x in top_k_elements]
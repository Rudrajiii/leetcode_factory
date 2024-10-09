from typing import *
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        """
        
        2 -> 010
        5 -> 101
        111
        6 -> 110
        001 = 1
        
        
        """
        def subsets(s):  
            if len(s) == 0:  
                return [[]]  
            x = subsets(s[:-1])  
            return x + [[s[-1]] + y for y in x]  
        calculated_xor = 0
        iterable = subsets(nums)
        for i in range(len(iterable)):
            if iterable[i] == []:
                calculated_xor += 0
            else:
                xor = 0
                for j in iterable[i]:
                        xor ^= j
                calculated_xor += xor
        return calculated_xor
from typing import *
class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        # From Euclid's Algorithm
        def gcd(x, y):
            while y != 0:
                x, y = y, x % y
            return x
        total_beautiful_pairs = 0
        for i in range(len(nums)):
            for j in range(1 , len(nums)):
                if i < j:
                    re_factor_i = int(str(nums[i])[0])
                    re_factor_j = int(str(nums[j])[-1])
                    if gcd(re_factor_i , re_factor_j) == 1:
                        total_beautiful_pairs += 1
        return total_beautiful_pairs

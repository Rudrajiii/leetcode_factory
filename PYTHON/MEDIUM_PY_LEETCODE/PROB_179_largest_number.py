from functools import cmp_to_key
from typing import *
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        def compare(a, b):
            if a + b > b + a:
                return -1  
            else:
                return 1
        nums_str = list(map(str, nums))
        sorted_nums = sorted(nums_str, key=cmp_to_key(compare))
        largest_num = ''.join(sorted_nums)
        return largest_num if largest_num[0] != '0' else '0'


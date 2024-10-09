from typing import *
from collections import *
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        xor_arr = []
        freq = Counter(nums)
        for i in freq:
            if freq[i] > 1:
                xor_arr.append(i)
        if len(xor_arr) == 0:
            return 0
        elif len(xor_arr) == 1:
            return xor_arr[0]
        else:
            ans = 0
            for i in xor_arr:
                ans ^= i
            return ans
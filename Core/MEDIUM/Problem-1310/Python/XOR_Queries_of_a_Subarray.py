from typing import *
class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        prefixXOR = [0] * (len(arr) + 1)
        for i in range(1, len(arr) + 1):
            prefixXOR[i] = prefixXOR[i - 1] ^ arr[i - 1]
        res = []

        for l, r in queries:
            res.append(prefixXOR[r + 1] ^ prefixXOR[l])
        
        return res
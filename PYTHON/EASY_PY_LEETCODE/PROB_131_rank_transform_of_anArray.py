from typing import *
class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        #brute force
        # [5, 9, 12, 12, 28, 37, 56, 80, 100]
        # {5 : 1 , 9 : 2 , 12 : 3 ....}
        a = sorted(arr) #O(nlogn)
        hashed_map = {} #O(n)
        c = 0
        for i in range(len(a)): #O(n)
            c += 1
            if a[i] not in hashed_map:
                hashed_map[a[i]] = c
            else:
                c -= 1 
        for i in range(len(arr)): # O(n)
            arr[i] = hashed_map[arr[i]]
        return arr

from typing import *
class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        rev = sorted(arr , reverse=True)
        i = 0
        j = len(arr) - 1
        b = False
        while i < j:
            if i != j :
                if rev[i] == 2 * rev[j] or rev[j] == 2 * rev[i]:
                    b = True
                    break
                else:
                    j -= 1
                    if j <= i:
                        j = len(arr) - 1
                        i += 1
        return b
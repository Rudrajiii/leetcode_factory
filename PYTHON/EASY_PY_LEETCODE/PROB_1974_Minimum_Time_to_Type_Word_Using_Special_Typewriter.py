from typing import *
class Solution:
    def minTimeToType(self, word: str) -> int:
        alphas = "abcdefghijklmnopqrstuvwxyz"
        cidx = alphas.index('a') #0
        printed_count = 0
        """
        1. word[i] - cidx # (1 - 0) == 1 , (25 - 1) = 24
        2. cidx - word[i] # (0 - 1) == -1 + 26 = 25 , (1 - 25) + 26 = 2
        """
        for i in range(1 , len(word)):
            a1 = alphas.index(word[i]) - alphas.index(word[i-1])
            a2 = alphas.index(word[i-1]) - alphas.index(word[i])
            if a1 < 0:a1 += 26
            if a2 < 0:a2 += 26
            printed_count += (min(a1 , a2) + 1)
        final1 = alphas.index(word[0]) - cidx
        final2 = cidx - alphas.index(word[0])
        if final1 < 0:final1 += 26
        if final2 < 0:final2 += 26
        return printed_count + final1 + 1 if final1 < final2 else printed_count + final2 + 1
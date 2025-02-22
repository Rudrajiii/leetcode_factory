from typing import *
class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        c_s = s
        s = list(s)
        i , j = 0 , len(s) - 1
        while i < j:
            print(s[i],s[j])
            if s[i] < s[j]:
                s[j] = s[i]
            elif s[j] < s[i]:
                s[i] = s[j]
            else:
                i += 1
                j -= 1
        return "".join(s)



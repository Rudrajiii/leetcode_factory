from typing import *
class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        a = sentence.split(' ')
        v = 'aeiouAEIOU'
        for i in range(len(a)):
            if a[i][0] in v:
                a[i] = a[i] + 'ma'
            else:
                fl = a[i][:1]
                rs = a[i][1:] + fl + 'ma'
                a[i] = rs
            a[i] += (i+1) * 'a'
        return " ".join(a)

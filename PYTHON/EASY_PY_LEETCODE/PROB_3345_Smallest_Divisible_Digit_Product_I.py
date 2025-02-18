from typing import *
class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        def muldig(n):
            mul = 1
            n = str(n)
            for i in n:
                mul *= int(i)
            return mul
        while True:
            get_mul = muldig(n)
            if get_mul % t == 0:
                return n
            else:
                n += 1

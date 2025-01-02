from typing import *
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        def per(p):
            return 2 ** (p - 1) * ((2 ** p) - 1)
        if num <= 1:
            return False
        for i in [2, 3, 5, 7, 13, 17, 19, 31]:
            if per(i) == num:
                return True
        return False

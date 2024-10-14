from typing import *
class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        """
        min(9 , 8 , 7)
        min(8 , 7 , 9)
        min(7 , 9 , 8)        
        
        """
        get_max = max(num1 , num2 , num3)
        l = len(str(get_max))
        x = str(num1).zfill(l)
        y = str(num2).zfill(l)
        z = str(num3).zfill(l)
        r = ''
        for i in range(len(str(x))):
            get_min = min(str(x)[i] , str(y)[i] , str(z)[i])
            r += str(get_min)
        return int(r)


from typing import *
class Solution:
    def hasMatch(self, s: str, p: str) -> bool:
        x = p.split("*")        
        if len(x) == 2:
            if x[1] == '':
                if x[0] in s:
                    return True
            else:
                a = s.find(x[0])
                b = s.find(x[1], a + len(x[0]))
                if a != -1 and b != -1:
                    return True
        return False
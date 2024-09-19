from typing import *
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        add = int(a , 2) + int(b , 2)
        return bin(add)[2:]
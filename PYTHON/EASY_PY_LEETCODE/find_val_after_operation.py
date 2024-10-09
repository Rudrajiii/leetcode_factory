from typing import *
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        x = 0
        for oper in operations:
            if oper in ["X++","++X"]:
                x += 1
            else:
                x -= 1
        return x
from typing import *
class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        addNum = 0
        finalForm = []
        for i in range(len(num)):
            actualDigit = num[i] * (10 ** (len(num) - 1 - i))
            addNum += actualDigit
        total = addNum + k

        while total > 0:
            ld = total % 10
            finalForm.insert(0, ld)
            total = total // 10
        return finalForm

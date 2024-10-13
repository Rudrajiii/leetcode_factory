class Solution:
    def alternateDigitSum(self, n: int) -> int:
        mk_str = str(n)
        total = 0
        for i in range(len(mk_str)):
            if i % 2 == 0:
                total += int(mk_str[i])
            else:
                total -= int(mk_str[i])
        return total
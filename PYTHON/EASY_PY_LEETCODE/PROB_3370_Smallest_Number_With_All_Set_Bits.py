class Solution:
    def smallestNumber(self, n: int) -> int:
        return int(bin(n)[2:].replace('0','1') , 2)
class Solution:
    def convertDateToBinary(self, date: str) -> str:
        ar = date.split('-')
        for i in range(len(ar)):
            ar[i] = bin(int(ar[i]))[2:]
        return '-'.join(ar)
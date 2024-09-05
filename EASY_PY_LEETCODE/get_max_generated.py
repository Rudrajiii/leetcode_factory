class Solution(object):
    def getMaximumGenerated(self, n):
        if n == 0 : return 0
        res = [0 , 1]
        for i in range(2 , n + 1):
            if i % 2 == 0:
                ev = i // 2
                res.append(res[ev])
            if i % 2 == 1:
                ev = i - 1 # 2
                res.append(res[ev - i // 2] + res[i - ev + i // 2])
        return max(res)
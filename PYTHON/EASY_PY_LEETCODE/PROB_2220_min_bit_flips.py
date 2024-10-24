class Solution(object):
    def minBitFlips(self, start, goal):
        b1 = bin(start)[2:]
        b2 = bin(goal)[2:]

        max_length = max(len(b1), len(b2))
        p1 = b1.zfill(max_length)
        p2 = b2.zfill(max_length)
        c = 0
        for i in range(len(p1)):
            if p1[i] != p2[i]:
                c += 1
        return c

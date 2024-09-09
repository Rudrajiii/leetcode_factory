class Solution(object):
    def isFascinating(self, n):
        two_mul = 2 * n
        three_mul = 3 * n
        concat = str(two_mul) + str(three_mul) + str(n)
        if len(concat) != 9:
            return False
        nums = '123456789'
        s = set()
        for i in concat:
            if i in nums:
                s.add(i)
        return len(s) == 9
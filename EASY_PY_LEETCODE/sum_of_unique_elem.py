from collections import Counter
class Solution(object):
    def sumOfUnique(self, nums):
        num_freq = Counter(nums)
        sum = 0
        for i in num_freq:
            if num_freq[i] == 1:
                sum += i
        return sum
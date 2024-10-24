class Solution(object):
    def maximumCount(self, nums):
        p_count , n_count = 0 , 0
        for num in nums:
            if num != 0 and num > 0:
                p_count += 1
            elif num != 0 and num < 0:
                n_count += 1
        return max(p_count , n_count)
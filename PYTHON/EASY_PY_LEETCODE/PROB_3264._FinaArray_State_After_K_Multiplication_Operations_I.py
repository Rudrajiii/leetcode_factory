class Solution(object):
    def getFinalState(self, nums, k, multiplier):
        while k != 0:
            min_num = min(nums)
            idx = nums.index(min_num)
            nums[idx] = min_num * multiplier
            k -= 1
        return nums
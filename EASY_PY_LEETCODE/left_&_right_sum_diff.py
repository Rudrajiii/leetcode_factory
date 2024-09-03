class Solution(object):
    def leftRightDifference(self, nums):
        right_sum = [0] * len(nums)
        left_sum = [0] * len(nums)
        
        for i in range(1 , len(nums)):
            total1 = sum(nums[i:])
            right_sum[i-1] = total1
            total2 = sum(nums[:i])
            left_sum[i] = total2 

        res = [0] * len(nums)
        for i in range(len(nums)):
            res[i] = abs(left_sum[i] - right_sum[i])
        return res
    
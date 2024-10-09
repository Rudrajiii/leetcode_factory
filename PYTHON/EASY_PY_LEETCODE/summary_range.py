class Solution(object):
    def summaryRanges(self, nums):
        res = list()
        k = 0
        for i in range(len(nums)):
            p = nums[i]
            j = p + 1
            if j not in nums:
                if nums[k] != j - 1:
                    res.append(str(nums[k]) + '->' + str(j - 1))
                    k = i + 1
                else:
                    res.append(str(nums[k]))
                    k = i + 1
        return res

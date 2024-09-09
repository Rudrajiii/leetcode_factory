class Solution(object):
    def kLengthApart(self, nums, k):
        if 1 not in nums: return True
        """
        Brute Force 
        T- O(N) || S-O(N)

        """
        j = nums.index(1)
        res = []
        for l in range(len(nums)):
            if nums[l] != 1:
                j += 1
            else:
                res.append(j)
                j = 0
        boolean = True
        for i in res[1:]:
            if i < k:
                boolean = False
                break
        return boolean
        """
        Optimal Solution
        T-O(N) || S-O(1)

        """
        # i = nums.index(1)
        # bool = True
        # for l in range(i+1 , len(nums)):
        #     if nums[l] == 1:
        #         a = l - i - 1 
        #         i = l
        #         if a < k:
        #             return False
        # return bool

        
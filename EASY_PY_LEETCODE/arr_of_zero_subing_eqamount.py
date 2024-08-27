class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        """
         nums - [ 1 5 0 3 5]
         smallest non zero element = 1
         subtract 1 from each element in nums
         1) 0 4 0 2 4
         nums - [0 4 0 2 4]
         smallest non zero element = 2
         subtract 2 from each element in nums
         2) 0 2 0 0 2
         smallest non zero element = 2
         subtract 2 from each element in nums
         3) 0 0 0 0 0
       """

        #Brute Force
         total_oper = 0
         while [0] * len(nums) != nums:
             sort_nums = sorted(nums)
             for i in sort_nums:
                 if i != 0:
                     smallest_non_zero_elem = i
                     break
             for i in range(len(nums)):
                 if nums[i] != 0:
                     nums[i] = nums[i] - smallest_non_zero_elem
             total_oper += 1
         return total_oper
        #Optimal
        hashing_set = set()
        for i in nums:
            if i != 0:
                hashing_set.add(i)
        return len(hashing_set)

class Solution(object):
    def twoOutOfThree(self, nums1, nums2, nums3):
        # {
        #     1:[nums1],
        #     3:[nums1 , nums2 , nums3],
        #     2:[nums1 , nums2]
        # }
        res = {}
        output = []
        for i in nums1:
            if i not in res:
                res[i] = []
            res[i].append('nums1')
        for i in nums2:
            if i not in res:
                res[i] = []
            res[i].append('nums2')
        for i in nums3:
            if i not in res:
                res[i] = []
            res[i].append('nums3')
        for i in res:
            if len(set(res[i])) >= 2:
                output.append(i)
        return output
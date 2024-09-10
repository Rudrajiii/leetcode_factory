from collections import Counter
class Solution(object):
    def findLucky(self, arr):
        freq_map = Counter(arr)
        max_lucky = -1
        for i in freq_map:
            if i == freq_map[i]:
                max_lucky = max(max_lucky , int(i)) 
        return max_lucky
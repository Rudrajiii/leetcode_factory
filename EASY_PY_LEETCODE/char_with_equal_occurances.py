from collections import Counter
class Solution(object):
    def areOccurrencesEqual(self, s):
        freq = Counter(s)
        unique_set = set()
        for i in freq:
            unique_set.add(freq[i])
        return len(unique_set) == 1
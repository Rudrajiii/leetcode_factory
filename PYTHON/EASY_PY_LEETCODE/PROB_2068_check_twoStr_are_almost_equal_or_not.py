from collections import *
class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        freq_word1 = Counter(word1)
        freq_word2 = Counter(word2)

        is_almost_equal = True
        for i in freq_word1:
            if abs(freq_word1[i] - freq_word2[i]) > 3:
                is_almost_equal = False
                break
        for i in freq_word2:
            if abs(freq_word2[i] - freq_word1[i]) > 3:
                is_almost_equal = False
                break
        return is_almost_equal

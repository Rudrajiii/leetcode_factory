from typing import *
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        res = []
        k = 0
        for i in range(len(matrix[0])):
            sub_arr = []
            for j in range(len(matrix)):
                sub_arr.append(matrix[j][k])
            k += 1
            res.append(sub_arr)
        return res
from typing import *
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        fx , rx = [] , []
        for j in range(len(matrix[0])):
            b = []
            for k in range(len(matrix)):
                b.append(matrix[k][j])
            fx.append(b)
        for l in fx:
            for v in range(len(l)):
                if l[v] == -1:
                    l[v] = max(l)
        for m in range(len(fx[0])):
            r = []
            for n in range(len(fx)):
                r.append(fx[n][m])
            rx.append(r)
        return rx
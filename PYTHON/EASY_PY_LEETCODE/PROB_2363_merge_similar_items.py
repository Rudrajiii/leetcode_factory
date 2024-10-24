from typing import *
class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        tree1 = {}
        tree2 = {}
        for i in range(len(items1)):
            tree1[items1[i][0]] = items1[i][1]
        for i in range(len(items2)):
            tree2[items2[i][0]] = items2[i][1]
        print(tree1)
        print(tree2)

        len1 , len2 = len(tree1) , len(tree2)
        res = []
        if len1 < len2:
            for i in tree1:
                if i in tree2:
                    tree2[i] += tree1[i]
            for i in tree1:
                if i not in tree2:
                    tree2[i] = tree1[i]
            tree2 = dict(sorted(tree2.items()))
            for i in tree2:
                res.append([i , tree2[i]])            
            
        else:
            for i in tree2:
                if i in tree1:
                    tree1[i] += tree2[i]
            for i in tree2:
                if i not in tree1:
                    tree1[i] = tree2[i]
            tree1 = dict(sorted(tree1.items()))
            for i in tree1:
                res.append([i , tree1[i]])
        return res
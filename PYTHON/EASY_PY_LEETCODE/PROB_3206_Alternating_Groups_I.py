from typing import *
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        reg = ""
        c = 0
        def logic(st):
            return True if st == "010" or st == "101" else False
        for i in range(len(colors)):
            for j in range(i , i + 3):
                if j >= len(colors):
                    reg += str(colors[j%len(colors)])
                else:
                    reg += str(colors[j])
            if logic(reg):
                c += 1
            reg = ""
        return c
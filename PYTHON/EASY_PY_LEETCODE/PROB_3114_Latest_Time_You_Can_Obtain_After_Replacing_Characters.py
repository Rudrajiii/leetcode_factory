from typing import *
class Solution(object):
    def findLatestTime(self, s):
        """
        :type s: str
        :rtype: str
        """
        a = s.split(":")
        H1, H2 = a[0][0], a[0][1]
        M1, M2 = a[1][0], a[1][1]

        if H1 == "?" and H2 == "?":
            H1 , H2 = "1","1"

        if H2 == "?":
            if H1 == "0":
                H2 = "9"
            else:
                H2 = "1"
        if H1 == "?":
            if H2 <= "1":
                H1 = "1"
            else:
                H1 = "0"
        if M1 == "?":
            M1 = "5"
        if M2 == "?":
            M2 = "9"
        
        return H1+H2+":"+M1+M2

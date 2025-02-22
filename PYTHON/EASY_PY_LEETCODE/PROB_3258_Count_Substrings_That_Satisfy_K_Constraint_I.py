class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        l,r,co,cz,a = 0,0,0,0,0
        while(r < len(s)):
            if s[r] == '0':
                cz += 1
            else:
                co += 1
            while co > k and cz > k:
                if s[l] == '0':
                    cz -= 1
                else:
                    co -= 1
                l += 1
            a += (r - l) + 1
            r += 1
        return a
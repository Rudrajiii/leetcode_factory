class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        s_rev = s[::-1]
        sub_str = []

        for i in range(len(s) - 1):
            sub_str.append(s[i:i+2])

        for i in range(len(s_rev) - 1):
            if s_rev[i:i+2] in sub_str:
                return True
        return False
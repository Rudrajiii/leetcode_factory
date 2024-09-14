class Solution:
    def greatestLetter(self, s: str) -> str:
        uppercase_ascii = {char: ord(char) for char in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        lowercase_ascii = {char: ord(char) for char in 'abcdefghijklmnopqrstuvwxyz'}
        max_upper_ascii = 0
        max_lower_ascii = 0
        r = ''
        for i in range(len(s) - 1 , -1 , -1):
            if s[i] == s[i].upper():
                if s[i].lower() in s[:i]:
                    if max_upper_ascii < uppercase_ascii[s[i]]:
                        max_upper_ascii=uppercase_ascii[s[i]]
                        r = s[i].upper()
            if s[i] == s[i].lower():
                if s[i].upper() in s[:i]:
                    if max_lower_ascii<lowercase_ascii[s[i]]:
                        max_lower_ascii=lowercase_ascii[s[i]]
                        r = s[i].upper()
        return r
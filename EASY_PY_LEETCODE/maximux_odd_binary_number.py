class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        t_one = s.count('1')
        t_zero = s.count('0')
        ss = list(s)
        if t_one == 1:
            for i in range(len(s)):
                ss[i] = '0'
            ss[-1] = '1'
        else:
            one_len = t_one - 1
            for i in range(len(s)):
                ss[i] = '0'
            for j in range(one_len):
                ss[j] = '1'
            ss[-1] = '1'
                
        return "".join(ss)
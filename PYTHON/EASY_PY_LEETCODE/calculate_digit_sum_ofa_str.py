class Solution:
    def digitSum(self, s: str, k: int) -> str:
        def inner_mech(k, s):
            arr = []
            h = k
            l = 0
            r = k
            while h <= len(s):
                arr.append(s[l:h])
                l = h
                h += k
            if len(s) % k != 0:
                arr.append(s[len(s) - len(s) % k:])
            return arr
        if len(s) < k : return s
        while len(s) > k:
            arr = inner_mech(k, s)
            f = ''
            for i in arr:
                f += str(sum(map(int, i)))
            s = f
        return s

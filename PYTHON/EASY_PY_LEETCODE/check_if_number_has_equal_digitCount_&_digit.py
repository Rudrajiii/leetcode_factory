from collections import Counter
class Solution:
    def digitCount(self, num: str) -> bool:
        #brute force
        # check = True
        # for i in range(len(num)):
        #     if num.count(str(i)) != int(num[i]):
        #         check = False
        #         break
        # return check
        freq = Counter(num) 
        check = ''
        for i in range(len(num)):
            try:    
                check += str(freq[str(i)])
            except KeyError:
                check += '0'
        return num == check
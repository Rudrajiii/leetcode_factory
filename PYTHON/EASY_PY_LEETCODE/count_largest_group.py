class Solution:
    def countLargestGroup(self, n: int) -> int:
        """
        1 - 13
        {1[] - 9[]}
        
        """
        def digit_sum(n):
            t = 0
            while n > 0:
                l = n % 10
                t += l
                n //= 10
            return t
        hash_map = {}
        for i in range(1 , n+1):
            if digit_sum(i) not in hash_map:
                hash_map[digit_sum(i)] = [i]
            else:
                hash_map[digit_sum(i)].append(i)
        max_size = -1
        for i in hash_map:
            if len(hash_map[i]) > max_size:
                max_size = len(hash_map[i])
        size = 0
        for i in hash_map:
            if len(hash_map[i]) == max_size:
                size += 1
        return size

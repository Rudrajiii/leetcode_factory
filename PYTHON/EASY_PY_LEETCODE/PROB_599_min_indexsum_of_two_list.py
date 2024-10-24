class Solution(object):
    def findRestaurant(self, list1, list2):
        hash_tree = {}
        for i in range(len(list1)):
            if list1[i] not in hash_tree:
                hash_tree[list1[i]] = []
            hash_tree[list1[i]].append(i)
        for i in range(len(list2)):
            if list2[i] not in hash_tree:
                hash_tree[list2[i]] = []
            hash_tree[list2[i]].append(i)
        res = []
        min_val = 100000
        for i in hash_tree:
            if len(hash_tree[i]) > 1:
                if sum(hash_tree[i]) < min_val:
                   res = [i]
                   min_val = sum(hash_tree[i])
                elif  sum(hash_tree[i]) == min_val:
                    res.append(i)
        return res
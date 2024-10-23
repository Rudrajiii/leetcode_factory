class Solution(object):
    def duplicateZeros(self, arr):
        if 0 not in arr: return arr
        res = []
        for i in range(len(arr)):
            if arr[i] != 0:
                res.append(arr[i])
            else:
                res.append(0)
                res.append(0)
        for i in range(len(arr)):
            arr[i] = res[i]

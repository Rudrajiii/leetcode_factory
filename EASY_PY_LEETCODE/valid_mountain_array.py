class Solution(object):
    def validMountainArray(self, arr):
        if len(arr) < 3 : return False
        inc = True
        dec = True
        inc_idx = -1
        dec_idx = -1
        for i in range(0 , len(arr)-1):
            print(arr[i] , arr[i+1])
            if arr[i + 1] > arr[i]:
                inc = False
                inc_idx = i + 1
            elif arr[i + 1] == arr[i]:
                return False
            else:
                dec = False
                dec_idx = i
                
        return check_inc(arr[:inc_idx + 1]) != check_inc(arr[dec_idx:])
def check_inc(sub_arr):
    if sub_arr == [] : return False
    check = True
    for i in range(len(sub_arr) - 1):
        if sub_arr[i+1] < sub_arr[i]:
            check=False
            break
    return check
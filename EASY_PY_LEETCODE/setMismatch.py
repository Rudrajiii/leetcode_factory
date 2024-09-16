nums = [1,2,2,4]
def setMismatch(arr):
    arr.sort()
    missing = -1
    duplicate = 1 # otherwise won't run for testcase [2,2]
    for i in range(1 , len(arr)):
        if arr[i] == arr[i-1]:
            duplicate = arr[i]
        elif arr[i] > arr[i-1] + 1:
            missing = arr[i-1] + 1
    if arr[-1] != len(arr):
        missing = len(arr)
    return [duplicate , missing]
print(setMismatch(nums))


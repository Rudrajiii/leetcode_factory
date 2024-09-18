def solve(arr, n):
    temp = [0] * n
    for i in range(1, n):
        temp[i - 1] = arr[i]
    print(temp) # [ 2  , 3  , 4 , 5 , 0 ]
    temp[n - 1] = arr[0]
    for i in range(n):
        print(temp[i], end=" ")
    print()

n = 5
arr = [1, 2, 3, 4, 5]
solve(arr, n)


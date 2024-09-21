from typing import *
# Brute Force Approach
def moveZeros(n: int,  a: int) -> int:
    # Temporary array
    temp = []
    
    # Copy non-zero elements from original to temp array
    for i in range(n):
        if a[i] != 0:
            temp.append(a[i])
    
    # Number of non-zero elements
    nz = len(temp)
    
    # Copy elements from temp to fill first nz fields of original array
    for i in range(nz):
        a[i] = temp[i]
    
    # Fill the rest of the cells with 0
    for i in range(nz, n):
        a[i] = 0
    
    return a

arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1]
n = 10
ans = moveZeros(n, arr)
for it in ans:
    print(it, end=" ")
print()

# Optimal Approach
def moveZeros(n: int,  a: int) -> int:
    j = -1
    # Place the pointer j
    for i in range(n):
        if a[i] == 0:
            j = i
            break
    
    # No non-zero elements
    if j == -1:
        return a
    
    # Move the pointers i and j and swap accordingly
    for i in range(j + 1, n):
        if a[i] != 0:
            a[i], a[j] = a[j], a[i]
            j += 1
    
    return a


arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1]
n = 10
ans = moveZeros(n, arr)
for it in ans:
    print(it, end=' ')
print()






def removeDuplicates(arr):
    i = 0
    for j in range(1 , len(arr)):
        if arr[j] != arr[i]:
            arr[i+1] = arr[j]
            i += 1
    return [i + 1 , arr]

if __name__ == "__main__":
    arr = [1, 1, 2, 2, 2, 3, 3]
    k = removeDuplicates(arr)[0]
    print("The array after removing duplicate elements is ")
    for i in range(k):
        print(arr[i], end=" ")
    print(removeDuplicates(arr)[1])

def second_largest(arr , n):
    if n < 2:
        return -1
    largest = arr[0]
    s_largest = -1
    for i in range(len(arr)):
        if arr[i] > largest:
            s_largest = largest
            largest = arr[i]
        elif arr[i] < largest and arr[i] > s_largest:
            s_largest = arr[i]
    return [largest , s_largest]

def second_smallest(arr , n):
    if n < 2:
        return -1
    smallest = float('inf')
    s_smallest = float('inf')
    for i in range(len(arr)):
        if arr[i] < smallest:
            s_smallest = smallest
            smallest = arr[i]
        elif arr[i] > smallest and arr[i] < s_smallest:
            s_smallest = arr[i]
    return [smallest , s_smallest]

if __name__ == "__main__":
    arr = [1, 2, 4, 7, 7, 5]
    n = len(arr)
    sS = second_smallest(arr, n)
    sL = second_largest(arr, n)
    print("Second smallest is", sS)
    print("Second largest is", sL)

    
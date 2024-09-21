def intersection_of2Array():
    arr1 = [1 , 2 , 3 , 4 , 5 , 6 , 9]
    arr2 = [2 , 3 , 4 , 7 , 9]
    i , j = 0  , 0
    intersection_array = list()
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            i += 1
        elif arr1[i] > arr2[j]:
            j += 1
        else:
            intersection_array.append(arr1[i])
            i += 1
            j += 1
    return intersection_array
_print_statement = intersection_of2Array()
print(_print_statement)



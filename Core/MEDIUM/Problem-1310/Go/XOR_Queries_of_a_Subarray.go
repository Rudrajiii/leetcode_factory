package main

func xorQueries(arr []int, queries [][]int) []int {
    n := len(arr)
    prefixXOR := make([]int, n+1)
    
    for i := 1; i <= n; i++ {
        prefixXOR[i] = prefixXOR[i-1] ^ arr[i-1]
    }

    res := make([]int, len(queries))
    for i, query := range queries {
        l, r := query[0], query[1]
        res[i] = prefixXOR[r+1] ^ prefixXOR[l]
    }

    return res
}


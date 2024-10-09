package main

func sumBase(n int, k int) int {
    c := 0
    for n > 0{
        l := n % k
        c += l
        n /= k
    }
    return c
}
package main
func missingNumber(nums []int) int {
    xor1 := 0
    xor2 := 0
    for i := 0 ; i < len(nums) ; i++ {
        xor1 ^= i
        xor2 ^= nums[i]
    }
    xor1 ^= len(nums)
    return xor1 ^ xor2
}
package main

import (
	"math"
)
func minOf3(n1, n2, n3 int) int {
	t := int(math.Min(float64(n1), float64(n2)))
	return int(math.Min(float64(t), float64(n3)))
}

func generateKey(num1 int, num2 int, num3 int) int {
	d := [4]int{}
	k, ans := 0, 0

	for num1 > 0 && num2 > 0 && num3 > 0 {
		n1 := num1 % 10
		n2 := num2 % 10
		n3 := num3 % 10

		d[k] = minOf3(n1, n2, n3)
		ans += int(math.Pow(10, float64(k))) * d[k]
		k++
		num1 /= 10
		num2 /= 10
		num3 /= 10
	}
	return ans
}
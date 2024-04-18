// !2427. Number of Common Factors

class Solution {
    commonFactors(a, b) {
        let count = 0;
        if (b > a) {
            for (let i = 1; i <= a; i++) {
                if (a % i === 0 && b % i === 0) {
                    count++;
                }
            }
        } else {
            for (let i = 1; i <= b; i++) {
                if (b % i === 0 && a % i === 0) {
                    count++;
                }
            }
        }
        return count;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.commonFactors(12, 18)); // Output: 6

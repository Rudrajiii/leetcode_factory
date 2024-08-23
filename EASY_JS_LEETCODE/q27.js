//! 2695. Array Wrapper
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    
    valueOf() {
        let sum = 0;
        for (let i of this.nums) {
            sum += i;
        }
        return sum;
    }

    toString() {
        return "[" + this.nums.join(",") + "]";
    }
}
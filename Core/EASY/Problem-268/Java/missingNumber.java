class Solution {
    public int missingNumber(int[] nums) {
        int xor1 = 0;
        int xor2 = 0;
        for(int num = 0 ; num < nums.length; num++){
            xor1 ^= num;
            xor2 ^= nums[num];
        }
        xor1 ^= nums.length;
        return xor1 ^ xor2;
    }
}
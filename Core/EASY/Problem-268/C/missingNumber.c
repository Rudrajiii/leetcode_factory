#include <stdio.h>
int missingNumber(int* nums, int numsSize) {
        int xor1 = 0;
        int xor2 = 0;
        for(int num = 0 ; num < numsSize; num++){
            xor1 ^= num;
            xor2 ^= nums[num];
        }
        xor1 ^= numsSize;
        return xor1 ^ xor2;
}
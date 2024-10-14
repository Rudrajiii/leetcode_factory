#include <stdio.h>
int singleNumber(int* nums, int numsSize) {
    int XOR = 0;
        for(int num = 0 ; num < numsSize ; num++){
            XOR ^= nums[num];
        }
    return XOR;
}
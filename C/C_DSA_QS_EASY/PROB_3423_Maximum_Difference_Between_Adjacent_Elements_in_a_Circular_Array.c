#include "stdio.h"
#include "stdlib.h"

int maxAdjacentDistance(int* nums, int numsSize) {
    int maxi = -999;
    for(int i=0 ; i < numsSize ; i++){
        int idx1 = i % numsSize;
        int idx2 = (i+1) % numsSize;
        int max_diff = nums[idx1] - nums[idx2];
        if(abs(max_diff) > maxi){
            maxi = abs(max_diff);
        }
    }
    return maxi;
}
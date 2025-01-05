#include "stdio.h"
#include "stdbool.h"

int countSubarrays(int* nums, int numsSize) {
    bool is_size_ok = true;
    int i = 0 , count = 0;
    while(is_size_ok){
        if(i+3 <= numsSize){
            int sub_arr[3];
            int k = 0;
            for(int j = i ; j < i+3 ; j++){
                sub_arr[k] = nums[j];
                k++;
            }
            if(sub_arr[0] + sub_arr[2] == sub_arr[1] / 2.0){
                count++;
            }
        }else{
            is_size_ok = false;
        }
        i++;
    }
    return count;
}

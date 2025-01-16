#include "stdio.h"
#include "limits.h"

int countElements(int* nums, int numsSize) {
    int _MAX = INT_MIN , _MIN = INT_MAX , c = 0;
    for(int i = 0 ; i < numsSize ; i++){
        if(nums[i] > _MAX){
            _MAX = nums[i];
        }
    }
    for(int i = 0 ; i < numsSize ; i++){
        if(nums[i] < _MIN){
            _MIN = nums[i];
        }
    }
    for(int k = 0 ; k < numsSize ; k++){
        if(_MIN < nums[k] && nums[k] < _MAX){
            c++;
        }
    }
    return c;
}
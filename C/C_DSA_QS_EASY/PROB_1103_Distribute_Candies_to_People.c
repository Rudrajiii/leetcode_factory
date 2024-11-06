#include <stdio.h>
#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#define MIN(a,b) (((a)>(b))?(b):(a))
int* distributeCandies(int candies, int num_people, int* returnSize) {
     int* v = (int*)calloc(num_people, sizeof(int));
    int candy = 1;
    int i = 0;
    while(candies > 0){
        v[i % num_people] += MIN(candy , candies);
        candies -= candy;
        candy++;
        i++; 
    }
    *returnSize = num_people;
    return v;
}
#include <stdio.h>
#include <stdlib.h>

#define MAX(a,b) (((a)>(b))?(a):(b))
int* decToBinary(int n, int* size) {
    int* binaryNum = (int*)malloc(32 * sizeof(int));
    if (binaryNum == NULL) {
        return NULL;  
    }
    
    *size = 0;  
    while (n > 0) {
        binaryNum[*size] = n % 2;
        n = n / 2;
        (*size)++;
    }
    
    return binaryNum;
}
int binaryGap(int n) {
    int size;
    int* binaryNum = decToBinary(n, &size);
    int max_gap = 0 , i = 0 , j = 1;
    if(binaryNum != NULL){
        while(j < size){
            if(binaryNum[i] != 1){
                i++;
                j = i + 1;
            }
            else if(binaryNum[j] != 1){
                j++;
            }else{
                max_gap = MAX(max_gap , j - i);
                i = j;
                j = i + 1;
            }
        }
        free(binaryNum);
    }
    return max_gap; 
    
}
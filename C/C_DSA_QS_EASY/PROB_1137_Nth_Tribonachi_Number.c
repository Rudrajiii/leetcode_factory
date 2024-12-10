#include <stdio.h>
int tribonacci(int n) {
    if(n==0){
        return 0;
    }
    int t[38] = {0 , 1 , 1};
    for(int i = 0 ; i < n - 2; i++){
        t[i+3] = t[i] + t[i+1] + t[i+2];
    }
    return t[n];
}
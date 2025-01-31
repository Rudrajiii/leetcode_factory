#include <stdio.h>
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

int firstBadVersion(int n) {
    int x = 1 , y = n;
    while(x<y){
        int mid = x + (y-x) / 2;
        if(isBadVersion(mid)) y = mid;
        else x = mid+1;
    }
    return x;
}
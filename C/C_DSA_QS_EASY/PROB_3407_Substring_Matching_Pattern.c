#include "stdio.h"
#include "stdbool.h"

long long per(int p) {
    long long base = 1;  // Initialize to 1 for 2^0
    for (int i = 0; i < (p - 1); i++) {
        base *= 2;  // Calculate 2^(p-1)
    }

    long long mersenne_prime = 1;
    for (int i = 0; i < p; i++) {
        mersenne_prime *= 2;  // Calculate 2^p
    }
    mersenne_prime -= 1;  // 2^p - 1 (Mersenne prime)

    return base * mersenne_prime;  // 2^(p-1) * (2^p - 1)
}
bool checkPerfectNumber(int num) {
    if(num <= 1){
        return false;
    }
    int points[8] = {2, 3, 5, 7, 13, 17, 19, 31};
    int n = sizeof(points) / sizeof(int);
    for(int i = 0 ; i < n ; i++){
        if(per(points[i]) == num){
            return true;
        }
    }
    return false;
}
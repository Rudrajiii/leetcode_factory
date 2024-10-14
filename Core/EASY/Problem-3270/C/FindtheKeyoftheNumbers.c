#include <stdio.h>
#define min(x , y) (((x) > (y)) ? (y) : (x))
#define minBet3(x , y , z) (min((x) , min((y) , (z))))
int generateKey(int num1, int num2, int num3) {
    int a[4] = {0};
    int k = 0 , ans = 0;
    while(num1 > 0 && num2 > 0 && num3 > 0){
        int n1 = num1 % 10 , n2 = num2 % 10 , n3 = num3 % 10;
        a[k] = minBet3(n1 , n2 , n3);
        ans += (pow(10 , k)) * a[k];
        k++;
        num1 /= 10;
        num2 /= 10;
        num3 /= 10;
    }
    return ans;
}
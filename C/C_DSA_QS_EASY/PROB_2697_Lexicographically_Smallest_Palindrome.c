#include "stdio.h"
char* makeSmallestPalindrome(char* s) {
    int i = 0, j = strlen(s) - 1;
    while (i < j) {
        if (s[i] < s[j]) {
            s[j] = s[i];
        } else if (s[j] < s[i]) {
            s[i] = s[j];
        } else {
            i++;
            j--;
        }
    }
    return s;
}
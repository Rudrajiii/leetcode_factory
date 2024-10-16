#include <stdio.h>
#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* xorQueries(int* arr, int arrSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int* res = (int*)malloc(queriesSize * sizeof(int));
    if (res == NULL) {
        return NULL;
    }
    *returnSize = queriesSize;
    int* prefixXOR = (int*)malloc((arrSize + 1) * sizeof(int));
    if (prefixXOR == NULL) {
        free(res);
        return NULL;
    }
    prefixXOR[0] = 0;
    for (int i = 1; i <= arrSize; i++) {
        prefixXOR[i] = prefixXOR[i - 1] ^ arr[i - 1];
    }
    for (int i = 0; i < queriesSize; i++) {
        int l = queries[i][0], r = queries[i][1];
        res[i] = prefixXOR[r + 1] ^ prefixXOR[l];
    }
    free(prefixXOR);
    return res;
}

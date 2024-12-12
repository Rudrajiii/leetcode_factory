#include "stdio.h"
#include "stdlib.h"
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode *prev = NULL;
    struct ListNode *nxt = NULL;

    while(head != NULL){
        nxt = head->next;
        head->next = prev;
        prev = head;
        head = nxt;
    }
    head = prev;
    return head;
}
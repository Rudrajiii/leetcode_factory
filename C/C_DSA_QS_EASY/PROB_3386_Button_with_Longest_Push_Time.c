#include "stdio.h"
#include "limits.h"

int buttonWithLongestTime(int** events, int eventsSize, int* eventsColSize) {
    int prev_time = 0;
    int max_time = INT_MIN;
    int idx = 0;
    for(int event = 0 ; event < eventsSize ; event++){
        int time = events[event][1] - prev_time;
        prev_time = events[event][1];

        if(time > max_time){
            max_time = time;
            idx = events[event][0];
        }else if(time == max_time && events[event][0] < idx){
            idx = events[event][0];
        }
    }
    return idx;
}

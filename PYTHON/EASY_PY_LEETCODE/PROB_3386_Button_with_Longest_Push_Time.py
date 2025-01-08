from typing import *
class Solution:
    def buttonWithLongestTime(self, events: List[List[int]]) -> int:
        prev_time = 0
        _max_time = float('-inf')
        _idx = 0
        for event in events:
            _time = event[1] - prev_time
            prev_time = event[1]
            if _time > _max_time:
                _max_time = _time
                _idx = event[0]
            elif _time == _max_time and event[0] < _idx:
                    _idx = event[0]
        return _idx

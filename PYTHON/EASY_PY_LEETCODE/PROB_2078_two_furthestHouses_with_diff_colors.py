from typing import *
class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        fixed_pointer = 0
        moving_pointer = len(colors) - 1
        while colors[fixed_pointer] == colors[moving_pointer]:
            moving_pointer -= 1
        max_diff_1 = moving_pointer - fixed_pointer
        moving_pointer = 0
        fixed_pointer = len(colors) - 1
        while colors[fixed_pointer] == colors[moving_pointer]:
            moving_pointer += 1
        max_diff_2 = fixed_pointer - moving_pointer
        return max(max_diff_1 , max_diff_2)

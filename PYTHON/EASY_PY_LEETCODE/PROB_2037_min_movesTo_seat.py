class Solution(object):
    def minMovesToSeat(self, seats, students):
        s1 = sorted(seats)
        s2 = sorted(students)
        res = 0
        for i in range(len(s1)):
            res += abs(s1[i] - s2[i])
        return res
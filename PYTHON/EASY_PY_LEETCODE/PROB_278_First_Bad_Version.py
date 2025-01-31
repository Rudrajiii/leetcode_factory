# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:
def isBadVersion(mid):...
class Solution:
    def firstBadVersion(self, n: int) -> int:
            left = 1 
            right = n+1
            while left < right:
                mid = left + (right - left) // 2
                if isBadVersion(mid):
                    right = mid
                else:
                    left = mid + 1
            return left
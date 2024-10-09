class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        max_elem = max(candies)
        for i in range(len(candies)):
            if candies[i] + extraCandies >= max_elem:
                candies[i] = True
            else:
                candies[i] = False
        return candies
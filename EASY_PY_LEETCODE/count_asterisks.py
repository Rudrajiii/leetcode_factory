class Solution(object):
    def countAsterisks(self, s):
        pipe_index = []
        for i in range(len(s)) :
            if s[i] == '|':
                pipe_index.append(i)
        print(pipe_index)
        count = 0
        skip = False
        for i in range(len(s)):
            if s[i] == '|':
                skip = not skip
            elif s[i] == '*' and not skip:
                count += 1
        return count

class Solution:
    def reorderSpaces(self, text: str) -> str:
        sp_count = text.count(' ')
        words = text.split()

        if len(words) == 1:
            return words[0] + ' ' * sp_count
        sp_bet_words = sp_count // (len(words) - 1)
        extra_sp = sp_count % (len(words) - 1)

        res = (' ' * sp_bet_words).join(words)
        res += ' ' * extra_sp
        return res  
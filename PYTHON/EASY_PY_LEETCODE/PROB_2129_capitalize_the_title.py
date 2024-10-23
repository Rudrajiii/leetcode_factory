class Solution:
    def capitalizeTitle(self, title: str) -> str:
        title_arr = list(title)
        title_arr = title.split(' ')
        for i in range(len(title_arr)):
            if len(title_arr[i]) > 2:
                title_arr[i] = title_arr[i].capitalize()
            else:
                title_arr[i] = title_arr[i].lower()
        return " ".join(title_arr)

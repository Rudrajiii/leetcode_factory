class Solution:
    def strongPasswordCheckerII(self, password: str) -> bool:
        digits = '0123456789'
        letters = 'abcdefghijklmnopqrstuvwxyz'
        special_chars = '!@#$%^&*()-+'
        is_lower = False
        is_upper_letters = False
        is_upper = False
        is_digit = False
        is_letter = False
        is_special = False
        final_res = False
        for i in password:
            if i.lower() == i:
                is_lower = True
                break
        for i in password:
            if i in letters:
                is_letter = True
                break
        for i in password:
            if i in letters.upper():
                is_upper_letters = True
                break
        for i in password:
            if i.upper() == i:
                is_upper = True
                break
        for i in password:
            if i in digits:
                is_digit = True
                break
        for i in password:
            if i in special_chars:
                is_special = True
                break
        s = list(set(password))
        if is_special and is_digit and is_upper and is_upper and is_letter and is_upper_letters:
            final_res = True
            if len(password) >= 8:
                for i in s:
                    try:
                        if password[password.index(i) + 1] == i:
                            final_res = False
                            break
                    except Exception as e:
                        pass
            else:
                final_res = False
        return final_res
            




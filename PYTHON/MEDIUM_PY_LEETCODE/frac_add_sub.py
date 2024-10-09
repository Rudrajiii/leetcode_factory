import re
from fractions import Fraction
class Solution:
    def fractionAddition(self, expression: str) -> str:
        if expression[0] not in '-+':
            expression = '+' + expression
            
        result = re.split(r'(\+|\-)', expression)

        result = [x.strip() for x in result if x.strip()]

        if result[0] not in '-+':
            result = '+' + result

        hashing = {}

        for i in range(0 , len(result) , 2):
            if result[i] not in hashing:
                hashing[result[i]] = []
            hashing[result[i]].append(result[i+1])

        t = 0
        for i in hashing:
            if i == '-':
                t = t + (sum(map(Fraction, hashing[i])) * -1)
            else:
                t = t + sum(map(Fraction, hashing[i]))
        rational_value = Fraction(t)

        return f'{rational_value.numerator}/{rational_value.denominator}'
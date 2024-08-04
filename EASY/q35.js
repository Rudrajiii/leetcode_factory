
//3136. Valid Word

var isValid = function(word) {
    let vowels = 'aeiouAEIOU';
    let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let numbers = '0123456789';
    let englishAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let hasVowel = false;
    let hasConsonant = false;
    let hasAlphanumeric = false;

    for(let char of word) {
        if(vowels.includes(char)) {
            hasVowel = true;
        } else if(consonants.includes(char)) {
            hasConsonant = true;
        }
        if(numbers.includes(char) || englishAlphabet.includes(char)) {
            hasAlphanumeric = true;
        } else {
            return false;
        }
    }

    return word.length >= 3 && hasVowel && hasConsonant && hasAlphanumeric;
};

//2785. Sort Vowels in a String

var sortVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let vowelsArr = [];
    let result = '';

    // Separate vowels and consonants while maintaining their positions
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsArr.push(s[i]);
            result += '#';
        } else {
            result += s[i];
        }
    }

    // Sort the vowels array
    vowelsArr.sort();

    // Replace placeholders with sorted vowels
    let vowelIndex = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '#') {
            result = result.slice(0, i) + vowelsArr[vowelIndex++] + result.slice(i + 1);
        }
    }

    return result;
};



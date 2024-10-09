/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
        let words = sentence.split(' ');
        let vowels = 'aeiouAEIOU';
        for (let i = 0; i < words.length; i++) {
            if (vowels.includes(words[i][0])) {
                words[i] = words[i] + 'ma';
            } else {
                let firstLetter = words[i][0];
                words[i] = words[i].slice(1) + firstLetter + 'ma';
            }
            words[i] += 'a'.repeat(i + 1);
        }
        return words.join(' ');
};

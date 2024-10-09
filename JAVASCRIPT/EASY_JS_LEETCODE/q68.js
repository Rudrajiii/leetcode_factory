/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const cleanedSentence = paragraph.toLowerCase().replace(/[^\w\s,]/g, "");
    const words = cleanedSentence.split(/[\s,]+/).filter(word => word.length > 0);
    console.log(words)
    const wordCount = {};
    words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
    });
    let res = 0;
    let r = '';

    for (let word in wordCount) {
        if (!banned.includes(word)) {
            if (wordCount[word] > res) {
                res = wordCount[word];
                r = word;
            }
        }
    }
    return r;
};
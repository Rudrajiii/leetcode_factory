// 58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let save = s.split(" ");
    let array = save[save.length - 1];
    return array.length;
};
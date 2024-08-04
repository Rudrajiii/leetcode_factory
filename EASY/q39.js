//2000. Reverse Prefix of Word

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let letter_word;

    if(word.indexOf(ch)){

        letter_word = word.indexOf(ch);

    }

    let reverse_word = word.slice(0 , letter_word + 1 );

    let main_word = word.slice(letter_word + 1 , word.length);

    return reverse_word.split('').reverse().join('') + main_word;
    
};
//! 1002. Find Common Characters
//?description

//*Given a string array words, return an array of all characters that show up in all strings
//* within the words (including duplicates). You may return the answer in any order.

//todo ex-1
//Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

//todo ex-2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
var commonChars = function(words){
    if (words.length === 0) return [];
    let firstWord = words[0].split('');
    for(let i = 1; i < words.length; i++){
        let currentWord = words[i].split('');
        const temp = [];
        for(let char of currentWord){
            if(firstWord.includes(char)){
                temp.push(char);
                firstWord.splice(firstWord.indexOf(char), 1);
            }
        }
        firstWord = temp;

    }
    return firstWord;
}
console.log(commonChars(words));


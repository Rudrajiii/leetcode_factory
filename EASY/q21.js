//345. Reverse Vowels of a String

var reverseVowels = function(s) {
    let arr = s.split('');
    let vowels = 'aeiou';
    let i = 0, j = arr.length - 1;
    while (i < j) {

        while (i < j && !vowels.includes(arr[i].toLowerCase())) {
            i++;
        }

        while (i < j && !vowels.includes(arr[j].toLowerCase())) {
            j--;
        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return arr.join('');
};

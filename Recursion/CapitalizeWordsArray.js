// function capitalizedWords(words) {
//     console.log(words);
//     var newwords = [];
//     if (words.length == 0) {
//         return [];
//     }
//     newwords.push(words[0].toUpperCase());

//     newwords = newwords.concat(capitalizedWords(words.slice(1)));

//     return newwords;
// }

function capitalizedWords(words) {
    var newwords = [];

    function recursionFunction(arr) {
        if (arr.length == 0) {
            return [];
        }
        newwords.push(arr[0].toUpperCase());
        recursionFunction(arr.slice(1))
    }

    recursionFunction(words);
    return newwords;

}



let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
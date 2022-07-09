function removeVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var newStr = '';
    for (var item of str) {
        if (!vowels.includes(item)) {
            newStr += item;
        }

    }

    // var vowels = {
    //     a: 'a',
    //     e: 'e',
    //     i: 'i',
    //     o: 'o',
    //     u: 'u'
    // }


    // var obj = {};
    // for (var item of str) {
    //     obj[item] = item;
    // }
    // for (var item in obj) {
    //     if (obj[item] == vowels[item]) {
    //         continue;
    //     }
    //     newStr += obj[item];
    // }


    return newStr;
}

console.log(removeVowels("welcome to geeksforgeeks"))
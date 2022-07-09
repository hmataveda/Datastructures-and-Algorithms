function anagram(str1, str2) {
    var anagram1 = {};
    var anagram2 = {};
    if (str1.length != str2.length) {
        return 'no length match';
    }
    for (let char of str1) {
        anagram1[char] = anagram1[char] + 1 || 1;
    }
    for (let char of str2) {
        anagram2[char] = anagram2[char] + 1 || 1;
    }
    console.log(anagram1);
    console.log(anagram2);
    for (let key in anagram1) {
        if (!(key in anagram2)) {
            return "key is not present";
        }

        if (anagram1[key] !== anagram2[key]) {
            return "value is diffene=t";
        }
    }

    return "yes its anagram!!!"

}

console.log(anagram("anagram", "nagaram"));
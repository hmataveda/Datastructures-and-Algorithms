function anagram(str1, str2) {
    var str1 = str1.split('');
    var str2 = str2.split('');
    if (str1.length != str2.length) {
        return "unmatched length";
    }

    for (var item of str1) {
        var index = str2.indexOf(item);
        if (index == -1) {
            return "no letter";
        }

        str2.splice(index, 1);
        console.log(str2);

    }

    return str2;

}







console.log(anagram("anagram", "ngaram"));
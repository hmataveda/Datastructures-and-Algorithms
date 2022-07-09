function isSubsequense(str1, str2) {
    var arr = [];

    for (var i = 0; i < str1.length - 1; i++) {
        arr.push(str1[i] + str1[i + 1]);
    }

    for (var item of arr) {
        if (str2.includes(item)) {
            return true;
        }
    }

    return false;

}

console.log(isSubsequense('abc', 'acb'))
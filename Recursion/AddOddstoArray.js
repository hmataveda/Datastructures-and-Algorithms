function insertODD(arr) {
    var oddArr = [];

    function helperrecursion(helperArr) {
        if (helperArr.length == 0) {
            return
        }
        if (helperArr[0] % 2 !== 0) {
            oddArr.push(helperArr[0]);
        }

        helperrecursion(helperArr.slice(1))
    }
    helperrecursion(arr);
    return oddArr;
}

console.log(insertODD([1, 2, 3, 4, 5, 6, 7, 8, 9]));
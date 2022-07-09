function insertODD(arr) {
    var oddarr = [];
    if (arr.length == 0) {
        return oddarr;
    }
    if (arr[0] % 2 !== 0) {
        oddarr.push(arr[0]);
    }
    console.log("coming")
    oddarr = oddarr.concat(insertODD(arr.slice(1)));

    return oddarr;

}

console.log(insertODD([1, 2, 3, 4, 5, 6, 7, 8, 9]));
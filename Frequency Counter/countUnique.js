function unique(arr) {

    var obj = {};
    for (var item of arr) {
        obj[item] = obj[item] ? ++obj[item] : 1;
        console.log(obj);
    }
    return Object.keys(obj).length;

}

console.log(unique([1, 2, 3, 4, 4, 4, 5, 3]));
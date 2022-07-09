function flatten(arr) {
    var newarr = [];

    for (var item of arr) {
        if (Array.isArray(item)) {
            newarr = newarr.concat(flatten(item))
        } else {
            newarr.push(item);
        }

    }
    return newarr

}

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))


function flatten(mainarr) {
    var newArr = [];

    function helper(arr) {
        if (arr.length == 0) {
            return newArr;
        }
        if (Array.isArray(arr[0]) == true) {
            helper(arr[0]);
        } else {
            newArr.push(arr[0]);
        }
        helper(arr.slice(1))
    }
    helper(mainarr);
    return newArr;

}
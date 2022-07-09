function averagePair(arr, avg) {
    var sum = avg * 2;
    var lastIndex = arr.length - 1;
    if (arr.length == 0) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            lastIndex = i - 1;
            break;
        }
    }

    for (let i = lastIndex; i >= 0; i--) {
        var diff = sum - arr[i];
        if (arr.indexOf(diff) != -1) {
            return true;
        }
    }

    return false;

    //   normal method
    // for (var i = 0; i < arr.length - 1; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] == sum) {
    //             return [arr[i], arr[j]];
    //         }
    //     }
    // }


}




console.log(averagePair([1, 3, 3, 5, 5, 7, 10, 12, 19, 20], 8));

// 16 / 2
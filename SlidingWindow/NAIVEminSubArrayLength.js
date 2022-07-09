function minSubArrLen(arr, sum) {
    var min = arr.length + 1;
    var tempMin = 0;
    var tempSum = 0
    for (var i = 0; i < arr.length; i++) {
        tempSum = 0;
        for (var j = i; j < arr.length; j++) {
            tempSum += arr[j];
            if (tempSum >= sum) {
                console.log("temp" + tempSum + "i" + i + "j" + j);
                tempSum = 0;
                tempMin = j - i + 1;
                console.log(tempMin + "min" + min);
                if (tempMin <= min) {
                    min = tempMin;
                }
                break;
            }

        }
    }
    min = (min == arr.length + 1 ? 0 : min);
    return min;
}

console.log(minSubArrLen([2, 94], 95));
function minSubArryLength(arr, sum) {
    var start = 0;
    var end = 0;
    var total = 0;
    var minLength = Infinity;

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= sum) {
            total = total - arr[start]
            start++;
            var tempLength = end - start + 1;
            console.log()
            minLength = Math.min(tempLength, minLength);
        } else {
            break;
        }

    }
    return minLength;
}


console.log(minSubArryLength([2, 3, 1, 2, 4, 7], 7))
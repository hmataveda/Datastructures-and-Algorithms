function MaxSubArraySum(arr, range) {

    var maxSum = 0;
    var tempSum = 0;
    if (arr.length < range) {
        return "not in range";
    }
    for (var i = 0; i < range; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (var i = range; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - range];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(MaxSubArraySum([-1, -2, -3, 4], 3))
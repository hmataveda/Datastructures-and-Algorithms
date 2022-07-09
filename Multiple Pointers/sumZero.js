function sumZero(arr) {
    var firstIndex = 0;
    var lastIndex = arr.length - 1;

    while (lastIndex > firstIndex) {
        if (arr[firstIndex] + arr[lastIndex] == 0) {
            return [arr[firstIndex], arr[lastIndex]];
        }
        if (arr[firstIndex] + arr[lastIndex] > 0) {
            lastIndex--;
        } else {
            firstIndex++;
        }
    }
    return "no sum zero";

}





console.log(sumZero([-4, -3, -2, -1, 0, 2, 4]))
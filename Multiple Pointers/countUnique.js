function countUnique(arr) {

    left = 0;
    right = 1;

    count = 1;
    if (arr.length == 0) {
        count = 0;
        return count;
    }
    while (right < arr.length) {
        if (arr[left] == arr[right]) {
            right++;
        } else {
            count++;
            left = right;
            right++

        }
    }
    return count;
}

console.log(countUnique([1, 1, 2, 2, 3]))
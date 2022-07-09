function countDown(num) {
    if (num === 0) {
        return; // base case
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(6);

// instead of for loop we are using recursion
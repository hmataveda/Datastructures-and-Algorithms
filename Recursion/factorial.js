// function factorial(num) {
// var factorial = 1;
// for (var i = 1; i <= num; i++) {
//     factorial *= i;
// }
// return factorial;
// }


function factorial(num) {

    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5))
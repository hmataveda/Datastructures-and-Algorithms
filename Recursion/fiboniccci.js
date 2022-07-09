// function fib(num) {
//     var a = 1;
//     var b = 1;
//     var value;
//     var i = num;
//     while (i > 2) {
//         value = a + b;
//         a = b; //1
//         b = value; //2
//         i--; //5
//     }
//     return value;

// }

// console.log(fib(2));

function fib(num) {
    if (num == 1 || num == 2) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
    `
}

console.log(fib(6));
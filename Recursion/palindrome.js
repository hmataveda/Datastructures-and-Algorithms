// function palindrome(str) {

//     var givenStr = str;
//     var newString = '';

//     function helperfunction(str) {
//         if (str.length < 1) return str;
//         return helperfunction(str.slice(1)) + str[0]

//     }

//     newString = helperfunction(givenStr);

//     if (newString === givenStr) {
//         return true;
//     }
//     return false;

// }

console.log(palindrome("1222222251"));

function palindrome(str) {

    if (str.length == 1) {
        return true;
    }
    if (str.length == 2) {
        if (str[0] == str[1]) {
            return true;
        }
    }
    if (str[0] === str.slice(-1)) {
        return palindrome(str.slice(1, -1));
    }
    return false;

}
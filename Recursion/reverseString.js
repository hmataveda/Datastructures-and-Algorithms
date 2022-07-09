function reverse(str) {

    var last = str.length - 1
    var newString = str[last];
    if (last < 0) {
        return "";
    }
    newString = newString.concat(reverse(str.slice(0, last)))
    // return str[last].concat(reverse(str.slice(0, last)));
    return newString;
}

console.log(reverse("ved"));

// or******************

function reverse(str) {
    var newStr = '';
    if (str.length == 0) {
        return "";
    }

    var newStr = reverse(str.slice(1)) + str[0]
    return newStr;

}
function longestSubstring(str) {

    var start = 0;
    var end = 0;
    var newstring = ''
    var max = 0;
    while (end < str.length) {
        if (!newstring.includes(str[end]) && end < str.length) {
            newstring += str[end]
            end++;
            max = Math.max(max, newstring.length);
        } else if (newstring.includes(str[end])) {
            start = newstring.indexOf(str[end]) + 1 + start;
            end = start;
            newstring = '';

        } else {
            break;
        }


    }
    return max;

}

console.log(longestSubstring('bbbbbbbuabvs'))
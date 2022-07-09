var mostWordsFound = function(sentences) {
    var count = 0;
    for (var item of sentences) {
        // var newArray = item.split(' ');
        // words = Math.max(words, newArray.length);
        if (item.split(' ').length > count) {
            count = item.split(' ').length;
        }

    }
    return count;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
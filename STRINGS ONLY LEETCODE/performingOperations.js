function operarations(arr) {
    var x = 0;
    for (var value of arr) {
        x = (value == "X++") ? x + 1 : ((value == "--X") ? --x : ((value == "X--") ? x - 1 : ((value == "++X") ? ++x : 0)))

    }
    return x;


}


console.log(operarations(["++X", "++X", "X++"]));
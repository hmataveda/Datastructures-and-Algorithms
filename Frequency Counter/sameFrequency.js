function sameFrequency(num1, num2) {
    var num1 = num1.toString();
    var num2 = num2.toString();

    var obj1 = {};
    var obj2 = {};

    if (num1.length != num2.length) {
        return false;
    }
    for (var i = 0; i < num1.length; i++) {
        console.log("coming", num1[i]);
        var val1 = num1[i];
        // obj1[val1] = obj1[val1] ? ++obj1[val1] : 1;
        obj1[val1] = obj1[val1] + 1 || 1;
    }
    console.log(obj1);

    for (var j = 0; j < num2.length; j++) {
        var val2 = num2[j];
        obj2[val2] = (obj2[val2] || 0) + 1;
    }
    console.log(obj2);

    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return "falseee";
        }
    }
    return "truess";
}

console.log(sameFrequency(8888958, 8884498));
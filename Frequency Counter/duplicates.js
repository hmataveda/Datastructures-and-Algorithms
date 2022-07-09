function duplicates(...args) {

    // var obj = {};

    // for (var item of args) {
    //     if (obj[item]) {
    //         return "dupliacte";
    //     }
    //     obj[item] = 1;
    //     console.log(obj);
    // }

    for (var i = 0; i < args.length; i++) {
        var item = args[i];
        console.log(item);
        if (args.indexOf(item, i + 1) != -1) {
            return true
        }
    }
    return false;

}
console.log(duplicates(1, 2, 3));
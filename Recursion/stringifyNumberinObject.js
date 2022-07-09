let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
// ***************modifies the existing object**************
// function stringify(obj) {

//     for (var key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] = obj[key].toString();

//         }
//         if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
//             stringify(obj[key]);
//         }
//     }

//     return obj;
// }


// *************Itt do not modiefies the existing obj

function stringify(obj) {
    var newobj = {};

    for (var key in obj) {
        if (typeof obj[key] == 'number') {
            newobj[key] = obj[key].toString();
        } else if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
            newobj[key] = stringify(obj[key]);
        } else {
            newobj[key] = obj[key];
        }
    }
    return newobj;


}

console.log(stringify(obj));
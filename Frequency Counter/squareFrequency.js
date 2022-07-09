// function squareFre(arr1, arr2) {
//     for (var item of arr1) {
//         var place = arr2.indexOf(item ** 2);
//         if (place == -1) {
//             return "falses";
//         }
//         arr2.splice(place, 1);
//     }
//     if (!arr2.length) {
//         return arr2;
//     }

// }



function squareFre(arr1, arr2) {
    var obj1 = {};
    var obj2 = {};

    for (let item of arr1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }
    for (let item of arr2) {
        obj2[item] = ++obj2[item] || 1;
    }
    console.log(obj1);
    console.log(obj2);
    for (let key in obj1) {
        if (!(key ** 2 in obj1)) {
            return false
        }
        if (obj1[key] != obj2[key ** 2]) {
            return "bad Job!!"
        }
    }
    return "good job!!"
}



console.log(squareFre([2, 4, 9, 8], [16, 81, 64, 4]));
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

// function collectStrings(obj) {
//     var arr = [];

//     for (var key in obj) {
//         if (typeof obj[key] == 'string') {
//             arr.push(obj[key]);
//         }
//         if (typeof obj[key] == 'object') {
//             arr = arr.concat(collectStrings(obj[key]));
//         }
//     }

//     return arr;


// } //pure recursion solution...

function collectStrings(obj) {
    var arr = [];

    function recursion(obj) {
        // console.log(obj);

        for (var key in obj) {
            if (typeof obj[key] == 'string') {
                arr.push(obj[key]);
            } else if (typeof obj[key] == 'object') {
                recursion(obj[key]);
            }
        }
    }
    recursion(obj);
    return arr;
}
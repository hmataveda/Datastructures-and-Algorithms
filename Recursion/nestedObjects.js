var obj2 = {
    a: 2,
    b: {
        b: 2,
        bb: {
            b: 3,
            bb: {
                b: 2
            }
        }
    },
    c: {
        c: {
            c: 2
        },
        cc: 'ball',
        ccc: 5
    },
    d: 1,
    e: {
        e: {
            e: 2
        },
        ee: 'car'
    }
};

console.log(nestedEvenSum(obj2));

function nestedEvenSum(object) {
    var sum = 0;
    for (var key in object) {
        if (typeof(object[key]) == "number" && object[key] % 2 == 0) {
            sum += object[key];
            console.log('co', sum + "key" + key)
        }
        if (typeof(object[key]) == "object") {
            sum = sum + nestedEvenSum(object[key]);
        }
    }

    return sum;
}
function capitalizeFirst(arr) {
    // console.log("Sss", arr);
    var res = [];
    if (arr.length == 0) {
        console.log("Sss", arr);
        return res;
    }
    var word = arr[0][0].toUpperCase() + arr[0].slice(1);
    res.push(word);
    res = res.concat(capitalizeFirst(arr.slice(1)));

    return res;

}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
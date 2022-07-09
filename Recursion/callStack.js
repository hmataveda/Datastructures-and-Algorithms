function sumnum(num) {
    if (num == 0) {
        return 0;
    }

    return num + sumnum(num - 1);

}
console.log(sumnum(3));
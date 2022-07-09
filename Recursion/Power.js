function mathPower(base, power) {
    if (power == 0) {
        return 1;
    }
    return base * mathPower(base, power - 1);

    // var value;
    // value = base * mathPower(base, power - 1);
    // return value;


    // var value = 1;
    // while (power > 0) {
    //     value = value * base;
    //     power--;
    // }
    // return value;

}

console.log(mathPower(2, 2))
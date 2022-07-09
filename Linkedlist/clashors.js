//Biggie
const biggie = (arr) => {
  arr.forEach((element, index, array) => {
    if (element > 0) {
      array[index] = "Big";
    }
  });
  return arr;
};
console.log("biggie", biggie([-1, 2, 3, -3]));

//Nested Array
const nestedArray = (arr) => {
  let count = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      let length = item.length;
      count = count + length;
    } else if (item == undefined) {
      count += 0;
    } else {
      count++;
    }
  }
  return count;
};

console.log("nestedArray", nestedArray([6, 4, , 8]));

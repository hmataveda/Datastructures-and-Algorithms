class Person {
  constructor(name, lname, age) {
    this.name = name;
    this.lname = lname;
    this.age = age;
    this.scores = [];
  }
  static me = "dd";

  fullName() {
    let fullName = this.name + this.lname;
    return `my fullname is ${fullName}`;
  }
  addScore(num) {
    this.scores.push(num);
    return `my scores ${this.scores}`;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
  static staticMethod() {
    console.log("jss", this.me);
  }
}
const student = new Person("veda", "harapanahalli mata", 21);

console.log("student", student.name);
console.log("fullNmae", student.fullName());
console.log("scores", student.addScore(99));
console.log("scores", student.addScore(22));
console.log("scores", student.calculateAverage());
Person.staticMethod();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val); // give node object with value and next;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // if (this.length == 0) {
    //   return null;
    // }
    if (!this.head) return undefined;

    let current = this.head;
    let pre = this.head;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    console.log("current", current);
    console.log("pre", pre);
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    //pop front
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(item) {
    //add in the beginning
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      //   let currentHead = this.head;
      //   this.head = node;
      //   this.head.next = currentHead;
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this.head;
  }

  display() {
    var listner = "";
    if (this.head == null) {
      return listner;
    }

    listner += this.head.value;
    var runner = this.head.next;
    while (runner != null) {
      listner += runner.value;
      runner = runner.value;
    }
  }
  contains(value) {
    var runner = this.head;
    while (runner) {
      if (runner.value === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  length() {
    var runner = this.head;
    var numNodes = 0;
    while (runner) {
      nodes++;
      runner = runner.next;
    }
    return numNodes;
  }
  maxMinAvg() {
    let sum = 0;
    let max = this.head.value;
    let min = this.head.value;
    let runner = this.head;
    while (runner) {
      sum += runner.value;
      if (runner.value > max) {
        max = runner.value;
      } else if (runner.value < min) {
        min = runner.value;
      }
      runner = runner.next;
    }
    return `max: ${max}, min: ${min}, avg: ${sum / this.length()}`;
  }
}

let list = new SinglyLinkedList();

console.log("push", list.push("veda"));
list.push("giri");
console.log("unshift", list.unshift("prateek"));
list.unshift("maaa");
console.log("finalList", list);

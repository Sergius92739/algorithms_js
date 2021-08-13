class Node {
  constructor(value, prev = null) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let node = new Node(value, this.head);
    this.head = node;
  }

  pop() {
    if (!this.head) {
      console.log('Нет элементов');
    } else {
      let current = this.head.value;
      this.head = this.head.prev;
      return current;
    }
  }

  printMe() {
    let node = this.head;
    let tmp;
    if (!node)
      tmp = 'EMPTY';
    else {
      tmp = String(node.value);
      while (node.prev) {
        node = node.prev;
        tmp += ` -> ${node.value}`;
      }
    }
    console.log(tmp);
  }

  reverse() {
    let node = this.head;
    this.head = null;
    while (node) {
      this.push(node.value);
      node = node.prev;
    }
    return this;
  }
}

let stack = new Stack();

stack.printMe()
console.log('Добавим 0');
stack.push(0);
stack.printMe()
console.log('Добавим 1');
stack.push(1);
stack.printMe()
console.log('Добавим 2')
stack.push(2);
stack.printMe()
console.log('Добавим 3')
stack.push(3)
stack.printMe()
console.log('Добавим 4')
stack.push(4)
stack.printMe()
console.log('Добавим 5')
stack.push(5)
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()
console.log('Ревёрс');
stack = stack.reverse();
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()
console.log('Ревёрс');
stack = stack.reverse();
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()
console.log(`Снимем со стека ${stack.pop()}`)
stack.printMe()

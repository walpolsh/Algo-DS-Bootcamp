// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1); //adding a record
//   s.push(2);
//   s.pop(); // returns 2 //removes a record
//   s.pop(); // returns 1
// Stack is FILO first in last out
// Queue is FIFO first in first out

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    //add record
    this.data.push(record);
  }

  pop() {
    //remove record and return it
    return this.data.pop();
  }

  peek() {
    //return the last entry without removing
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;

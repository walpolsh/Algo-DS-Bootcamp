// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
//a Linked listed is an ordered collection of data which contain nodes which have a reference to the next node.
//It's literally a list of linked Nodes, a chain strung together
//It's order is always maintained unless we specifically want to change it.
//The head is always the front, the tail is the end.
//Each node has two distinct parts, the data and the ref to the next node.
//The data can be any type of valid JS value.
//Ex of a reference:
/*
  const nodeOne = {
    data: 123
  }

  const nodeTwo = {
    data: 456
  }

  nodeOne.next = nodeTwo
*/
//data next > data next > ect... > tail.
//data and next are interchangable with other words but those are the conventional terms.
//A linked list is therefore just two separate pieces of data connected together.

/*
  const n1 = new Node('There');
  n1.data // 'Hi'
  n1.next // null
  const n2 = new Node('Hi', n1);
  n2.next // returns n1
*/
class Node {
  //constructor is executed everytime we create a new instance of a class
  constructor(data, next = null) { //if next is NOT passed in it will default to null
    //we must assign the arguments being passed in to this Node
    this.data = data;
    this.next = next; 
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  /*Create a class to represent a linked list. 
  When created, a linked list should have *no* head node associated with it. 
  The LinkedList instance will have one property, 'head', which is a reference 
  to the first node of the linked list. By default 'head' should be 'null'.
  */
  insertFirst(data) {
    // const node = new Node(data, this.head) 
    // this.head = node; 
    // Condensed
    this.head = new Node(data, this.head)
    //pass in the data, and any pre existing head Node.
  }
}

module.exports = { Node, LinkedList };

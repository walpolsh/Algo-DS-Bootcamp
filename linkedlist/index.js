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

/*Create a class to represent a linked list. 
When created, a linked list should have *no* head node associated with it. 
The LinkedList instance will have one property, 'head', which is a reference 
to the first node of the linked list. By default 'head' should be 'null'.
*/
class LinkedList {
  constructor() {
    this.head = null
  }

  //could also be expressed as this.insertAt(data, 0)
  insertFirst(data) {
    // const node = new Node(data, this.head) // this.head === next
    // this.head = node; //update the this.head reference
    // Condensed
    this.head = new Node(data, this.head)
    //pass in the data, and any pre existing head Node.
  }

  //returns the # of nodes in the linked list
  size() {
    let counter = 0; //# of nodes
    let node = this.head;

    while (node) { //if no head then no code is run
      counter++; //if it does the counter will increment
      node = node.next; //assign node to the current node's next property
    }

    return counter;
  }
  
  //could also be expressed as this.getAt(0)
  getFirst() {
    return this.head
  }

  //could also be expressed as this.getAt(this.size() - 1)
  getLast() {
    if (!this.head) {
      return null
    }

    let node = this.head;
    while (node) {
      if (!node.next) { //if node.next === null then there are no nodes left
        return node
      }
      node = node.next; //node === the next node and the loop starts again
    }
  }

  clear () {
    this.head = null
  }

  //could also be expressed as this.removeAt(0)
  removeFirst () {
    if (!this.head) {
      return; //if nothing is assigned to the head then just return
    }
    //the new head becomes the next node, thus removing the first node.
    this.head = this.head.next;
    //if there is only one node, next = null, which removes the first node too.
  }

  //could also be expressed as this.removeAt(this.size() - 1)
  removeLast () {
    if (!this.head) {
      return;//if nothing is assigned to the head then just return
    }
    
    if (!this.head.next) { // if there is no second node
      this.head = null;
      return;
    }

    let previous  = this.head; 
    let node = this.head.next;
    while (node.next) { //there is more than one node
      previous = node; //current node is assigned to the next
      node = node.next; //update ref node to look at next
      //while loop continues until there is no node.next left
    }
    previous.next = null//go back to previous node and set it's next to null
  }

  //could also be expressed as this.insertAt(data, this.size() - 1)
  insertLast (data) {
    const last = this.getLast()
    
    if (last) {
      //there are existing nodes in our chain
      last.next = new Node(data);
    } else {
      //the chain is empty
      this.head = new Node(data);
    }
  }

  getAt (index) {
    if (!this.head) {
      return null;//if nothing is assigned to the head then just return null
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node; //if index is 0 return immediately
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt (index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next
      return;
      //point the head to the 2nd element in the chain and return
    }

    const previous = this.getAt(index - 1); // the node before what we want to remove
    if (!previous || !previous.next) { //check if there is a valid previous element before updating
      //or if previous.next === null
      return;
    }
    previous.next = previous.next.next;
    //this allows us to leapfrog over the current node
  }

  insertAt(data, index) {
    if (!this.head) { //if no head, create a new node and return
      this.head = new Node(data);
      return;
    }

    if (index === 0) { //if we're inserting at the front of the list
      this.head = new Node(data, this.head); 
      //create a new Node, assign it as the head, and point its next to the current head.
      return; //immediately return to insert
    }

    const previous = this.getAt(index - 1) || this.getLast(); //get node before requested index, or get the last Node
    const node = new Node(data, previous.next)//create a new node after previous, assign its next as previous's next
    previous.next = node;//insert new node after previous
  }
  
  //generator objects have the ability to step though the generator function with the 'next' method
  forEach (node, index) {

  }
  


}

module.exports = { Node, LinkedList };

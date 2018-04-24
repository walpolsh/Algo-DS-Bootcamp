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

class Node {}

class LinkedList {}

module.exports = { Node, LinkedList };

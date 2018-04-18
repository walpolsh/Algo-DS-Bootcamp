// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Data Structures
  // ways of organizing data with optimal runtime complexity
    // for adding, removing, updating
//You will be asked about inferior data structures
  //javascript arrays can create queues without the manual work...
    //thus manual queues are inferior to JS arrays

// a queue is a container where records or pieces of 
// data enter on one end and leave in order out the other...
// a queue is like waiting in line to get tickets
// enqueuing is adding, dequeuing is removing
// FIFO first in first out
  //a is added, b is added, a is removed and b remains, b is removed

// when we make a queue class we try our best hide access to these methods:
// shift, unshift (add), push, pop(remove), splice, slice
// why? practically queue algorithms shouldnt be interacted with as an array...
// because? the performance goes down hill...
// one possible reason to use a queue is to make sure other developer won't treat the queue like an array.
// the idea is we make an Queue class with an array behind the scenes
// we handicap the class by providing only certain methods because we only want Queue behaviour

// we want to create a new empty queue === const q = new Queue();
// to add a record to a queue === q.add();
// to remove a record at the end === q.remove();


class Queue {
  //in es6 when u make a class w/ constructor...
  //the constructor will automatically be called when we create a new instance
  constructor() { //a constructor will take arguements
    //a constructor is a special method for initializing an object inside a class.
    //there is only one 'constructor' in a class
    //A constructor can use the super keyword to access the objects of a parent class.


    this.data = []; //to store our data... any name will do
  }
  
  add(record)  { //called with some record that needs to be stored in 'data'
    // ADD TO THE FRONT
    this.data.unshift(record)//unshift adds to the front of the array
  }

  remove(record) {
    //MAKE SURE TO return this record off the end so we can work with it
    return this.data.pop();//pop gets the last record out of an array
  }
}

module.exports = Queue;

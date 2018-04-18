// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Memoization takeaways
// the function memoize returns a function which is invoked later.
//In JavaScript functions are first class objects which lets us use them as higher order functions and return another function.
// cache can remember its values since memoize has a closure over it.
// It’s essential that memoize pure. A pure function will return the same output for a particular input no mater how many times it’s called, which makes the cache work as expected.

// A pure function is a function which:

// Given the same input, will always return the same output.
// Produces no side effects.


// BEST!!!! recursive solution with Memoization... the secret performance tool
// I think its N
  // memoization: record the arguements of each function call
    //run the function and record the results.
    //a table of memory if you like.
    //function calls take memory, but we want an if statement to go:
      //'hey! I've seen fib(4) before, lets use that value again'
  // Result > //slow fib function -> memoizer -> fast, memoized fib function

function memoize (fn) {
  //create cache object, keys are some n were trying to call slow fib with.
  //running slowFib through memoize keeps track of when n appears 
  const cache = {}
  //...args makes the elements of an incoming array available as arguements.
  return function (...args) {
    //we look into our cache object
    if (cache[args]) {
      //if we find the current argument key and store it in cache object.
      return cache[args];
      //cache {
        //slowFib: 1 ect
      //}
    }
  
    //this statement here stores the result in the cache object
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
 }


function slowFib(n) {
//calling fib recursively was slow, but running it through memoize is fast!!!
  if (n < 2) {
    return n
  }

  return (fib(n - 1) + fib(n - 2))
  //this is the original non memoized version
}

//when calling fib inside fib were calling the memoized version
const fib = memoize(slowFib)
module.exports = fib


//BAAAAD!!!!! recursive solution - time complexity = log(2 ^ n)... exponential... 
function fib(n) {
  if (n < 2) {
    // if n is less than 0 or 1 we return n
    // fib(0) -> 0 fib(1) -> 1
    // if n > 2 we enter recursion
    //return n when n < 2
    return n
    //inturrupt recursion
  }

  //how do the function calls work?
            //fib3
            //3 is bigger than 2 so skip the first if ^
          //fib2 fib1 // 1 < 2... fib(3) === 1
          //1 is less than 2 but 2 is not // 1 < 2... fib(3) === 2
        //1 is less than 2 // 1 < 2 ... fib(3) === 3
      //// fib(3) = 3, 
  return fib(n - 1) + fib(n - 2);
  //when the first if statement finally sees a 1
  //it adds them up
  // fib(3) = 3

}

//iterative solution
function fib(n) {
  //create result array with start of sequence
  const result = [0, 1];

  //starting at 2 iterate until equal to n
  for (let i = 2; i <= n; i++) {
    //
    const a = result[i - 1];
    const b = result[i - 2];
    
    //push 
    result.push(a + b)
    
  }

  //return result with fibonacci sequnce
  //number could be quite large...
  // this is an Olog(n) solution
  // for every increase in n we have to do one more calculation
  // for loop, number incrementing by 1 to n... chances are its log n runtime
  return result[n]
}

module.exports = fib;

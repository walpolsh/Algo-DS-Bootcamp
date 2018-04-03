// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


function fizzBuzz(n) {
  for (var num = 1; num <= n; num++) { //start at 1, iterate to n
    num % 5 === 0 && num % 3 === 0 ? console.log( 'fizzbuzz')
    : num % 3 === 0 ? console.log( 'fizz') //else if = ':'
    : num % 5 === 0 ? console.log( 'buzz')
    : console.log(num)
  }
}
//
// function fizzBuzz(n) {
//   for (var i = 1; i <= n; i++) { //starting at 1 iterate to n
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log( 'fizzbuzz')
//     } else if (i % 3 === 0) {
//       console.log( 'fizz')
//     } else if (i % 5 === 0) {
//       console.log( 'buzz')
//     } else {
//       console.log(i)
//     }
//   }
//
// }

module.exports = fizzBuzz;

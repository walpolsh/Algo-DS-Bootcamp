// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// regex solution
function vowels(str) {
  //within the [] are the characters to match, g = dont stop at first match, i means case insensitive.
  const matches = str.match(/[aeiou]/gi);
  // .match() returns an array of the regex  matches
  return matches ? matches.length : 0;
  //return the number of matches
}

// //iterative solution
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u']

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

module.exports = vowels;

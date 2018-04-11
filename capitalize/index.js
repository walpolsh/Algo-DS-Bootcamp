// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //solution 1: easy to read, but requires good knowledge
// function capitalize(str) {
//   //Make an empty array 'words'
//   let words = []
//   //split the input string by spaces to get an array  
//   for (let word of str.split(' ')) {
//     //for each word in the array
//     //uppercase the first letter of the word
//     //join the first letter with the rest of the string (first indexslice starting at index 1)
//     //push the result into 'words' array
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   //join 'words' into a string and return it
//   return words.join(' ');
// }

// solution 2: for loop, a litle more brutal to read.
function capitalize(str) {
  //create 'result' which is the first character of the input string capitalized
  let result = str[0].toUpperCase();
  //for each character in the string
  for (let i = 1; i < str.length; i++) {
    //if the character to the left is a space
    if (str[i - 1] === ' ') {
      //capitalize it and add it to result
      result += str[i].toUpperCase();
    } else {
      //add it to result
      result += str[i];
    }
  }
  //dont forget to return
  return result
}
module.exports = capitalize;
 
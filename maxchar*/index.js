// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let chars = {};
//
//   for(let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++
//     }
//   }
//
// }

//
function maxChar(str) {
  const charMap = {}; //character map
  let max = 0; // to track the value of charMap
  let maxChar = ''; // to track the key of charMap
  for (let char of str) { //for char of str, for/of loops iterate through arrays
    if (charMap[char]) { //if char exists in charMap object
      charMap[char]++ //increase count by 1
    } else {
      charMap[char] = 1; // if it doesn't exist yet make the count = 1;
    }
  }

  for (let char in charMap) { //for each character in character map
    //for/in loops iterate through objects
    if (charMap[char] > max) { // if the val at this particular charater is greater than our max
      max = charMap[char]; //current char = new max
      maxChar = char; //
    }
  }
  console.log(maxChar)
  return maxChar;
}

// function maxChar(str) {
//   let chars = {} //empty obj
//   for (var char of str) { //for each character in the string
//     chars[char] = chars[char] + 1 || 1; //put each character in object
//   }
//   return chars
// }
module.exports = maxChar;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(maxChar)
  return charMap;
}

// function maxChar(str) {
//   let chars = {}
//   for (var char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   return chars
// }
maxChar('abcdefghijklmnaaaaa')
module.exports = maxChar;

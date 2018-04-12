// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//
// function palindrome(str) {
//   console.log(str, str)
//   if (str === str.split('').reverse().join('')) {
//     return true
//   } else {
//     return false
//   }
// }

function palindrome(str) {
  return str.split('').every((char, i) => {
    // is each character equal to the length of the array minus i
    return char === str[str.length - i - 1]
  })
}

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//
//   return str === reversed;
// }

//
// function palindrome(str) {
//   return str === str.split('').reverse().join('') ? true : false
// }



module.exports = palindrome;

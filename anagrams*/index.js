// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//RegExp: \w matches characters [A-za-z0-9_]
// for example /\w/ matches a in 'apple', 3 in '3D'
//.replace allows you to call a regular expression
// const word = 'HEYY MANNNN!!'
// word.replace(/[^\w]/g, ""/).toLowerCase() removes spaces // 'heymannn!!!!'
//Youll need to make two tables of objects again! similar to the last exercise
// function maxChar(str) {
//   let chars = {} //empty obj
//   for (var char of str) { //for each character in the string
//     chars[char] = chars[char] + 1 || 1; //put each character in object
//   }
//   return chars
// }
// you also have to compare the number of keys so consider making a helper function




// solution 2:
//a little easier to remember
// const numbers = [10, 30, 5, -90, 10000];
//numbers.sort(); // [-90,10,10000,30,5];
//sort can also be used on strings with characters...

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
  //we compare stringA to stringB, if they're identical we must have an anagram...
  //I just learned you don't have to set up an if statement to return a conditional... cool 
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  //replace non-alphanumeric's with '', make str lowercase, split into an array, sort, and join it back into a string.
}

// solution 1;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   //compare the length of the keys for both maps
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     //if the key lengths don't match
//     return false
//   } 

//   for (let char in aCharMap) {
//     //need to iterate to compare, for  in iterates the values in objects, for  of iterates the values of strings and arrays
//     //for loops give you control of the index...
//     if (aCharMap[char] !== bCharMap[char]) {// you can use char to iterate other arrays... I didn't know
//       return false //if they do not match then something is wrong
//     }
//   }
//   return true
// }
//This is a helper function for 'anagrams'
function buildCharMap(str) {
  const charMap = {}; //empty charMap object

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //^cleanup logic: for the characters in str replace anything that is not a number, a capital or lowercase with and empty string '' 
    charMap[char] = charMap[char] + 1 || 1;
    //assign a key to charMap with the char we're looping, and increment the vale at that character OR make the value equal 1 if it doesn't exist
  }

  return charMap;
  //don't forget to return

}

module.exports = anagrams;

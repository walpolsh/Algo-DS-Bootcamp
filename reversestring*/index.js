// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//
// function reverse (str) {
//   debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
// }


// function reverse(str) {
//   return str.split('').reverse().join('');
// }

//try to avoid for loops, use for of
function reverse(str) {
  let reversed = '';
    for(let character of str) {

      reversed = character + reversed;
    }
  return reversed;
}



// function reverse(str) {
//   str = str.split('')
//   let arr = []
//   for(var i = 0; i <= str.length; i++) {
//     arr.unshift(str[i])
//   }
//   console.log(arr)
//   return arr.join('')
// }

//be sure to invoke the funciton at the bottom when entering debugger module/

reverse('asdf');

module.exports = reverse

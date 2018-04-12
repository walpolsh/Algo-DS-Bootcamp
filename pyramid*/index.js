// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// Math.floor() rounds the decemal down to an integer.

//recursion solution

function pyramid(n, row = 0, level = '') {
  //base to stop recursion
  const pyramidBase = 2 * n - 1
  const midpoint = Math.floor((pyramidBase) / 2);
  let add;
  
  if (row === n) {
    return
  }

  if(level.length === pyramidBase) {
    console.log(level);
    //increment row by 1
    return pyramid(n, row + 1);
  }

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);

}

//iterative solution

// function pyramid(n) {
//   //find the base of the pyramid
//   const base = 2 * n - 1;
//   // ^ it be wise to memorize this formula
//   // the midpoint ^^ is the center index depending on n
//     //the trick to find the base of a pyramid is 2 * n - 1

//   const midpoint = Math.floor((base) / 2);
//     //n is the total number of rows we're working on
//     //if you dont multiply that by 2 the base output 1, 2, 3, 4...
//   //from 0 to n iterate thru rows
//     //create an empty string, 'level'... used to be 'step'
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     //width, how many columns? 
//     //2 * n - 1 = base of the pyramid
//     for (let column = 0; column < base; column++) {
//       //make sure the current column is within the bounds of midpoint - row && midpoint + row.
//       if (midpoint - row <= column && midpoint + row >= column) {
//         // add a #
//         level += '#'
//       } else { 
//         // add a ' '
//         level += ' ';
//       }
//     }
//     console.log(level)
//   }
// }

module.exports = pyramid;

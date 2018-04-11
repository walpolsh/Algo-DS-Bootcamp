// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 2
//recursion tips
//figure out the bare minimum pieces of information to represent your problem
//give reasonable defaults to the bare minimum pieces of info (give arguements defaults... ex steps(n, base = 1))
//check the base case... is there any work left to do? if not, return
//do some work. call your function again, making sure the arguments have changed in some fashion.

//the first time we call steps we start with a row of 0 and an empty 'stair' string, unless provided as arguments
function steps(n, row = 0, stair = '') {
  
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

// solution 1:
// function steps(n) {
//   //from 0 to n, iterate through rows
//     for (let row = 0; row < n; row++){
//       //create an empty string, 'stair'
//       let stair = ''
//       //from 0 to n, iterate through columns
//       for (let column = 0; column < n; column++) {
//         //if the current column is equal to or less than the current row
//         if (column <= row) {
//           //add a '#' to 'stair'
//           stair += '#'
//         } else {
//           //add a space to 'stair'
//           stair += ' ';
//         }
//       }
//       console.log(stair);
//     }
// }


module.exports = steps;

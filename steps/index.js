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

//solution 1 - recursive solution
//recursion tips
//figure out the bare minimum pieces of information to represent your problem
//give reasonable defaults to the bare minimum pieces of info (give arguements defaults... ex steps(n, base = 1))
//check the base case... is there any work left to do? if not, return
//do some work. call your function again, making sure the arguments have changed in some fashion.

function steps(n, row = 0, stair = '') {
  //row and stair are passed in with defaults because we dont expect the function to be called with arguments

  //take care of base case first... the number and row are = this stops infinite recursion
  //usually n is 1, 2, 3 ect... so unless its -0 carry on...
  if (n === row) {
    //if row === n then we have hit the end of our problem
    return;
  }

  //this signifies the end of a row, the stair prints here
  if (n === stair.length) {
    //if the 'stair' string has a length === n then we are at the end of a row
    // The first row is done so it's time to print the first stair 
    console.log(stair);
    //now when the function is called again row is incremented by 1... new row
    //notice there is no 3rd arguement, we want to rely on the default, stair = ''
    //returning at the end of a row will end the recursive function
    return steps(n, row + 1);
  }

  // this is the case that assembles the 'stair' string 
  if (stair.length <= row) {
    //if the 'stair' string is less the row number then add a '#'
    stair += '#';
  } else {
    //otherwise add a space ' '
    stair += ' ';
  }
  //recursive call to steps to repeat the process until the row is complete
  // do not return yet, theres nothing to return.
  // you must call steps again with all 3 values because stair has changed, and row needs to be tracked.
  steps(n, row, stair);

}


//without instruction
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




// solution 2 - the iterative solution:
function steps(n) {
  //from 0 to n, iterate through rows and thier columns
  //if n = 3 the first loop creates a row, the inner loop creates 3 columns, one with a '#' and the outer loop repeats until 3 rows are complated
    for (let row = 0; row < n; row++){
      //create an empty string, 'stair'
      let stair = ''
      //from 0 to n, iterate through columns
      for (let column = 0; column < n; column++) {
        //if the current column is equal to or less than the current row
        //ex. if n = 3 and this is the first loop
          // the column is 0 and the row is 0 so add '#' to the stair 
          // but the column loop has to finish
          // now the column is 1 so its greater than the row which is 0... // ' '
          // ect
        if (column <= row) {
          //add a '#' to 'stair'
          stair += '#'
        } else {
          //add a space to 'stair'
          stair += ' ';
        }
      }

      console.log(stair);
    }
}

//without instruction
function steps(n) {
    for (let row = 0; row < n; row++){
      let stair = ''
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += '#'
        } else {
          stair += ' ';
        }
      }
      console.log(stair);
    }
}

module.exports = steps;

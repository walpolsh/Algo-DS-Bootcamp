// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// taking one big array and splitting it into sub-arrays, contained in a larger array
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

// ^ chunk size = 2, not two arrays, but two elements in each chunk.

// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//arr.slice([begin[, end]]), end not included.
// var arr = [1,2,3,4]
//arr.slice(0, 3) // [1,2,3]
//

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked
}

// function chunk(array, size) {
//   const chunked = []
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size))
//     //^ push sliced array from index to index + size
//     //^ slice creates a new array by copying the sliced values
//     index += size
//     // index = index + size
//     // ^
//   }
//   return chunked
// }


//
// function chunk(array, size) {
//   const chunked = []; //create chunked array
//   for (var element of array) { //for each element in aray
//     const last = chunked[chunked.length - 1] //last element in chunked array
//     !last || last.length === size ? chunked.push([element])
//     : last.push(element)
//     // ^ if last element doesnt exist that means there is no array, or if the last array's length === chunk size: push the current element to its own array
//     //else just push the element on its own (extra)
//   }
//   return chunked
// }

module.exports = chunk;

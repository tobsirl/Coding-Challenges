// ##########################
// # Higher-Order Functions #
// ##########################

/* 
  Challenge 1
  Create a function addTwo that accepts one input and adds 2 to it. 
*/
const addTwo = (num) => {
  return num + 2;
};
console.log(addTwo(3));
console.log(addTwo(10));

/**
 *  Challenge 2
 *  Create a function addS that accepts one input and adds an "s" to it.
 */
const addS = (word) => {
  return `${word}s`;
};

console.log(addS('pizza'));
console.log(addS('bagel'));

/**
 * Challenge 3
 * Create a function called map that takes two inputs:
 * an array of numbers (a list of numbers)
 * a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
 * Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
 */
const map = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

console.log(map([1, 2, 3], addTwo));

/**
 * Challenge 4
 * The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
 */
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

console.log(forEach([1, 2, 3], addTwo));

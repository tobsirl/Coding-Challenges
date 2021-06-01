// Copy an Array with the Spread OperatorPassed
/*
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
The function is supposed to return a new array made up of num copies of arr. 
We have done most of the work for you, but it doesn't work quite right yet. 
Modify the function using spread syntax so that it works correctly 
(hint: another method we have already covered might come in handy here!).
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

copyMachine([true, false, true], 2); //?

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

spreadOut(); //?

// Iterate Through All an Array's Items Using For LoopsPassed
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // change code above this line
  return newArr;
}

filteredArray(
  [
    [3, 2, 3],
    [1, 6, 3],
    [3, 13, 26],
    [19, 3, 9],
  ],
  3
); //?

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [['loop', 'shift', 6, 7, 1000, 'method']][
    ('concat', false, 'deep', 'spread', 'array')
  ],
  ['mutate', 1327.98, 'deeper', 'slice', 'push'],
  ['iterate', 1.3849, 7, 'deepest', 'arbitrary', 'depth'],
  // Only change code above this line
];

// ###########
// # Closure #
// ###########

/*
 *   Challenge 1
 *   Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
 */
const createFunction = () => {
  return function () {
    return 'hello';
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();

/*
 *  Challenge 2
 *  Create a function createFunctionPrinter that accepts one input and returns a function.
 *  When that created function is called, it should print out the input that was used when the function was created.
 *  const createFunctionPrinter = (input) => {};
 */

function createFunctionPrinter(params) {
  return function () {
    return params;
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();

/*
 *  Challenge 3
 *  Examine the code for the outer function.
 *  Notice that we are returning a function and that function is using variables that are outside of its scope.
 *  Uncomment those lines of code. Try to deduce the output before executing.
 */

const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

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

// Challenge 2
/*
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

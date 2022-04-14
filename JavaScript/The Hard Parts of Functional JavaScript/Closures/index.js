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

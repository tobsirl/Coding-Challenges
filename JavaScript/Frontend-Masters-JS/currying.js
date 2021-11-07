// currying
// _.curry(func, [(arity = func.length)]);

var abc = function (a, b, c) {
  return [a, b, c];
};

// var curried = _.curry(abc);

// curried(1)(2)(3);
// => [1, 2, 3]

// curried(1, 2)(3);
// => [1, 2, 3]

// solution
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};

const curriedTest = curry(abc);
curriedTest(1)(2); //?

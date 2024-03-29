// Takes a function as an input (argument)
// element.addEventListener('change', () => {
//   console.log('Our evidence is updated');
// });

// Returns a function as the output
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

// Callbacks
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

ifElse(
  true,
  () => {
    console.log(true);
  },
  () => {
    console.log(false);
  }
); //?

// var increment = function (n) {
//   return n + 1;
// };

// var square = function (n) {
//   return n * n;
// };

// var doMathSoIDontHaveTo = function (n, func) {
//   return func(n);
// };

// doMathSoIDontHaveTo(5, square);

// doMathSoIDontHaveTo(4, increment);

// ES6
const increment = (n) => n + 1;
const square = (n) => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

//How do we pass arguments?
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p);
};
ifElse(true, fn1, fn2, 'HI');

const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args); //['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args);
  isTrue('HI', 'BYE', 'HOLA');
};
ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');

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

var increment = function (n) {
  return n + 1;
};

var square = function (n) {
  return n * n;
};

var doMathSoIDontHaveTo = function (n, func) {
  return func(n);
};

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);

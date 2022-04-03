// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
  return array.length;
}

// Return the first item in an array
function head(array) {
  return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}

function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(n) {
  // TODO your code goes here
  return n % 2 === 0;
}

const evens = filter(isEven, wholes);

const odds = filter((n) => {
  // TODO your code goes here
  return n % 2 === 1;
}, wholes);

const greaterThanFour = filter(
  // TODO replace this line
  (n) => {
    if (n > 4) return n;
  },
  wholes
);

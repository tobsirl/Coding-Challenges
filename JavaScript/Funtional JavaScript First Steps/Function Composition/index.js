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

// Function Composition
function pipeline(...functions) {
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) return (input) => head(functions)(input);
  return function (input) {
    return pipeline(...tail(functions))(head(functions)(input));
  };
}

const pluralize = (singularWord) => singularWord + 's';

pipeline(pluralize); //?

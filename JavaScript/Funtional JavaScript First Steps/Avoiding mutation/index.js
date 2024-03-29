// instead of myArray.push(element)
function push(element, array) {
  return [...array, element];
}

// instead of myArray[index] = value
function update(index, value, array) {
  return array
    .slice(0, index)
    .concat([value])
    .concat(array.slice(index + 1));
}

// instead of myArray.pop();
function pop(array) {
  return array.slice(0, -1);
}


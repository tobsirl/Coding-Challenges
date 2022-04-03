function iterativeFibonacci(n) {
  // TODO your code goes here
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

iterativeFibonacci(10); //?

function recursiveFibonacci(n) {
  // TODO your code goes here
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursive case
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

recursiveFibonacci(10); //?

module.exports = iterativeFibonacci;
module.exports = recursiveFibonacci;

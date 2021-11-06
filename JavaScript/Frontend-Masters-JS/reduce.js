const reduce = function (list, cb, initial) {
  // loop through list
  let memo = initial || 0;
  for (let i = 0; i < list.length; i++) {
    memo = cb(list[i], memo);

    // call the cb with arr[i], prev/initial
    // save the return value
  }
  // return result
  return memo;
};

reduce([1, 2, 3], (v, sum) => v + sum, 0); //?

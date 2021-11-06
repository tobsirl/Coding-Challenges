const reduce = function (list, cb, initial = list[0]) {
  // loop through list
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    memo = cb(list[i], memo);

    // call the cb with arr[i], prev/initial
    // save the return value
  }
  // return result
  return memo;
};

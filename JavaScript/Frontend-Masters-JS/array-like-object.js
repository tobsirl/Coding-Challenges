const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};

constructArr('was', 'it', 'in');


// using es6 Array.from
const constructArr = function () {
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');

const _ = require('lodash');

const arr = [0, 1, 3, 4, 56];

const result = _.drop(arr, 2);

result;

const obj = {
  blue: '#9098',
  green: '#8998',
  white: '#FFF',
};

const test = Object.keys(obj).map((el) => obj[el])

test
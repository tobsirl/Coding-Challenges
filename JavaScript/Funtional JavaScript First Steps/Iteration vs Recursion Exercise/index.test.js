const iterativeFibonacci = require('./index');
const recursiveFibonacci = require('./index');

test('iterativeFibonacci should return 55 ', () => {
  // arrange

  // act
  const result = iterativeFibonacci(10);

  // assert
  expect(result).toBe(55);
});

test('recursiveFibonacci should return 55 ', () => {
  // arrange

  // act
  const result = recursiveFibonacci(10);

  // assert
  expect(result).toBe(55);
});


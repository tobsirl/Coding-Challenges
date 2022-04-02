const iterativeFibonacci = require('./index');

console.log(iterativeFibonacci);

test('iterativeFibonacci should return 55 ', () => {
  // arrange

  // act
  const result = iterativeFibonacci(10);

  // assert
  expect(result).toBe(55);
});

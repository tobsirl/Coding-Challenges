const sumOddFibonacciNumbers = require('./index');

describe('sumOddFibonacciNumbers()', () => {
  test('returns sum of all odd Fibonnci numbers', () => {
    // arrange
    const num = 10;

    // act
    const result = sumOddFibonacciNumbers(num);

    // assert
    expect(result).toBe(10);
  });

  test('returns sum of all odd Fibonnci numbers 2nd example', () => {
    // arrange
    const num = 1000;

    // act
    const result = sumOddFibonacciNumbers(num);

    // assert
    expect(result).toBe(1785);
  });
});

const adjacentElementProduct = require('./index');
const adjacentElementsProduct = require('./index');

describe('adjacentElementsProduct', () => {
  test('returns largest product of adjacent values', () => {
    // arrange
    const nums = [3, 6, -2, -5, 7, 3];

    // act
    const result = adjacentElementsProduct(nums);

    // assert
    expect(result).toBe(21);
  });

  test('returns largest product of adjacent values 2', () => {
    // arrange
    const nums = [0, 4, 5, 10, -1, 3, 9];

    // act
    const result = adjacentElementProduct(nums);

    // assert
    expect(result).toBe(50);
  });
});

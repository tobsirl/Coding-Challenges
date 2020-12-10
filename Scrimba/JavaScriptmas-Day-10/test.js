const adjacentElementsProduct = require('./index')

describe('adjacentElementsProduct', () => {
  test('returns largest product of adjacent values', () => {
    // arrange
    const nums = [3, 6, -2, -5, 7, 3];

    // act
    const result = adjacentElementsProduct(nums);

    // assert
    expect(result).toBe(21)
  });
});

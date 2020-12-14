const arrayMaximalAdjacentDifference = require('./index');

describe('arrayMaximalAdjacentDifference()', () => {
  test('returns largest difference between adjacent values', () => {
    // arrange
    const nums = [2, 4, 1, 0];

    // act
    const result = arrayMaximalAdjacentDifference(nums);

    // assert
    expect(result).toBe(3);
  });

  test('returns largest difference between adjacent values example 2', () => {
    // arrange
    const nums = [2, 9, 1, 0];

    // act
    const result = arrayMaximalAdjacentDifference(nums);

    // assert
    expect(result).toBe(8);
  });


});

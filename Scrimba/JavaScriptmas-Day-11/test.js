const avoidObstacles = require('./index');

describe('avoidObstacles', () => {
  test('returns minimal number of jumps in between numbers', () => {
    // arrange
    const nums = [5, 3, 6, 7, 9];

    // act
    const result = avoidObstacles(nums);

    // assert
    expect(result).toBe(4);
  });

  test('returns minimal number of jumps in between numbers 2', () => {
    // arrange
    const nums = [5, 2, 8, 7, 11, 1, 13];

    // act
    const result = avoidObstacles(nums);

    // assert
    expect(result).toBe(3);
  });
});

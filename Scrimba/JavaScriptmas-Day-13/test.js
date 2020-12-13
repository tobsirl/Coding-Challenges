const extractEachKth = require('./index');

describe('extractEachKth', () => {
  test('returns largest positive integer possible for digit count ', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const index = 3;

    // act
    const result = extractEachKth(nums, index);

    // assert
    expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
  });

  test('returns largest positive integer possible for digit count 2', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const index = 2;

    // act
    const result = extractEachKth(nums, index);

    // assert
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
});

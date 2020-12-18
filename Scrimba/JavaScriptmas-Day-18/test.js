const arrayPreviousLess = require('./index');

describe('arrayPreviousLess', () => {
  test('shift previous positions from the left to a smaller value or store -1', () => {
    // arrange
    const nums = [3, 5, 2, 4, 5];

    // act
    const result = arrayPreviousLess(nums);

    // assert
    expect(result).toEqual([-1, 3, -1, 2, 4]);
  });
});

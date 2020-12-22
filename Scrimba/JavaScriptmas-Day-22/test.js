const extractMatrixColumn = require(".");

describe('extractMatrixColumn', () => {
  test('returns largest positive integer possible for digit count 1', () => {
    // arrange
    const matrix = [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ];
    const column = 2;

    // act
    const result = extractMatrixColumn(matrix, column);

    // assert
    expect(result).toEqual([1, 0, 3]);
  });

  test('returns largest positive integer possible for digit count 2', () => {
    // arrange
    const matrix = [
      [5, 1, 7, 2, 3],
      [1, 5, 0, 4, 8],
      [2, 1, 3, 6, 2],
    ];
    const column = 3;

    // act
    const result = extractMatrixColumn(matrix, column);

    // assert
    expect(result).toEqual([2, 4, 6]);
  });
});

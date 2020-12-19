const alphabetSubsequence = require('./index');

describe('alphabetSubsequence()', () => {
  test('returns false if it is not a string', () => {
    // arrange
    const str = 84928734;

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });

  test('returns false when it has duplicate letters', () => {
    // arrange
    const str = 'effg';

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log('result 2: ', result);

    // assert
    expect(result).toBe(false);
  });

  test('returns false when NOT in ascending a - z order', () => {
    // arrange
    const str = 'cdce';

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log('result 3: ', result);

    // assert
    expect(result).toBe(false);
  });

  test('returns true when no duplicates and is ascending a - z order ', () => {
    // arrange
    const str = 'ace';

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log('result 4: ', result);

    // assert
    expect(result).toBe(true);
  });
});

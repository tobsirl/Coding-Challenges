const validTime = require('./index');
const ValidTime = require('./index');

describe('ValidTime()', () => {
  test('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // assert
    expect(result).toBe(true);
  });

  test('returns false for invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // assert
    expect(result).toBe(false);
  });

  test('returns false for invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // assert
    expect(result).toBe(false);
  });
});

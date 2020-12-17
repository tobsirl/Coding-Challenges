const differentSymbolsNaive = require('./index');

describe('differentSymbolsNaive', () => {
  test('returns count of unique characters', () => {
    // arrange
    const str = 'cabca';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(3);
  });

  test('returns count of unique numbers', () => {
    // arrange
    const str = '692374954630037';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(8);
  });

  test('returns count of unique symbols', () => {
    // arrange
    const str = '#%&&$*()))(!$%&';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBe(8);
  });

  test('checks for null', () => {
    // arrange
    const str = null;

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBeNull();
  });

  test('checks for empty string', () => {
    // arrange
    const str = '';

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log('result: ', result);

    // assert
    expect(result).toBeFalsy();
  });
});

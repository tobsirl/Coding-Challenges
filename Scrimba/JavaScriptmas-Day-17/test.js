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
});

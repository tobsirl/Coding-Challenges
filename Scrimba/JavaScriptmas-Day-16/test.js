const insertDashes = require('./index');

describe('insertDashes()', () => {
  test('should insert dashes in between chars 1', () => {
    // arrange
    const value = 'abc cabc';

    // act
    const result = insertDashes(value);

    // assert
    expect(result).toBe(' a-b-c c-a-b-c');
  });

  test('should insert dashes in between chars 2', () => {
    // arrange
    const value = 'cabc cabc';

    // act
    const result = insertDashes(value);

    // assert
    expect(result).toBe('c-a-b-c c-a-b-c');
  });

  test('should insert dashes in between chars 3', () => {
    // arrange
    const value = 'abc cabc dfg';

    // act
    const result = insertDashes(value);

    // assert
    expect(result).toBe('a-b-c c-a-b-c d-f-g');
  });

  test('should insert dashes in between chars 4', () => {
    // arrange
    const value = '123 #$% &*^ !!!';

    // act
    const result = insertDashes(value);

    // assert
    expect(result).toBe('1-2-3 #-$-% &-*-^ !-!-!');
  });
});

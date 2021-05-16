const countLanguages = require('./index');
const list = require('./index.fixtures');

describe('test for Coding Meeetup #5', () => {
  it('should return an object', () => {
    const result = countLanguages(list); 

    const desiredResult = { C: 2, JavaScript: 1, Ruby: 1 };

    expect(result).toMatchObject(desiredResult);
  });
});

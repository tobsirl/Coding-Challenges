const { list1, list2 } = require('./index.fixtures');
const getFirstPython = require('./index');

describe('tests for coding meetup 4', () => {
  it('should return Victoria, Puerto Rico', () => {
    const result = getFirstPython(list1);

    expect(result).toBe('Victoria, Puerto Rico');
  });

  it('should return There will be no Python developers', () => {
    const result = getFirstPython(list2);

    expect(result).toBe('There will be no Python developers');
  });
});

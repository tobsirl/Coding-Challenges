const list1 = require('./fixtures');
const list2 = require('./fixtures');
const isRubyComing = require('./index');

describe('tests for Higher Order Functions', () => {
  it('should return true', () => {
    const result = isRubyComing(list1);

    expect(result).toBe(true);
  });
  it('should return false', () => {
    const result = isRubyComing(list2);

    expect(result).toBe(false);
  });
});

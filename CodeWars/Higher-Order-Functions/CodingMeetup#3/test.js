import { list1, list2 } from './fixtures';
import isRubyComing from './index';

describe('tests for Higher Order Functions', () => {
  it('should return true', () => {
    const result = isRubyComing(list1);

    expect(result).toBe(true);
  });
});

import { ruleSpecMapper } from '../utils';
import { DEFAULT_SPEC } from '../constants';

describe('test that rulesSpecMapper returns the correct format', () => {
  test('should map the facebook spec to our spec', () => {
    // arrange
    const testData = [
      {
        start_minute: 710,
        end_minute: 780,
        days: [0, 6],
      },
      {
        start_minute: 120,
        end_minute: 500,
        days: [1, 3, 4],
      },
      {
        start_minute: 510,
        end_minute: 660,
        days: [2, 3, 5, 6],
      },
      {
        start_minute: 510,
        end_minute: 780,
        days: [6],
      },
    ]

    // act
    const result = ruleSpecMapper(testData)

    // assert
    expect(result).toBe
  });
});
import { ruleSpecMapper, converter } from '../utils';
import { converted, fbRuleSpec } from '../testData';

describe('test that rulesSpecMapper returns the correct format', () => {
  it('should map the facebook spec to our spec', () => {
    // arrange

    // act
    const result = ruleSpecMapper(fbRuleSpec);

    // assert
    expect(result).toMatchObject(converted);
  });
});

describe('tests', () => {
  it('tests', () => {
    const results = converter(converted);
    expect(results).toMatchObject(fbRuleSpec);
  });
});

import { cloneDeep } from 'lodash';
import { DEFAULT_SPEC } from './constants';
import { converted, fbRuleSpec } from './testData';

export function ruleSpecMapper(specs) {
  const ourSpecs = cloneDeep(DEFAULT_SPEC);
  Object.keys(ourSpecs).forEach((day, index) => {
    const rows = specs
      .filter((spec) => spec.days.includes(index))
      .map(({ start_minute, end_minute }) => {
        return {
          start_minute,
          end_minute,
        };
      });
    ourSpecs[day] = rows;
  });
  return ourSpecs;
}

ruleSpecMapper(fbRuleSpec); //?

export function ourSpecToFacebookMapper(spec) {
  // search for each day

  // create an object with those times start_minute end_minute

  // add day to days: [] nurmerical 0, 1, 2
  return Object.keys(spec).map((day, index) => {
    if (day.includes(day)) {
      return spec[day].map((el) => {
        return {
          start_minute: el.start_minute,
          end_minute: el.end_minute,
          days: [index],
        };
      });
    }
  });
}

ourSpecToFacebookMapper(converted); //?

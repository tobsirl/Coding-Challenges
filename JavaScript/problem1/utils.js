import { cloneDeep } from 'lodash';
import { DEFAULT_SPEC } from './constants';
import { converted, fbRuleSpec, days } from './testData';

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

export function converter(spec) {
  const initArray = [];
  const daysOFWeek = Object.keys(spec);
  const totalRules = Object.values(spec)
    .map((day, index) => {
      return day.map((el) => {
        return {
          start_minute: el.start_minute,
          end_minute: el.end_minute,
          days: [days.findIndex((_day) => daysOFWeek[index] === _day)],
        };
      });
    })
    .flat();
  totalRules.forEach((rule) => {
    const foundRule = initArray.find((storedRule) => {
      const sameStartMinute = storedRule.start_minute === rule.start_minute;
      const sameEndMinute = storedRule.end_minute === rule.end_minute;
      if (sameStartMinute && sameEndMinute) {
        return true;
      }
      return false;
    });
    // New Entry
    if (!foundRule) {
      initArray.push({
        start_minute: rule.start_minute,
        end_minute: rule.end_minute,
        days: [...rule.days],
      });
    }
    // existing Entry
    if (foundRule) {
      foundRule.days = [...foundRule.days, ...rule.days];
    }
  });
  return initArray;
}

converter(converted); //?

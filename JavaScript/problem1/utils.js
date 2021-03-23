import { cloneDeep } from 'lodash';
import { DEFAULT_SPEC } from './constants';

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
];

ruleSpecMapper(testData); //?

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
          days: [index] //?
        };
      });
    }
  });
}

// sunday = { solution to ads running all day using allDay property
//   allDay: false,
//   minsData: [{
//     start_minute: 120,
//     end_minute: 500,
//   },
//   {
//     start_minute: 510,
//     end_minute: 660,
//   }],
// }

const converted = {
  sunday: [
    {
      start_minute: 710,
      end_minute: 780,
    },
  ],
  monday: [
    {
      start_minute: 120,
      end_minute: 500,
    },
  ],
  tuesday: [
    {
      start_minute: 510,
      end_minute: 660,
    },
  ],
  wednesday: [
    {
      start_minute: 120,
      end_minute: 500,
    },
    {
      start_minute: 510,
      end_minute: 660,
    },
  ],
  thursday: [
    {
      start_minute: 120,
      end_minute: 500,
    },
  ],
  friday: [
    {
      start_minute: 510,
      end_minute: 660,
    },
  ],
  saturday: [
    {
      start_minute: 710,
      end_minute: 780,
    },
    {
      start_minute: 510,
      end_minute: 660,
    },
    {
      start_minute: 510,
      end_minute: 780,
    },
  ],
};
ourSpecToFacebookMapper(converted); //?

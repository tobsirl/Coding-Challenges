export const fbRuleSpec = [
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

export const converted = {
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

export const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

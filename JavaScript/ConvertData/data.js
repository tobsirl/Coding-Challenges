const data = [
  {
    start_minute: 90,
    end_minute: 210,
    days: [0, 2, 3],
  },
  {
    start_minute: 0,
    end_minute: 210,
    days: [4, 5, 6],
  },
  {
    start_minute: 240,
    end_minute: 390,
    days: [4, 5, 6],
  },
];

const dayIndexedTimes = [
  [
    {
      start_minute: 90,
      end_minute: 210,
      days: [0, 2, 3],
    },
  ],
  [],
  [
    {
      start_minute: 90,
      end_minute: 210,
      days: [0, 2, 3],
    },
  ],
  [
    {
      start_minute: 90,
      end_minute: 210,
      days: [0, 2, 3],
    },
  ],
  [
    {
      start_minute: 0,
      end_minute: 210,
      days: [4, 5, 6],
    },
    {
      start_minute: 240,
      end_minute: 390,
      days: [4, 5, 6],
    },
  ],
  [
    {
      start_minute: 0,
      end_minute: 210,
      days: [4, 5, 6],
    },
    {
      start_minute: 240,
      end_minute: 390,
      days: [4, 5, 6],
    },
  ],
  [
    {
      start_minute: 0,
      end_minute: 210,
      days: [4, 5, 6],
    },
    {
      start_minute: 240,
      end_minute: 390,
      days: [4, 5, 6],
    },
  ],
];

export { data, dayIndexedTimes };



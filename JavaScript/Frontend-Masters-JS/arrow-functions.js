const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

const _ = {};

_.filter = function (arr, callback) {
  let storage = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) {
      storage.push(arr[i]);
    }
  }
  return storage;
};

function findSuspect(suspectObject) {
  return suspectObject.present;
}

_.filter(videoData, function (suspectObject) {
  return suspectObject.present;
});

const filteredSuspects = _.filter(videoData, findSuspect);

const suspectsNames = filteredSuspects.map(({ name }) => name);

suspectsNames;

const createTuple = (a, b, c, d) => {
  return [
    [a, c],
    [b, d],
  ];
};

createTuple('It', 'be', 'could', 'anyone', 'no one'); //?

const createTupleSpread = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, d],
  ];
};

createTupleSpread('It', 'be', 'could', 'anyone', 'no one'); //?

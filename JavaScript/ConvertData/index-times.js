import { dayIndexedTimes, data } from './data';

dayIndexedTimes; //?

dayIndexedTimes[1]; //?

data;

const key = 'start_minute';
const value = 30;

function updateObj(key, value) {
  // data[0].start_minute = key;
  const { firstObj } = data[0];
  firstObj;
  data[key] = value;
  key; //?
  value;
}

updateObj(key, value);

data;

const objIdx = data.findIndex((obj) => obj.start_minute === 240);

const updatedObj = { ...data[objIdx], end_minute: 300 };

updatedObj

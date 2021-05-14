import { jonas } from './data';

jonas.lastName; //?
jonas['lastName']; //?

const nameKey = 'Name';
jonas['first' + nameKey]; //?
jonas[`last${nameKey}`]; //?

jonas.location = 'Ireland';
jonas['twitter'] = '@jonas';

jonas; //?

// challenge
const result = `${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;

function convertToNumber(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, Number(v)]));
}

convertToNumber({ piano: '200', tv: '300', stereo: '400' }); //?

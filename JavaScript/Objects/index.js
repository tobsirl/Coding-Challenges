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

result; //?

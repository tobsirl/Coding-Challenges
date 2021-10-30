import { _ } from './functions';
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
  return `broken ${item}`;
};

// _.map = function (weapons, callback) {
//   let list = [];
//   for (let i = 0; i < weapons.length; i++) {
//     list.push(callback(weapons[i]));
//   }
//   return list;
// };

// _.map(weapons, makeBroken); //?

_.map = function (list, callback) {
  let returnArray = [];
  _.each(list, function (value, i, list) {
    returnArray.push(callback(value, i, list));
  });

  return returnArray;
}; //?


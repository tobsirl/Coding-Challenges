const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const _ = {};

_.map = function (weapons, callback) {
  let list = [];
  for (let i = 0; i < weapons.length; i++) {
    list.push(callback(weapons[i]));
  }
  return list;
};

_.map(weapons, makeBroken); //?

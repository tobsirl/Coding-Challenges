const game = {};

game.murderer = '??';

game['weapons'] = [
  { type: 'lazer', location: 'lab' },
  { type: 'knife', location: 'kitchen' },
  { type: 'gun', location: 'study' },
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');

game.murderer;
game.weapons;
game.name; //?

// destructuring
const { weapon, location } = {
  name: 'Rusty',
  room: 'kitchen',
  weapon: 'candlestick',
};

weapon

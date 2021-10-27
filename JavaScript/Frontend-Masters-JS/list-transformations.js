const game = {
  suspects: [
    { name: 'Rusty', color: 'orange' },
    { name: 'Miss Scarlet', color: 'red' },
  ],
};

game['suspects'];

// const suspects = game.suspects.map(({ name, color }) => {
//   if (name === 'Rusty') {
//     return {
//       name,
//       color,
//       guilty: true,
//     };
//   }
//   return {
//     name,
//     color,
//   };
// });

// suspects

function getSuspects() {
  let result = [];
  for (let i = 0; i < game.suspects.length; i++) {
    result.push(game.suspects[i]);
  }
  return result;
}

getSuspects(); //?

const suspects = [
  { name: 'Rusty', color: 'orange' },
  { name: 'Miss Scarlet', color: 'red' },
];

// const [orange, red] = suspects.map(({ color }) => color);
const [orange, red] = [suspects[0].color, suspects[1].color];

const [{ color: firstColor }, { color: secondColor }] = suspects;

red;
orange;

firstColor
secondColor
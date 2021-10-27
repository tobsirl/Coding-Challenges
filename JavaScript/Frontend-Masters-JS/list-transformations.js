const game = {
  suspects: [
    { name: 'Rusty', color: 'orange' },
    { name: 'Miss Scarlet', color: 'red' },
  ],
};

game['suspects'];

const suspects = game.suspects.map(({ name, color }) => {
  return {
    personsName: name,
    color,
  };
});

function getSuspects() {
  let result = [];
  for (let i = 0; i < game.suspects.length; i++) {
    result.push(game.suspects[i]);
  }
  return result;
}

getSuspects(); //?

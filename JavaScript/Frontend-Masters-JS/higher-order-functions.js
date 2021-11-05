// Takes a function as an input (argument)
element.addEventListener('change', () => {
  console.log('Our evidence is updated');
});

// Returns a function as the output
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

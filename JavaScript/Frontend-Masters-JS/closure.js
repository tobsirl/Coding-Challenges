const myAlert = () => {
  const x = 'Help! I think I found a clue!';
  let count = 0;
  const alerter = () => {
    console.log(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert(); // alerter is returned to funcAlert
const funcAlert2 = myAlert();
funcAlert(); // calls the function body of alerter
funcAlert(); // maintains the state of the outher function, so count is incremented each time its called

// closure example
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 2);
  };
};

const didGreenDoItWithA = newClue('Green');

didGreenDoItWithA('candlestick');

// closure example countClues
const countClues = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0),
  };
};

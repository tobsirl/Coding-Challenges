const myAlert = () => {
  const x = 'Help! I think I found a clue!';
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert(); // alerter is returned to funcAlert
const funcAlert2 = myAlert();
funcAlert(); // calls the function body of alerter

const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);

blame('you');

const compose = (fn1, fn2) => {
  return (arg) => {
    const result = fn2(arg);
    return fn1(result);
  };
};

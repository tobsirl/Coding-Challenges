function signMessageWith(salutation) {
  return (body, name) => {
    return `${body} ${salutation} ${name}`;
  };
}

const writeBusinessMemo = signMessageWith('Best');

writeBusinessMemo('Hi, Peter. We need to talk about your TPS reports.', 'Bob'); //?

function makeSignature(salutation, name) {
  return (body) => {
    return `${salutation} ${body} ${name}`;
  };
}

const writeLoveLetter = makeSignature('Thine evermore', 'William');

writeLoveLetter(
  "Shall I compare thee to a summer's day? Thou art more lovely and more temperate."
); //?

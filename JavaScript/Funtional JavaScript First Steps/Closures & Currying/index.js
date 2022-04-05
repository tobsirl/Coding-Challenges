function signMessageWith(salutation) {
  return (body, name) => {
    return `${body} ${salutation} ${name}`;
  };
}

const writeBusinessMemo = signMessageWith('Best');

writeBusinessMemo('Hi, Peter. We need to talk about your TPS reports.', 'Bob'); //?

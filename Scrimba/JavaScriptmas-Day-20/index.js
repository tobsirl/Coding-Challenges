function domainEnd(ending) {
  switch (ending) {
    case 'org':
      return 'organization';
    case 'com':
      return 'commercial';
    case 'net':
      return 'network';
    case 'info':
      return 'information';
    default:
      return ending;
  }
}

function domainType(domains) {
  // get the domains
  let result = [];
  
  domains.map((domain) => {
    const domainEnding = domain.split('.');
    const ending = domainEnding[domainEnding.length - 1];
    result.push(domainEnd(ending));
  });

  return result;
}

module.exports = domainType;

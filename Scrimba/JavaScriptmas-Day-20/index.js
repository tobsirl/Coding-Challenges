function domainType(domains) {
  // get the domains
  let result = [];
  domains.map((domain) => {
    const domainEnding = domain.split('.');
    const ending = domainEnding[domainEnding.length - 1];
    if (ending === 'org') {
      result.push('organization');
    } else if (ending === 'com') {
      result.push('commercial');
    } else if (ending === 'net') {
      result.push('network');
    } else if (ending === 'info') {
      result.push('information');
    }
  });

  return result;
}

module.exports = domainType;

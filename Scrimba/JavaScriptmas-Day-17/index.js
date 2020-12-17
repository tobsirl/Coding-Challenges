function differentSymbolsNaive(str) {
  if (!str) return null;
  return [...new Set(str)].length;
}

module.exports = differentSymbolsNaive;
